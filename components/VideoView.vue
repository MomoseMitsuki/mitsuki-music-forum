<script setup lang="ts">
import { useMusicOper } from "@/composables/useMusicOper"
const router = useRouter()
interface VideoViewProps {
    name: string
    singer: Array<string>
    video: { avater: string; id: string }
}
const props = defineProps<VideoViewProps>()
const { playVideo } = useMusicOper()
</script>

<template>
    <div style="cursor: pointer" @click="playVideo($event, props.video.id)">
        <div
            class="video__item"
            :style="{ backgroundImage: `url(${props.video.avater})` }"
        >
            <div class="video__cover">
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z"
                    ></path>
                    <path
                        d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z"
                    ></path>
                </svg>
            </div>
        </div>
        <div class="random__info">{{ props.name }}</div>
        <div class="random__info" style="font-size: 12px">
            {{ formatSingers(props.singer) }}
        </div>
    </div>
</template>

<style scoped lang="scss">
.video__item {
    width: 180px;
    margin: 10px;
    aspect-ratio: 16/9;
    border-radius: 5px;
    background-size: contain;
    &:hover {
        transition: transform 0.1.5s linear;
        transform: translateY(-8px);
    }
    .video__cover {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        width: inherit;
        aspect-ratio: 16/9;
        background-color: #00000088;
        border-radius: inherit;
        svg {
            display: block;
            width: 60px;
            height: 60px;
            margin: 0;
            fill: #cccccc;
        }
        &:hover {
            opacity: 1;
        }
    }
}
.random__info {
    @extend %themeStyle;
    background-color: transparent !important;
    width: 170px;
    margin: 5px 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: 1px;
    font-size: 17px;
}
</style>
