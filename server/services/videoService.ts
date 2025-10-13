import { PrismaClient } from "@prisma/client"
import { AddVideoRequest } from "@/types"
const prisma = new PrismaClient()

export const addVideoService = async (option:AddVideoRequest,MusicId:string) => {
    const { url, avater } = option
    await prisma.video.create({
        data: { url,avater,MusicId}
    })
}

export const getVideoService = async (id:string) => {
    const result = await prisma.$transaction(async (tx) => {
        const video = await prisma.video.findFirst({
            where: { id }
        })
        const music = await prisma.music.findFirst({
            where: { id:video?.MusicId }
        })
        if (video && music) {
            return {
                id: video.id,
                avater: video.avater,
                url: video.url,
                name: music.name,
                singer: music.singer,
            }
        } else {
            return { message: "没有此视频" }
        }
    })
    return result
}