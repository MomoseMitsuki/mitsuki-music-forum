<script setup lang="ts">
const a = 1
</script>

<template>
    <div class="item">测试test</div>
</template>

<style scoped lang="scss">
.item {
    @include useTheme {
        background: getVar("bgColor");
        color: getVar("textColor");
    }
}
</style>
