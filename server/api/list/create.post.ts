import { createListService } from "~/server/services/listService"
import type { CreateListRequest } from "~/types"

export default defineEventHandler(async (event) => {
    const body = await readBody<CreateListRequest>(event)
    const result = await createListService(body)
    return result
})
