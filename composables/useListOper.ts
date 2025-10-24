import type { MusicList } from "@/types"
import { usePlaySettingStore, useUserStore } from "@/stores"
import { deleteMusicListService } from "~/apis/list"

export const useListOper = () => {
    const playSettingStore = usePlaySettingStore()
    const userStore = useUserStore()
    const { $default } = storeToRefs(playSettingStore)

    const playMusicList = (list: MusicList) => ($default.value = list)

    const addToMyList = (list: MusicList) => {
        const index = userStore.$lists.findIndex((item) => item.id === list.id)
        if (index === -1) {
            userStore.$lists.push(list)
        }
    }

    const deleteToMyList = (list: MusicList) => {
        const index = userStore.$lists.findIndex((item) => item.id === list.id)
        if (index !== -1) {
            userStore.$lists.splice(index, 1)
            // deleteMusicListService(userStore.user.id,list.id)
        }
    }

    return { playMusicList, addToMyList, deleteToMyList }
}
