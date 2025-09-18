<script setup lang="ts">
import UserCard from '~/components/UserCard.vue';
import TrackList from '~/components/TrackList.vue';
const isShowLists = ref(false)
const showLists = () => {
    // todo: show the user's playlists
    cur_item.value = "我的歌单"
    console.log("展示用户的歌单")
}
const cur_item = ref("个人主页")
</script>

<template>
    <div class="usercard__containner">
        <div class="containner__Info">
            <img src="/localtest/auth.jpg" alt="user avater" class="user__avater">
            <div class="user__name">百濑美月</div>
            <div class="user__level">Lv. 21</div>
            <div class="user__signature">这个人很懒,什么都没有留下</div>
            <div class="containner__list">
                <div 
                    class="list__item" 
                    :class="{list__item_selected: cur_item === '个人主页'}"
                    @click="cur_item = '个人主页'"
                >
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path d="M535.6 511.8c95.1-10.5 172.1-87.5 182.6-182.6C732 204 634.4 98.2 512 98.2c-114.6 0-207.5 92.8-207.5 207.4v0.1c0 122.4 105.9 219.9 231.1 206.1zM512 572.4c-138.5 0-415 79.4-415 237.1v88.9c0 16.4 13.3 29.6 29.6 29.6h770.7c16.4 0 29.6-13.3 29.6-29.6v-88.9C927 651.9 650.5 572.4 512 572.4z"></path>
                    </svg>
                    个人主页
                </div>
                <div 
                    class="list__item" 
                    :class="{list__item_selected: cur_item === '收藏歌曲'}"
                    @click="cur_item = '收藏歌曲'"
                >
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path d="M729.068827 119.55798c-94.686523 0-176.905082 48.314379-217.069851 118.640074-40.163745-70.325695-122.382305-118.640074-217.044268-118.640074-143.767358 0-229.665727 123.660414-229.665727 243.219417 0 283.128359 415.870616 527.841803 433.576883 538.126031 4.062526 2.363837 8.584516 3.538593 13.132088 3.538593 4.547573 0 9.070586-1.174756 13.132088-3.538593 17.706267-10.283204 433.576883-254.997672 433.576883-538.126031C958.708971 243.218394 872.811626 119.55798 729.068827 119.55798z"></path>
                    </svg>
                    收藏歌曲
                </div>
                <div 
                    class="list__item"
                    :class="{list__item_selected: cur_item === '我的歌单'}"
                    @click="showLists"
                >
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path d="M878.813519 539.563395H317.719608c-15.461511 0-28.105271-12.535384-28.105271-28.03302 0-15.497636 12.643759-28.105271 28.105271-28.105271h561.093911c15.461511 0 28.033021 12.643759 28.03302 28.105271-0.036125 15.497636-12.571509 28.033021-28.03302 28.03302z m0-224.444789H317.719608c-15.461511 0-28.105271-12.535384-28.105271-28.033021 0-15.497636 12.643759-28.033021 28.105271-28.03302h561.093911a28.033021 28.033021 0 0 1 28.03302 28.03302c-0.036125 15.497636-12.571509 28.033021-28.03302 28.033021zM149.413109 764.008185c-15.497636 0-28.105271-12.535384-28.10527-28.105271 0-15.461511 12.643759-28.033021 28.10527-28.033021 15.497636 0 28.033021 12.535384 28.033021 28.033021-0.036125 15.569886-12.571509 28.105271-28.033021 28.105271z m0-224.44479c-15.497636 0-28.105271-12.535384-28.10527-28.03302 0-15.497636 12.643759-28.105271 28.10527-28.105271 15.497636 0 28.033021 12.643759 28.033021 28.105271-0.036125 15.497636-12.571509 28.033021-28.033021 28.03302z m0-224.444789c-15.497636 0-28.105271-12.535384-28.10527-28.033021 0-15.497636 12.643759-28.033021 28.10527-28.03302 15.497636 0 28.033021 12.535384 28.033021 28.03302-0.036125 15.497636-12.571509 28.033021-28.033021 28.033021z m168.306499 392.751287h561.093911a28.033021 28.033021 0 0 1 28.03302 28.033021c0 15.569886-12.535384 28.105271-28.03302 28.105271H317.719608c-15.461511 0-28.105271-12.535384-28.105271-28.105271 0-15.461511 12.607634-28.033021 28.105271-28.033021z"></path>
                    </svg>
                    我的歌单
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" 
                        style="margin: 0 -60px 0 40px;width: 20px;"
                    >
                        <path d="M390.869333 134.869333a42.666667 42.666667 0 0 0-60.330666 60.330667L647.338667 512l-316.8 316.8a42.666667 42.666667 0 1 0 60.330666 60.330667l346.965334-346.965334a42.666667 42.666667 0 0 0 0-60.330666L390.869333 134.826667z"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div style="margin-left: 50px;width: 71%;">
            <UserCard v-if="cur_item === '个人主页'"/>
            <TrackList :type="cur_item" v-else-if="cur_item === '收藏歌曲'"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.usercard__containner {
    @extend %themeStyle;
    display: flex;
    margin: $navHeight+30px auto;
    padding: 20px 0 20px 20px;
    width: 70%;
    height: 700px;
    border-radius: 20px;
    .containner__Info {
        width: 25%;
        text-align: center;
        font-size:20px;
        .user__avater {
            display: block;
            margin: 30px auto;
            width: 200px;
            border-radius: 100px;
        }
        .user__name {
            margin:10px;
            font-weight:bold;
            letter-spacing: 3px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            user-select: none;
        }
        .user__level {
            margin:10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            user-select: none;
        }
        .user__signature {
            width: 50%;
            margin: auto;
            font-size:15px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            user-select: none;
        }
        .containner__list {
            margin: 20px 0;
            height: 40%;
            user-select: none;
            .list__item {
                display: flex;
                align-items: center;
                justify-content: center;
                margin:0 5px;
                border-radius: 10px;
                height:50px;
                line-height: 50px;
                letter-spacing: 2px;
                font-size: 15px;
                overflow: hidden;
                cursor: pointer;
                font-family: "等线";
                margin:3px 0;
                svg {
                    display: block;
                    @include useTheme {
                        fill: getVar("textColor");
                    }
                    width: 10%;
                    margin-right: 10px;
                }
                &:hover {
                    @include useTheme {
                        background-color: getVar("selectedColor");
                    }
                }
                &.list__item_selected {
                    @include useTheme {
                        background-color: getVar("selectedColor");
                    }
                }
            }
        }
    }
}
</style>
