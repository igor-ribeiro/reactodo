'use strict';

const HTMLWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackConfig = {
  title: 'React Simple Starter',
  template: './src/index.html',
  minify: {
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeComments: true,
  },
};

module.exports = {
  entry: './src/app.js',
  output: {
    path: './public',
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        exclude: /(node_modules|bower_components|public)/,
        loader: 'babel',
      }
    ],
  },
  plugins: [
    new HTMLWebpackPlugin(htmlWebpackConfig),
  ],
};
