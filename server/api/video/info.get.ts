import { getVideoService } from "~/server/services/videoService";

export default defineEventHandler(async (event) => {
    const query = await getQuery<{ id:string }>(event)
    const { id } = query
    const result = await getVideoService(id)
    return result
})