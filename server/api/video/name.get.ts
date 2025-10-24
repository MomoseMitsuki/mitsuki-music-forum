import { getVideoInfoByNameService } from "~/server/services/videoService"

export default defineEventHandler(async (event) => {
    const { name } = await getQuery<{ name: string }>(event)
    const result = await getVideoInfoByNameService(name)
    return result
})
