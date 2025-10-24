<script setup lang="ts">
import SearchEmpty from "./SearchEmpty.vue"
import { getVideoByNameService } from "~/apis/video"

const props = defineProps<{ name: string }>()
const { data: videos } = await useAsyncData(
    () => `search-video-${props.name}`,
    () => getVideoByNameService(props.name)
)
</script>

<template>
    <div class="video__containner" v-if="videos!.length !== 0">
        <h1>搜索结果: 共{{ videos?.length }}条</h1>
        <div class="grid__containner">
            <VideoView
                v-for="item in videos"
                :name="item.name"
                :singer="item.singer"
                :video="item.video!"
            />
        </div>
    </div>
    <SearchEmpty v-else />
</template>

<style scoped lang="scss">
$width: 1180px;
.video__containner {
    @extend %themeStyle;
    margin: $navHeight + 40px auto;
    width: $width;
    border-radius: 20px;
    padding: 20px;
    .grid__containner {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        margin: auto;
    }
    h1 {
        display: block;
        margin: 20px;
        font-weight: lighter;
        letter-spacing: 2px;
    }
}
</style>
