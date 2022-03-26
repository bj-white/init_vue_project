const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const utils = require('./utils.js');
const config = require('../config/index.js');

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: path.resolve(__dirname, '../src'),
});

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: config.assetsRoot,
  },
  module: {
    rules: [
      ...(config.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        use: ['vue-loader'],
        include: path.resolve(__dirname, '../src')
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.resolve(__dirname, '../src')
      },
      {
        test: /\.(scss|css)$/,
        use: [
          process.env.NODE_ENV === 'development'
            ? 'vue-style-loader'
            : {
              loader: MiniCssExtractPlugin.loader,
            },
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              sourceMap: true,
              resources: [
                path.resolve(__dirname, '../src/style/vars.scss')
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          esModule: false,
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          esModule: false,
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          esModule: false,
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      {
        from: './public/static',
        to: 'static',
      }
    ]),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};