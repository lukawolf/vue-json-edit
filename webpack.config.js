const webpack = require('webpack');
const config = require('./webpack.base.config');
const path = require('path');

config.entry = './src/index.js';
config.output = {
  path: path.resolve('dist'),
  filename: 'vue-json-edit.js',
  library: 'vue-json-edit',
  libraryTarget: 'umd',
};
config.externals = {
  vue: 'Vue',
};

config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),

]);
module.exports = config;
