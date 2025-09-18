<script setup lang="ts">
import { usePlaySettingStore } from "~/stores/index"
import { formatSingers, formatTime } from "#imports"
import { type Music } from "@/types/index"
const playSettingStore = usePlaySettingStore()
const uiStatusStore = useUiStatusStore()
const router = useRouter()
const { currentPlayIndex,currentVideoId } = storeToRefs(playSettingStore)
const { isShowLyric } = storeToRefs(uiStatusStore)
const currentHoverIndex = ref(-1)
const isShowSearch = ref(false)
const searchName = ref("")
const searchMusic = (arr: Array<Music>) => {
    if (searchName.value === "") return arr
    const regx = new RegExp(searchName.value, "i")
    const newArr = playSettingStore.playList.filter((item) => {
        if (regx.test(item.name)) return true
        for (const singer of item.singer) {
            if (regx.test(singer)) return true
        }
        return false
    })
    return newArr
}
const playMusic = (index:number) => {
    if(currentPlayIndex.value === index){
        playSettingStore.audio.currentTime = 0
        playSettingStore.audio.play()
    } else {
        currentPlayIndex.value = index
    }
}
const playVideo = ($event:Event,id:number) => {
    $event.stopPropagation()
    currentVideoId.value = id
    router.push("/video")
    isShowLyric.value = false
}
const deleteAMusic = ($event:Event,index:number) => {
    $event.stopPropagation()
    playSettingStore.playList.splice(index,1)
    if(currentPlayIndex.value > index){
        currentPlayIndex.value--
    } else if(currentPlayIndex.value === index){
        currentPlayIndex.value = -1
    }
}
</script>

<template>
    <div class="list__containner">
        <div class="list__title">播放队列</div>
        <div class="list__info">
            <div>共{{ searchMusic(playSettingStore.playList).length }}首</div>
            <div class="list__search_disappear" v-if="!isShowSearch"></div>
            <input
                type="text"
                placeholder="请输入歌曲名或歌手名"
                v-else
                v-model="searchName"
                spellcheck="false"
            />
            <svg
                class="mini-icon"
                @click="
                    () => {
                        isShowSearch = !isShowSearch
                        searchName = ''
                    }
                "
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M446.112323 177.545051c137.567677 0.219798 252.612525 104.59798 266.162424 241.493333 13.562828 136.895354-78.778182 261.818182-213.617777 289.008485-134.852525 27.203232-268.386263-52.156768-308.945455-183.608889s25.018182-272.252121 151.738182-325.779394A267.235556 267.235556 0 0 1 446.112323 177.545051m0-62.060607c-182.794343 0-330.989899 148.195556-330.989899 330.989899s148.195556 330.989899 330.989899 330.989899 330.989899-148.195556 330.989899-330.989899-148.195556-330.989899-330.989899-330.989899z m431.321212 793.341415a30.849293 30.849293 0 0 1-21.94101-9.102223l-157.220202-157.220202c-11.752727-12.179394-11.584646-31.534545 0.37495-43.50707 11.972525-11.972525 31.327677-12.140606 43.494141-0.37495l157.220202 157.220202a31.036768 31.036768 0 0 1 6.723232 33.810101 31.004444 31.004444 0 0 1-28.651313 19.174142z m0 0"
                ></path>
            </svg>
            <svg
                @click="playSettingStore.playList = []"
                class="mini-icon"
                viewBox="0 0 1150 1150"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M728.4 954.5H293.2c-39.1 0-71-33.6-71.6-75.2l-69-676.1H869l-69 676.1c-0.7 41.6-32.5 75.2-71.6 75.2zM204.1 249.8l64 627.1v1.2c0 16.5 11.3 29.9 25.1 29.9h435.2c13.8 0 25.1-13.4 25.1-29.9l0.1-2.4 63.9-625.9H204.1z"
                ></path>
                <path
                    d="M716.9 243.1H304.7c-27.5 0-49.9-22.4-49.9-49.9v-79.8c0-27.5 22.4-49.9 49.9-49.9h412.2c27.5 0 49.9 22.4 49.9 49.9v79.8c-0.1 27.6-22.4 49.9-49.9 49.9zM304.7 110.2c-1.8 0-3.3 1.5-3.3 3.3v79.8c0 1.8 1.5 3.3 3.3 3.3h412.2c1.8 0 3.3-1.5 3.3-3.3v-79.8c0-1.8-1.5-3.3-3.3-3.3H304.7z"
                ></path>
                <path
                    d="M938.5 249.8h-851c-12.8 0-23.3-10.4-23.3-23.3s10.4-23.3 23.3-23.3h851c12.8 0 23.3 10.4 23.3 23.3s-10.5 23.3-23.3 23.3zM421 834.8c-12.8 0-23.3-10.4-23.3-23.3V346.2c0-12.9 10.4-23.3 23.3-23.3 12.8 0 23.3 10.4 23.3 23.3v465.4c0 12.8-10.4 23.2-23.3 23.2zM600.5 834.8c-12.8 0-23.3-10.4-23.3-23.3V346.2c0-12.9 10.4-23.3 23.3-23.3s23.3 10.4 23.3 23.3v465.4c0 12.8-10.4 23.2-23.3 23.2z"
                ></path>
            </svg>
        </div>
        <div class="conntainner__playList">
            <div
                class="playList__item"
                v-for="(item, index) in searchMusic(playSettingStore.playList)"
                @click="playMusic(index)"
                @mouseover="currentHoverIndex = index"
                @mouseleave="currentHoverIndex = -1"
                :key="item.id"
                :class="{ playList__item_selected: currentPlayIndex === index }"
            >
                {{ index + 1 >= 10 ? index + 1 : `0${index + 1}` }}
                <img :src="item.avater" class="playList__avater" />
                <div 
                    class="playList__info"
                    :style="currentHoverIndex === index ? {width: '120px'} : {}"
                >
                    <div class="info__name">{{ item.name }}</div>
                    <div class="info__singer">
                        {{ formatSingers(item.singer) }}
                    </div>
                </div>
                <div 
                    v-if="currentHoverIndex !== index"
                    class="playList__duration"
                >
                    {{ formatTime(item.duration) }}
                </div>
                <div
                    v-else
                    class="operated__list"
                >
                    <!-- 删除单曲 -->
                    <svg
                        @click="deleteAMusic($event,index)"
                        class="mini-icon"
                        viewBox="0 0 1024 1024" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M107.632 107.632c15.52-15.52 40.64-15.52 56.16 0L512 455.824 860.208 107.632a39.712 39.712 0 0 1 56.16 56.16L568.176 512l348.192 348.208c14.832 14.832 15.472 38.48 1.936 54.08l-1.936 2.08c-15.52 15.52-40.64 15.52-56.16 0L512 568.176 163.792 916.368a39.712 39.712 0 1 1-56.16-56.16L455.824 512 107.632 163.792a39.712 39.712 0 0 1-1.936-54.08z"></path>
                    </svg>
                    <!-- 添加到我喜欢 -->
                    <svg
                        class="mini-icon"
                        viewBox="0 0 1031 1024" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M515.38944 957.85984c-21.54496 0-36.87424-14.25408-40.76544-18.26816-17.62304-17.3568-347.25888-342.23104-392.43776-391.168C29.44 495.70816 0 424.6528 0 349.0816s29.44-146.62656 82.8928-200.06912c53.42208-53.43232 124.47744-82.87232 200.07936-82.87232 75.56096 0 146.60608 29.42976 200.05888 82.87232 11.90912 11.91936 22.7328 24.94464 32.3584 38.95296 9.6256-14.01856 20.44928-27.0336 32.34816-38.95296 53.44256-53.44256 124.49792-82.87232 200.07936-82.87232 75.56096 0 146.61632 29.42976 200.07936 82.87232 53.43232 53.46304 82.86208 124.50816 82.86208 200.06912 0 75.5712-29.42976 146.61632-82.86208 200.07936-44.50304 48.20992-374.23104 373.18656-391.74144 390.44096C552.28416 943.60576 536.9344 957.85984 515.38944 957.85984zM282.97216 117.34016c-61.92128 0-120.1152 24.10496-163.87072 67.87072C75.3152 228.98688 51.2 287.19104 51.2 349.0816c0 61.9008 24.1152 120.10496 67.8912 163.88096 45.33248 49.05984 388.28032 387.0208 391.7312 390.42048 0.256 0.24576 0.512 0.512 0.74752 0.768 0.82944 0.78848 2.72384 2.02752 3.81952 2.42688 1.10592-0.39936 3.05152-1.67936 4.16768-2.77504 3.86048-3.81952 346.79808-341.78048 391.43424-390.11328 44.47232-44.52352 68.56704-102.71744 68.56704-164.608s-24.10496-120.08448-67.87072-163.86048c-43.76576-43.76576-101.96992-67.87072-163.87072-67.87072s-120.10496 24.10496-163.88096 67.87072c-18.46272 18.4832-33.75104 40.32512-45.42464 64.9216-4.23936 8.92928-13.24032 14.63296-23.13216 14.63296l0 0c-9.89184 0-18.8928-5.70368-23.13216-14.63296-11.66336-24.576-26.94144-46.42816-45.44512-64.9216C403.0464 141.44512 344.86272 117.34016 282.97216 117.34016z"></path>
                    </svg>
                    <!-- 播放视频 -->
                    <svg
                        @click="playVideo($event,item.id)"
                        v-if="item.video"
                        class="mini-icon" 
                        viewBox="0 0 1024 1024" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M814.545455 186.181818h-230.4l121.018181-86.109091c11.636364-6.981818 13.963636-20.945455 4.654546-32.581818-6.981818-11.636364-20.945455-13.963636-32.581818-4.654545l-165.236364 116.363636-165.236364-116.363636c-11.636364-6.981818-25.6-4.654545-32.581818 4.654545-6.981818 11.636364-4.654545 25.6 4.654546 32.581818L439.854545 186.181818H209.454545c-76.8 0-139.636364 62.836364-139.636363 139.636364v477.090909c0 76.8 62.836364 139.636364 139.636363 139.636364h605.09091c76.8 0 139.636364-62.836364 139.636363-139.636364V325.818182c0-76.8-62.836364-139.636364-139.636363-139.636364z m93.090909 616.727273c0 51.2-41.890909 93.090909-93.090909 93.090909H209.454545c-51.2 0-93.090909-41.890909-93.090909-93.090909V325.818182c0-51.2 41.890909-93.090909 93.090909-93.090909h605.09091c51.2 0 93.090909 41.890909 93.090909 93.090909v477.090909z" fill="" p-id="6362"></path><path d="M686.545455 523.636364l-251.345455-144.290909c-6.981818-4.654545-16.290909-6.981818-23.272727-6.981819-23.272727 0-46.545455 18.618182-46.545455 46.545455v290.909091c0 27.927273 23.272727 46.545455 46.545455 46.545454 6.981818 0 16.290909-2.327273 23.272727-6.981818L686.545455 605.090909c30.254545-18.618182 30.254545-62.836364 0-81.454545z m-274.618182 186.181818V418.909091l251.345454 144.290909-251.345454 146.618182z"></path>
                    </svg>
                    <div v-else class="mini-icon"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
$titleHeight: 40px;
$infoHeight: 30px;
.list__containner {
    @extend %themeStyle;
    @include useTheme {
        background-color: getVar("orgBgColor");
        border:1px solid getVar("selectedColor");
        box-shadow: 0 3px 5px 5px getVar("lightBgColor");
    }
    position: fixed;
    z-index: 12;
    right: 5px;
    bottom: $controllerHeight + 15px;
    width: 380px;
    height: $ListHeight;
    border-radius: 20px;
    overflow: hidden;
    user-select: none;
    .list__title {
        margin-left: 20px;
        margin-top: 20px;
        height: $titleHeight;
        line-height: $titleHeight;
        font-size: 20px;
    }
    .list__info {
        display: flex;
        align-items: center;
        margin-left: 20px;
        margin-bottom: 5px;
        height: $infoHeight;
        line-height: $infoHeight;
        .list__search_disappear {
            width: 200px;
            height: 20px;
            margin: 0 12px 0 20px;
        }
        input {
            width: 200px;
            height: 20px;
            background-color: #ccc;
            margin: 0 12px 0 20px;
            border: 0px;
            border-radius: 3px;
            padding-left: 8px;
            &:focus {
                outline: none;
                box-shadow: none;
                border: 0px;
            }
        }
        .mini-icon {
            @extend %iconBase;
            width: 22px;
            height: 22px;
        }
    }
    .conntainner__playList {
        @extend %scrollThemeStyle;
        height: $ListHeight - $infoHeight - $titleHeight - 25px;
        overflow-y: scroll;
        .playList__item {
            display: flex;
            align-items: center;
            height: 70px;
            padding: 5px 0 5px 25px;
            font-size: 16px;
            cursor: pointer;
            .playList__avater {
                margin: 0 20px;
                width: 54px;
                height: 54px;
                border-radius: 5px;
                object-fit: cover;
            }
            .playList__info {
                width: 150px;
                padding-right: 10px;
                .info__name {
                    font-size: 16.5px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .info__singer {
                    margin-top: 5px;
                    font-size: 12px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
            .playList__duration {
                margin-left: 10px;
                font-size: 15px;
            }
            &:hover {
                @include useTheme {
                    background-color: getVar("selectedColor");
                }
            }
            .operated__list {
                display: flex;
                flex-direction: row-reverse;
                align-items: center;
                justify-content: flex-end;
                width: 120px;
                .mini-icon {
                    @extend %iconBase;
                    margin:0 8.5px;
                    width: 18px;
                    height: 18px;
                }
            }
        }
        .playList__item_selected {
            @include useTheme {
                background-color: getVar("selectedColor");
            }
        }
    }
}
</style>
