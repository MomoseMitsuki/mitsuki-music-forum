<script setup lang="ts"></script>

<template>
    <div class="loading__background">
        <div class="loading__text">
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.loading__background {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: getVar("selectedColor");
    z-index: 1000;
    .loading__text {
        font-size: 20px;
        font-weight: bold;
        span {
            margin: 0 2px;
            color: getVar("fullBarColor")
        }
    }
}
</style>