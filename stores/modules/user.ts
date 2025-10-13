import { defineStore } from "pinia"
import type { MusicList } from "~/types"

export const useUserStore = defineStore("userStore", () => {
    const user = {
        id:'',
        avater: '',
        email: '',
        name: '未登录',
    }
    const $lists = reactive<Array<MusicList>>([])
    return {
        user,
        $lists
    }
})
