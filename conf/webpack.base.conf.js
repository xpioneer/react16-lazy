const path = require('path'),
  webpack = require('webpack');

const _PROD_ = process.env.NODE_ENV === 'production';

const resolve = (dir) => {
  return path.resolve(process.cwd(), dir)
}

module.exports = {
  entry: {
    app: resolve("src/index"),
  },

  output: {
    path: resolve("dist"), // string

    publicPath: '/', // root Dir
    sourceMapFilename: '[name].map',
    chunkFilename: 'static/js/[name].chunk.[chunkhash].js',
    filename: 'static/js/[name].bundle.[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          resolve("src")
        ],
        loader: "babel-loader"
      }
    ]
  },

  resolve: {
    // 解析模块请求的选项
    // （不适用于对 loader 解析）
    modules: [
      "node_modules",
      resolve("src")
    ],
    // 用于查找模块的目录

    extensions: [".js", ".jsx"],

    alias: {}
  },

  context: __dirname, // string（绝对路径！）
  // webpack 的主目录
  // entry 和 module.rules.loader 选项
  // 相对于此目录解析

  target: "web", // default

  // externals: ["react", /^@angular\//],
  // 不要遵循/打包这些模块，而是在运行时从环境中请求他们

  stats: "errors-only",
  // 精确控制要显示的 bundle 信息

  optimization: {
    minimize: !_PROD_ ? false : true,
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          priority: 1,
          chunks: "all"
        },
        default: {
          name: 'common',
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },

  plugins: [ ]
}