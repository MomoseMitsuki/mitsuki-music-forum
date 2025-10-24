<script setup lang="ts">
import { getAllListService } from "~/apis/list"
import ListView from "~/components/ListView.vue"
const { data } = await useAsyncData(
    () => "page-index-list",
    () => getAllListService()
)
</script>

<template>
    <div class="list__containner">
        <h1>所有歌单</h1>
        <div class="grid__containner">
            <ListView
                v-for="item in data"
                :id="item.id"
                :avater="item.avater"
                :name="item.name"
                :type="item.type"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
$width: 1080px;
.list__containner {
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
