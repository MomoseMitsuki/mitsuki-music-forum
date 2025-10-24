// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-06-03",
    modules: ["@pinia/nuxt", "@nuxt/eslint"],
    devtools: { enabled: false },
    nitro: {
        alias: {
            ".prisma/client/default": "./app/generated/prisma/default.js"
        },
        externals: {
            trace: false,
            inline: ["@prisma/client"]
        }
    },
    srcDir: "./",
    vite: {
        ssr: {
            noExternal: ["@prisma/client"]
        },
        build: {
            assetsDir: "_nuxt"
        },
        esbuild: {
            drop: []
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "@/styles/variables.scss" as *;
                        @use "@/styles/code-theme.scss" as *;
                        @use "@/styles/global.scss" as *;
                    `
                }
            }
        }
    },
    devServer: {
        host: "127.0.0.1",
        port: 3000
    },
    app: {
        head: {
            title: "🌺☘『 望月演绎厅 』🍂❄️ —— 基于nuxt开发的ACG音乐论坛",
            htmlAttrs: {
                "data-theme": "dark"
            }
        }
    },
    runtimeConfig: {
        local: process.env.LOCALTEST
    }
})
