const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const superConfig = require('./webpack.config.js');
const { default: merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const  merge = require("webpack-merge");


module.exports = merge(superConfig,{
    output:{
        filename: 'main.[contenthash].bundle.js'
    },
    mode:'production',
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:'main.[contenthash].min.css'
        })
    ]
})