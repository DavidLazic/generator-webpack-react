const { resolve } = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: [
    'babel-polyfill',
    './js/index.js'
  ],
  output: {
    path: resolve(__dirname, '../../dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  optimization: {
    namedModules: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'proccess.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
});
