import axios, {
    type AxiosInstance,
    type AxiosRequestConfig,
    type AxiosResponse,
    AxiosHeaders
} from "axios"
import type {
    Requestor,
    Method,
    RequestOptions,
    ResponseLike
} from "../request-core/index"
import eventEmitter from "../request-core/eventEmitter"

export interface AxiosRequestorOptions {
    baseURL?: string
    defaultHeaders?: Record<string, string>
}

export function createAxiosRequestor(
    opts: AxiosRequestorOptions = {}
): Requestor {
    const { baseURL, defaultHeaders } = opts

    const ins: AxiosInstance = axios.create({
        baseURL,
        headers: defaultHeaders
    })

    const request = async (
        url: string,
        method: Method,
        options: RequestOptions = {}
    ): Promise<ResponseLike> => {
        const fullUrl = buildFullUrl(baseURL, url)
        const configForHook = { url: fullUrl, method, options }
        const cached = await eventEmitter.emit<ResponseLike>(
            "beforeRequest",
            configForHook
        )
        if (cached) return cached
        const { signal, cleanup } = mergeSignalWithTimeout(
            options.signal,
            options.timeoutMs
        )
        const axCfg: AxiosRequestConfig = {
            url,
            method: method.toLowerCase() as any,
            headers: { ...(defaultHeaders || {}), ...(options.headers || {}) },
            params: options.params,
            data: options.body,
            signal,
            transitional: { clarifyTimeoutError: true }
        }
        let resp: AxiosResponse
        try {
            resp = await ins.request(axCfg)
        } finally {
            cleanup?.()
        }
        const respLike: ResponseLike = toResponseLike(resp)
        await eventEmitter.emit("responseBody", configForHook, respLike)
        return respLike
    }
    const get = (u: string, o?: RequestOptions) => request(u, "GET", o)
    const del = (u: string, o?: RequestOptions) => request(u, "DELETE", o)
    const head = (u: string, o?: RequestOptions) => request(u, "HEAD", o)
    const opt = (u: string, o?: RequestOptions) => request(u, "OPTIONS", o)
    const post = (u: string, d?: any, o: RequestOptions = {}) =>
        request(u, "POST", { ...o, body: d })
    const put = (u: string, d?: any, o: RequestOptions = {}) =>
        request(u, "PUT", { ...o, body: d })
    const patch = (u: string, d?: any, o: RequestOptions = {}) =>
        request(u, "PATCH", { ...o, body: d })

    return { request, get, delete: del, head, options: opt, post, put, patch }
}

function buildFullUrl(baseURL: string | undefined, path: string): string {
    if (!baseURL) return path
    try {
        return new URL(path, baseURL).toString()
    } catch {
        return `${baseURL?.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`
    }
}

function mergeSignalWithTimeout(external?: AbortSignal, timeoutMs?: number) {
    if (!timeoutMs && !external) return { signal: external, cleanup: undefined }
    const ac = new AbortController()
    let timer: any
    const onExternalAbort = () => ac.abort(external?.reason)
    if (external) external.addEventListener("abort", onExternalAbort)

    if (timeoutMs && timeoutMs > 0) {
        timer = setTimeout(
            () =>
                ac.abort(
                    new DOMException(`Timeout ${timeoutMs}ms`, "AbortError")
                ),
            timeoutMs
        )
    }

    const cleanup = () => {
        if (external) external.removeEventListener("abort", onExternalAbort)
        if (timer) clearTimeout(timer)
    }
    return { signal: ac.signal, cleanup }
}

function toResponseLike(r: AxiosResponse): ResponseLike {
    const data = r.data
    const ok = r.status >= 200 && r.status < 300

    return {
        ok,
        status: r.status,
        headers: axiosHeadersToObject(r.headers),
        json: async <T = any>() => data as T,
        text: async () =>
            typeof data === "string" ? data : JSON.stringify(data),
        toPlain: async <T = any>() => data as T
    }
}

function axiosHeadersToObject(
    h: AxiosResponse["headers"]
): Record<string, string> {
    const obj: Record<string, string> = {}
    if (!h) return obj
    const anyH = h as any

    if (typeof AxiosHeaders !== "undefined" && anyH instanceof AxiosHeaders) {
        anyH.forEach((v: string, k: string) => {
            obj[k] = v
        })
        return obj
    }

    Object.keys(anyH).forEach((k) => {
        const v = anyH[k]
        if (Array.isArray(v)) obj[k] = v.join(", ")
        else obj[k] = String(v)
    })
    return obj
}
