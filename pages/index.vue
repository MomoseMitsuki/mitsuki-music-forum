<script setup lang="ts">
import VideoView from "~/components/VideoView.vue"
import ListView from "~/components/ListView.vue"
import MusicView from "~/components/MusicView.vue"
import { getRandomVideoService } from "~/apis/video"
import { getRandomMusicService, getNewMusicService } from "~/apis/music"
import { getRandomListService } from "~/apis/list"

import ForumFooter from "~/views/ForumFooter.vue"
const route = useRoute()
const carouselList = useTemplateRef("carousel-list")
const currentIndex = ref(0)
let interval: NodeJS.Timeout | undefined = void 0
const swiperDatas = [
    {
        title: "望月演绎厅",
        content:
            "本站是以 ACG 为主的音乐播放网站，旨在为用户提供 更多的动漫OST 歌曲，本站具有主题切换、歌词滚动、音频可视化以及简约的UI风格，增强用户的交互体验",
        image: "/swiper/00000001.png",
        link: "javascript:void"
    },
    {
        title: "巧克甜恋3 Renpy移植发布",
        content:
            "魔法猫咪汉化组给予的汉化授权，中秋佳节来临之际，白鷺园艺在这里给各位送上新移植游戏的祝福本次给各位带来的第三部移植作品，是白玉老师的著名作品巧克甜恋3，祝大家游玩愉快",
        image: "/swiper/00000002.png",
        link: "https://www.bilibili.com/video/BV1jFxuzvE97/?spm_id_from=333.1387.homepage.video_card.click&vd_source=e3fcb72d723249b9cb11ca4c82d1beca"
    },
    {
        title: "Github开源",
        content:
            "本项目已在github上开源，遵循Apache license开源协议\n地址:https://github.com/MomoseMitsuki/mitsuki-music-forum",
        image: "/swiper/00000003.png",
        link: "https://github.com/MomoseMitsuki/mitsuki-music-forum"
    }
]

const moveTo = (index: number) => {
    if (carouselList.value) {
        currentIndex.value = index
        carouselList.value.style.transition = `transform 0.5s ease-in-out`
        carouselList.value.style.transform = `translateX(-${index}00%)`
    }
}
const initSpiwer = () => {
    const first = carouselList.value!.firstElementChild!.cloneNode(true)
    const last = carouselList.value!.lastElementChild!.cloneNode(true)
    carouselList.value!.appendChild(first)
    carouselList.value!.insertBefore(
        last,
        carouselList.value!.firstElementChild
    )
    ;(last as HTMLDivElement).style.position = "absolute"
    ;(last as HTMLDivElement).style.transform = "translateX(-100%)"
}
const leftNext = () => {
    if (currentIndex.value === 0 && carouselList.value) {
        currentIndex.value = swiperDatas.length - 1
        carouselList.value.style.transition = "none"
        carouselList.value.style.transform = `translateX(-${swiperDatas.length}00%)`
        carouselList.value.clientHeight
        moveTo(swiperDatas.length - 1)
    } else {
        moveTo(currentIndex.value - 1)
    }
}
const rightNext = () => {
    if (currentIndex.value === swiperDatas.length - 1 && carouselList.value) {
        currentIndex.value = 0
        carouselList.value.style.transition = "none"
        carouselList.value.style.transform = `translateX(100%)`
        carouselList.value.clientHeight
        moveTo(0)
    } else {
        moveTo(currentIndex.value + 1)
    }
}

const { data: video } = await useAsyncData(
    () => "index-page-video",
    () => getRandomVideoService("", 10)
)
const { data: music } = await useAsyncData(
    () => "index-page-music",
    () => getRandomMusicService(5)
)
const { data: lists } = await useAsyncData(
    () => "index-page-lists",
    () => getRandomListService(5)
)
const { data: news } = await useAsyncData(
    () => "index-page-news",
    () => getNewMusicService(5)
)
onMounted(() => {
    initSpiwer()
    interval = setInterval(rightNext, 6500)
})
onUnmounted(() => {
    clearInterval(interval)
    interval = void 0
})
</script>

<template>
    <div class="carousel__containner">
        <div class="carousel__list" ref="carousel-list">
            <div class="carousel__item" v-for="item in swiperDatas">
                <a :href="item.link">
                    <img :src="item.image" />
                </a>
                <div class="item__containner">
                    <h1>{{ item.title }}</h1>
                    <p>{{ item.content }}</p>
                </div>
            </div>
        </div>
        <div class="indicator">
            <span
                v-for="i in swiperDatas.length"
                :class="{ active: currentIndex + 1 === i }"
                @click.stop="moveTo(i - 1)"
            ></span>
        </div>
        <div class="next-btn left" @click="leftNext">
            <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M631.168 183.168a42.666667 42.666667 0 0 1 62.826667 57.621333l-2.496 2.709334L423.04 512l268.48 268.501333a42.666667 42.666667 0 0 1 2.496 57.621334l-2.496 2.709333a42.666667 42.666667 0 0 1-57.621333 2.496l-2.709334-2.496-298.666666-298.666667a42.666667 42.666667 0 0 1-2.496-57.621333l2.496-2.709333 298.666666-298.666667z"
                ></path>
            </svg>
        </div>
        <div class="next-btn right" @click="rightNext">
            <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M332.501333 183.168a42.666667 42.666667 0 0 1 57.621334-2.496l2.709333 2.496 298.666667 298.666667a42.666667 42.666667 0 0 1 2.496 57.621333l-2.496 2.709333-298.666667 298.666667a42.666667 42.666667 0 0 1-62.826667-57.621333l2.496-2.709334L600.96 512 332.501333 243.498667a42.666667 42.666667 0 0 1-2.496-57.621334l2.496-2.709333z"
                ></path>
            </svg>
        </div>
    </div>
    <div class="random__video">
        <h2>热门MV推荐:</h2>
        <div class="video__containner">
            <VideoView
                v-for="item in video"
                :name="item.name"
                :singer="item.singer"
                :video="item.video!"
            />
        </div>
    </div>
    <div class="random__list">
        <h2>热门歌单:</h2>
        <div class="list__containner">
            <ListView
                v-for="item in lists"
                :name="item.name"
                :type="item.type"
                :avater="item.avater"
                :id="item.id"
            />
        </div>
    </div>
    <div class="random__music">
        <h2>热门歌曲:</h2>
        <MusicView v-for="item in music" :music="item" />
    </div>
    <div class="random__music">
        <h2>最新歌曲:</h2>
        <MusicView v-for="item in news" :music="item" />
    </div>
    <ForumFooter />
</template>

<style scoped lang="scss">
$carouselWidth: 1080px;
$carouselHeight: 350px;
.carousel__containner {
    margin: $navHeight + 50px auto 0 auto;
    position: relative;
    width: $carouselWidth;
    height: $carouselHeight;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    .carousel__list {
        display: flex;
        width: 100%;
        height: 100%;
        will-change: transform;
        .carousel__item {
            img {
                width: $carouselWidth;
                height: $carouselHeight;
                object-fit: cover;
            }
            .item__containner {
                position: absolute;
                top: 50%;
                transform: translateX(5.5%);
                margin: 0 auto;
                padding: 20px;
                width: 90%;
                height: 45%;
                border-radius: 10px;
                @include useTheme {
                    background-color: getVar("swiperBgColor");
                    color: getVar("orgTextColor");
                }
                h1 {
                    letter-spacing: 2.5px;
                    margin-bottom: 8px;
                    font-weight: bold;
                }
            }
        }
    }
    .indicator {
        position: absolute;
        left: 50%;
        display: flex;
        bottom: 15px;
        transform: translateX(-50%);
        span {
            margin: 0 5px;
            width: 12px;
            height: 12px;
            border: 1px solid #444;
            border-radius: 6px;
            background-color: #fff;
            cursor: pointer;
            &.active {
                width: 20px;
                @include useTheme {
                    background-color: getVar("fullBarColor");
                }
            }
        }
    }
    .next-btn {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        top: 50%;
        border-radius: 50%;
        transform: translateY(-50%);
        svg {
            display: block;
            width: 30px;
            fill: #fff;
        }
        &:hover {
            background-color: #44444460;
        }
        &.left {
            left: 0;
        }
        &.right {
            right: 0;
        }
    }
}
h2 {
    font-weight: lighter;
    margin: 20px;
    letter-spacing: 2px;
}
.random__video {
    @extend %themeStyle;
    margin: 50px auto;
    width: $carouselWidth;
    height: 480px;
    border-radius: 20px;
    padding: 20px;
    .video__containner {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        margin: auto;
    }
}
.random__list {
    @extend %themeStyle;
    margin: 40px auto;
    width: $carouselWidth;
    height: 360px;
    border-radius: 20px;
    padding: 20px;
    .list__containner {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
.random__music {
    @extend %themeStyle;
    margin: 40px auto;
    width: $carouselWidth;
    min-height: 360px;
    border-radius: 20px;
    padding: 20px;
}
</style>
