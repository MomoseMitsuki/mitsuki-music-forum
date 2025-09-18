import fetchMock from "fetch-mock"
export default defineNuxtPlugin(() => {
    console.log("初始化fetch mock")
    fetchMock.get("/api/user/playlist",(url) => {
        console.log("被mock所拦截")
        console.log(url)
        return {
            code:200,
            data:{
                playlist:[
                    {
                        id: 1,
                        name: "Fantastic Conflict",
                        singer: ["小春めう"],
                        path: "/localtest/music/1.flac",
                        duration: 298,
                        avater: "/localtest/avater/1.png",
                        lyric: "/localtest/lyric/1.lrc",
                        video: true
                    },
                    {
                        id: 2,
                        name: "永遠に咲く花 (永远绽放的花)",
                        singer: ["水城新人"],
                        path: "/localtest/music/2.mp3",
                        duration: 275,
                        avater: "/localtest/avater/2.jpg",
                        lyric: "/localtest/lyric/2.lrc",
                        video: true
                    },
                    {
                        id: 3,
                        name: "非実在青少年",
                        singer: ["いとうかなこ"],
                        path: "/localtest/music/3.flac",
                        duration: 243,
                        avater: "/localtest/avater/3.jpg",
                        lyric: "/localtest/lyric/3.lrc",
                        video: true
                    },
                    {
                        id: 4,
                        name: "アオイトリ (青鸟)",
                        singer: ["橋本みゆき"],
                        path: "/localtest/music/4.flac",
                        duration: 327,
                        avater: "/localtest/avater/4.jpg",
                        lyric: "/localtest/lyric/4.lrc",
                        video: true
                    },
                    {
                        id: 5,
                        name: "ILLEXECUTION",
                        singer: ["冬乃桜"],
                        path: "/localtest/music/5.mp3",
                        duration: 264,
                        avater: "/localtest/avater/5.png",
                        lyric: "/localtest/lyric/5.lrc",
                        video: true
                    },
                    {
                        id: 6,
                        name: "BWLAUTE BEIRRD",
                        singer: ["夢乃ゆき"],
                        path: "/localtest/music/6.mp3",
                        duration: 230,
                        avater: "/localtest/avater/6.png",
                        lyric: "/localtest/lyric/6.lrc",
                        video: true
                    },
                    {
                        id: 7,
                        name: "空気力学少女と少年の詩 (空气力学少女与少年之诗)",
                        singer: ["はな"],
                        path: "/localtest/music/7.mp3",
                        duration: 253,
                        avater: "/localtest/avater/7.jpg",
                        lyric: "/localtest/lyric/7.lrc",
                        video: false
                    },
                    {
                        id: 8,
                        name: "raspberry cube",
                        singer: ["松下"],
                        path: "/localtest/music/8.flac",
                        duration: 214,
                        avater: "/localtest/avater/8.jpg",
                        lyric: "/localtest/lyric/8.lrc",
                        video: true
                    },
                    {
                        id: 9,
                        name: "ロオド#ラスト",
                        singer: ["中恵光城"],
                        path: "/localtest/music/9.mp3",
                        duration: 333,
                        avater: "/localtest/avater/9.jpg",
                        lyric: "/localtest/lyric/9.lrc",
                        video: true
                    },
                    {
                        id: 10,
                        name: "comment te dire adieu",
                        singer: ["未知"],
                        path: "/localtest/music/10.mp3",
                        duration: 404,
                        avater: "/localtest/avater/10.jpg",
                        lyric: "/localtest/lyric/10.lrc",
                        video: false
                    },
                    {
                        id: 11,
                        name: "明日を漁れ",
                        singer: ["日南めい"],
                        path: "/localtest/music/11.mp3",
                        duration: 404,
                        avater: "/localtest/avater/11.webp",
                        lyric: "/localtest/lyric/11.lrc",
                        video: true
                    },
                    {
                        id: 12,
                        name: "lip ripples",
                        singer: ["橋本みゆき"],
                        path: "/localtest/music/12.flac",
                        duration: 184,
                        avater: "/localtest/avater/12.webp",
                        lyric: "",
                        video: true
                    },
                    {
                        id: 13,
                        name: "bôa",
                        singer: ["Duvet"],
                        path: "/localtest/music/13.flac",
                        duration: 203,
                        avater: "/localtest/avater/13.jpg",
                        lyric: "/localtest/lyric/13.lrc",
                        video: false
                    },
                    {
                        id: 14,
                        name: "君とのミチシルベ",
                        singer: ["藤井稿太郎","KyoKa"],
                        path: "/localtest/music/14.mp3",
                        duration: 248,
                        avater: "/localtest/avater/14.webp",
                        lyric: "/localtest/lyric/14.lrc",
                        video: true
                    },
                ]
            },
            message: 'success'
        }
    })
})