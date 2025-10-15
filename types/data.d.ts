export interface Music {
    id: string
    name: string
    singer: Array<string>
    path: string
    duration: number
    avater: string
    lyric?: string
    video?: Video
}

export interface MusicList {
    id: string
    avater: string
    name: string
    datas: Array<Music>
}

export interface User {
    id: string
    avater: string
    email: string
    name: string
    $default: MusicList
    $love: MusicList
    $list: Array<MusicList>
}
export interface Video {
    id: string
    name: string
    singer: string[]
    avater: string
    url: string
}
