// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-06-03",
    devtools: { enabled: true },
    srcDir: "client/",
    nitro: {
        preset: "node-server"
    },
    vite: {
        build: {
            rollupOptions: {
                output: {
                    entryFileNames: "js/[name].[hash].js",
                    chunkFileNames: "js/[name].[hash].js",
                    assetFileNames: (assetInfo) => {
                        // 图片放 img
                        if (
                            /\.(png|jpe?g|gif|svg|webp)$/.test(
                                assetInfo.name || ""
                            )
                        ) {
                            return "img/[name].[hash][extname]"
                        }
                        // CSS 放 css 文件夹
                        if (/\.css$/.test(assetInfo.name || "")) {
                            return "css/[name].[hash][extname]"
                        }
                        // 其它默认放 assets/
                        return "assets/[name].[hash][extname]"
                    }
                }
            }
        },
        esbuild: {
            drop: ["console", "debugger"]
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/styles/index.scss" as *;'
                }
            }
        }
    },
    devServer: {
        host: "127.0.0.1",
        port: 3000
    },
    modules: ["@pinia/nuxt", "@nuxt/eslint"],
    app: {
        head: {
            htmlAttrs: {
                "data-theme": "light"
            }
        }
    }
})
