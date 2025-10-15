import { type CacheStore } from "../store-core/index"

const DB_NAME = "_cache"
const STORE_NAME = "_cache"
const DB_VERSION = 1

function openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open(DB_NAME, DB_VERSION)
        req.onupgradeneeded = () => {
            const db = req.result
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME)
            }
        }
        req.onsuccess = () => {
            const db = req.result
            db.onversionchange = () => db.close()
            resolve(db)
        }
        req.onerror = () => reject(req.error)
        req.onblocked = () => reject(new Error("IndexedDB upgrade blocked"))
    })
}

let dbPromise: Promise<IDBDatabase> | null = null
function getDB(): Promise<IDBDatabase> {
    if (!dbPromise) dbPromise = openDB()
    return dbPromise
}

function reqToPromise<T>(r: IDBRequest<T>): Promise<T> {
    return new Promise((resolve, reject) => {
        r.onsuccess = () => resolve(r.result)
        r.onerror = () => reject(r.error)
    })
}

export const storageStore: CacheStore = {
    async has(key: string): Promise<boolean> {
        const db = await getDB()
        const tx = db.transaction(STORE_NAME, "readonly")
        const os = tx.objectStore(STORE_NAME)
        const val = await reqToPromise<any>(os.get(key))
        return val !== undefined
    },
    async get<T>(key: string): Promise<T> {
        const db = await getDB()
        const tx = db.transaction(STORE_NAME, "readonly")
        const os = tx.objectStore(STORE_NAME)
        const val = await reqToPromise<T | undefined>(os.get(key))
        if (val === undefined)
            throw new Error(`Key "${key}" not found in _cache`)
        return val as T
    },
    async set<T>(key: string, ...values: Array<T>): Promise<void> {
        const db = await getDB()
        const tx = db.transaction(STORE_NAME, "readwrite")
        const os = tx.objectStore(STORE_NAME)
        const valueToStore =
            values.length === 1 ? values[0] : (values as unknown as T[])
        await reqToPromise(os.put(valueToStore, key))
        await new Promise<void>((resolve, reject) => {
            tx.oncomplete = () => resolve()
            tx.onerror = () => reject(tx.error)
            tx.onabort = () => reject(tx.error)
        })
    },
    async delete(key: string): Promise<void> {
        const db = await getDB()
        const tx = db.transaction(STORE_NAME, "readwrite")
        const os = tx.objectStore(STORE_NAME)
        await reqToPromise(os.delete(key))
        await new Promise<void>((resolve, reject) => {
            tx.oncomplete = () => resolve()
            tx.onerror = () => reject(tx.error)
            tx.onabort = () => reject(tx.error)
        })
    },
    async clear(): Promise<void> {
        const db = await getDB()
        const tx = db.transaction(STORE_NAME, "readwrite")
        const os = tx.objectStore(STORE_NAME)
        await reqToPromise(os.clear())
        await new Promise<void>((resolve, reject) => {
            tx.oncomplete = () => resolve()
            tx.onerror = () => reject(tx.error)
            tx.onabort = () => reject(tx.error)
        })
    }
}
