<script setup lang="ts">
import SearchList from "~/components/search/SearchList.vue"
import SearchMusic from "~/components/search/SearchMusic.vue"
import SearchVideo from "~/components/search/SearchVideo.vue"

const route = useRoute()
const ComponentMap: Record<string, Component> = {
    歌单: SearchList,
    歌曲: SearchMusic,
    MV: SearchVideo
}
const routeType = computed(() => {
    const type = route.query.type
    return type ? type.toString() : "歌单"
})
const routeName = computed(() => {
    const name = route.query.name
    return name ? name.toString() : ""
})
</script>

<template>
    <component
        :is="ComponentMap[routeType]"
        :name="routeName"
        :key="routeType + '-' + routeName"
    >
    </component>
</template>

<style scoped lang="scss"></style>
