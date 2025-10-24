import type {
    AddMusicRequest,
    RawMongodbData,
    RawMongodbOnlyId,
    RawMongodbMusic,
    Music
} from "@/types"
import { addLyricService } from "./lyricService"
import { addVideoService } from "./videoService"
import { formatMusics } from "~/utils/format"
import prisma from "~/server/model"

export const getMusicByNameService = async (
    contains: string
): Promise<Array<Music>> => {
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
            where: {
                name: { contains, mode: "insensitive" },
                type: "official"
            },
            select: { Musics: { select: { id: true } } }
        })
        const ids = new Set<string>()
        names.map((it) => ids.add(it.id))
        singers.cursor.firstBatch.map((it) => ids.add(it._id.$oid))
        lists.map((list) => {
            list.Musics.map((it) => ids.add(it.id))
        })
        console.dir(lists)
        const uniqueIds = [...ids]
        const result = await tx.music.findMany({
            where: { id: { in: uniqueIds } },
            include: { video: true, lyric: true }
        })
        return formatMusics(result)
    })
    return result
}

export const getRandomMusicService = async (
    limit: number
): Promise<Array<Music>> => {
    const result = await prisma.$transaction(async (tx) => {
        const music = (await tx.$runCommandRaw({
            aggregate: "Music",
            pipeline: [
                { $sample: { size: limit } },
                {
                    $lookup: {
                        from: "Video",
                        localField: "_id",
                        foreignField: "MusicId",
                        as: "video"
                    }
                },
                {
                    $lookup: {
                        from: "Lyric",
                        localField: "_id",
                        foreignField: "MusicId",
                        as: "lyric"
                    }
                },
                {
                    $addFields: {
                        video: { $arrayElemAt: ["$video", 0] },
                        lyric: { $arrayElemAt: ["$lyric", 0] }
                    }
                }
            ],
            cursor: {}
        })) as unknown as RawMongodbData<RawMongodbMusic>
        const formatMusic: Array<Music> = []
        for (const item of music.cursor.firstBatch) {
            const result = {
                id: item._id.$oid,
                name: item.name,
                singer: item.singer,
                path: item.path,
                duration: item.duration,
                avater: item.avater,
                lyric: item.lyric ? item.lyric.url : void 0,
                video: item.video
                    ? {
                          id: item.video._id.$oid,
                          name: item.name,
                          singer: item.singer,
                          avater: item.video.avater,
                          url: item.video.url
                      }
                    : void 0
            }
            formatMusic.push(result)
        }
        return formatMusic
    })
    return result
}

export const getNewMusicService = async (
    limit: number
): Promise<Array<Music>> => {
    const musics = await prisma.music.findMany({
        orderBy: {
            id: "desc"
        },
        include: { video: true, lyric: true },
        take: limit
    })
    return formatMusics(musics)
}

export const addOneMusicService = async (option: AddMusicRequest) => {
    const { name, path, singer, duration, avater } = option
    await prisma.music.create({
        data: {
            name,
            path,
            singer,
            duration,
            avater
        }
    })
    if (option.lyric) {
        await addLyricService(option.lyric)
    }
    if (option.video) {
        await addVideoService(option.video)
    }
    return { message: "添加成功" }
}

export const addManyMusicService = async (options: Array<AddMusicRequest>) => {
    for (const option of options) {
        await addOneMusicService(option)
    }
}
