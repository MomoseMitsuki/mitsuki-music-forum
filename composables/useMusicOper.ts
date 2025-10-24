import { useUiStatusStore, usePlaySettingStore, useUserStore } from "@/stores"
import type { Music, MusicList } from "@/types"

export const useMusicOper = () => {
    const router = useRouter()
    const uiStatusStore = useUiStatusStore()
    const playSettingStore = usePlaySettingStore()
    const { $default, currentPlayIndex } = storeToRefs(playSettingStore)

    const playVideo = ($event: Event, id: string) => {
        $event.stopPropagation()
        router.push({
            path: `/video/${id}`
        })
    }

    const playMusic = (e: MouseEvent, it: Music) => {
        e.stopPropagation()
        uiStatusStore.jump(e)
        for (let i = 0; i < $default.value.datas.length; i++) {
            if ($default.value.datas[i].id === it.id) {
                // todo: play the music
                currentPlayIndex.value = i
                return
            }
        }
        // add the playlist and play the music
        $default.value.datas.push(it)
        currentPlayIndex.value = $default.value.datas.length - 1
    }

    const addMusicToList = (music: Music, list: MusicList, $event: Event) => {
        $event.stopPropagation()
        const userStore = useUserStore()
        if (list.type === "official" || userStore.user.id === "") return
        list.datas.push(music)
    }

    const deleteMusicToList = (
        music: Music,
        list: MusicList,
        $event: Event
    ) => {
        $event.stopPropagation()
        const userStore = useUserStore()
        if (list.type === "official" || userStore.user.id === "") return
        const index = list.datas.findIndex((item) => item.id === music.id)
        if (index !== -1) {
            list.datas.splice(index, 1)
        }
    }

    return { playMusic, playVideo, addMusicToList, deleteMusicToList }
}
