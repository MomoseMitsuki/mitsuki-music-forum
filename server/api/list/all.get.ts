import { getAllListService } from "~/server/services/listService"

export default defineEventHandler(async (event) => {
    const result = await getAllListService()
    return result
})
