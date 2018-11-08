// shared config (local, dev, qa and prod)
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const URLS = {
  none: '',
  development: '',
  production: '',
  staging: ''
};

module.exports = {
  context: resolve(__dirname, '../../src'),
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      lib: resolve(__dirname, '../../src/js/lib'),
      containers: resolve(__dirname, '../../src/js/containers'),
      components: resolve(__dirname, '../../src/js/components'),
      constants: resolve(__dirname, '../../src/js/constants'),
      actions: resolve(__dirname, '../../src/js/actions'),
      routes: resolve(__dirname, '../../src/js/routes'),
      assets: resolve(__dirname, '../../src/scss/assets')
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true
        },
      },
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader'},
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: resolve(__dirname, '../postcss.config.js')
                }
              }
            },
            'resolve-url-loader',
            {loader: 'sass-loader', options: {sourceMap: true}}
          ]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
              name: '[name][hash].[ext]',
            }
          }
        ]
      },
      {
        test: /\.(svg)$/,
        exclude: /fonts/, /* dont want svg fonts from fonts folder to be included */
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              noquotes: true,
            }
          }
        ]
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: /images/,  /* dont want svg images from image folder to be included */
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts/',
              name: '[name][hash].[ext]',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // Extract sass then postcss to css
    new ExtractTextPlugin({
      filename: 'app.[hash].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin(
      {
        template: 'www/index.ejs',
        filename: 'index.html',
        inject: true,
        url: URLS[process.env.NODE_ENV]
      }),
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([
      {
        from: '../favicon.ico',
        path: resolve(__dirname, '../dist')
      }
    ])
  ],
  performance: {
    hints: false
  }
};
