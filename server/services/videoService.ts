import { AddVideoRequest, DBMusic, RawMongodbData, RawMongodbMusicId,RawMongodbOnlyId } from "@/types"
import { formatMusics } from "~/utils/format"
import prisma from '~/server/model'


export const addVideoService = async (
    option: AddVideoRequest,
    MusicId: string
) => {
    const { url, avater } = option
    await prisma.video.create({
        data: { url, avater, MusicId }
    })
}

export const getVideoService = async (id: string) => {
    const result = await prisma.$transaction(async (tx) => {
        const video = await prisma.video.findFirst({
            where: { id }
        })
        const music = await prisma.music.findFirst({
            where: { id: video?.MusicId }
        })
        if (video && music) {
            return {
                id: video.id,
                avater: video.avater,
                url: video.url,
                name: music.name,
                singer: music.singer
            }
        } else {
            return { message: "没有此视频" }
        }
    })
    return result
}

export const getVideoInfoService = async (page: number, limit: number) => {
    const skip = (page - 1) * limit
    const result = await prisma.$transaction(async (tx) => {
        const videos = await tx.video.findMany({
            skip,
            take: limit
        })
        const musicIds: Array<string> = []
        for (const video of videos) {
            musicIds.push(video.MusicId)
        }
        const result = await tx.music.findMany({
            where: { id: { in: musicIds } },
            include: { video: true, lyric: true }
        })!
        return formatMusics(result)
    })
    return result
}

export const getVideoRandomService = async (exclude:string,limit:number) => {
    const result = await prisma.$transaction(async (tx) => {
        const videoIds = await tx.$runCommandRaw({
            aggregate: 'Video',
            pipeline: [
                { $sample: { size: limit + 1 } },
                { $project: { MusicId: 1 } }
            ],
            cursor: {},
        }) as unknown as RawMongodbData<RawMongodbMusicId>
        const musicIds:Array<string> = []
        let count = 0
        videoIds.cursor.firstBatch.forEach(it => {
            if (it._id.$oid === exclude || count === limit) return
            musicIds.push(it.MusicId.$oid)
            count++
        })
        const musics = await tx.music.findMany({
            where: { id: { in: musicIds } },
            include: { video: true, lyric: true }
        })
        return formatMusics(musics)
    })
    return result
}

export const getVideoInfoByNameService = async (name:string) => {
    const result = await prisma.$transaction(async (tx) => {
        const names = await tx.music.findMany({
            where: {
                name: { contains:name, mode: "insensitive" }
            },
            select: { id: true }
        })!
        const singers = (await tx.$runCommandRaw({
            find: "Music",
            filter: {
                singer: {
                    $elemMatch: { $regex: `${name}`, $options: "i" }
                }
            },
            projection: { _id: 1 }
        })) as unknown as RawMongodbData<RawMongodbOnlyId>
        const lists = await tx.musicList.findMany({
            where: { name: { contains: name, mode: "insensitive" }, type: "offical" },
            select: { Musics: { select: { id: true } } }
        })
        const ids = new Set<string>()
        names.map((it) => ids.add(it.id))
        singers.cursor.firstBatch.map((it) => ids.add(it._id.$oid))
        lists.map((list) => list.Musics.map((it) => ids.add(it.id)))
        const uniqueIds = [...ids]
        const result = await tx.music.findMany({
            where: { 
                id: { in: uniqueIds },
                video: { isNot: null }
            },
            include: { video: true, lyric: true },
        })
        return formatMusics(result)
    })
    return result
}