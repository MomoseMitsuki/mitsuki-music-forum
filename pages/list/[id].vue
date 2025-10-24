<script setup lang="ts">
import { getListByIdService } from "~/apis/list"
import { usePlaySettingStore, useUiStatusStore } from "@/stores"
import { useListOper } from "@/composables/useListOper"
import MusicView from "~/components/MusicView.vue"

const route = useRoute()
const { addToMyList } = useListOper()
const playSettingStore = usePlaySettingStore()
const uiStatusStore = useUiStatusStore()
const { $default, currentPlayIndex } = storeToRefs(playSettingStore)
const { data } = await useAsyncData(
    () => `list-${route.params.id}`,
    () => getListByIdService(route.params.id as string)
)
const changePlayList = ($event: MouseEvent) => {
    if (data.value!.datas.length === 0) return
    uiStatusStore.jump($event)
    $default.value.datas.splice(0, $default.value.datas.length)
    for (const item of data.value!.datas) {
        $default.value.datas.push(item)
    }
    currentPlayIndex.value = 0
    playSettingStore.audio.currentTime = 0
    playSettingStore.audio.play()
}
</script>

<template>
    <div class="list__containner">
        <div class="info__list">
            <img :src="data!.avater" />
            <div class="info__containner">
                <div class="info__name">{{ data!.name }}</div>
                <div class="btn__containner">
                    <div class="operator__btn" @click="changePlayList($event)">
                        播放
                        <svg
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M897.143467 597.051733l-464.648534 311.5264c-46.976 31.488-110.592 18.944-142.08-28.023466A102.4 102.4 0 0 1 273.066667 823.5264V200.4736c0-56.5504 45.8496-102.4 102.4-102.4a102.4 102.4 0 0 1 57.028266 17.348267l464.64 311.5264c46.976 31.488 59.528533 95.104 28.032 142.08a102.4 102.4 0 0 1-28.023466 28.023466z"
                            ></path>
                        </svg>
                    </div>
                    <div class="operator__btn" @click="addToMyList(data!)">
                        收藏
                    </div>
                </div>
            </div>
        </div>
        <MusicView v-for="music in data!.datas" :music="music" />
    </div>
</template>

<style scoped lang="scss">
$ListWidth: 1080px;
.list__containner {
    @extend %themeStyle;
    margin: $navHeight + 50px auto;
    width: $ListWidth;
    border-radius: 20px;
    .info__list {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 300px;
        img {
            display: block;
            margin-right: 100px;
            width: 180px;
            height: 180px;
            border-radius: 10px;
        }
        .info__containner {
            .info__name {
                margin: 100px 0 0 30px;
                font-size: 30px;
            }
            .btn__containner {
                display: flex;
                .operator__btn {
                    margin: 40px 30px 100px 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100px;
                    height: 40px;
                    border-radius: 8px;
                    font-size: 20px;
                    letter-spacing: 2.5px;
                    cursor: pointer;
                    svg {
                        fill: #eeeeee;
                        width: 25px;
                        height: 25px;
                    }
                    @include useTheme {
                        background-color: getVar("fullBarColor");
                    }
                    &:active {
                        transform: translateY(2px);
                    }
                }
            }
        }
    }
}
</style>
