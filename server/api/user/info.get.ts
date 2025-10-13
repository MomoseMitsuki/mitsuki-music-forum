import { getUserInfoService } from "~/server/services/userService"

export default defineEventHandler(async (event) => {
    const querys = getQuery<{id:string}>(event)
    const { id } = querys
    const result = await getUserInfoService(id)
    return result
})