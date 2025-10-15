import type {
    Requestor,
    Method,
    RequestOptions,
    ResponseLike
} from "../request-core/index"
import eventEmitter from "../request-core/eventEmitter"

export interface FetchRequestorOptions {
    baseURL?: string
    defaultHeaders?: Record<string, string>
}

export function createFetchRequestor(
    opts: FetchRequestorOptions = {}
): Requestor {
    const { baseURL, defaultHeaders } = opts

    const request = async (
        url: string,
        method: Method,
        options: RequestOptions = {}
    ): Promise<ResponseLike> => {
        const fullUrl = buildUrl(baseURL, url, options.params)
        const config = { url: fullUrl, method, options }
        const cached = await eventEmitter.emit<ResponseLike>(
            "beforeRequest",
            config
        )
        if (cached) return cached
        const { init, cleanup } = buildInit(method, options, defaultHeaders)
        let resp: Response
        try {
            resp = await fetch(fullUrl, init)
        } finally {
            cleanup?.()
        }
        const respLike: ResponseLike = normalizeResponse(resp)

        await eventEmitter.emit("responseBody", config, respLike)
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

function buildUrl(
    base: string | undefined,
    u: string,
    params?: Record<string, any>
): string {
    const root =
        base ||
        (typeof window !== "undefined"
            ? window.location.origin
            : "http://localhost")
    const url = new URL(u, root)
    if (params) {
        Object.entries(params).forEach(([k, v]) => {
            if (v == null) return
            if (Array.isArray(v))
                v.forEach((item) => url.searchParams.append(k, String(item)))
            else url.searchParams.set(k, String(v))
        })
    }
    return url.toString()
}

function buildInit(
    method: Method,
    options: RequestOptions,
    defaultHeaders?: Record<string, string>
): { init: RequestInit; cleanup?: () => void } {
    const headers: Record<string, string> = {
        ...(defaultHeaders || {}),
        ...(options.headers || {})
    }
    const body = encodeBody(options.body, headers)
    const { signal, cleanup } = mergeSignalWithTimeout(
        options.signal,
        options.timeoutMs
    )

    const init: RequestInit = {
        method,
        headers,
        body,
        signal
    }
    return { init, cleanup }
}

function encodeBody(body: any, headers: Record<string, string>) {
    if (body == null) return undefined
    if (
        typeof body === "string" ||
        body instanceof Blob ||
        body instanceof FormData
    ) {
        return body
    }
    if (!hasHeader(headers, "content-type")) {
        headers["Content-Type"] = "application/json;charset=UTF-8"
    }
    return JSON.stringify(body)
}

function hasHeader(h: Record<string, string>, name: string) {
    const n = name.toLowerCase()
    return Object.keys(h).some((k) => k.toLowerCase() === n)
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

function normalizeResponse(r: Response): ResponseLike {
    return {
        ok: r.ok,
        status: r.status,
        headers: headersToObject(r.headers),
        json: <T = any>() => r.clone().json() as Promise<T>,
        text: () => r.clone().text(),
        toPlain: <T = any>() => r.clone().json() as Promise<T>
    }
}

function headersToObject(h: Headers): Record<string, string> {
    const obj: Record<string, string> = {}
    h.forEach((v, k) => {
        obj[k] = v
    })
    return obj
}
