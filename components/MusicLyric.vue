<script setup lang="ts">
import { type ShallowRef } from "vue"
import { formatLyric } from "@/utils/format"
import { usePlaySettingStore } from "@/stores"
const playSettingStore = usePlaySettingStore()
const { currentPlayIndex, isPlay } = storeToRefs(playSettingStore)
const views = reactive({
    infoName: playSettingStore.playList[currentPlayIndex.value].name,
    infoSinger: formatSingers(
        playSettingStore.playList[currentPlayIndex.value].singer
    ),
    avater: playSettingStore.playList[currentPlayIndex.value].avater
})
const getLyricService = async (index: number) => {
    const id = playSettingStore.playList[index].id
    if (playSettingStore.playList[index].lyric) {
        const res = await fetch(`/localtest/lyric/${id}.lrc`)
        const data = await res.text()
        isLyric.value = true
        return data
    } else {
        isLyric.value = false
    }
    return ""
}
const lyric = ref<{ time: number; words: string }[]>([
    {
        time: 0,
        words: ""
    }
])
const currentLyricIndex = ref(-1)
const offset = ref(0)
const isInit = ref(false)
const isLyric = ref(true)
let containerHeight: number
let liHeight: number
let maxOffset: number
let dataArray: Uint8Array<ArrayBuffer>
let analyser: AnalyserNode
const containner = useTemplateRef("containnerRef") as Readonly<
    ShallowRef<HTMLDivElement>
>
const ul = useTemplateRef("ulRef") as Readonly<ShallowRef<HTMLUListElement>>
const cvs = useTemplateRef("canvasRef") as Readonly<
    ShallowRef<HTMLCanvasElement>
>
let ctx: CanvasRenderingContext2D
watch(
    () => currentPlayIndex.value,
    async (newValue,oldValue) => {
        if(newValue === -1){
            currentPlayIndex.value = oldValue
        }
        if(playSettingStore.playList[currentPlayIndex.value].name === views.infoName)  return
        const { name, singer, avater } =
            playSettingStore.playList[currentPlayIndex.value]
        const data = await getLyricService(currentPlayIndex.value)
        views.infoName = name
        views.infoSinger = formatSingers(singer)
        views.avater = avater
        document.documentElement.style.setProperty("--bg-img", `url(${avater})`)
        if (isLyric.value)  lyric.value = formatLyric(data)
    }
)
onMounted(() => {
    getLyricService(currentPlayIndex.value).then(
        (res) => {lyric.value = formatLyric(res)}
    )
    document.documentElement.style.setProperty(
        "--bg-img",
        `url(${playSettingStore.playList[currentPlayIndex.value].avater})`
    )
    // calculate the container size for the lyrics section
    // and the maximum offset for the lyrics
    containerHeight = containner.value.clientHeight
    liHeight = ul.value.children[0].clientHeight
    maxOffset = ul.value.clientHeight - containerHeight
    // during music playback, constantly calculate the offset
    // and highlight the corresponding subscripts of the lyrics
    playSettingStore.audio.addEventListener("timeupdate", setOffset)
    setOffset()
    ctx = cvs.value.getContext("2d") as CanvasRenderingContext2D
    initCvs()
    playSettingStore.audio.onplay = () => {
        isPlay.value = true
        if (isInit.value) return
        const audCtx = new AudioContext()
        const source = audCtx.createMediaElementSource(playSettingStore.audio)
        analyser = audCtx.createAnalyser()
        analyser.fftSize = 1024
        dataArray = new Uint8Array(analyser.frequencyBinCount)
        source.connect(analyser)
        analyser.connect(audCtx.destination)
        isInit.value = true
    }
    cvsDraw()
})
/**
 * @description
 *
 */
const findIndex = () => {
    const curTime = playSettingStore.audio.currentTime
    for (let i = 0; i < lyric.value.length; i++) {
        if (curTime < lyric.value[i].time) {
            return i - 1
        }
    }
    return lyric.value.length - 1
}
/**
 * @description
 * adjust the offset of lyrics display based on audio progress
 */
const setOffset = () => {
    if(!isLyric.value) return
    currentLyricIndex.value = findIndex()
    offset.value =
        liHeight * currentLyricIndex.value + liHeight / 2 - containerHeight / 2
    maxOffset = ul.value.clientHeight - containerHeight
    if (offset.value < 0) {
        offset.value = 0
    }
    if (offset.value > maxOffset) {
        offset.value = maxOffset
    }
}
/**
 * @description
 * Initialize the width and height of the canvas
 * and redefine the coordinate system
 */
const initCvs = () => {
    const width = cvs.value.clientWidth
    cvs.value.width = cvs.value.clientWidth
    cvs.value.height = cvs.value.clientWidth
    ctx.translate(width / 2, width / 2)
    ctx.scale(1, -1)
}
/**
 * @description
 * First, clear the canvas,
 * and then visualize the analysis data of the analyzer node
 */
const cvsDraw = () => {
    requestAnimationFrame(cvsDraw)
    if (!isInit.value) return
    const { width, height } = cvs.value
    // clear canvas
    ctx.save()
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, width, height)
    ctx.restore()
    // change the color of the visualization through the theme
    const theme = document.documentElement.getAttribute("data-theme")
    if (theme === "light") {
        ctx.fillStyle = "#ccc"
    } else {
        ctx.fillStyle = "#1c1c1c"
    }
    analyser.getByteFrequencyData(dataArray)
    // because the obtained data is a progressively decreasing array,
    // for aesthetic reasons, we only visualize half of its data
    const len = dataArray.length / 2
    const barWidth = (Math.PI * 2 * 175) / len
    const maxHeight = (height - 350) / 2.5
    for (let i = 0; i < len; i++) {
        const data = dataArray[i]
        const angle = (1 / len) * Math.PI * 2
        ctx.rotate(angle)
        const barHeight = (data / 255) * maxHeight
        ctx.fillRect(-barWidth / 2, 175, barWidth / 2, barHeight)
    }
}
</script>

<template>
    <div class="lryic__background">
        <div class="lryic__containner">
            <div class="containner__info">
                <div class="avater__containner">
                    <!-- audio__visualization -->
                    <canvas
                        class="info__visualization"
                        ref="canvasRef"
                    ></canvas>
                    <!-- music__avatar -->
                    <div class="info__musicAvatar">
                        <img :src="views.avater" class="musicAvater__image" />
                    </div>
                </div>
                <div class="info__containner">
                    <ClientOnly>
                        <!-- music__name -->
                        <div
                            class="info__name"
                            v-marquee="views.infoName"
                        ></div>
                        <!-- music__singers -->
                        <div
                            class="info__singers"
                            v-marquee="views.infoSinger"
                        ></div>
                    </ClientOnly>
                </div>
            </div>
            <div class="lyric__info" ref="containnerRef">
                <!-- music__lyric -->
                <ul :style="`transform:translateY(-${offset}px)`" ref="ulRef" v-if="isLyric">
                    <li
                        v-for="(item, index) in lyric"
                        :class="{
                            lyric__info_active: index === currentLyricIndex
                        }"
                    >
                        {{ item.words }}
                    </li>
                </ul>
                <div class="nolyric__info" v-else>
                    还没有歌词哦
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.lryic__background {
    @include useTheme {
        color: getVar("orgTextColor");
        background-color: getVar("orgBgColor");
    }
    position: fixed;
    z-index: 12;
    top: $navHeight;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    user-select: none;
    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: var(--bg-img);
        background-size: cover;
        background-position: center;
        filter: blur(100px);
        z-index: 11;
    }
    .lryic__containner {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        inset: 0;
        padding-bottom: calc($controllerHeight * 1.5);
        @include useTheme {
            background-color: getVar("lightBgColor");
        }
        z-index: 12;
        .containner__info {
            width: 598px;
            text-align: center;
            margin-left: 250px;
            .avater__containner {
                position: relative;
                top: -10px;
                width: 598px;
                height: 598px;
                .info__visualization {
                    position: absolute;
                    width: 598px;
                    aspect-ratio: 1;
                    inset: 0;
                    animation: reverse-spin 45s linear infinite;
                    @keyframes reverse-spin {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(-360deg);
                        }
                    }
                }
                .info__musicAvatar {
                    position: absolute;
                    inset: 0;
                    width: 598px;
                    aspect-ratio: 1;
                    .musicAvater__image {
                        width: 350px;
                        height: 350px;
                        margin: 124px;
                        border-radius: 175px;
                        border: 8px solid transparent;
                        animation: spin 25s linear infinite;
                        object-fit: cover;
                        @keyframes spin {
                            from {
                                transform: rotate(0deg);
                            }
                            to {
                                transform: rotate(360deg);
                            }
                        }
                    }
                }
            }
            .info__containner {
                width: 350px;
                margin: -30px auto;
                overflow: hidden;
                white-space: nowrap;
                .info__name {
                    font-family: "等线";
                    font-size: 40px;
                    font-weight: bold;
                }
                .info__singers {
                    font-family: "黑体";
                    font-size: 25px;
                    margin: 20px 0;
                }
            }
        }
        .lyric__info {
            margin: 95px 0 50px 80px;
            width: 50vw;
            height: 598px;
            white-space: nowrap;
            overflow: hidden;
            mask-image: linear-gradient(
                to bottom,
                transparent,
                black 15%,
                black 85%,
                transparent
            );
            .nolyric__info {
                margin-left: 100px;
                width: 50vw;
                line-height: 598px;
                height:598px;
                font-size:30px;
                font-weight: bold;
                letter-spacing: 2px;
                color: getVar("fullBarColor");
            }
            ul {
                transition: transform 0.3s ease;
                list-style: none;
                li {
                    height: 50px;
                    font-size: 25px;
                    line-height: 50px;
                    transform: scale(1);
                    transform-origin: left;
                    transition: transform 0.3s ease;
                    &.lyric__info_active {
                        @include useTheme {
                            color: getVar("fullBarColor");
                        }
                        font-weight: bold;
                        transform: scale(1.2);
                    }
                }
            }
        }
    }
}
</style>
