import { PrismaClient } from "@prisma/client"
import type { Music } from "@/types"
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const musics = await prisma.music.findMany({
        include: {
            lyric: true,
            video: true
        }
    })
    const result = []
    for(const music of musics) {
        const item = {
            id: music.id,
            name: music.name,
            singer: music.singer,
            path: music.path,
            duration: music.duration,
            avater: music.avater,
            video: music.video ? music.video : "",
            lyric: music.lyric ? music.lyric.url : ""
        }
        result.push(item)
    }
    return { datas: result }
})