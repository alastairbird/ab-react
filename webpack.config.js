const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
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
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]__[name]',
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer()
              ]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(|jpg|jpeg|png|svg)$/,
        loader: 'url-loader',
        options: {
          name: 'img/[hash].[ext]',
          publicPath: '/',
          limit: 25000,
        },
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    compress: true,
    port: 9000,
      historyApiFallback: {
        index: 'index.html'
      }
    }
};

module.exports = config;