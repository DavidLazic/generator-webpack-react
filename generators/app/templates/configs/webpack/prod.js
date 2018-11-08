const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const { resolve } = require('path');
const webpack = require('webpack');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
    './js/index.js'
  ],
  output: {
    filename: 'bundle.[chunkhash].min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/'
  },
  optimization: {
    concatenateModules: true
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      template: 'www/index.ejs',
      filename: 'index.html',
      excludeChunks: ['base'],
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css',
      allChunks: true
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.DefinePlugin({
      'proccess.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
});
