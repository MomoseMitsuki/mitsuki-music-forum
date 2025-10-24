<script setup lang="ts">
import emptySearch from "~/assets/stickers/emptySearch.webp"
</script>

<template>
    <div class="empty__containner">
        <img :src="emptySearch" />
        <h1>Not found: 没有搜索结果哦</h1>
    </div>
</template>

<style scoped lang="scss">
$width: 1000px;
.empty__containner {
    @extend %themeStyle;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: $navHeight + 40px auto;
    width: $width;
    height: 700px;
    border-radius: 20px;
    padding: 20px;
    img {
        display: block;
        width: 300px;
    }
    h1 {
        font-weight: lighter;
        margin: 20px;
        letter-spacing: 2px;
    }
}
</style>
