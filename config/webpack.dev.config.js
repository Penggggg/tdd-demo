var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.tsx",
        vendor: './src/vendor'
    },
    output: {
        filename: "[name].js",
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
        new webpack.optimize.CommonsChunkPlugin({
          name: [ 'app', 'vendor' ]
        }),

        new ExtractTextPlugin("styles.css"),
 
        new HtmlWebpackPlugin({
          template: './src/index.html'
        }), 
 
        new OpenBrowserPlugin({
          url: 'http://localhost:8088'
        }), 
 
        new webpack.DefinePlugin({
            _ENV_: 'production'
        })
    ],

};