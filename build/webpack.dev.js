const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const config = require('../config/index.js');

module.exports = merge(common, {
  output: {
    filename: '[name].bundle.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: config.host,
    port: config.port,
    disableHostCheck: true,
    /* proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {'^/api': ''},
        changeOrigin: true,
      }
    } */
  }
});