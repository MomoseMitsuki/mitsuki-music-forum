import { type CacheStore } from "../store-core/index"

class CookieCacheStore implements CacheStore {
    private encode(value: unknown): string {
        return encodeURIComponent(JSON.stringify(value))
    }

    private decode<T>(value: string | null): T {
        if (value == null) throw new Error("Value not found")
        return JSON.parse(decodeURIComponent(value)) as T
    }

    async has(key: string): Promise<boolean> {
        return document.cookie.split("; ").some((c) => c.startsWith(`${key}=`))
    }

    async get<T>(key: string): Promise<T> {
        const cookies = document.cookie.split("; ")
        for (const c of cookies) {
            const [k, v] = c.split("=")
            if (k === key) {
                return this.decode<T>(v)
            }
        }
        throw new Error(`Key "${key}" not found`)
    }

    async set<T>(key: string, ...values: Array<T>): Promise<void> {
        const value = values.length === 1 ? values[0] : values
        document.cookie = `${key}=${this.encode(value)}; path=/`
    }

    async delete(key: string): Promise<void> {
        document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
    }

    async clear(): Promise<void> {
        const cookies = document.cookie.split("; ")
        for (const c of cookies) {
            const [k] = c.split("=")
            document.cookie = `${k}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
        }
    }
}

export const memoryStore: CacheStore = new CookieCacheStore()
