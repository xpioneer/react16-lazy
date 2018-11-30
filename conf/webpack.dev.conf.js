const path = require('path'),
  webpack = require('webpack'),
  merge = require('webpack-merge'),
  webpackConfig = require('./webpack.base.conf'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackConfig, {
  devtool: 'cheap-modules-eval-source-map',
  mode: 'development',
  devServer: {
    port: '8800',
    host: 'localhost',
    proxy: { },
    contentBase: path.join(__dirname, '../dist'), // boolean | string | array, static file location
    stats: {
      color: true
    },
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'React16 DEV',
      filename: 'index.html',
      template: '../src/index.html',
    })
  ]
});

  