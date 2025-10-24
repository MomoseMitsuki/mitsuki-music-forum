import postcssPresetEnv from "postcss-preset-env"

export default {
    plugins: {
        "postcss-preset-env": postcssPresetEnv({
            autoprefixer: { grid: true }
        })
    }
}
