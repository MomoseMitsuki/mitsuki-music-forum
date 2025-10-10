import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const initUserList = async () => {
    const defaultList = await prisma.musicList.create({
        data: {
            name: "$default",
            type: "user"
        }
    })
    const loveList = await prisma.musicList.create({
        data: {
            name: "$love",
            type: "user"
        }
    })
    const defaultId = defaultList.id
    const loveListId = loveList.id
    return { defaultId,loveListId }
}