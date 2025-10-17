import type { Music } from "~/types"

export function debounce(fn: VoidFunction, delay = 300) {
    let timer: NodeJS.Timeout | undefined = void 0
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, delay)
    }
}

export function isInList(d: Music, $list: Array<Music>): boolean {
    for (const item of $list) {
        if (item.id === d.id) {
            return true
        }
    }
    return false
}

export function uniqueById<T extends { id: string }>(arr: Array<T>): Array<T> {
    console.log("去重中")
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].id === arr[j].id) {
                arr.slice(j, 1)
                j--
            }
        }
    }
    return arr
}
