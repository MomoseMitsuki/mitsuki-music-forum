export const getPlayListService = async () => {
    const result = await $fetch("/api/user/playlist")
    console.log("没有被mock拦截到")
    return result
}