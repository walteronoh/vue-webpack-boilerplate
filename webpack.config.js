const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.vue$/, loader: "vue-loader" }
        ],
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [new VueLoaderPlugin(), new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "index.html"
    })],
    devtool: devMode ? "eval-source-map" : "source-map",
    mode: devMode ? "development" : "production"
};