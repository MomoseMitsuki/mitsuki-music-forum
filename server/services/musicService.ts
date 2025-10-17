import type { AddMusicRequest, RawMongodbData, RawMongodbOnlyId } from "@/types"
import { addLyricService } from "./lyricService"
import { addVideoService } from "./videoService"
import { formatMusics } from "~/utils/format"
import prisma from '~/server/model'


export const getMusicByNameService = async (contains: string) => {
    const result = await prisma.$transaction(async (tx) => {
        const names = await tx.music.findMany({
            where: {
                name: { contains, mode: "insensitive" }
            },
            select: { id: true }
        })!
        const singers = (await tx.$runCommandRaw({
            find: "Music",
            filter: {
                singer: {
                    $elemMatch: { $regex: `${contains}`, $options: "i" }
                }
            },
            projection: { _id: 1 }
        })) as unknown as RawMongodbData<RawMongodbOnlyId>
        const lists = await tx.musicList.findMany({
            where: { name: { contains, mode: "insensitive" }, type: "offical" },
            select: { Musics: { select: { id: true } } }
        })
        const ids = new Set<string>()
        names.map((it) => ids.add(it.id))
        singers.cursor.firstBatch.map((it) => ids.add(it._id.$oid))
        lists.map((list) => list.Musics.map((it) => ids.add(it.id)))
        const uniqueIds = [...ids]
        const result = await tx.music.findMany({
            where: { id: { in: uniqueIds } },
            include: { video: true, lyric: true }
        })
        return formatMusics(result)
    })
    return result
}

export const addOneMusicService = async (option: AddMusicRequest) => {
    const { name, path, singer, duration, avater } = option
    const music = await prisma.music.create({
        data: {
            name,
            path,
            singer,
            duration,
            avater
        }
    })
    if (option.lyric) {
        await addLyricService(option.lyric, music.id)
    }
    if (option.video) {
        await addVideoService(option.video, music.id)
    }
    return { message: "添加成功" }
}

export const addManyMusicService = async (options: Array<AddMusicRequest>) => {
    for (const option of options) {
        await addOneMusicService(option)
    }
}
