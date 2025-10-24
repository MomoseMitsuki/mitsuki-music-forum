import { deleteMusicListService } from "~/server/services/listService"

export default defineEventHandler(async (event) => {
    const { userId, ListId } = await getQuery<{
        userId: string
        ListId: string
    }>(event)
    const result = await deleteMusicListService(userId, ListId)
    return result
})
