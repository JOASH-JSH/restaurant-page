const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
        new MiniCssExtractPlugin({ filename: "index.css" }),
    ],
    optimization: {
        minimizer: [new CssMinimizerPlugin(), new TerserWebpackPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(woff2|woff)$/,
                type: "asset/resource",
                generator: {
                    filename: "./assets/fonts/[name].[hash][ext]",
                },
            },
            {
                test: /\.ico$/,
                type: "asset/resource",
                generator: {
                    filename: "./assets/icons/[name].[hash][ext]",
                },
            },
            {
                test: /\.webp$/,
                type: "asset/resource",
                generator: {
                    filename: "./assets/images/[name].[hash][ext]",
                },
            },
        ],
    },
};
