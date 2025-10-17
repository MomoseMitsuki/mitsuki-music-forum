import { PrismaClient } from "@prisma/client"
import { AddVideoRequest, DBMusic, RawMongodbData, RawMongodbMusicId } from "@/types"
import { formatMusics } from "~/utils/format"
const prisma = new PrismaClient()

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
        const result: DBMusic[] = []
        for (const video of videos) {
            const music = await tx.music.findFirst({
                where: { id: video.MusicId },
                include: { video: true, lyric: true }
            })!
            result.push(music as DBMusic)
        }
        return formatMusics(result)
    })
    return result
}

export const getVideoRandomService = async (exclude:string,limit:number) => {
    console.log(exclude)
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