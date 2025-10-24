import { getRandomListService } from "~/server/services/listService"

export default defineEventHandler(async (event) => {
    const { limit } = await getQuery<{ limit: string }>(event)
    const result = await getRandomListService(Number(limit))
    return result
})
