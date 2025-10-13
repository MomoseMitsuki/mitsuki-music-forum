<script setup lang="ts">
import Character1 from "@/assets/stickers/footer_character1.png"
import Character2 from "@/assets/stickers/footer_character2.png"
import Character3 from "@/assets/stickers/footer_character3.png"
import Character4 from "@/assets/stickers/footer_character4.png"

</script>

<template>
    <footer class="footer__containner">
        <img :src="Character1">
        <img :src="Character2">
        <div class="footer__info">
            <div class="footer__link">
                <a href="https://github.com/MomoseMitsuki/mitsuki-music-forum" target="_blank">Github</a> 开源 | 
                <a href="https://qm.qq.com/q/Wo1HAQ1zCa" target="_blank">Q群</a> | 
                <a href="https://t.me/+CtnbK2xUiX1hNzA1" target="_blank">Telegram</a>
            </div>
           <div class="info__message">
                <img src="/favicon.ico">
                <div>© 2025 ~ Forever! 『 望月演绎厅 』 —— ACG音乐论坛</div>
            </div>
        </div>
        <img :src="Character3">
        <img :src="Character4">
    </footer>
</template>

<style scoped lang="scss">
.footer__containner {
    @extend %themeStyle;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 230px;
    padding-bottom: 50px;
    img {
        display: block;
        margin: 0 20px;
        width: 100px;
    }
    .footer__link {
        margin: -10px 0 10px 0;
        text-align: center;
        a {
            @include useTheme {
                color: getVar("textColor");
            }
        }
    }
    .footer__info {
        margin:0 80px;
        font-size: 18px;
        letter-spacing: 1px;
        .info__message {
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                display: block;
                margin: 0 10px;
                width: 30px;
                height: 30px;
                border-radius: 15px;
            }
        }
    }
}
</style>