// request-xhr-imp/index.ts
import type { Requestor, Method, RequestOptions, ResponseLike } from '../request-core/index';
import eventEmitter from '../request-core/eventEmitter';

export interface XHRRequestorOptions {
    baseURL?: string;
    defaultHeaders?: Record<string, string>;
    withCredentials?: boolean;
}
export function createXHRRequestor(opts: XHRRequestorOptions = {}): Requestor {
    const { baseURL, defaultHeaders, withCredentials } = opts;

    const request = async (url: string, method: Method, options: RequestOptions = {}): Promise<ResponseLike> => {
        const fullUrl = buildUrl(baseURL, url, options.params);
        const configForHook = { url: fullUrl, method, options };

        const cached = await eventEmitter.emit<ResponseLike>('beforeRequest', configForHook);
        if (cached) return cached;

        const { signal, cleanup } = mergeSignalWithTimeout(options.signal, options.timeoutMs);

        const respLike = await new Promise<ResponseLike>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, fullUrl, true);
            xhr.withCredentials = !!withCredentials;
            // 超时处理
            if (options.timeoutMs && options.timeoutMs > 0) xhr.timeout = options.timeoutMs;
            // 绑定取消
            const onAbort = () => xhr.abort();
            if (signal) signal.addEventListener('abort', onAbort);
            // 请求头
            const headers: Record<string, string> = { ...(defaultHeaders || {}), ...(options.headers || {}) };
            const body = encodeBody(options.body, headers);
            for (const [k, v] of Object.entries(headers)) xhr.setRequestHeader(k, v);

            xhr.onload = () => {
                cleanup?.();
                if (signal) signal.removeEventListener('abort', onAbort);
                const status = xhr.status === 1223 ? 204 : xhr.status; // IE 历史坑，保险处理
                const rawText = xhr.responseText ?? '';
                const ok = status >= 200 && status < 300;

                const resp: ResponseLike = {
                    ok,
                    status,
                    headers: parseResponseHeaders(xhr.getAllResponseHeaders()),
                    json: async <T=any>() => {
                        try { return JSON.parse(rawText) as T; }
                        catch { return rawText as unknown as T; }
                    },
                    text: async () => rawText,
                    toPlain: async <T=any>() => {
                        try { return JSON.parse(rawText) as T; }
                        catch { return rawText as unknown as T; }
                    },
                };
                resolve(resp);
            };
            xhr.onerror = () => {
                cleanup?.();
                if (signal) signal.removeEventListener('abort', onAbort);
                reject(new Error('Network error'));
            };
            xhr.ontimeout = () => {
                cleanup?.();
                if (signal) signal.removeEventListener('abort', onAbort);
                reject(new DOMException(`Timeout ${options.timeoutMs}ms`, 'AbortError'));
            };
            xhr.onabort = () => {
                cleanup?.();
                if (signal) signal.removeEventListener('abort', onAbort);
                reject(new DOMException('Aborted', 'AbortError'));
            };
            xhr.send(body);
        });
        await eventEmitter.emit('responseBody', configForHook, respLike);
        return respLike;
    };
    const get = (u: string, o?: RequestOptions) => request(u, 'GET', o);
    const del = (u: string, o?: RequestOptions) => request(u, 'DELETE', o);
    const head = (u: string, o?: RequestOptions) => request(u, 'HEAD', o);
    const opt = (u: string, o?: RequestOptions) => request(u, 'OPTIONS', o);
    const post = (u: string, d?: any, o: RequestOptions={}) => request(u, 'POST',  { ...o, body: d });
    const put = (u: string, d?: any, o: RequestOptions={}) => request(u, 'PUT',   { ...o, body: d });
    const patch = (u: string, d?: any, o: RequestOptions={}) => request(u, 'PATCH', { ...o, body: d });
    return { request, get, delete: del, head, options: opt, post, put, patch };
}


function buildUrl(base: string | undefined, u: string, params?: Record<string, any>): string {
    const root = base || (typeof window !== 'undefined' ? window.location.origin : 'http://localhost');
    const url = new URL(u, root);
    if (params) {
        Object.entries(params).forEach(([k, v]) => {
        if (v == null) return;
        if (Array.isArray(v)) v.forEach(item => url.searchParams.append(k, String(item)));
        else url.searchParams.set(k, String(v));
        });
    }
    return url.toString();
}

function encodeBody(body: any, headers: Record<string, string>) {
    if (body == null) return null;
    if (typeof body === 'string' || body instanceof Blob || body instanceof FormData) {
        return body;
    }
    if (!hasHeader(headers, 'content-type')) {
        headers['Content-Type'] = 'application/json;charset=UTF-8';
    }
    return JSON.stringify(body);
}

function hasHeader(h: Record<string, string>, name: string) {
    const n = name.toLowerCase();
    return Object.keys(h).some(k => k.toLowerCase() === n);
}

function mergeSignalWithTimeout(external?: AbortSignal, timeoutMs?: number) {
    if (!timeoutMs && !external) return { signal: external, cleanup: undefined };

    const ac = new AbortController();
    let timer: any;

    const onExternalAbort = () => ac.abort(external?.reason);
    if (external) external.addEventListener('abort', onExternalAbort);

    if (timeoutMs && timeoutMs > 0) {
        timer = setTimeout(() => ac.abort(new DOMException(`Timeout ${timeoutMs}ms`, 'AbortError')), timeoutMs);
    }

    const cleanup = () => {
        if (external) external.removeEventListener('abort', onExternalAbort);
        if (timer) clearTimeout(timer);
    };
    return { signal: ac.signal, cleanup };
}

function parseResponseHeaders(raw: string): Record<string, string> {
    const out: Record<string, string> = {};
    if (!raw) return out;
    raw.trim().split(/[\r\n]+/).forEach(line => {
        const idx = line.indexOf(':');
        if (idx > 0) {
        const key = line.slice(0, idx).trim();
        const val = line.slice(idx + 1).trim();
        out[key] = val;
        }
    });
    return out;
}
