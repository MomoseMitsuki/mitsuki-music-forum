import prisma from "~/server/model"
import {
    AddOneMusicToListRequest,
    CreateListRequest,
    RawMongodbData,
    MusicListWithNotData,
    RawMongodbListWithNoData,
    DBMusicList
} from "@/types"
import { formatLists, formatList } from "~/utils/format"

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
        data: {
            Musics: { connect: { id: musicId } }
        }
    })
    return { message: "添加成功" }
}

export const addOfficialListService = async (
    listId: string,
    userId: string
) => {
    const result = await prisma.$transaction(async (tx) => {
        await tx.user.update({
            where: { id: userId },
            data: {
                Lists: { connect: { id: listId } }
            }
        })
    })
}

export const createListService = async (datas: CreateListRequest) => {
    if (datas.type === "official") {
        // todo: auth鉴权验证 userId
    }
    const result = await prisma.$transaction(async (tx) => {
        const isNameSame = await tx.musicList.findFirst({
            where: { name: datas.name }
        })
        if (isNameSame !== null) return { id: "0", message: "此歌单已重名" }
        const result = await tx.musicList.create({
            data: {
                name: datas.name,
                type: datas.type,
                avater: "",
                MusicIds: datas.musicIds,
                UserIds: datas.type === "official" ? [] : [datas.userId],
                Users: {
                    connect: [{ id: datas.userId }]
                }
            }
        })
        return result
    })
    return result
}

export const getRandomListService = async (limit: number) => {
    const result = await prisma.$transaction(async (tx) => {
        const lists = (await tx.$runCommandRaw({
            aggregate: "MusicList",
            pipeline: [
                { $match: { type: "official" } },
                { $sample: { size: limit } },
                {
                    $project: {
                        _id: 1,
                        name: 1,
                        avater: 1,
                        type: 1
                    }
                }
            ],
            cursor: {}
        })) as unknown as RawMongodbData<RawMongodbListWithNoData>
        const result: Array<MusicListWithNotData> = []
        for (const item of lists.cursor.firstBatch) {
            result.push({
                id: item._id.$oid,
                name: item.name,
                avater: item.avater,
                type: item.type
            })
        }
        return result
    })
    return result
}

export const getAllListService = async () => {
    const lists = await prisma.musicList.findMany({
        where: { type: "official" },
        select: { id: true, name: true, avater: true, type: true }
    })
    return lists
}

export const getListByIdService = async (id: string) => {
    const list = await prisma.musicList.findFirst({
        where: { id },
        include: { Musics: { include: { lyric: true, video: true } } }
    })
    if (list?.Musics) {
        return formatList(list)
    } else {
        list!.Musics = []
        return list
    }
}

export const getListsByNameService = async (contains: string) => {
    const lists = await prisma.musicList.findMany({
        where: { name: { contains, mode: "insensitive" }, type: "official" },
        include: { Musics: { include: { lyric: true, video: true } } }
    })
    const result = formatLists(lists)
    return result
}

export const deleteMusicListService = async (
    userId: string,
    listId: string
) => {
    const result = prisma.$transaction(async (tx) => {
        await tx.user.update({
            where: { id: userId },
            data: {
                Lists: { disconnect: { id: listId } }
            }
        })
        const list = await tx.musicList.findFirst({
            where: { id: listId },
            select: { type: true }
        })
        if (list === null || list.type === "official") {
            return { message: "不能被删除" }
        }
        await tx.musicList.delete({ where: { id: listId } })
        return { message: "删除成功!" }
    })
    return result
}
