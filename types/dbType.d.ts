export type DBVideo = {
    id: string
    url: string
    avater: string
    MusicId: string
} | null

export type DBLyric = {
    id: string
    url: string
    MusicId: string
} | null

export type DBMusic = {
    id: string
    name: string
    avater: string
    ListIds: string[]
    singer: string[]
    path: string
    duration: number
} & {
    video: DBVideo
    lyric: DBLyric
}

export type DBMusicList = {
    Musics: Array<DBMusic>
} & {
    id: string
    name: string
    avater: string | null
    type: string
    MusicIds: string[]
    UserIds: string[]
}

export type DBMusicListWithNoData = {
    id: string
    name: string
    avater: string | null
}

export type DBUser = {
    Lists: Array<DBMusicList>
} & {
    id: string
    name: string
    email: string
    avater: string
    password: string
    ListIds: string[]
}

export interface RawMongodbData<T> {
    cursor: {
        firstBatch: Array<T>
        id: number
        ns: string
        ok: number
    }
}

export interface RawMongodbOnlyId {
    _id: { $oid: string }
}

export interface RawMongodbListWithNoData extends RawMongodbOnlyId {
    name: string
    avater: string
    type: string
}
export interface RawMongodbMusicId extends RawMongodbOnlyId {
    MusicId: { $oid: string }
}

export interface RawMongodbMusic extends RawMongodbOnlyId {
    name: string
    singer: Array<string>
    path: string
    duration: number
    avater: string
    lyric?: {
        url: string
    } & RawMongodbMusicId
    video: {
        url: string
        avater: string
    } & RawMongodbMusicId
}
