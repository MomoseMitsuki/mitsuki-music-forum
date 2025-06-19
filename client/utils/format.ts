/**
 * @interface the object type of a lyric data
 */
interface LyricItem {
    time: number
    words: string
}
/**
 * @param {string} timeStr push a formatted time string
 * @returns {number} return a parsed time number
 * @example
 * parseTime('00:31.03')    =>  31.03
 * parseTime('02:10.78')    =>  130.78
 */
const _parseTime = (timeStr: string) => {
    const parts = timeStr.split(":")
    return +parts[0] * 60 + +parts[1]
}
/**
 * @param {Array<LyricItem>} arr    push a lyricData
 * @returns {Array<LyricItem>}      return a formatted lyricData
 * @description
 * We pass in the lyrics data array. If the difference between the time of a lyric item
 * and the previous item's time is less than 3, and the previous item's words is empty, then we delete the previous lyric item.
 * This operation is performed by iterating through the array, and the new array is returned.
 */
const _deleteSpace = (arr: Array<LyricItem>) => {
    if (!Array.isArray(arr) || arr.length === 0) return arr

    const result = []
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i]
        const prev = result.length > 0 ? result[result.length - 1] : null
        if (
            prev &&
            curr.time - prev.time < 3 &&
            (!prev.words || prev.words.trim() === "")
        ) {
            result.pop()
        }
        result.push(curr)
    }
    return result
}
/**
 * @param {number} time push a time number
 * @returns {string} return a formatted time string
 * @example
 * formatTime(97)   =>  '01:37'
 * formatTime(31)   =>  '00:31'
 */
export const formatTime = (time: number) => {
    time = Math.floor(time)
    const mins = Math.floor(time / 60)
    const seconds = time - mins * 60
    const minsStr = mins > 9 ? `${mins}` : `0${mins}`
    const secondsStr = seconds > 9 ? `${seconds}` : `0${seconds}`
    return minsStr + ":" + secondsStr
}
/**
 * @param {string} lyricStr push a string in the .lrc lyrics file format.
 * @returns { Array<LyricItem> }   return a formatted array
 * @description
 * We push in a string in the .lrc lyrics file format
 * and ultimately parse it into an array of lyrics with properties for time and words.
 */
export const formatLyric = (lyricStr: string) => {
    const lyricData = lyricStr.split("\r\n\r\n")
    const lines = lyricData[1].split("\r\n")
    const result: Array<LyricItem> = []
    for (let i = 0; i < lines.length; i++) {
        const str = lines[i]
        const parts = str.split("]")
        const timeStr = parts[0].substring(1)
        const obj: LyricItem = {
            time: _parseTime(timeStr),
            words: parts[1]
        }
        result.push(obj)
    }
    return _deleteSpace(result)
}
