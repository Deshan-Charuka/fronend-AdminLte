const { default: merge } = require("webpack-merge");
const mainConfig = require('./webpack.config');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(mainConfig,{
    mode:'development',
    plugins:[
        new MiniCssExtractPlugin({
            filename:'main.bundle.css'
        })
    ],
    devServer:{
        port: 3000
    },
    devtool:false
})