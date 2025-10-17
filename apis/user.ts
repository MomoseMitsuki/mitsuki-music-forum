import { req } from "@/lib/mitsuki-request-lib/request-bus"
import type { Music, Video, MusicList, User } from "@/types/index"

export const getPlayListService = async () => {
    const info = await req.get("/api/user/playlist")
    const result = await info.json<MusicList>()
    return result
}

export const getLoveListService = async () => {
    const result = await req.get("/api/user/lovelist")
    return result
}

export const getUserInfoService = async (id: string) => {
    const info = await req.get(`/api/user/info?id=${id}`)
    const result = await info.json<User>()
    return result
}

export const createUserService = async () => {
    const info = await req.post("/api/user/create", {
        name: "mitsuki",
        password: "2361902570",
        email: "https://github.com/MomoseMitsuki"
    })
    const result = await info.json()
}
