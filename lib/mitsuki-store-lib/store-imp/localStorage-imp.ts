import { type CacheStore } from "../store-core/index"

export const storageStore: CacheStore = {
    async get<T>(key: string): Promise<T> {
        const result = (await localStorage.getItem(key)) as string
        return JSON.parse(result)
    },
    async set<T>(key: string, ...values: Array<T>): Promise<void> {
        if (values.length === 1) {
            localStorage.setItem(key, JSON.stringify(values[0]))
        } else {
            localStorage.setItem(key, JSON.stringify(values))
        }
    },
    async has(key: string): Promise<boolean> {
        for (const keys in localStorage) {
            if (keys === key) {
                return true
            }
        }
        return false
    },
    async delete(key: string): Promise<void> {
        return await localStorage.removeItem(key)
    },
    async clear() {
        return await localStorage.clear()
    }
}
