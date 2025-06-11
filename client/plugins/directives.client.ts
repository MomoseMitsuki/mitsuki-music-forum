import { defineNuxtPlugin } from "#app"

const SPEED = 28
/**
 * @param {HTMLElement} el    DOM element mounted with a vue marquee directive
 * @param {DirectiveBinding<string>} binding    The value bound in the vue marquee directive
 * @description
 * This function is used in Vue lifecycle hooks to mount a seamless scrolling animation on the element (el) using the Web Animations API.
 * It checks the length of the input string
 * if the length of the string multiplied by the font width exceeds the width of the el's box,
 * we start the animation on el; otherwise, we pause the animation.
 */
const changeScroll = (el: HTMLElement, binding: DirectiveBinding<string>) => {
    if (binding.value === binding.oldValue) return
    const boxWidth = el.offsetWidth
    const fontWidth = parseFloat(window.getComputedStyle(el).fontSize)
    const infoWidth = binding.value.length * fontWidth
    const time = Math.round(((infoWidth + 2 * fontWidth) / SPEED) * 1000)
    const animation = el.animate(
        [
            {
                transform: "translateX(0px)"
            },
            {
                transform: `translateX(-${infoWidth + 2 * fontWidth}px)`
            }
        ],
        {
            duration: time,
            easing: "linear",
            iterations: Infinity
        }
    )
    animation.pause()
    if (infoWidth > boxWidth) {
        el.innerHTML = `${binding.value}<span style="padding-right:2em;"></span>${binding.value}`
        animation.play()
    } else {
        el.innerHTML = binding.value
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("marquee", {
        mounted(el: HTMLElement, binding: DirectiveBinding<string>) {
            changeScroll(el, binding)
        },
        updated(el: HTMLElement, binding: DirectiveBinding<string>) {
            changeScroll(el, binding)
        }
    })
})
