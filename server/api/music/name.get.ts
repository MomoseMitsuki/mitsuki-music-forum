import { getMusicByNameService } from "~/server/services/musicService"

export default defineEventHandler(async (event) => {
    const { name } = await getQuery<{ name: string }>(event)
    const result = getMusicByNameService(name)
    return result
})
