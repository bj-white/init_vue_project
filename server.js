const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');
const connectHistoryApiFallback = require('connect-history-api-fallback');
const webpackConfig = require('./build/webpack.dev.js');

const port = 3000;

const app = express();

app.get('/api', (req, res, next) => {
  res.send('hello api');
});

app.use(connectHistoryApiFallback());

const complier = webpack(webpackConfig);
app.use(webpackDevMiddleware(complier, {
  // publicPath: webpackConfig.output.publicPath,
  // quiet: true
}));

// app.use(webpackHotMiddleware(complier));

app.listen(port, () => {
  console.log('listen to http://localhost:' + port);
});
