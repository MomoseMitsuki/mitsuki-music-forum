import type { AddMusicRequest } from "@/types"
import { PrismaClient } from "@prisma/client"
import { addLyricService } from "./lyricService"
import { addVideoService } from "./videoService"
const prisma = new PrismaClient()

export const getMusicByNameService = async (contains:string) => {
    const musics = await prisma.music.findMany({
        where: { 
            name: { contains, mode: "insensitive"}
        }
    })
}

export const addOneMusicService = async (option:AddMusicRequest) => {
    const { name,path,singer,duration,avater } = option
    const music = await prisma.music.create({
        data: {
            name,path,singer,duration,avater
        }
    })
    if (option.lyric) {
        await addLyricService(option.lyric,music.id)
    }
    if (option.video) {
        await addVideoService(option.video,music.id)
    }
    return { message:"添加成功" }
}

export const addManyMusicService = async (options:Array<AddMusicRequest>) => {
    for (const option of options) {
        await addOneMusicService(option)
    }
}