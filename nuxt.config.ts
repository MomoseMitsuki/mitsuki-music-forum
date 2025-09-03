// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-06-03",
    devtools: { enabled: false },
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
                        const name = assetInfo.names[0]
                        if (/\.(png|jpe?g|gif|svg|webp)$/.test(name || "")) {
                            return "img/[name].[hash][extname]"
                        }
                        if (/\.css$/.test(name || "")) {
                            return "css/[name].[hash][extname]"
                        }
                        return "assets/[name].[hash][extname]"
                    }
                }
            }
        },
        esbuild: {
            drop: []
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "@/styles/global.scss" as *;
                        @use "@/styles/variables.scss" as *;
                        @use "@/styles/code-theme.scss" as *;
                    `
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
                "data-theme": "dark"
            }
        }
    },
    runtimeConfig: {
        apiTest: process.env.LOCALTEST
    }
})
