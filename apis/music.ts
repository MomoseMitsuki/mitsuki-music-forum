import { req } from "@/lib/mitsuki-request-lib/request-bus"
import type { AddMusicRequest, Music } from "@/types"

export const addMusicService = async (
    data: AddMusicRequest | Array<AddMusicRequest>
) => {
    const info = await req.post("/api/music/add", data)
    const result = await info.json()
    return result
}

export const getMusicByNameService = async (name: string) => {
    const info = await req.get(`/api/music/name?name=${name}`)
    const result = await info.json<Array<Music>>()
    return result
}

export const getRandomMusicService = async (limit: number) => {
    const info = await req.get(`/api/music/random?limit=${limit}`)
    const result = await info.json<Array<Music>>()
    return result
}

export const getNewMusicService = async (limit: number) => {
    const info = await req.get(`/api/music/new?limit=${limit}`)
    const result = await info.json<Array<Music>>()
    return result
}
