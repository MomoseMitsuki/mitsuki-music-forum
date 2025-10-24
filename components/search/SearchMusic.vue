<script setup lang="ts">
import { getMusicByNameService } from "~/apis/music"

const props = defineProps<{ name: string }>()
const { data } = await useAsyncData(
    () => `search-music-${props.name}`,
    () => getMusicByNameService(props.name)
)
</script>

<template>
    <div class="music__containner" v-if="data!.length !== 0">
        <h1>搜索结果: 共{{ data!.length }}条</h1>
        <MusicView v-for="item in data" :music="item" />
    </div>
    <SearchEmpty v-else />
</template>

<style scoped lang="scss">
.music__containner {
    @extend %themeStyle;
    margin: $navHeight + 40px auto;
    width: 1080px;
    border-radius: 20px;
    padding: 20px;
    h1 {
        display: block;
        margin: 20px;
        font-weight: lighter;
        letter-spacing: 2px;
        margin-bottom: 70px;
    }
}
</style>
