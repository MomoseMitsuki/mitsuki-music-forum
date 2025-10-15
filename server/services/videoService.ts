import { PrismaClient } from "@prisma/client"
import { AddVideoRequest, DBMusic } from "@/types"
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
