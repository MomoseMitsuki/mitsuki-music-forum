import fs from "fs"
import { AddLyricRequest } from "@/types"
import prisma from '~/server/model'

export const getLryicService = async (id: string) => {
    const url = process.env.LYRIC_LOCALURL + id + ".lrc"
    const lyricInfo = await fs.promises.readFile(url, {
        encoding: "utf-8"
    })
    return lyricInfo
}

export const addLyricService = async (
    option: AddLyricRequest,
    MusicId: string
) => {
    const { url } = option
    await prisma.lyric.create({
        data: { url, MusicId }
    })
}
