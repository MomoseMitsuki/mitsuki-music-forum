import { getListByIdService } from "~/server/services/listService"

export default defineEventHandler(async (event) => {
    const { id } = await getQuery<{ id: string }>(event)
    const result = await getListByIdService(id)
    return result
})
