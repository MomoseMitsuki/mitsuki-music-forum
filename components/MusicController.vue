<script setup lang="ts">
import { storeToRefs } from "pinia"
import { usePlaySettingStore, useUiStatusStore } from "@/stores"
import { formatTime, formatSingers } from "@/utils/format"
import { debounce,isInList } from "@/utils/utils"
import emptyLoveSvg from "~/assets/icons/emptyLove.svg"
import fullLoveSvg from "~/assets/icons/fullLove.svg"
const playSettingStore = usePlaySettingStore()
const uiStatusStore = useUiStatusStore()
const { $default, $love, isLoad, volume, playMode, currentPlayIndex, isPlay } =
    storeToRefs(playSettingStore)
const { isShowLyric } = storeToRefs(uiStatusStore)
// VO Views Object
const views = reactive({
    infoName:
        $default.value.length === 0
            ? "--"
            : $default.value[currentPlayIndex.value].name,
    infoSinger:
        $default.value.length === 0
            ? "--"
            : formatSingers($default.value[currentPlayIndex.value].singer),
    avater:
        $default.value.length === 0
            ? ""
            : $default.value[currentPlayIndex.value].avater,
    duration: 0,
    currentTime: 0
})

const isDrag = ref(false)
const isShowVolumeBar = ref(false)
const isShowList = ref(false)
const isShowController = ref(false)
let audio: HTMLAudioElement
const listBtn = useTemplateRef("listBtn")
watch(
    () => volume.value,
    () => {
        if (isLoad.value) {
            audio.volume = volume.value
        }
    }
)

watch(
    () => {
        if ($default.value.length === 0) return
        return $default.value[currentPlayIndex.value].id
    }, // if the id changed, we change the music
    () => {
        if ($default.value.length === 0) {
            playSettingStore.audio.currentTime = 0
            playSettingStore.audio.pause()
            views.currentTime = 0
            views.infoName = "--"
            views.infoSinger = "--"
            views.duration = 0
            isShowLyric.value = false
            return
        }
        if ($default.value[currentPlayIndex.value].name === views.infoName)
            return
        const { path, name, singer, avater } =
            $default.value[currentPlayIndex.value]
        const checkMusic = debounce(() => {
            playSettingStore.audio.src = path
            playSettingStore.audio.currentTime = 0
            playSettingStore.audio.addEventListener(
                "canplaythrough",
                () => {
                    // to make sure the audio has already loaded
                    playSettingStore.audio.play()
                },
                { once: true }
            )
        })
        checkMusic()
        views.infoName = name
        views.infoSinger = formatSingers(singer)
        views.avater = avater
    }
)
watch(
    () => isShowController.value,
    () => {
        if (isShowController.value === true) return
        isShowVolumeBar.value = false
        isShowList.value = false
        isShowLyric.value = false
    }
)
onBeforeMount(() => {
    audio = new Audio()
    playSettingStore.audio = audio
    $default.value.length === 0
        ? ""
        : (audio.src = $default.value[currentPlayIndex.value].path)
    audio.onloadedmetadata = () => {
        isLoad.value = true
        views.duration = audio.duration
        audio.volume = volume.value
    }
    audio.ontimeupdate = () => {
        if ($default.value.length === 0) {
            views.currentTime = 0
        }
        if (!isDrag.value) {
            views.currentTime = audio.currentTime
        }
    }
    audio.onended = endedMusic
    audio.onplay = () => (isPlay.value = true)
    audio.onpause = () => (isPlay.value = false)
})
onMounted(() => {
    // get the playList Button's position
    uiStatusStore.listEle = listBtn.value as HTMLDivElement
})
/**
 * @param {MouseEvent} e    push in a mouse event object.
 * @description
 * This is an event listener function that captures the horizontal position of the mouse in real-time
 * when the mouse button is pressed,
 * specifically determining the position on the music progress bar.
 * It calculates the relative percentage and assigns it to the variable currentTime.
 */
const dragMusicBar = (e: MouseEvent) => {
    if (!isLoad.value || $default.value.length === 0) return
    const ptr = document.createElement("style")
    ptr.innerHTML = `* {cursor:pointer !important;}`
    document.head.appendChild(ptr)
    isDrag.value = true
    const el = e.currentTarget as HTMLDivElement
    const left = el.getBoundingClientRect().left
    let mouseX: number
    let progressPercent: number
    const handleMouse = (e: MouseEvent) => {
        mouseX = e.clientX > left ? e.clientX : left
        mouseX = mouseX < left + 600 ? mouseX : left + 600
        progressPercent = (mouseX - left) / 6
        views.currentTime = (progressPercent * views.duration) / 100
    }
    const moveMouse = (me: MouseEvent) => {
        handleMouse(me)
    }
    const releaseMouse = (re: MouseEvent) => {
        handleMouse(re)
        audio.currentTime = (progressPercent / 100) * views.duration
        window.removeEventListener("mousemove", moveMouse)
        window.removeEventListener("mouseup", releaseMouse)
        isDrag.value = false
        ptr.remove()
    }
    window.addEventListener("mousemove", moveMouse)
    window.addEventListener("mouseup", releaseMouse)
}
/**
 * @param {MouseEvent} e    push in a mouse event object.
 * @description
 * This is a volume progress bar event listener player that is triggered when the mouse enters.
 * during this time, you can drag the progress bar to control the volume in real time.
 */
const dragVolumeBar = (e: MouseEvent) => {
    const ptr = document.createElement("style")
    ptr.innerHTML = `* {cursor:pointer !important;}`
    document.head.appendChild(ptr)
    const el = e.currentTarget as HTMLDivElement
    const top = el.getBoundingClientRect().top
    let mouseY: number
    const handleMouse = (e: MouseEvent) => {
        mouseY = e.clientY > top ? e.clientY : top
        mouseY = mouseY < top + 120 ? mouseY : top + 120
        playSettingStore.setVolume(1 - (mouseY - top) / 120)
    }
    const moveMouse = (e: MouseEvent) => {
        handleMouse(e)
    }
    const releaseMouse = (e: MouseEvent) => {
        handleMouse(e)
        window.removeEventListener("mousemove", moveMouse)
        window.removeEventListener("mouseup", releaseMouse)
        ptr.remove()
    }
    window.addEventListener("mousemove", moveMouse)
    window.addEventListener("mouseup", releaseMouse)
}
/**
 * @description
 * check if the audio is loaded. Then, observe whether the music is in a paused state.
 * If it is paused, play it; if it is playing, pause it. Also, update the isPlay state accordingly.
 */
const togglePlay = () => {
    if (!isLoad.value || $default.value.length === 0) return
    if (audio.paused) {
        playSettingStore.audio.play()
        isPlay.value = true
    } else {
        playSettingStore.audio.pause()
        isPlay.value = false
    }
}

let _orgVolume = 0
const closeVolume = () => {
    if (volume.value === 0) {
        playSettingStore.setVolume(_orgVolume)
    } else {
        _orgVolume = volume.value
        playSettingStore.setVolume(0)
    }
}

let _timer: NodeJS.Timeout
const closeVolumeBar = () => {
    clearTimeout(_timer)
    _timer = setTimeout(() => {
        isShowVolumeBar.value = false
    }, 500)
}
const showVolumeBar = () => {
    clearTimeout(_timer)
    isShowVolumeBar.value = true
}
const defaultPlay = (len:number) => {
    if (currentPlayIndex.value === len - 1) {
            playSettingStore.audio.currentTime = 0
    } else {
        currentPlayIndex.value++
    }
}
const randomPlay = (len:number) => {
    const org = currentPlayIndex.value
    while (org === currentPlayIndex.value) {
        currentPlayIndex.value = Math.floor(Math.random() * (len - 1)) + 1
    }
}
const loopListPlay = (len:number) => {
    if (currentPlayIndex.value === len - 1) {
        currentPlayIndex.value = 0
    } else {
        currentPlayIndex.value++
    }
}
const loopMusicPlay = (len:number) => {
    queueMicrotask(() => {
        playSettingStore.audio.currentTime = 0
        playSettingStore.audio.play()
    })
}
const playModeArray = [defaultPlay,randomPlay,loopListPlay,loopMusicPlay]
const endedMusic = () => {
    const len = $default.value.length
    if (len === 0) return
    else if (len === 1) {
        playSettingStore.audio.currentTime = 0
        return
    }
    playModeArray[playMode.value](len)
}

const prevMusic = () => {
    if (playMode.value === 3 || playMode.value === 1) {
        endedMusic()
        return
    }
    if (currentPlayIndex.value === 0) {
        currentPlayIndex.value = $default.value.length - 1
    } else {
        currentPlayIndex.value--
    }
}
const beforeEnter = (e: Element) => {
    const el = e as HTMLElement
    el.style.transform = `translateY(100%)`
}
const enter = (e: Element, done: () => void) => {
    const el = e as HTMLElement
    requestAnimationFrame(() => {
        el.addEventListener("transitionend", done, { once: true })
        el.style.transform = `translateY(0%)`
    })
}
const afterEnter = (e: Element) => {
    const el = e as HTMLElement
    el.style.transform = `translateY(0%)`
}
const beforeLeave = (e: Element) => {
    const el = e as HTMLElement
    el.style.transform = `translateY(0%)`
}
const leave = (e: Element, done: () => void) => {
    const el = e as HTMLElement
    el.style.transform = `translateY(100%)`
    el.addEventListener("transitionend", done, { once: true })
}
const afterLeave = (e: Element) => {
    const el = e as HTMLElement
    el.style.transform = `translateY(100%)`
}
</script>

<template>
    <div
        class="controller__container"
        :class="{ controller__container_disappear: !isShowController }"
    >
        <!-- show music controller-->
        <div
            class="controller__show"
            @click="isShowController = !isShowController"
        >
            <svg
                class="icon"
                :class="{ controller__show_disappear: !isShowController }"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M992.01127 607.7c-7.4 0-14.9-2.6-20.9-7.8l-417-360.8c-24-21-60.3-21-84.3 0l-0.1 0.1L52.91127 599.9c-13.4 11.6-33.6 10.1-45.1-3.3-11.6-13.4-10.1-33.6 3.3-45.1l416.7-360.6c23.3-20.4 53.2-31.6 84.2-31.6s60.9 11.2 84.2 31.6l416.7 360.6c13.4 11.6 14.8 31.8 3.3 45.1-6.3 7.4-15.2 11.1-24.2 11.1z"
                ></path>
                <path
                    d="M992.01127 864.7c-7.4 0-14.9-2.6-20.9-7.8l-417-360.8c-24-21-60.3-21-84.3 0l-0.1 0.1L52.91127 856.9c-13.4 11.6-33.6 10.1-45.1-3.3-11.6-13.4-10.1-33.6 3.3-45.1l416.7-360.6c23.3-20.4 53.2-31.6 84.2-31.6s60.9 11.2 84.2 31.6l416.7 360.6c13.4 11.6 14.8 31.8 3.3 45.1-6.3 7.4-15.2 11.1-24.2 11.1z"
                ></path>
            </svg>
        </div>
        <!-- music avater -->
        <div class="controller__avater-container">
            <img :src="views.avater" v-if="$default.length !== 0" />
            <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                v-else
            >
                <path
                    d="M945.96623 240.45909a511.920513 511.920513 0 0 0-867.951442 543.062838 511.920513 511.920513 0 0 0 867.951442-543.062838zM194.931976 825.697535s-30.133907-18.388802-64.18285-72.843383c-34.108261-54.454581-39.506264-92.952427-39.506264-92.952426l264.917382-100.129992s-0.771143 28.591621 10.202819 46.268598c11.033281 17.617658 36.658966 28.591621 36.658966 28.591621l-208.090053 191.065582z m369.85219-229.444791a99.358848 99.358848 0 1 1-105.409357-168.465151 99.358848 99.358848 0 0 1 105.409357 168.465151z m122.611785-125.10317s0.771143-28.650939-10.262138-46.327917c-11.0926-17.676977-36.599647-28.591621-36.599648-28.591621l208.030735-191.006263s30.193226 18.270164 64.242169 72.724745 39.446946 92.952427 39.446945 92.952427l-264.858063 100.248629z"
                    fill="#707070"
                    p-id="4868"
                ></path>
                <path
                    d="M511.990509 511.96085m-34.820085 0a34.820086 34.820086 0 1 0 69.640171 0 34.820086 34.820086 0 1 0-69.640171 0Z"
                ></path>
            </svg>
        </div>
        <!-- music info -->
        <div class="controller__info">
            <ClientOnly>
                <!-- Q: 为什么 ClientOnly 包裹的元素在render函数重新执行的时候不会执行updated生命周期函数-->
                <div class="info__name" v-marquee="views.infoName"></div>
                <div class="info__singers" v-marquee="views.infoSinger"></div>
            </ClientOnly>
        </div>
        <!-- last music button -->
        <svg
            class="medium-icon"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            @click="prevMusic"
        >
            <path
                d="M512 40.96a471.04 471.04 0 1 0 471.04 471.04A471.04 471.04 0 0 0 512 40.96z m0 901.12a430.08 430.08 0 1 1 430.08-430.08 430.08 430.08 0 0 1-430.08 430.08z"
            ></path>
            <path
                d="M389.12 389.12h40.96v327.68h-40.96zM389.12 307.2h40.96v40.96h-40.96z"
            ></path>
            <path
                d="M409.6 512l286.72 204.8V307.2z m61.44 0l184.32-122.88v245.76z"
            ></path>
        </svg>
        <!-- playing button-->
        <svg
            v-if="!isPlay"
            @click="togglePlay"
            class="medium-icon"
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
        <!-- pause button -->
        <svg
            v-else
            @click="togglePlay"
            class="medium-icon"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M512 1024C228.266667 1024 0 795.733333 0 512S228.266667 0 512 0s512 228.266667 512 512-228.266667 512-512 512z m0-42.666667c260.266667 0 469.333333-209.066667 469.333333-469.333333S772.266667 42.666667 512 42.666667 42.666667 251.733333 42.666667 512s209.066667 469.333333 469.333333 469.333333z m-106.666667-682.666666c12.8 0 21.333333 8.533333 21.333334 21.333333v384c0 12.8-8.533333 21.333333-21.333334 21.333333s-21.333333-8.533333-21.333333-21.333333V320c0-12.8 8.533333-21.333333 21.333333-21.333333z m213.333334 0c12.8 0 21.333333 8.533333 21.333333 21.333333v384c0 12.8-8.533333 21.333333-21.333333 21.333333s-21.333333-8.533333-21.333334-21.333333V320c0-12.8 8.533333-21.333333 21.333334-21.333333z"
            ></path>
        </svg>
        <!-- next music button -->
        <svg
            @click="endedMusic"
            class="medium-icon"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M40.96 512A471.04 471.04 0 1 0 512 40.96 471.04 471.04 0 0 0 40.96 512z m40.96 0a430.08 430.08 0 1 1 430.08 430.08A430.08 430.08 0 0 1 81.92 512z"
            ></path>
            <path
                d="M593.92 389.12h40.96v327.68h-40.96zM593.92 307.2h40.96v40.96h-40.96z"
            ></path>
            <path
                d="M327.68 307.2v409.6l286.72-204.8z m40.96 327.68V389.12l184.32 122.88z"
            ></path>
        </svg>
        <!-- isLove button -->
        <img
            :src="
                $default.length === 0 &&
                isInList($default[currentPlayIndex],$love)
                    ? emptyLoveSvg
                    : fullLoveSvg
            "
            style="margin: 0 18px"
            class="mini-icon"
        />
        <!-- music progress bar -->
        <div class="controller__progress" @mousedown="dragMusicBar($event)">
            <div
                class="progress__full"
                :style="{
                    width: `${(views.currentTime / (views.duration === 0 ? 1 : views.duration)) * 100 + 14 / 6}%`
                }"
            >
                <div class="progress__dot"></div>
            </div>
        </div>
        <!-- currentTime / duration -->
        <div class="controller__time">
            {{ formatTime(views.currentTime) }}
            /
            {{ formatTime(views.duration) }}
        </div>
        <!-- playback mode -->
        <div
            style="margin-left: 8px; margin-top: 6px"
            @click="playSettingStore.changePlayMode"
        >
            <svg
                v-if="playMode === 0"
                class="mini-icon"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M569.6 448H44.8c-25.6 0-44.8 19.2-44.8 44.8v44.8c0 25.6 19.2 44.8 44.8 44.8H576c25.6 0 44.8-19.2 44.8-44.8v-44.8c-6.4-25.6-25.6-44.8-51.2-44.8z m0 332.8H44.8c-25.6 0-44.8 19.2-44.8 44.8v44.8c0 25.6 19.2 44.8 44.8 44.8H576c25.6 0 44.8-19.2 44.8-44.8v-44.8c-6.4-25.6-25.6-44.8-51.2-44.8zM44.8 243.2H576c25.6 0 44.8-19.2 44.8-44.8v-44.8c0-25.6-19.2-44.8-44.8-44.8H44.8c-25.6 0-44.8 19.2-44.8 44.8v44.8c0 25.6 19.2 44.8 44.8 44.8z m684.8-134.4c-25.6 0-44.8 19.2-38.4 44.8v716.8c0 25.6 19.2 44.8 44.8 44.8h32c12.8 0 32-6.4 38.4-25.6l217.6-236.8c0-25.6-19.2-44.8-44.8-44.8h-166.4V153.6c0-25.6-19.2-44.8-44.8-44.8h-38.4z"
                ></path>
            </svg>
            <svg
                v-else-if="playMode === 1"
                class="mini-icon"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M753.564731 337.471035c-45.8697 0-160.259984 113.849978-243.789399 194.548928C383.134027 654.383848 263.508509 773.284865 167.764911 773.284865l-58.892295 0c-24.068162 0-43.581588-19.526729-43.581588-43.581588s19.513426-43.581588 43.581588-43.581588l58.892295 0c60.504002 0 183.002964-121.68134 281.432741-216.784348 119.79641-115.744117 223.254713-219.029482 304.368102-219.029482l56.209186 0-59.641355-57.828057c-17.033955-16.993023-17.060561-42.902112-0.057305-59.927881 17.002232-17.030885 44.596707-17.064654 61.631686-0.065492l134.207631 133.874033c8.192589 8.172123 12.794397 19.238157 12.794397 30.803563 0 11.564383-4.601808 22.604834-12.794397 30.776957L811.706943 461.72599c-8.505721 8.486278-19.646456 12.522198-30.78719 12.522198-11.166317 0-22.333658-4.676509-30.844495-13.199627-17.003256-17.025769-16.975627-45.432749 0.057305-62.425771l59.641355-61.151755L753.564731 337.471035zM811.706943 561.66105c-17.034978-16.999163-44.629453-16.972557-61.631686 0.058328-17.003256 17.024745-16.975627 46.257533 0.057305 63.250556l59.641355 61.150732-56.209186 0c-35.793204 0-95.590102-52.946886-154.87637-108.373243-17.576307-16.435321-45.161572-16.3422-61.594847 1.226944-16.444531 17.568121-15.523555 46.393633 2.053776 62.823837 90.322122 84.458577 151.246703 131.484613 214.417441 131.484613l56.209186 0-59.641355 57.824987c-17.033955 16.993023-17.060561 43.736107-0.057305 60.761875 8.511861 8.523117 19.678178 12.369725 30.844495 12.369725 11.140735 0 22.281469-4.453429 30.78719-12.939707L945.914574 757.311055c8.192589-8.173147 12.794397-19.315928 12.794397-30.881334 0-11.564383-4.601808-22.682605-12.794397-30.855752L811.706943 561.66105zM108.871593 337.471035l58.892295 0c45.932122 0 114.40154 58.455343 168.915108 107.942431 8.352225 7.576559 18.832927 12.140505 29.29214 12.140505 11.852956 0 23.673166-4.394077 32.270984-13.857613 16.182564-17.807574 14.859429-46.823422-2.958378-62.998823-85.247546-77.381391-156.561755-130.388652-227.519854-130.388652l-58.892295 0c-24.068162 0-43.581588 19.526729-43.581588 43.581588S84.804455 337.471035 108.871593 337.471035z"
                ></path>
            </svg>
            <svg
                v-else-if="playMode === 2"
                class="mini-icon"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M507.008 122.752a42.666667 42.666667 0 0 0-30.165333 72.832l17.749333 17.749333H383.317333A298.666667 298.666667 0 0 0 232.533333 769.834667a42.666667 42.666667 0 1 0 44.672-72.149334q-23.808-13.909333-44.714666-34.816Q169.984 600.32 169.984 512q0-88.362667 62.506667-150.869333Q294.954667 298.666667 383.317333 298.666667H597.333333a42.666667 42.666667 0 0 0 30.336-12.586667 42.666667 42.666667 0 0 0 0-60.330667l-12.373333-12.373333h25.301333L639.317333 213.333333h-24.064l-78.08-78.08a42.666667 42.666667 0 0 0-30.165333-12.501333zM937.984 512c0-110.506667-59.946667-206.933333-149.12-258.56a42.666667 42.666667 0 1 0-39.424 75.264q21.589333 13.269333 40.746667 32.426667Q852.650667 423.68 852.650667 512q0 88.362667-62.464 150.869333Q727.68 725.333333 639.317333 725.333333h-209.066666a42.666667 42.666667 0 0 0-33.621334 12.373334l-0.512 0.512a42.666667 42.666667 0 0 0 3.370667 62.677333l87.637333 87.637333a42.666667 42.666667 0 0 0 60.373334-60.330666l-17.536-17.493334h109.354666a298.666667 298.666667 0 0 0 298.666667-298.709333z"
                ></path>
            </svg>
            <svg
                v-else-if="playMode === 3"
                class="mini-icon"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M507.008 122.752a42.666667 42.666667 0 0 0-30.165333 72.832l17.749333 17.749333H383.317333A298.666667 298.666667 0 0 0 232.533333 769.834667a42.666667 42.666667 0 1 0 44.672-72.149334q-23.808-13.909333-44.714666-34.816Q169.984 600.32 169.984 512q0-88.362667 62.506667-150.869333Q294.954667 298.666667 383.317333 298.666667H597.333333a42.666667 42.666667 0 0 0 30.336-12.586667 42.666667 42.666667 0 0 0 0-60.330667l-12.373333-12.373333h25.301333L639.317333 213.333333h-24.064l-78.08-78.08a42.666667 42.666667 0 0 0-30.165333-12.501333zM937.984 512c0-110.506667-59.946667-206.933333-149.12-258.56a42.666667 42.666667 0 1 0-39.424 75.264q21.589333 13.269333 40.746667 32.426667Q852.650667 423.68 852.650667 512q0 88.362667-62.464 150.869333Q727.68 725.333333 639.317333 725.333333h-209.066666a42.666667 42.666667 0 0 0-33.621334 12.373334l-0.512 0.512a42.666667 42.666667 0 0 0 3.370667 62.677333l87.637333 87.637333a42.666667 42.666667 0 0 0 60.373334-60.330666l-17.536-17.493334h109.354666a298.666667 298.666667 0 0 0 298.666667-298.709333z"
                ></path>
                <path
                    d="M469.333333 597.333333v-170.666666a42.666667 42.666667 0 1 1 85.333334 0v170.666666a42.666667 42.666667 0 0 1-85.333334 0z"
                ></path>
            </svg>
        </div>
        <!-- volume progress bar -->
        <div class="controller__controlVolume">
            <!-- volume button -->
            <div
                @click="closeVolume"
                @mouseenter="showVolumeBar"
                @mouseleave="closeVolumeBar"
            >
                <svg
                    v-if="volume === 0"
                    class="mini-icon"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M469.333333 106.666667v810.666666a21.333333 21.333333 0 0 1-36.42 15.086667L225.833333 725.333333H53.333333a53.393333 53.393333 0 0 1-53.333333-53.333333V352a53.393333 53.393333 0 0 1 53.333333-53.333333h172.5l207.08-207.086667A21.333333 21.333333 0 0 1 469.333333 106.666667z m548.42 612.42a21.333333 21.333333 0 0 0 0-30.173334L840.833333 512l176.92-176.913333a21.333333 21.333333 0 1 0-30.173333-30.173334L810.666667 481.833333 633.753333 304.913333a21.333333 21.333333 0 0 0-30.173333 30.173334L780.5 512l-176.92 176.913333a21.333333 21.333333 0 0 0 30.173333 30.173334L810.666667 542.166667l176.913333 176.92a21.333333 21.333333 0 0 0 30.173333 0z"
                    ></path>
                </svg>
                <svg
                    v-else-if="volume < 0.33"
                    class="mini-icon"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M469.333333 106.666667v810.666666a21.333333 21.333333 0 0 1-36.42 15.086667L225.833333 725.333333H53.333333a53.393333 53.393333 0 0 1-53.333333-53.333333V352a53.393333 53.393333 0 0 1 53.333333-53.333333h172.5l207.08-207.086667A21.333333 21.333333 0 0 1 469.333333 106.666667z m176.753334 299.726666a21.333333 21.333333 0 0 0-33.486667 26.433334 127.366667 127.366667 0 0 1 0 158.346666 21.333333 21.333333 0 0 0 33.493333 26.433334 170.733333 170.733333 0 0 0 0-211.213334z"
                    ></path>
                </svg>
                <svg
                    v-else-if="volume < 0.66"
                    class="mini-icon"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M469.333333 106.666667v810.666666a21.333333 21.333333 0 0 1-36.42 15.086667L225.833333 725.333333H53.333333a53.393333 53.393333 0 0 1-53.333333-53.333333V352a53.393333 53.393333 0 0 1 53.333333-53.333333h172.5l207.08-207.086667A21.333333 21.333333 0 0 1 469.333333 106.666667z m146.793334 296.2a21.333333 21.333333 0 0 0-3.526667 29.96 127.366667 127.366667 0 0 1 0 158.346666 21.333333 21.333333 0 0 0 33.493333 26.433334 170.733333 170.733333 0 0 0 0-211.213334 21.333333 21.333333 0 0 0-29.966666-3.526666z m212.213333-19.3A339.393333 339.393333 0 0 0 753.333333 270.666667a346.585333 346.585333 0 0 0-22.046666-20.213334 21.333333 21.333333 0 1 0-27.446667 32.666667c6.666667 5.586667 13.146667 11.553333 19.333333 17.726667C779.6 357.22 810.666667 432.22 810.666667 512s-31.066667 154.78-87.48 211.186667c-6.173333 6.173333-12.666667 12.14-19.333334 17.726666a21.333333 21.333333 0 1 0 27.446667 32.666667 346.585333 346.585333 0 0 0 22.046667-20.213333 341.706667 341.706667 0 0 0 74.98-369.793334z"
                    ></path>
                </svg>
                <svg
                    v-else
                    class="mini-icon"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M469.333333 106.666667v810.666666a21.333333 21.333333 0 0 1-36.42 15.086667L225.833333 725.333333H53.333333a53.393333 53.393333 0 0 1-53.333333-53.333333V352a53.393333 53.393333 0 0 1 53.333333-53.333333h172.5l207.08-207.086667A21.333333 21.333333 0 0 1 469.333333 106.666667z m146.793334 296.2a21.333333 21.333333 0 0 0-3.526667 29.96 127.366667 127.366667 0 0 1 0 158.346666 21.333333 21.333333 0 0 0 33.493333 26.433334 170.733333 170.733333 0 0 0 0-211.213334 21.333333 21.333333 0 0 0-29.966666-3.526666zM853.333333 512a340.32 340.32 0 0 0-100-241.333333 346.585333 346.585333 0 0 0-22.046666-20.213334 21.333333 21.333333 0 1 0-27.446667 32.666667c6.666667 5.586667 13.146667 11.553333 19.333333 17.726667C779.6 357.22 810.666667 432.22 810.666667 512s-31.066667 154.78-87.48 211.186667c-6.173333 6.173333-12.666667 12.14-19.333334 17.726666a21.333333 21.333333 0 1 0 27.446667 32.666667 346.585333 346.585333 0 0 0 22.046667-20.213333 340.32 340.32 0 0 0 100-241.333334z m133.173334-192.666667a508.806667 508.806667 0 0 0-112.466667-169.386666 518.346667 518.346667 0 0 0-57.533333-49.653334 21.333333 21.333333 0 0 0-25.42 34.273334 474.246667 474.246667 0 0 1 52.78 45.553333c182.993333 182.993333 182.993333 480.74 0 663.733333a474.853333 474.853333 0 0 1-52.78 45.553334 21.333333 21.333333 0 0 0 25.413333 34.273333 519.026667 519.026667 0 0 0 57.54-49.653333 512.546667 512.546667 0 0 0 112.466667-554.666667z"
                    ></path>
                </svg>
            </div>
            <!-- volume bar -->
            <div
                class="controller__volumeBar"
                v-show="isShowVolumeBar"
                @mouseenter="showVolumeBar"
                @mouseleave="closeVolumeBar"
            >
                <div class="volumeBar__bar" @mousedown="dragVolumeBar($event)">
                    <div
                        class="volumeBar__emptyBar"
                        :style="{ height: `${100 - volume * 100}%` }"
                    ></div>
                    <div class="volumeBar__dot"></div>
                </div>
                {{ Math.floor(volume * 100) }}
            </div>
        </div>
        <!-- show music lyric -->
        <div
            class="controller__lyric"
            @click="
                () => {
                    if ($default.length !== 0) isShowLyric = !isShowLyric
                }
            "
        >
            词
        </div>
        <!-- show play list-->
        <div
            class="controller__playbackQueue"
            @click="isShowList = !isShowList"
            ref="listBtn"
        >
            <svg
                class="mini-icon"
                viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M426.666667 874.666667a21.333333 21.333333 0 0 1-21.333334 21.333333H64a21.333333 21.333333 0 0 1 0-42.666667h341.333333a21.333333 21.333333 0 0 1 21.333334 21.333334zM64 128h896a21.333333 21.333333 0 0 0 0-42.666667H64a21.333333 21.333333 0 0 0 0 42.666667z m0 384h597.333333a21.333333 21.333333 0 0 0 0-42.666667H64a21.333333 21.333333 0 0 0 0 42.666667z m896 341.333333h-85.333333a21.333333 21.333333 0 0 0 0 42.666667h85.333333a21.333333 21.333333 0 0 0 0-42.666667z m-90.053333-369.22c16.733333 17.42 23.806667 41.146667 26.533333 53.733334a21.333333 21.333333 0 1 0 41.706667-9.026667c-4.5-20.773333-14.666667-50.513333-37.466667-74.266667-11.04-11.493333-23.64-20.093333-37.493333-25.606666-10.306667-7.126667-19.44-16.58-27.153334-28.133334-19.64-29.393333-24.373333-64.04-25.446666-82.08A21.333333 21.333333 0 0 0 768 320v479.586667c-1.413333-1.02-2.846667-2-4.326667-3.006667-27.64-18.433333-64-28.58-102.34-28.58s-74.666667 10.146667-102.34 28.58c-14.253333 9.5-25.56 20.746667-33.613333 33.44-8.88 14-13.38 29.013333-13.38 44.666667s4.5 30.666667 13.38 44.666666c8.053333 12.666667 19.333333 23.94 33.613333 33.44C586.666667 971.186667 622.98 981.333333 661.333333 981.333333s74.666667-10.146667 102.34-28.58c14.253333-9.5 25.56-20.746667 33.613334-33.44 8.88-14 13.38-29.013333 13.38-44.666666V438a140.893333 140.893333 0 0 0 30.966666 27.82A21.18 21.18 0 0 0 846 468c8.706667 3.226667 16.766667 8.666667 23.946667 16.113333z"
                ></path>
            </svg>
        </div>
    </div>
    <Transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
    >
        <MusicLyric
            v-if="isShowLyric"
            style="transition: transform 0.5s ease"
            class="transition__lyric"
        />
    </Transition>

    <PlayList v-if="isShowList" />
</template>

<style scoped lang="scss">
$iconMedLen: 40px;
$iconMiniLen: 25px;
.transition__lyric {
    @include useTheme {
        color: getVar("orgTextColor");
        background-color: getVar("orgBgColor");
    }
    position: fixed;
    z-index: 112;
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
        z-index: 111;
    }
}
.mini-icon {
    @extend %iconBase;
    width: $iconMiniLen;
    height: $iconMiniLen;
    margin: 0 10px;
}
.medium-icon {
    @extend %iconBase;
    width: $iconMedLen;
    height: $iconMedLen;
}
.controller__container {
    @extend %themeStyle;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 115;
    left: 0;
    bottom: 1px;
    width: 100%;
    height: $controllerHeight;
    border-radius: 8px;
    border: 2px solid #aaa;
    cursor: default;
    user-select: none;
    transition: transform 0.5s ease;
    &.controller__container_disappear {
        transform: translateY($controllerHeight);
    }
    .controller__show {
        @include useTheme {
            background-color: getVar("bgColor");
        }
        position: absolute;
        top: -11px;
        width: 50px;
        height: 12px;
        border-radius: 6px;
        cursor: pointer;
        .icon {
            @include useTheme {
                fill: getVar("textColor");
            }
            display: block;
            width: 12px;
            height: 12px;
            margin: 0 auto 7px auto;
            transition: transform 0.25s linear;
            transform: rotateZ(180deg);
            &.controller__show_disappear {
                transform: rotateZ(0);
            }
        }
    }
    .controller__avater-container {
        position: relative;
        width: 50px;
        height: 50px;
        margin: 0 25px;
        border-radius: 3px;
        overflow: hidden;
        img {
            width: inherit;
            height: inherit;
            border-radius: inherit;
            object-fit: cover;
        }
        svg {
            margin-top: 5px;
            width: 40px;
            height: 40px;
            @include useTheme {
                fill: getVar("textColor");
            }
        }
    }
    .controller__info {
        width: 150px;
        overflow: hidden;
        white-space: nowrap;
        font-family: "等线";
        line-height: 20px;
        margin: 0 20px;
        .info__name {
            font-weight: bold;
            font-size: 20px;
            margin-top: 5px;
        }
        .info__singers {
            font-family: "黑体";
            font-size: 15px;
            margin-top: 1px;
        }
    }
    .controller__progress {
        display: flex;
        align-items: center;
        width: 600px;
        height: 12px;
        margin: 0 20px;
        border-radius: 6px;
        background-color: #ccc;
        cursor: pointer;
        .progress__full {
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            height: 12px;
            border-radius: 6px;
            @include useTheme {
                background-color: getVar("fullBarColor");
            }
            .progress__dot {
                width: 14px;
                min-width: 14px;
                height: 14px;
                border: 1px solid #2c2c2c;
                border-radius: 7px;
                background-color: white;
                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }
    .controller__time {
        margin: 0 12px;
        white-space: nowrap;
    }
    .controller__controlVolume {
        position: relative;
        margin: 6px 8px 0 8px;
        .controller__volumeBar {
            @extend %themeStyle;
            @include useTheme {
                background-color: getVar("orgBgColor");
            }
            position: absolute;
            bottom: 42px;
            z-index: 116;
            width: 45px;
            height: 180px;
            border: 1px #ccc solid;
            border-radius: 8px;
            box-shadow: 0 0 12px 2px #1c1c1c;
            text-align: center;
            .volumeBar__bar {
                width: 8px;
                height: 120px;
                margin: 18px auto 10px auto;
                border-radius: 4px;
                @include useTheme {
                    background-color: getVar("fullBarColor");
                }
                .volumeBar__emptyBar {
                    width: inherit;
                    border-radius: inherit;
                    background-color: #ccc;
                }
                .volumeBar__dot {
                    width: 12px;
                    height: 12px;
                    min-width: 12px;
                    min-height: 12px;
                    transform: translateY(-4px);
                    margin-left: -2px;
                    background-color: #fff;
                    border: 1px solid #111;
                    border-radius: 6px;
                    &:hover {
                        cursor: pointer;
                        transform: scale(1.2) translateY(-4px);
                    }
                }
            }
        }
    }
    .controller__lyric {
        margin: 0 12px;
        font-size: 20px;
        cursor: pointer;
        transition: transform 0.3s ease;
        &:hover {
            transform: scale(1.1);
            @include useTheme {
                color: getVar("fullBarColor");
            }
        }
    }
    .controller__playbackQueue {
        margin: 10px 8px 0 8px;
    }
}
.lyric__containner_leave {
    transform: translateY(100%);
}
</style>
