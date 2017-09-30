const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const autoprefixer = require('autoprefixer');

const staticSourcePath = path.join(__dirname, 'src/scss');
const sourcePath = path.join(__dirname, 'src/js');
const buildPath = path.join(__dirname, 'dist');

module.exports = {
    devtool: 'eval',
    entry: {
        base: path.resolve(staticSourcePath, 'critical.scss'),
        app: path.resolve(sourcePath, 'index.js')
    },
    output: {
        path: buildPath,
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
        modules: [
            sourcePath,
            path.resolve(__dirname, 'node_modules')
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new FaviconsWebpackPlugin(path.join(staticSourcePath, '/src/sass/images/favicon.png')),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.[hash].js',
            minChunks (module) {
                return module.context && module.context.indexOf('node_modules') >= 0;
            }
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({
                        browsers: [
                            'last 3 version',
                            'ie >= 10'
                        ]
                    })
                ],
                context: staticSourcePath
            }
        }),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.ejs'),
            path: buildPath,
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ],
                include: sourcePath
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader?sourceMap'
                ]
            },
            {
                test: /\.(eot?.+|svg?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/,
                use: 'file-loader'
            },
            {
                test: /\.(png|gif|jpg|svg)$/,
                use: 'url-loader?limit=20480',
                include: staticSourcePath
            }
        ]
    }
};
