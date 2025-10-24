<script setup lang="ts">
import Artplayer from "artplayer"
import Indicator from "@/assets/icons/indicator.svg"
import State from "@/assets/icons/state.svg"
import { getVideoService, getRandomVideoService } from "~/apis/video"

const route = useRoute()
const { data } = await useAsyncData(
    () => `video-${route.params.id}`,
    () => getVideoService(route.params.id as string),
    {
        default: () => ({ id: "", name: "", singer: [], avater: "", url: "" })
    }
)
const random = await useAsyncData(
    () => `video-random-${route.params.id}`,
    () => getRandomVideoService(route.params.id as string, 5),
    {
        default: () => []
    }
)
const randomData = random.data
const playSettingStore = usePlaySettingStore()
const { isPlay } = storeToRefs(playSettingStore)
const video = useTemplateRef("videoRef")
let player: Artplayer | undefined

const stopPlayer = () => {
    if (player) {
        player.pause()
    }
}
const initArtPlayer = async (url: string) => {
    await nextTick
    if (player) {
        player.url = url
        return
    }
    player = new Artplayer({
        container: video.value as HTMLDivElement,
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
        lang: "zh-cn",
        icons: {
            state: `<img width="150" height="150" src="${State}">`,
            indicator: `<img width="16" height="16" src="${Indicator}">`
        }
    })
    player.on("play", () => {
        if (isPlay.value) {
            playSettingStore.audio.pause()
        }
    })
    playSettingStore.audio.addEventListener("play", stopPlayer)
}
onMounted(() => {
    playSettingStore.audio.pause()
    initArtPlayer(data.value.url)
})

onBeforeUnmount(() => {
    if (player) {
        player.destroy()
        player = void 0
        playSettingStore.audio.removeEventListener("play", stopPlayer)
    }
})
</script>

<template>
    <div class="video__containner">
        <div ref="videoRef" class="containner__video"></div>
        <div class="random__title">
            <span>其他MV:</span>
            <a href="javascript:void(0)" @click="random.refresh()">换一批</a>
        </div>
        <div class="random__containner">
            <VideoView
                v-for="video in randomData"
                :name="video.name"
                :singer="video.singer"
                :video="video.video!"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
.video__containner {
    @extend %themeStyle;
    margin: $navHeight + 30px auto 80px auto;
    padding: 80px 140px;
    width: 1280px;
    height: auto;
    border-radius: 30px;
    font-family: "等线";
    .containner__video {
        display: block;
        margin: auto;
        width: 1000px;
        aspect-ratio: 16/9;
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
    .random__title {
        display: flex;
        justify-content: space-between;
        align-items: end;
        margin-top: 50px;
        font-size: 25px;
        font-weight: bolder;
        letter-spacing: 2px;
        a {
            font-size: 14px;
            @include useTheme {
                color: getVar("textColor");
            }
        }
    }
    .random__containner {
        margin-top: 25px;
        display: flex;
    }
}
</style>
