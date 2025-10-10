import { PrismaClient } from "@prisma/client"
import { initUserList } from "./listService"
const prisma = new PrismaClient()

export const createUserService = async (name:string,password:string,email:string) => {
    const user = await prisma.user.findUnique({ where:{ name } })
    if(user !== null) {
        return {
            message: `创建失败！此用户名:${user.name} 重名`
        }
    }
    const { defaultId,loveListId } = await initUserList()
    await prisma.user.create({
        data: {
            name,password,email,
            avater:"/users/auth.jpg",
            ListIds:[ defaultId, loveListId ]
        }
    })
    return { message:"用户创建成功!" }
}

export const loginUserService = async () => {

}