<script setup lang="ts">
import MusicController from "~/components/MusicController.vue"
import ForumNav from "~/components/ForumNav.vue"
</script>

<template>
    <div class="main">
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
</style>
