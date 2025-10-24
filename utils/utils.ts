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
    if (!d) return false
    for (const item of $list) {
        if (item.id === d.id) {
            return true
        }
    }
    return false
}
