import { defineNuxtPlugin } from "#app"

const SPEED = 28
/**
 * @param {HTMLElement} el    DOM element mounted with a vue marquee directive
 * @param {DirectiveBinding<string>} binding    The value bound in the vue marquee directive
 * @description
 * This function is used in Vue lifecycle hooks to mount a seamless scrolling animation on the element (el) using the Web Animations API.
 * It checks the width of the input string
 * if the width of the string multiplied by the font width exceeds the width of the el's box,
 * we start the animation on el; otherwise, we pause the animation.
 */
const changeScroll = (el: HTMLElement, binding: DirectiveBinding<string>) => {
    const boxWidth = el.offsetWidth
    const fontWidth = parseFloat(window.getComputedStyle(el).fontSize)
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
    const textNode = document.createTextNode(binding.value)
    el.appendChild(textNode)
    const infoWidth = el.scrollWidth
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
        const spacer = document.createElement('span')
        spacer.style.paddingRight = '2em'
        const textNode2 = document.createTextNode(binding.value)
        el.appendChild(spacer)
        el.appendChild(textNode2)
        animation.play()
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
