const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const fs = require("fs");
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
    entry: resolveApp("src/app.jsx"),
    output: {
        path: resolveApp("dist"),
        filename: "bundle.js",
        publicPath: "",
    },
    mode: "development",
    devtool: "eval",
    module: {
        rules: [{
                test: /\.(png|svg|jpg|jpeg|webp)$/,
                use: ["file-loader"],
            },
            {
                // look for .js or .jsx files
                test: /\.(js|jsx)$/,
                // in the `src` directory
                include: resolveApp("src"),
                exclude: /(node_modules)/,
                use: {
                    // use babel for transpiling JavaScript files
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/react"],
                    },
                },
            },
            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader"],
            },
            {
                test: /\.s(a|c)ss$/,
                use: [{
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            modules: { auto: true },
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
        ],
    },
    devServer: {
        contentBase: path.resolve("src"),
        hot: true,
        open: true,
        port: 8000,
        watchContentBase: true,
        historyApiFallback: true,
        proxy: {
            "/api": {
                target: "http://localhost:4000",
                secure: false,
            },
        },
    },
    plugins: [
        new Dotenv(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html",
            filename: "index.html",
            inject: "body",
        }),
        new webpack.DefinePlugin({
            "process.env": {
                MAPBOX_GL: JSON.stringify(process.env.MAPBOX_GL),
            },
        }),
    ],
    resolve: {
        // File extensions. Add others and needed (e.g. scss, json)
        extensions: [".js", ".jsx", ".json"],
        modules: ["node_modules"],
        alias: {
            Components: path.resolve(resolveApp("src"), "components"),
            Containers: path.resolve(resolveApp("src"), "containers"),
            Utils: path.resolve(resolveApp("src"), "utils"),
        },
    },
    performance: {
        hints: false,
    },
};