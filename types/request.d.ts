export interface AddMusicRequest {
    name: string
    path: string
    singer: string[]
    duration: number
    avater: string
    video?: AddVideoRequest
    lyric?: AddLyricRequest
}

export interface AddVideoRequest {
    musicName: string
    avater: string
    url: string
}

export interface AddLyricRequest {
    musicName: string
    url: string
}

export interface CreateUserListRequest {
    id: string
    name: string
}

export interface AddOneMusicToListRequest {
    userId: string
    musicId: string
    name: string
}

interface GetRandomVideoRequest {
    limit: number
    exclude: string
}
