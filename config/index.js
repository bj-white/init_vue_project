const path = require('path');

module.exports = {
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: 'static',
  useEslint: true,
  dev: {
    host: '0.0.0.0',
    port: 8080,
  },
  build: {}
};
