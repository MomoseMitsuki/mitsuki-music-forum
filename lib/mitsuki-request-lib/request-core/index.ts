import SparkMD5 from "spark-md5"
import { useCacheStore } from "@/lib/mitsuki-store-lib/index"
import eventEmitter from "./eventEmitter"
export interface Requestor {
    request(
        url: string,
        method: Method,
        options?: RequestOptions
    ): Promise<ResponseLike>
    get(url: string, options?: RequestOptions): Promise<ResponseLike>
    delete(url: string, options?: RequestOptions): Promise<ResponseLike>
    head(url: string, options?: RequestOptions): Promise<ResponseLike>
    options(url: string, options?: RequestOptions): Promise<ResponseLike>
    post(
        url: string,
        data?: any,
        options?: RequestOptions
    ): Promise<ResponseLike>
    put(
        url: string,
        data?: any,
        options?: RequestOptions
    ): Promise<ResponseLike>
    patch(
        url: string,
        data?: any,
        options?: RequestOptions
    ): Promise<ResponseLike>
}

export type Method =
    | "GET"
    | "POST"
    | "PUT"
    | "PATCH"
    | "DELETE"
    | "HEAD"
    | "OPTIONS"

export interface ResponseLike {
    ok: boolean
    status: number
    headers?: Record<string, string>
    json<T = any>(): Promise<T>
    text(): Promise<string>
    toPlain?<T = any>(): Promise<T>
}

export interface RequestOptions {
    headers?: Record<string, string>
    params?: Record<string, any>
    body?: any
    signal?: AbortSignal
    timeoutMs?: number
    [key: string]: any
}

export interface CacheOptions {
    url: string
    method: Method
    options: RequestOptions
}

function wrap(
    base: Requestor,
    wrapRequest: (fn: Requestor["request"]) => Requestor["request"]
): Requestor {
    const request = wrapRequest(base.request.bind(base))
    return {
        request,
        get: (u, o) => request(u, "GET", o),
        delete: (u, o) => request(u, "DELETE", o),
        head: (u, o) => request(u, "HEAD", o),
        options: (u, o) => request(u, "OPTIONS", o),
        post: (u, d, o = {}) => request(u, "POST", { ...o, body: d }),
        put: (u, d, o = {}) => request(u, "PUT", { ...o, body: d }),
        patch: (u, d, o = {}) => request(u, "PATCH", { ...o, body: d })
    }
}

let req: Requestor

export function inject(requestor: Requestor) {
    req = requestor
}

export function useRequestor() {
    return req
}
// 请求重试
export interface RetryOptions {
    max?: number
    base?: number
    shouldRetry?(respOrErr: { resp?: ResponseLike; err?: any }): boolean
}

export function createRetryRequestor(
    opts: RetryOptions = {},
    base?: Requestor
): Requestor {
    const max = Math.max(0, opts.max ?? 3)
    const b = Math.max(0, opts.base ?? 300)
    const pred =
        opts.shouldRetry ??
        ((x) => {
            if (x.err) return true
            const s = x.resp!.status
            return s >= 500 || s === 429
        })

    const req = base ?? useRequestor()
    return wrap(req, (send) => {
        return async (url, method, options = {}) => {
            let attempt = 0,
                lastErr: any,
                lastResp: ResponseLike | undefined
            while (true) {
                try {
                    const resp = await send(url, method, options)
                    lastResp = resp
                    if (!pred({ resp })) return resp
                    if (resp.ok) return resp
                } catch (err) {
                    lastErr = err
                    if (!pred({ err })) throw err
                }
                if (attempt >= max) {
                    if (lastResp) return lastResp
                    throw lastErr ?? new Error("超出重试次数")
                }
                attempt++
                const backoff =
                    b * 2 ** (attempt - 1) + Math.floor(Math.random() * 100)
                await new Promise((r) => setTimeout(r, backoff))
            }
        }
    })
}

// 请求缓存
export interface CacheRequestorOptions {
    key: (config: any) => string
    persist?: boolean
    duration?: number
    isValid?: (key: string, config: any) => boolean | Promise<boolean>
    toPlain?: (resp: ResponseLike) => Promise<any>
}

function normalizeOptions(opts: CacheRequestorOptions) {
    const duration = Math.max(0, opts.duration ?? 0)
    const toPlain =
        opts.toPlain ??
        (async (resp: ResponseLike) => {
            if (typeof resp.toPlain === "function") return resp.toPlain()
            try {
                return await resp.json()
            } catch {
                return undefined
            }
        })
    return {
        key: opts.key,
        persist: !!opts.persist,
        duration,
        isValid: opts.isValid,
        toPlain
    }
}

function responseFromCached(data: any, status = 299): ResponseLike {
    return {
        ok: true,
        status,
        json: async () => data,
        text: async () => JSON.stringify(data)
    }
}

export function createCacheRequestor(cacheOptions: CacheRequestorOptions) {
    const options = normalizeOptions(cacheOptions)
    const store = useCacheStore(options.persist)
    const req = useRequestor()

    const dataKeyOf = (k: string) => `${k}#data`
    const tsKeyOf = (k: string) => `${k}#ts`

    eventEmitter.on("beforeRequest", async (config: CacheOptions) => {
        const k = options.key(config)
        const dk = dataKeyOf(k)
        const tk = tsKeyOf(k)

        const hasData = await store.has(dk)
        if (!hasData) return
        if (options.isValid) {
            const ok = await Promise.resolve(options.isValid(k, config))
            if (!ok) {
                await Promise.allSettled([store.delete(dk), store.delete(tk)])
                return
            }
            const cached = await store.get<any>(dk)
            if (cached !== undefined) {
                return responseFromCached(cached, 299)
            }
            return
        }

        // duration 时间检查
        if (options.duration > 0) {
            const hasTs = await store.has(tk)
            if (!hasTs) {
                await Promise.allSettled([store.delete(dk), store.delete(tk)])
                return
            }
            const ts = await store.get<number>(tk)
            const fresh = Date.now() - ts <= options.duration
            if (!fresh) {
                await Promise.allSettled([store.delete(dk), store.delete(tk)])
                return
            }
        }
        const cached = await store.get<any>(dk).catch(() => undefined)
        if (cached !== undefined) {
            return responseFromCached(cached, 299)
        }
    })

    // 成功写入缓存
    eventEmitter.on(
        "responseBody",
        async (config: CacheOptions, resp: ResponseLike) => {
            if (!(resp && resp.ok)) return
            const k = options.key(config)
            const dk = dataKeyOf(k)
            const tk = tsKeyOf(k)

            const plain = await options.toPlain(resp)
            if (plain === void 0) return
            await store.set(dk, plain)
            await store.set(tk, Date.now())
        }
    )
    return req
}

// 请求幂等
// url + headers + body -> hash
function hashRequest(opt: RequestOptions) {
    const spark = new SparkMD5()
    spark.append(opt.url)
    if (opt.headers) {
        const keys = Object.keys(opt.headers)
        for (const key of keys) {
            spark.append(key)
            spark.append(opt.headers[key])
        }
    }
    if (opt.body) spark.append(opt.body)
    return spark.end()
}
// hash 作为键
export function createIdempotentRequestor() {
    return createCacheRequestor({
        key: hashRequest,
        persist: false
    })
}
// 请求串行
export function createSerialRequestor(
    key: (url: string, method: Method, options?: RequestOptions) => string,
    base?: Requestor
): Requestor {
    const chains = new Map<string, Promise<void>>()
    const req = base ?? useRequestor()
    return wrap(req, (send) => {
        return async (url, method, options) => {
            const k = key(url, method, options)
            const prev = chains.get(k) ?? Promise.resolve()
            let proceed!: () => void
            const current = new Promise<void>((r) => (proceed = r))
            chains.set(
                k,
                prev.then(() => current)
            )
            await prev
            try {
                return await send(url, method, options)
            } finally {
                proceed()
                if (chains.get(k) === current) chains.delete(k)
            }
        }
    })
}
// 请求并发
export function createParallelRequestor(
    limit = 6,
    base?: Requestor
): Requestor {
    const req = base ?? useRequestor()
    let active = 0
    const q: Array<() => void> = []
    const acquire = () =>
        new Promise<void>((res) => {
            if (active < limit) {
                active++
                res()
            } else {
                q.push(() => {
                    active++
                    res()
                })
            }
        })
    const release = () => {
        active--
        const n = q.shift()
        if (n) n()
    }
    return wrap(req, (send) => {
        return async (url, method, options) => {
            await acquire()
            try {
                return await send(url, method, options)
            } finally {
                release()
            }
        }
    })
}
