import { req } from "@/lib/mitsuki-request-lib/request-bus"
import type { AddOneMusicToListRequest, MusicList } from "@/types"

export const addOneMusicToListService = async (
    data: AddOneMusicToListRequest
) => {
    const info = await req.post("/api/list/add", data)
    const result = await info.json()
    return result
}

export const getListsByNameService = async (name: string) => {
    const info = await req.get(`/api/list/info?name=${name}`)
    const result = await info.json<Array<MusicList>>()
    return result
}
