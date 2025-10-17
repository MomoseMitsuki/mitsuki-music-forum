import { addOneMusicToListService } from "~/server/services/listService"
import type { AddOneMusicToListRequest } from "~/types"

export default defineEventHandler(async (event) => {
    const data = await readBody<AddOneMusicToListRequest>(event)
    const result = await addOneMusicToListService(data)
    return result
})
