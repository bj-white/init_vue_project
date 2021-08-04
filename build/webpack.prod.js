const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common.js');
const utils = require('./utils.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].css'),
      chunkFilename: utils.assetsPath('css/[id].css'),
    }),
  ],
  performance: {
    hints: false,
  },
});