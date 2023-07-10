// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main:path.resolve(__dirname, './src/main.js'),
        header: path.resolve(__dirname, './src/header.js'),
    },
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, './dist/output.js'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.less$/,
                // use:['style-loader', 'css-loader','less-loader']
                use:[MiniCssExtractPlugin.loader, 'css-loader','less-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'WebpackTest',
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
            chunks:['main']
        }),
        new HtmlWebpackPlugin({
            title: 'WebpackTest',
            template: path.resolve(__dirname, './public/header.html'),
            filename:'header.html',
            chunks:['header']
        }),
        new MiniCssExtractPlugin(
            {filename: 'css/[name].[hash:8].css'}
        ),
    ]
}