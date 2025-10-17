import { req } from "@/lib/mitsuki-request-lib/request-bus"
import type { Video, Music } from "@/types"

export const getVideoService = async (id: string) => {
    const info = await req.get(`/api/video/info?id=${id}`)
    const result = await info.json<Video>()
    return result
}

export const getRandomVideoService = async (exclude: string, limit = 5) => {
    const info = await req.get(`/api/video/random?exclude=${exclude}&limit=${limit}`)
    const result = await info.json<Array<Music>>()
    return result
}
