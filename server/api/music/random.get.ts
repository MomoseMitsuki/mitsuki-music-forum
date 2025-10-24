import { getRandomMusicService } from "~/server/services/musicService"

export default defineEventHandler(async (event) => {
    const { limit } = await getQuery<{ limit: string }>(event)
    const limitNum = Number(limit)
    const result = await getRandomMusicService(limitNum)
    return result
})
