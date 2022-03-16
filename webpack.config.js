const webpack = require("webpack");
const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const config = {
    name: "react-boilerplate",
    stats: "none",
    devtool: "inline-source-map",
    entry: path.resolve(__dirname, "src/index.ts"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "dist.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(ts|tsx)?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        modules: ["node_modules"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./public/index.html", hash: true}),
        new CleanWebpackPlugin(),
        new PurgecssPlugin({
            paths: glob.sync(`${path.resolve(__dirname, "src")}/**/*`, {
                nodir: true,
            }),
        }),
    ],
    devServer: {
        port: 3000,
        open: true,
        compress: true,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "public"),
        },
        client: {
            overlay: true,
            logging: "none",
        },
    },
};

module.exports = config;
