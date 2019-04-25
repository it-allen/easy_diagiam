const path = require('path');

const global = require('../global');

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(global.rootDir),
        port: 3000
    }
})
