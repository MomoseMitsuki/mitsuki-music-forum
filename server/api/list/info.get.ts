import { getListsByNameService } from "~/server/services/listService"

export default defineEventHandler(async (event) => {
    const querys = await getQuery<{ name:string }>(event)
    const { name } = querys
    const result = await getListsByNameService(name)
    return result
})