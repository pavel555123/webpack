import {BuildMode} from "../types/types"
import {removeDataTestIdBabelPlugin} from "./removeDataTestIdBabelPlugin";

export function buildBabelLoader(mode: BuildMode) {
    const plugins = []

    if (mode !== 'development') {
        plugins.push([removeDataTestIdBabelPlugin, {props: ['data-testid']}])
    }

    return {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-typescript",
                    ["@babel/preset-react", {
                        runtime: mode === 'development' ? 'automatic' : 'classic'
                    }]
                ],
                plugins: plugins.length ? plugins : undefined
            }
        }
    }
}