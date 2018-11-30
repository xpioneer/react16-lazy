'use strict'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const _PROD_ = process.env.NODE_ENV === 'production'

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: false,
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React16 PROD',
      filename: 'index.html',
      template: '../src/index.html',
    })
  ]
})

module.exports = webpackConfig
