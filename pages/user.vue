<script setup lang="ts">
import UserCard from "~/components/UserCard.vue"
import TrackList from "~/components/TrackList.vue"
const route = useRoute()
const userStore = useUserStore()
const isShowLists = ref(false)
const isInputListName = ref(false)
const nameInput = useTemplateRef("nameInput")
const inputValue = ref("")
const showLists = () => {
    // todo: show the user's playlists
    isShowLists.value = !isShowLists.value
}
const addList = () => {
    isInputListName.value = true
}
const cur_item = ref("个人主页")
</script>

<template>
    <div class="usercard__containner">
        <div class="containner__Info">
            <img src="/users/auth.jpg" alt="user avater" class="user__avater" />
            <div class="user__name">百濑美月</div>
            <div class="user__level">Lv. 21</div>
            <div class="user__signature">这个人很懒,什么都没有留下</div>
            <div class="containner__list">
                <div
                    class="list__item"
                    :class="{ list__item_selected: cur_item === '个人主页' }"
                    @click="cur_item = '个人主页'"
                >
                    <svg
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M535.6 511.8c95.1-10.5 172.1-87.5 182.6-182.6C732 204 634.4 98.2 512 98.2c-114.6 0-207.5 92.8-207.5 207.4v0.1c0 122.4 105.9 219.9 231.1 206.1zM512 572.4c-138.5 0-415 79.4-415 237.1v88.9c0 16.4 13.3 29.6 29.6 29.6h770.7c16.4 0 29.6-13.3 29.6-29.6v-88.9C927 651.9 650.5 572.4 512 572.4z"
                        ></path>
                    </svg>
                    个人主页
                </div>
                <div
                    class="list__item"
                    :class="{ list__item_selected: cur_item === '收藏歌曲' }"
                    @click="cur_item = '收藏歌曲'"
                >
                    <svg
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M729.068827 119.55798c-94.686523 0-176.905082 48.314379-217.069851 118.640074-40.163745-70.325695-122.382305-118.640074-217.044268-118.640074-143.767358 0-229.665727 123.660414-229.665727 243.219417 0 283.128359 415.870616 527.841803 433.576883 538.126031 4.062526 2.363837 8.584516 3.538593 13.132088 3.538593 4.547573 0 9.070586-1.174756 13.132088-3.538593 17.706267-10.283204 433.576883-254.997672 433.576883-538.126031C958.708971 243.218394 872.811626 119.55798 729.068827 119.55798z"
                        ></path>
                    </svg>
                    收藏歌曲
                </div>
                <div
                    class="list__item"
                    :class="{ list__item_selected: cur_item === '我的歌单' }"
                    @click="showLists"
                >
                    <svg
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M878.813519 539.563395H317.719608c-15.461511 0-28.105271-12.535384-28.105271-28.03302 0-15.497636 12.643759-28.105271 28.105271-28.105271h561.093911c15.461511 0 28.033021 12.643759 28.03302 28.105271-0.036125 15.497636-12.571509 28.033021-28.03302 28.03302z m0-224.444789H317.719608c-15.461511 0-28.105271-12.535384-28.105271-28.033021 0-15.497636 12.643759-28.033021 28.105271-28.03302h561.093911a28.033021 28.033021 0 0 1 28.03302 28.03302c-0.036125 15.497636-12.571509 28.033021-28.03302 28.033021zM149.413109 764.008185c-15.497636 0-28.105271-12.535384-28.10527-28.105271 0-15.461511 12.643759-28.033021 28.10527-28.033021 15.497636 0 28.033021 12.535384 28.033021 28.033021-0.036125 15.569886-12.571509 28.105271-28.033021 28.105271z m0-224.44479c-15.497636 0-28.105271-12.535384-28.10527-28.03302 0-15.497636 12.643759-28.105271 28.10527-28.105271 15.497636 0 28.033021 12.643759 28.033021 28.105271-0.036125 15.497636-12.571509 28.033021-28.033021 28.03302z m0-224.444789c-15.497636 0-28.105271-12.535384-28.10527-28.033021 0-15.497636 12.643759-28.033021 28.10527-28.03302 15.497636 0 28.033021 12.535384 28.033021 28.03302-0.036125 15.497636-12.571509 28.033021-28.033021 28.033021z m168.306499 392.751287h561.093911a28.033021 28.033021 0 0 1 28.03302 28.033021c0 15.569886-12.535384 28.105271-28.03302 28.105271H317.719608c-15.461511 0-28.105271-12.535384-28.105271-28.105271 0-15.461511 12.607634-28.033021 28.105271-28.033021z"
                        ></path>
                    </svg>
                    我的歌单
                    <svg
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        style="
                            margin: 0 -60px 0 40px;
                            width: 20px;
                            transition: 0.1s ease;
                        "
                        :style="{
                            transform: isShowLists
                                ? 'rotateZ(90deg)'
                                : 'rotateZ(0deg)'
                        }"
                    >
                        <path
                            d="M390.869333 134.869333a42.666667 42.666667 0 0 0-60.330666 60.330667L647.338667 512l-316.8 316.8a42.666667 42.666667 0 1 0 60.330666 60.330667l346.965334-346.965334a42.666667 42.666667 0 0 0 0-60.330666L390.869333 134.826667z"
                        ></path>
                    </svg>
                </div>
                <div
                    class="list__item"
                    v-for="(item, index) in userStore.$lists"
                >
                    <svg
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        style="transform: scale(90%)"
                    >
                        <path
                            d="M874.002 607.63v138.03c0 27.553-22.314 49.892-49.891 49.892H271.147c-27.541 0-49.892-22.339-49.892-49.892V288.327c0-27.577 22.352-49.892 49.892-49.892h153.841l118.493 89.796h280.63c27.576 0 49.891 22.339 49.891 49.892v88.14"
                            fill="#ffffff"
                            p-id="12303"
                        ></path>
                        <path
                            d="M514.796 702.613c-13.775 0-24.946-11.157-24.946-24.945V421.973c0-13.789 11.17-24.946 24.946-24.946 13.776 0 24.946 11.158 24.946 24.946v255.695c0 13.788-11.17 24.945-24.946 24.945z"
                            fill="#213847"
                            p-id="12304"
                        ></path>
                        <path
                            d="M642.645 574.766H386.948c-13.776 0-24.946-11.157-24.946-24.946 0-13.787 11.17-24.944 24.946-24.944h255.696c13.776 0 24.945 11.157 24.945 24.944 0.001 13.788-11.168 24.946-24.944 24.946z"
                            fill="#213847"
                            p-id="12305"
                        ></path>
                        <path
                            d="M871.518 555.643v51.987"
                            fill="#2AADD8"
                            p-id="12306"
                        ></path>
                        <path
                            d="M168.879 503.681c-13.776 0-24.946-11.159-24.946-24.946v-35.373c0-13.788 11.17-24.946 24.946-24.946 13.776 0 24.946 11.158 24.946 24.946v35.373c0 13.787-11.17 24.946-24.946 24.946z"
                            fill="#213847"
                            p-id="12307"
                        ></path>
                        <path
                            d="M809.153 815.504H218.771c-41.268 0-74.838-33.57-74.838-74.838V552.743c0-13.788 11.17-24.946 24.946-24.946 13.776 0 24.946 11.158 24.946 24.946v187.923c0 13.765 11.194 24.946 24.946 24.946h590.382c13.752 0 24.945-11.182 24.945-24.946V358.17c0-13.764-11.193-24.946-24.945-24.946H491.105a25.055 25.055 0 0 1-13.326-3.849l-112.39-70.989H218.771c-13.752 0-24.946 11.182-24.946 24.946v87.311c0 13.789-11.17 24.946-24.946 24.946-13.776 0-24.946-11.157-24.946-24.946v-87.311c0-41.268 33.57-74.837 74.838-74.837h153.841c4.714 0 9.331 1.339 13.326 3.849l112.39 70.989h310.826c41.269 0 74.837 33.57 74.837 74.838v382.496c-0.001 41.267-33.569 74.837-74.838 74.837z"
                        ></path>
                    </svg>
                    {{ item.name }}
                </div>
                <div
                    class="list__item"
                    v-if="isInputListName"
                    style="transform: scale(90%)"
                >
                    <svg
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        style="transform: scale(90%)"
                    >
                        <path
                            d="M877.704533 0H146.295467A146.295467 146.295467 0 0 0 0 146.295467v731.409066A146.295467 146.295467 0 0 0 146.295467 1024h731.409066A146.295467 146.295467 0 0 0 1024 877.704533V146.295467A146.295467 146.295467 0 0 0 877.704533 0M731.477333 651.9808a167.424 167.424 0 0 0-85.333333-23.005867c-87.552 0-158.481067 65.536-158.481067 146.295467 0 80.759467 70.929067 146.295467 158.481067 146.295467 87.517867 0 158.446933-65.536 158.446933-146.295467 0-2.798933-0.068267-5.5296-0.238933-8.2944 0.170667-1.365333 0.238933-2.833067 0.238933-4.266667V458.752l103.0144-87.586133A36.590933 36.590933 0 0 0 860.16 315.460267l-128.7168 109.499733v227.0208z m146.261334-578.833067c40.3456 0 73.147733 32.802133 73.147733 73.147734v731.409066a73.216 73.216 0 0 1-73.147733 73.147734H146.295467a73.216 73.216 0 0 1-73.147734-73.147734V146.295467c0-40.3456 32.802133-73.147733 73.147734-73.147734h731.409066zM304.810667 219.4432a36.5568 36.5568 0 1 0 0 73.1136h365.704533a36.5568 36.5568 0 1 0 0-73.1136H304.776533z m0 243.780267a36.5568 36.5568 0 1 0 0 73.147733H597.333333a36.590933 36.590933 0 0 0 0-73.147733H304.776533z m0 243.8144a36.5568 36.5568 0 1 0 0 73.147733h48.7424a36.5568 36.5568 0 1 0 0-73.147733H304.810667z m341.333333-4.9152c47.035733 0 85.333333 32.802133 85.333333 73.147733 0 40.311467-38.2976 73.147733-85.333333 73.147733-47.069867 0-85.333333-32.836267-85.333333-73.147733 0-40.3456 38.263467-73.147733 85.333333-73.147733"
                        ></path>
                    </svg>
                    <input
                        type="text"
                        class="item__input"
                        spellcheck="false"
                        ref="nameInput"
                        v-model="inputValue"
                        placeholder="请输入歌单名"
                    />
                </div>
                <div
                    class="list__item"
                    v-if="isShowLists"
                    style="transform: scale(90%)"
                    @click="addList"
                >
                    <svg
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M544.256 480.256h307.2a32.256 32.256 0 0 1 0 64h-307.2v307.2a32.256 32.256 0 0 1-64 0v-307.2h-307.2a32.256 32.256 0 1 1 0-64h307.2v-307.2a32.256 32.256 0 1 1 64 0z"
                        ></path>
                    </svg>
                    新增歌单
                </div>
            </div>
        </div>
        <div style="margin-left: 50px; width: 71%">
            <UserCard v-if="cur_item === '个人主页'" />
            <TrackList :type="cur_item" v-else-if="cur_item === '收藏歌曲'" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.usercard__containner {
    @extend %themeStyle;
    display: flex;
    margin: $navHeight + 30px auto;
    padding: 20px 0 20px 20px;
    width: 70%;
    height: 700px;
    border-radius: 20px;
    .containner__Info {
        width: 25%;
        text-align: center;
        font-size: 20px;
        .user__avater {
            display: block;
            margin: 30px auto;
            width: 200px;
            border-radius: 100px;
        }
        .user__name {
            margin: 10px;
            font-weight: bold;
            letter-spacing: 3px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            user-select: none;
        }
        .user__level {
            margin: 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            user-select: none;
        }
        .user__signature {
            width: 50%;
            margin: auto;
            font-size: 15px;
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
                margin: 0 5px;
                border-radius: 10px;
                height: 50px;
                line-height: 50px;
                letter-spacing: 2px;
                font-size: 15px;
                overflow: hidden;
                cursor: pointer;
                font-family: "等线";
                margin: 3px 0;
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
                .item__input {
                    all: unset;
                    width: 70px;
                    height: auto;
                    background: none;
                    border: none;
                    outline: none;
                    margin-left: 10px;
                    padding: 0;
                    text-align: start;
                    color: getVar("orgTextColor");
                }
            }
        }
    }
}
</style>
