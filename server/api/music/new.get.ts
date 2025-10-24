import { getNewMusicService } from "~/server/services/musicService"

export default defineEventHandler(async (event) => {
    const { limit } = await getQuery<{ limit: string }>(event)
    const result = await getNewMusicService(Number(limit))
    return result
})
