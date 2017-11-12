const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        exclude : /node_modules/,
        loader : 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: [
          path.resolve(__dirname, 'src/sass/base'),
        ],
        use: ExtractTextPlugin.extract(
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              localIdentName: '[local]__[name]',
              modules: true,
              sourceMap: development,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer(),
              ],
            },
          },
          'sass-loader',
        ),
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'src/sass/base'),
        ],
        use: ExtractTextPlugin.extract(
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: development,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer(),
              ],
            },
          },
          'sass-loader',
        ),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer(),
              ],
            },
          },
        ),
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
  devServer: {
  	contentBase: path.resolve(__dirname, 'src/client'),
  	compress: true,
  	port: 9000,
  }
};

module.exports = config;