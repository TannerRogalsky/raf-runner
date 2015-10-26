'use strict';

var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');

var config = Object.create(baseConfig);
config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('test')
  })
];

config.module.postLoaders = [
  { test: /_spec\.js$/, loaders: ['mocha-loader'], exclude: /node_modules/ }
];

module.exports = config;
