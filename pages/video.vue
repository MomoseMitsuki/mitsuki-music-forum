<script setup lang="ts">
import { type ShallowRef } from 'vue'
import { formatSingers } from "@/utils/format"
const playSettingStore = usePlaySettingStore()
const { isPlay,currentVideoId,playList } = storeToRefs(playSettingStore)
const path = computed(() => {
    return `/localtest/video/${currentVideoId.value}.mp4`
})
const video = useTemplateRef("videoRef") as Readonly<ShallowRef<HTMLVideoElement>>
const stopVideo = () => {
    if(!video.value.paused){
        video.value.pause()
    }
}
onMounted(() => {
    video.value.onplay = () => {
        if(isPlay){
            playSettingStore.audio.pause()
        }
    }
    video.value.oncanplay = () => {
        video.value.play()
    }
    playSettingStore.audio.addEventListener("play",stopVideo)
})
</script>

<template>
    <div class="video__containner">
        <video
            controls
            @click="video?.play()"
            :src="path"
            ref="videoRef"
            class="containner__video">
        </video>
        <div class="video__info">{{ playList[currentVideoId - 1].name }} - {{ formatSingers(playList[currentVideoId - 1].singer) }}</div>
        <div class="video__singer">歌手: {{ formatSingers(playList[currentVideoId - 1].singer) }}</div>
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
