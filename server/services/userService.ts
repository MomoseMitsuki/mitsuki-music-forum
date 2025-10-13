import { PrismaClient } from "@prisma/client"
import { formatUser } from "~/utils/format"
const prisma = new PrismaClient()

export const createUserService = async (name:string,password:string,email:string) => {
    const user = await prisma.user.findUnique({ where:{ name } })
    if (user !== null) {
        return {
            message: `创建失败！此用户名:${user.name} 重名`
        }
    }
    const result = await prisma.$transaction(async (tx) => {
        const user = await tx.user.create({
            data: {
                name,password,email,
                avater:"/users/auth.jpg",
            }
        })
        const $default = await tx.musicList.create({
            data: {
                name: '$default',
                type: 'user',
                MusicIds: [],
                Users: {
                    connect: { id: user.id }
                }
            }
        });
        const $love = await tx.musicList.create({
            data: {
                name: '$love',
                type: 'user',
                MusicIds: [],
                Users: {
                    connect: { id: user.id }
                }
            }
        });
        await tx.user.update({
            where: { id: user.id },
            data: {
                Lists: {
                    connect: [{ id: $default.id }, { id: $love.id }]
                }
            },
            include: { Lists: true }
        });
        return { message:"用户创建成功!" }
    })
    return result
}

export const getUserInfoService = async (id:string) => {
    const user = await prisma.user.findFirst({
        where: { id },
        include: { Lists: { include: { Musics: { include: { lyric: true,video: true } } } } }
    })
    if (!user) {
        return { message:"没有此用户" }
    }
    const result = formatUser(user)
    return result
}