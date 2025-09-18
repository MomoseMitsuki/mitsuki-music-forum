import { defineStore } from "pinia"

export const useUiStatusStore = defineStore("uiStatusStore", () => {
    const isShowLyric = ref(false)

    return {
        isShowLyric
    }
})
