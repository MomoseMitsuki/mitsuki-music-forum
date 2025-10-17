import { getVideoRandomService } from "~/server/services/videoService";
import type { GetRandomVideoRequest } from "@/types"

export default defineEventHandler(async (event) => {
    const { limit,exclude } = await getQuery<GetRandomVideoRequest>(event)
    const size = Number(limit)
    const result = await getVideoRandomService(exclude,size)
    return result
})