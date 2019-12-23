'use strict'
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    app: './src/redux/index.ts',
  },
  output: {
    filename: 'owl-redux.js',
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
    library: 'owl-redux',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      useTypescriptIncrementalApi: true,
      reportFiles: ['src/**/*.{ts}'],
      memoryLimit: 4096
    })
  ],
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all'
    }
  }
}