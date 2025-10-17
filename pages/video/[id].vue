<script setup lang="ts">
import Artplayer from "artplayer"
import Indicator from "@/assets/icons/indicator.svg"
import State from "@/assets/icons/state.svg"
import { formatSingers } from "@/utils/format"
import { getVideoService,getRandomVideoService } from "~/apis/video"

const route = useRoute()
const router = useRouter()
const { data } = await useAsyncData(
    () => `video-${route.params.id}`,
    () => getVideoService(route.params.id as string),
    {
        default: () => ({ id: "", name: "", singer: [], avater: "", url: "" })
    }
)
const random = await useAsyncData(
    () => `video-random-${route.params.id}`,
    () =>  getRandomVideoService(route.params.id as string,5),
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
        if (isPlay) {
            playSettingStore.audio.pause()
        }
    })
    playSettingStore.audio.addEventListener("play", stopPlayer)
}
const playVideo = ($event:Event,id:string) => {
    $event.stopPropagation()
    router.push({
        path: `/video/${id}`
    })
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
            <div v-for="item in randomData" @click="playVideo($event,item.video!.id)">
                <div
                    class="video__item"
                    :style="{ backgroundImage: `url(${item.video!.avater})`}"
                    >
                    <div class="video__cover">
                        <svg
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z"
                            ></path>
                            <path
                                d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z"
                            ></path>
                        </svg>
                    </div>
                </div>
                <div class="random__info">{{ item.name }}</div>
                <div class="random__info" style="font-size: 12px;">{{ formatSingers(item.singer) }}</div>
            </div>

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
                color: getVar("textColor")
            }
        }
    }
    .random__containner {
        margin-top:25px;
        display: flex;
        cursor: pointer;
        .video__item {
            width: 180px;
            margin:5px 10px 10px 10px;
            aspect-ratio: 16/9;
            border-radius: 5px;
            background-size: contain;
            .video__cover {
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                width: inherit;
                aspect-ratio: 16/9;
                background-color: #00000088;
                svg {
                    display: block;
                    width: 60px;
                    height: 60px;
                    margin:0;
                    fill: #cccccc;
                }
                &:hover {
                    opacity: 1;
                }
            }
        }
        .random__info {
            width: 170px;
            margin:5px 15px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            letter-spacing: 1px;
            font-size: 17px;
        }
    }
}
</style>
