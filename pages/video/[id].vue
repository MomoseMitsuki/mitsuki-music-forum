<script setup lang="ts">
import Artplayer from 'artplayer'
import Indicator from '@/assets/icons/indicator.svg'
import State from '@/assets/icons/state.svg'
import { formatSingers } from "@/utils/format"
import { getVideoService } from '~/apis/video'

const route = useRoute()
const { data } = await useAsyncData(
    () => `video-${route.params.id}`,
    () => getVideoService(route.params.id as string),
    {
        default: () => ({ id:"", name:"", singer:[], avater:"", url:""})
    }
)
const playSettingStore = usePlaySettingStore()
const { isPlay } = storeToRefs(playSettingStore)
const video = useTemplateRef("videoRef")
let player:Artplayer | undefined

const stopPlayer = () => {
    if (player) {
        player.pause()
    }
}
const initArtPlayer = async (url:string) => {
    await nextTick
    if (player) {
        player.url = url
        return
    }
    player = new Artplayer({
        container:video.value as HTMLDivElement,
        url,
        volume: 0.5,
        isLive: false,
        muted: false,
        autoplay: true,
        pip: false,
        autoSize: false,
        autoMini: false,
        screenshot: false,
        setting: true,
        loop: true,
        flip: false,
        playbackRate: true,
        aspectRatio: false,
        fullscreen: true,
        autoPlayback: false,
        lang:"zh-cn",
        icons: {
            state: `<img width="150" height="150" src="${State}">`,
            indicator: `<img width="16" height="16" src="${Indicator}">`,
        },
    })
    player.on("play",() => {
        if (isPlay) {
            playSettingStore.audio.pause()
        }
    })
    playSettingStore.audio.addEventListener("play",stopPlayer)
}

onMounted(() => {
    playSettingStore.audio.pause()
    initArtPlayer(data.value.url)
})

onBeforeUnmount(() => {
    if (player) {
        player.destroy()
        player = void 0
        playSettingStore.audio.removeEventListener("play",stopPlayer)
    }
})
</script>

<template>
    <div class="video__containner">
        <client-only>
            <div
                ref="videoRef"
                class="containner__video">
            </div>
        </client-only>
        <div class="video__info">{{ data.name }} - {{ formatSingers(data.singer) }}</div>
        <div class="video__singer">歌手: {{ formatSingers(data.singer) }}</div>
    </div>
</template>

<style scoped lang="scss">
.video__containner {
    @extend %themeStyle;
    margin:$navHeight+30px auto 80px auto;
    padding:80px 140px;
    width: 1280px;
    height: auto;
    border-radius: 30px;
    font-family: "等线";
    .containner__video {
        display: block;
        margin:auto;
        width: 1000px;
        aspect-ratio:16/9;
        border-radius: 10px;
    }
    .video__info {
        margin: 15px 0 8px 0;
        height: 50px;
        line-height: 50px;
        font-weight: 700;
        font-size: 30px;
        cursor: default;
    }
    .video__singer {
        font-size: 15px;
        cursor: default;
    }
}
</style>
