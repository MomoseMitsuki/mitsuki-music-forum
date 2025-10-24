import { getAllVideoService } from "~/server/services/videoService"

export default defineEventHandler(async (event) => {
    const result = getAllVideoService()
    return result
})
