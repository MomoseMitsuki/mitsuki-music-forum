export function debounce(fn:VoidFunction, delay = 300) {
    let timer:NodeJS.Timeout | undefined = void 0
    return function (...args:any[]) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, delay)
    }
}