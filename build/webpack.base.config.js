'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(ts|tsx)$/,
  use: [{
    loader: 'ts-loader',
    options: {
      transpileOnly: true
    }
  }, {
    loader: 'eslint-loader',
    options: {
      formatter: require('eslint-friendly-formatter'),
      emitWarning: !config.dev.showEslintErrorsInOverlay
    }
  }],
  include: [resolve('src'), resolve('examples')],
  exclude: /node_modules/
})

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      'owl-redux': resolve('dist/owl-redux.js')
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      ...utils.styleLoaders({
        sourceMap: config.dev.cssSourceMap,
        usePostCSS: false
      })
    ]
  },
  plugins: []
}