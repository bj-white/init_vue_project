const path = require('path');
const config = require('../config/index.js');

exports.assetsPath = (_path) => {
  const assetsSubDirectory = config.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, _path);
};