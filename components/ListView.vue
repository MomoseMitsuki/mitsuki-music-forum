<script setup lang="ts">
import type { MusicListWithNotData } from "@/types"

const props = defineProps<MusicListWithNotData>()
const router = useRouter()
const svgRef = useTemplateRef("svgRef")
const containnerRef = useTemplateRef("img__containner")
const upAnimation = () => {
    svgRef.value!.style.transform = "translateY(-40px)"
    containnerRef.value!.style.transform = "translateY(8px)"
}
const cancelAnimation = () => {
    svgRef.value!.style.transform = "none"
    containnerRef.value!.style.transform = "none"
}
</script>

<template>
    <div class="list__containner">
        <div
            class="img__containner"
            ref="img__containner"
            @mouseenter="upAnimation"
            @mouseleave="cancelAnimation"
            @click="router.push(`/list/${props.id}`)"
        >
            <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                ref="svgRef"
            >
                <path
                    d="M945.96623 240.45909a511.920513 511.920513 0 0 0-867.951442 543.062838 511.920513 511.920513 0 0 0 867.951442-543.062838zM194.931976 825.697535s-30.133907-18.388802-64.18285-72.843383c-34.108261-54.454581-39.506264-92.952427-39.506264-92.952426l264.917382-100.129992s-0.771143 28.591621 10.202819 46.268598c11.033281 17.617658 36.658966 28.591621 36.658966 28.591621l-208.090053 191.065582z m369.85219-229.444791a99.358848 99.358848 0 1 1-105.409357-168.465151 99.358848 99.358848 0 0 1 105.409357 168.465151z m122.611785-125.10317s0.771143-28.650939-10.262138-46.327917c-11.0926-17.676977-36.599647-28.591621-36.599648-28.591621l208.030735-191.006263s30.193226 18.270164 64.242169 72.724745 39.446946 92.952427 39.446945 92.952427l-264.858063 100.248629z"
                ></path>
                <path
                    d="M511.990509 511.96085m-34.820085 0a34.820086 34.820086 0 1 0 69.640171 0 34.820086 34.820086 0 1 0-69.640171 0Z"
                ></path>
            </svg>
            <img :src="props.avater" />
        </div>
        <div class="list__name">{{ props.name }}</div>
    </div>
</template>

<style scoped lang="scss">
$Listlength: 120px;
.list__containner {
    width: $Listlength !important;
    height: auto !important;
    margin: 20px 35px !important;
    flex-direction: column;
    .img__containner {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: $Listlength;
        height: $Listlength + 30px;
        cursor: pointer;
        transition: transform 0.2s linear;
        img {
            display: block;
            width: $Listlength;
            height: $Listlength;
            object-fit: cover;
            border-radius: 10px;
            z-index: 4;
            box-shadow: 5px 0 0 #d1d1d180;
        }
        svg {
            display: block;
            position: absolute;
            top: 20px;
            width: $Listlength - 20px;
            height: $Listlength - 20px;
            z-index: 3;
            transition: transform 0.2s linear;
            fill: #707070;
        }
    }
    .list__name {
        margin-top: 8px;
        width: $Listlength;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>
