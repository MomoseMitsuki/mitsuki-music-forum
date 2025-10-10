import { PrismaClient } from "@prisma/client"
import { AddVideoRequest } from "@/types"
const prisma = new PrismaClient()

export const getVideoService = (id:string) => {
    return process.env.VIDEO_LOCALURL + id + ".mp4"
}

export const addVideoService = async (option:AddVideoRequest,MusicId:string) => {
    const { url, avater } = option
    await prisma.video.create({
        data: { url,avater,MusicId}
    })
}

