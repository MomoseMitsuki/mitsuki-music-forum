import { defineStore } from "pinia"
import type { Music,MusicList } from "@/types"

export const usePlaySettingStore = defineStore("playSettingStore", () => {
    // audio setting, In order to manipulate the audio element in other components, we have to place it inside pinia
    let audio: HTMLAudioElement = {} as HTMLAudioElement
    const isLoad = ref(false)
    // volume setting, because the volume needs to be persistently stored, it is placed in Pinia
    const volume = ref(1)
    const setVolume = (vol: number) => {
        if (vol < 0 || vol > 1) return
        volume.value = vol
    }

    // playMode setting
    const playMode = ref(0)
    const changePlayMode = () => {
        playMode.value++
        if (playMode.value > 3) {
            playMode.value -= 4
        }
    }
    // playList setting
    const $default = reactive<Array<Music>>([])
    const $love = reactive<Array<Music>>([])
    const $list = reactive<Array<MusicList>>([])
    const isRenderList = ref(false)
    const isPlay = ref(false)
    const currentPlayIndex = ref(0)
    return {
        audio,
        isLoad,
        volume,
        setVolume,
        playMode,
        changePlayMode,
        $default,
        $love,
        $list,
        isPlay,
        isRenderList,
        currentPlayIndex,
    }
})
