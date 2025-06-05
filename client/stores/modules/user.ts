import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore',() => {
    const userInfo = reactive({
        uid:0,
        name:'',
        exp:0,
        avatar:''
    })

    return {
        userInfo
    }
})