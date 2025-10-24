<script setup lang="ts">
import { getListsByNameService } from "~/apis/list"

const props = defineProps<{ name: string }>()
const { data: list } = await useAsyncData(
    () => `search-list-${props.name}`,
    () => getListsByNameService(props.name)
)
</script>

<template>
    <div class="lists__containner" v-if="list!.length !== 0">
        <h1>搜索结果: 共{{ list!.length }}条</h1>
        <div class="grid__containner">
            <ListView
                v-for="item in list"
                :id="item.id"
                :avater="item.avater"
                :name="item.name"
                :type="item.type"
            />
        </div>
    </div>
    <SearchEmpty v-else />
</template>

<style scoped lang="scss">
$ContainnerWidth: 1180px;
.lists__containner {
    @extend %themeStyle;
    margin: $navHeight + 40px auto;
    width: $ContainnerWidth;
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
