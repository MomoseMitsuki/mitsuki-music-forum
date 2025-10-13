<script setup lang="ts">
import { getUserInfoService } from '~/apis/user'
import { addMusicService } from '~/apis/music'
import { addOneMusicToListService } from '~/apis/list'
const router = useRouter()
const searchTypes = ["搜歌曲","搜歌单","搜MV"]
const searchTypes_index = ref(0)
const isShowLightTheme = ref(true)
const openUser = () => {
    router.push("/user")
}
const changeTheme = () => {
    const theme = document.documentElement.getAttribute('data-theme')
    if(theme === "light"){
        document.documentElement.setAttribute('data-theme', "dark")
        localStorage.setItem("theme","dark")
    } else {
        document.documentElement.setAttribute('data-theme', "light")
        localStorage.setItem("theme","light")
    }
    isShowLightTheme.value = !isShowLightTheme.value
}
const data = {
    userId: "68e8f3a670e1d7faa23026e5",
    musicId: "68e8b11c1b31406973b8e7bb",
    name: "$love"
}
const musicData = {
    name: "星空鉄道ミルキーウェイ",
    path: "/music/0000002D.mp3",
    avater: "/avater/00000020.webp",
    singer: ['保科めぐみ'],
    duration: 95
}
</script>

<template>
    <nav class="nav__containner">
        <NuxtLink to="/" class="nav__item">首页</NuxtLink>
        <NuxtLink to="/video" class="nav__item">视频</NuxtLink>
        <NuxtLink to="/" class="nav__item">歌单</NuxtLink>
        <div class="search__containner">
            <!-- search type -->
            <div 
                class="search__class"
                @click="searchTypes_index = (searchTypes_index + 1) % searchTypes.length"
            >
                {{ searchTypes[searchTypes_index] }}
            </div>
            <input type="text" spellcheck="false" class="search__input">
            <svg
                class="search__icon"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M446.112323 177.545051c137.567677 0.219798 252.612525 104.59798 266.162424 241.493333 13.562828 136.895354-78.778182 261.818182-213.617777 289.008485-134.852525 27.203232-268.386263-52.156768-308.945455-183.608889s25.018182-272.252121 151.738182-325.779394A267.235556 267.235556 0 0 1 446.112323 177.545051m0-62.060607c-182.794343 0-330.989899 148.195556-330.989899 330.989899s148.195556 330.989899 330.989899 330.989899 330.989899-148.195556 330.989899-330.989899-148.195556-330.989899-330.989899-330.989899z m431.321212 793.341415a30.849293 30.849293 0 0 1-21.94101-9.102223l-157.220202-157.220202c-11.752727-12.179394-11.584646-31.534545 0.37495-43.50707 11.972525-11.972525 31.327677-12.140606 43.494141-0.37495l157.220202 157.220202a31.036768 31.036768 0 0 1 6.723232 33.810101 31.004444 31.004444 0 0 1-28.651313 19.174142z m0 0"
                ></path>
            </svg>
        </div>
        <div class="user__name">
            百濑美月
        </div>
        <img 
            src="/users/auth.jpg" 
            class="user__icon"
            @click="openUser"
        >
        <svg class="theme__icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" 
            @click="changeTheme"
            v-if="isShowLightTheme"
        >
            <path d="M550.4 842.5984V998.4h-76.8v-155.8016a336.3328 336.3328 0 0 0 76.8 0z m222.5152-123.9808l110.1824 110.1568-54.3232 54.3232-110.1568-110.1824a334.7968 334.7968 0 0 0 54.272-54.272z m-521.8304 0a334.7968 334.7968 0 0 0 54.272 54.272l-110.1312 110.208-54.3232-54.3232 110.1824-110.1568zM512 256c141.3888 0 256 114.6112 256 256s-114.6112 256-256 256-256-114.6112-256-256 114.6112-256 256-256z m486.4 217.6v76.8h-155.8016a336.3328 336.3328 0 0 0 0-76.8H998.4z m-816.9984 0a336.3328 336.3328 0 0 0 0 76.8H25.6v-76.8h155.8016z m13.824-332.6976l110.1568 110.1824a334.7968 334.7968 0 0 0-54.272 54.272L140.8768 195.2512l54.3232-54.3232z m633.5488 0l54.3232 54.3232-110.1824 110.1568a334.7968 334.7968 0 0 0-54.272-54.272l110.1312-110.208zM550.4 25.6v155.8016a336.3328 336.3328 0 0 0-76.8 0V25.6h76.8z"></path>
        </svg>
        <svg class="theme__icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
            @click="changeTheme"
            v-else
        >
            <path d="M529.611373 1023.38565c-146.112965 0-270.826063-51.707812-374.344078-155.225827C51.74928 764.641808 0.041469 639.826318 0.041469 493.815745c0-105.053891 29.693595-202.326012 88.978393-292.22593 59.38719-89.797526 137.000103-155.942569 232.83874-198.63991 6.041111-4.607627 12.184613-3.788493 18.225724 2.252618 7.576986 4.607627 9.931996 11.365479 6.860244 20.580733C322.677735 83.736961 310.493122 142.202626 310.493122 201.589815c0 135.464227 48.328885 251.474031 144.986656 348.131801 96.657771 96.657771 212.667574 144.986656 348.131801 144.986656 74.541162 0 139.252721-11.365479 194.032283-34.19883C1003.684974 655.799424 1009.726084 656.618558 1015.767195 662.659669c7.576986 4.607627 9.931996 11.365479 6.860244 20.580733C983.104241 786.758417 918.802249 869.286132 829.721465 930.925939 740.743072 992.565746 640.706375 1023.38565 529.611373 1023.38565z"></path>
        </svg>
        <div @click="addMusicService(musicData)">创建用户</div>
    </nav>
</template>

<style scoped lang="scss">
.nav__containner {
    @extend %themeStyle;
    display: flex;
    position: fixed;
    width: 100%;
    height: $navHeight;
    align-items: center;
    padding-left:15%;
    .nav__item {
        @extend %themeStyle;
        text-decoration: none;
        width: 100px;
        height: $navHeight;
        line-height: $navHeight;
        background-color: transparent !important;
        text-align: center;
        font-size:20px;
        user-select: none;
        &:hover {
            @include useTheme {
                background-color: getVar("selectedColor") !important;
            }
        }
    }
    .search__containner {
        display: flex;
        align-items: center;
        margin-left: 23%;
        width: 23%;
        height: 32px;
        border-radius: 16px;
        background-color: getVar("orgTextColor");
        box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.5);
        .search__class {
            margin-left: 2px;
            margin-right:10px;
            width: 20%;
            height: 28px;
            color:#eeeeee;
            text-align: center;
            line-height: 28px;
            border-radius: 14px;
            @include useTheme {
                background-color: getVar("fullBarColor");
            }
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
            font-size: 12px;
            cursor: pointer;
            user-select: none;
            &:active {
                transform: translateY(1px);
                box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
            }
        }
        .search__input {
            all: unset;
            width: 63%;
            height: auto;
            background: none;
            border: none;
            outline: none;
            padding: 0;
            color: getVar("orgBgColor");
        }
        .search__icon {
            @extend %iconBase;
            width: 25px;
            fill:black !important;
        }
    }
    .user__name {
        margin-left: 3%;
        margin-right: 15px;
        font-size:16px;
        user-select: none;
    }
    .user__icon {
        width: 44px;
        height: 44px;
        border-radius: 22px;
        margin:0 20px;
        cursor: pointer;
        user-select: none;
        &:hover {
            transform: scale(1.1);
        }
    }
    .theme__icon {
        @extend %iconBase;
        margin:0 10px;
        width: 30px;
    }
}
</style>
