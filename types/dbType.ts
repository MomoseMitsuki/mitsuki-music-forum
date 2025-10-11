export type DBVideo = {
    id: string
    url: string
    avater: string
    MusicId: string
} | null

export type DBLyric = {
    id: string;
    url: string;
    MusicId: string;
} | null

export type DBMusic = {
    id: string;
    name: string;
    avater: string;
    ListIds: string[];
    singer: string[];
    path: string;
    duration: number;
} & {
    video: DBVideo;
    lyric: DBLyric
}

export type DBMusicList = {
    Musics: Array<DBMusic>
} & {
    id: string;
    name: string;
    avater: string | null;
    type: string;
    MusicIds: string[];
    UserIds: string[];
}

export type DBUser = {
    Lists: Array<DBMusicList>
} & {
    id: string;
    name: string;
    email: string;
    avater: string;
    password: string;
    ListIds: string[];
}