<script setup lang="ts">
const router = useRouter()
const searchTypes = ["搜歌曲","搜歌单","搜MV"]
const searchTypes_index = ref(0)
const openGithub = () => {
    if(window){
        window.open("https://github.com/MomoseMitsuki","_blank")
    }
}
const openUser = () => {
    router.push("/user")
}
</script>

<template>
    <nav class="nav__containner">
        <NuxtLink to="/" class="nav__item">首页</NuxtLink>
        <NuxtLink to="/video" class="nav__item">视频</NuxtLink>
        <NuxtLink to="/" class="nav__item">歌单</NuxtLink>
        <div class="search__containner">
            <div 
                class="search__class"
                @click="searchTypes_index = (searchTypes_index + 1) % searchTypes.length"
            >
                {{ searchTypes[searchTypes_index] }}
            </div>
            <input type="text" class="search__input">
            <svg
                class="search__icon"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M446.112323 177.545051c137.567677 0.219798 252.612525 104.59798 266.162424 241.493333 13.562828 136.895354-78.778182 261.818182-213.617777 289.008485-134.852525 27.203232-268.386263-52.156768-308.945455-183.608889s25.018182-272.252121 151.738182-325.779394A267.235556 267.235556 0 0 1 446.112323 177.545051m0-62.060607c-182.794343 0-330.989899 148.195556-330.989899 330.989899s148.195556 330.989899 330.989899 330.989899 330.989899-148.195556 330.989899-330.989899-148.195556-330.989899-330.989899-330.989899z m431.321212 793.341415a30.849293 30.849293 0 0 1-21.94101-9.102223l-157.220202-157.220202c-11.752727-12.179394-11.584646-31.534545 0.37495-43.50707 11.972525-11.972525 31.327677-12.140606 43.494141-0.37495l157.220202 157.220202a31.036768 31.036768 0 0 1 6.723232 33.810101 31.004444 31.004444 0 0 1-28.651313 19.174142z m0 0"
                ></path>
            </svg>
        </div>
        <div class="user__name">
            百濑美月
        </div>
        <img 
            src="/localtest/auth.jpg" 
            class="user__icon"
            @click="openUser"
        >

    </nav>
</template>

<style scoped lang="scss">
.nav__containner {
    @extend %themeStyle;
    display: flex;
    position: fixed;
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
        user-select: none;
        &:hover {
            background-color: getVar("selectedColor") !important;
        }
    }
    .search__containner {
        display: flex;
        align-items: center;
        margin-left: 18%;
        width: 30%;
        height: 32px;
        border-radius: 16px;
        background-color: getVar("orgTextColor");
        box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.5);
        .search__class {
            margin-left: 2px;
            margin-right:10px;
            width: 15%;
            height: 28px;
            text-align: center;
            line-height: 28px;
            border-radius: 14px;
            background-color: getVar("fullBarColor");
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
            font-size: 12px;
            cursor: pointer;
            user-select: none;
            &:active {
                transform: translateY(1px);
                box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
            }
        }
        .search__input {
            all: unset;
            width: 70%;
            height: auto;
            background: none;
            border: none;
            outline: none;
            padding: 0;
            color: getVar("orgBgColor");
        }
        .search__icon {
            @extend %iconBase;
            width: 6%;
            fill:black !important;
        }
    }
    .user__name {
        margin-left: 3%;
        margin-right: 15px;
        font-size:16px;
        user-select: none;
    }
    .user__icon {
        width: 44px;
        height: 44px;
        border-radius: 22px;
        margin:0 10px;
        cursor: pointer;
        user-select: none;
        &:hover {
            transform: scale(1.1);
        }
    }
}
</style>
