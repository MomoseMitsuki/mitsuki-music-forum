import { req } from "@/lib/mitsuki-request-lib/request-bus"
import type { AddMusicRequest } from "@/types"

export const addMusicService = async (data:AddMusicRequest | Array<AddMusicRequest>) => {
    const info = await req.post("/api/music/add",data)
    const result = await info.json()
    return result
}



