import { req } from "@/lib/mitsuki-request-lib/request-bus"
import type {
    AddOneMusicToListRequest,
    CreateListRequest,
    MusicList,
    MusicListWithNotData
} from "@/types"

export const addOneMusicToListService = async (
    data: AddOneMusicToListRequest
) => {
    const info = await req.post("/api/list/add", data)
    const result = await info.json()
    return result
}

export const createListService = async (data: CreateListRequest) => {
    const info = await req.post("/api/list/create", data)
    const result = await info.json<{ id: string }>()
    return result
}

export const getListsByNameService = async (name: string) => {
    const info = await req.get(`/api/list/name?name=${name}`)
    const result = await info.json<Array<MusicList>>()
    return result
}

export const getListByIdService = async (id: string) => {
    const info = await req.get(`/api/list/id?id=${id}`)
    const result = await info.json<MusicList>()
    return result
}

export const getRandomListService = async (limit: number) => {
    const info = await req.get(`/api/list/random?limit=${limit}`)
    const result = await info.json<Array<MusicListWithNotData>>()
    return result
}

export const getAllListService = async () => {
    const info = await req.get("/api/list/all")
    const result = await info.json<Array<MusicListWithNotData>>()
    return result
}

export const deleteMusicListService = async (
    userId: string,
    listId: string
) => {
    const info = await req.delete(
        `/api/list/data?userId=${userId}&listId=${listId}`
    )
    const result = await info.json()
    return result
}
