import {
    addOneMusicService,
    addManyMusicService
} from "~/server/services/musicService"
import type { AddMusicRequest } from "@/types"

export default defineEventHandler(async (event) => {
    const body = await readBody<AddMusicRequest | Array<AddMusicRequest>>(event)
    let result
    if (Array.isArray(body)) {
        result = await addManyMusicService(body)
    } else {
        result = await addOneMusicService(body)
    }
    return result
})
