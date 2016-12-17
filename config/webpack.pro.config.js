var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var WebpackMd5Hash = require('webpack-md5-hash');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: {
        app: "./src/index.tsx",
        vendor: './src/vendor'
    },
    output: {
        filename: "[name].[chunkhash:8].js",
        path:"./dist"
    },

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.css?$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")}
        ]
    },

    
    plugins: [
        // css 文件 hash解决方案
        new ExtractTextPlugin("styles.[contenthash].css"),
        // js 文件 hash解决方案
        new WebpackMd5Hash(),
        // 压缩
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]

};