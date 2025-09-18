export interface Music {
    id: number
    name: string
    singer: Array<string>
    path: string
    duration: number
    avater: string
    lyric: string
    video: boolean
}

export interface MusicList {
    id:number,
    avater: string,
    name:string,
    datas:Array<Music>
}

export interface User {
    id:number,
    avater: string
    name:string,
    playList:Array<Music>
    musicList:Array<MusicList>
}