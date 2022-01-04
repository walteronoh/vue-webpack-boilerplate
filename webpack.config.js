const path = require("path");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { exclude: /node_modules/, test: /\.js$/, use: "babel-loader" },
            { test: /\.vue$/, use: "vue-loader" }
        ]
    },
    devtool: devMode ? "eval" : "source-map",
    mode: devMode ? "development" : "production"
};