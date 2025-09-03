<script setup lang="ts">
const openGithub = () => {
    if(window){
        window.open("https://github.com/MomoseMitsuki","_blank")
    }
}
</script>

<template>
    <nav class="nav__containner">
        <NuxtLink to="/" class="nav__item">首页</NuxtLink>
        <NuxtLink to="/video" class="nav__item">视频</NuxtLink>
        <NuxtLink to="/" class="nav__item">歌单</NuxtLink>
        <div class="avater__name">
            百濑美月
        </div>
        <img src="/localtest/auth.jpg" class="avatar__icon">
        <div class="github__containner" @click="openGithub">
            <svg 
                class="github__icon" 
                viewBox="0 0 1024 1024" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M855.557 216.855c35.621-66.153-5.089-152.661-5.089-152.661-91.597 0-157.75 61.064-157.75 61.064-35.621-20.355-152.661-20.355-152.661-20.355s-117.04 0-152.661 20.355c0 0-66.153-61.064-157.75-61.064 0 0-40.71 86.508-5.089 152.661 0 0-81.419 76.331-50.887 239.169 28.691 153.018 162.838 193.371 249.346 193.371 0 0-35.621 30.532-30.532 81.419 0 0-50.887 30.532-101.774 10.177s-76.331-71.242-76.331-71.242-50.887-66.153-101.774-40.71c0 0-15.266 15.266 40.71 40.71 0 0 40.71 61.064 55.976 96.685 15.266 35.621 96.685 66.153 178.105 45.798v117.04s0 10.177-20.355 15.266-20.355 15.266-10.177 15.266H723.25c10.177 0 10.177-10.177-10.177-15.266-20.355-5.089-20.355-15.266-20.355-15.266v-117.04s0.447-61.03 0-81.419c-1.119-51.128-35.621-81.419-35.621-81.419 86.508 0 220.655-40.353 249.346-193.371 30.533-162.837-50.886-239.168-50.886-239.168z"></path>
            </svg>
        </div> 
    </nav>
</template>

<style scoped lang="scss">
.nav__containner {
    @extend %themeStyle;
    display: flex;
    width: 100%;
    height: $navHeight;
    align-items: center;
    padding-left:15%;
    .nav__item {
        @extend %themeStyle;
        text-decoration: none;
        width: 100px;
        height: $navHeight;
        line-height: $navHeight;
        background-color: transparent !important;
        text-align: center;
        font-size:20px;
        &:hover {
            background-color: getVar("selectedColor") !important;
        }
    }
    .avater__name {
        margin-left: 55%;
        margin-right: 15px;
        font-size:16px;
    }
    .avatar__icon {
        width: 44px;
        height: 44px;
        border-radius: 22px;
        margin:0 10px;
    }
    .github__containner {
        width: 42px;
        height: 42px;
        border-radius: 21px;
        margin:0 18px;
        background-color: #fff;
        .github__icon {
            width: 40px;
            fill: getVar("orgBgColor");
            margin:5px 0 0 0.2px;
            cursor:pointer;
        }
    }
}
</style>
