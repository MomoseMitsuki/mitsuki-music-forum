import prisma from '~/server/model'
import { AddOneMusicToListRequest } from "@/types"
import { formatLists } from "~/utils/format"


export const addOneMusicToListService = async (
    data: AddOneMusicToListRequest
) => {
    const { userId, musicId, name } = data
    const list = await prisma.musicList.findFirst({
        where: { name, type: "user", Users: { some: { id: userId } } },
        select: { id: true, MusicIds: true }
    })
    if (!list) {
        return { message: "并没有此歌单" }
    }
    if (Array.isArray(list) && list.MusicIds.includes(musicId)) {
        return { message: "该歌单内已有此歌曲" }
    }
    await prisma.musicList.update({
        where: { id: list.id },
        data: { MusicIds: { push: musicId } }
    })
    return { message: "添加成功" }
}

export const getListsByNameService = async (contains: string) => {
    const lists = await prisma.musicList.findMany({
        where: { name: { contains, mode: "insensitive" }, type: "offical" },
        include: { Musics: { include: { lyric: true, video: true } } }
    })
    const result = formatLists(lists)
    return result
}

export const addOneMusicToOfficalListService = () => {}
