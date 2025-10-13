export default defineNuxtRouteMiddleware((to, from) => {
    const uiStatusStore = useUiStatusStore()
    const { isShowLyric } = storeToRefs(uiStatusStore)
    isShowLyric.value = false
})
