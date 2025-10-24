import { AddLyricRequest } from "@/types"
import prisma from "~/server/model"

export const addLyricService = async (option: AddLyricRequest) => {
    const result = await prisma.$transaction(async (tx) => {
        const music = await tx.music.findFirst({
            where: { name: option.musicName },
            select: { id: true }
        })
        if (music === null) {
            return { message: "没有找到此歌曲名哦" }
        }
        await tx.lyric.create({
            data: { MusicId: music!.id, url: option.url }
        })
        return { message: "创建成功" }
    })
    return result
}
