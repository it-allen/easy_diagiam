const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const global = require('../global');

module.exports = {
    entry: path.join(global.rootDir, '/src/index.js'),
    output: {
        filename: 'bundle.[hash].js',
        path: path.join(global.rootDir, '/dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(global.rootDir, '/src/index.html')
        }),
        new CleanWebpackPlugin()
    ]
};

