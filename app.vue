<script setup lang="ts">
import MusicController from "~/components/MusicController.vue"
import ForumNav from "~/components/ForumNav.vue"
import { getUserInfoService } from "./apis/user"
const uiStatusStore = useUiStatusStore()
const userStore = useUserStore()
const { data } = await useAsyncData(
    "user",
    () => getUserInfoService("68e8f3a670e1d7faa23026e5"),
    {
        default: () => ({
            ...userStore.user,
            $list: userStore.$lists,
            $default: [],
            $love: []
        })
    }
)
const initUser = () => {
    userStore.$lists = data.value.$list
    userStore.user.id = data.value.id
    userStore.user.name = data.value.name
    userStore.user.avater = data.value.avater
    userStore.user.email = data.value.email
}
initUser()
</script>

<template>
    <div class="main" ref="main">
        <ForumNav />
        <NuxtPage />
        <MusicController />
    </div>
</template>

<style lang="scss">
.main {
    @extend %scrollThemeStyle;
    margin: 0;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        filter: blur(20px);
        z-index: -1;
        @include useTheme {
            background-image: getVar("main");
        }
    }
}
.add-to-playlist {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    will-change: transform;
    transition: 0.6s linear;
    svg {
        display: block;
        width: 20px;
        height: 20px;
        will-change: transform;
        transition: 0.6s cubic-bezier(0.5, -0.5, 1, 1);
        @include useTheme {
            fill: getVar("textColor");
        }
    }
}
</style>
