// Main imports | DON'T CHANGE
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const pkg = require('./package.json');

// Project related settings
const ENV = process.env.NODE_ENV || 'development';
const IS_PROD = ENV === 'production';
const dist = './dist';
const port = 8080;
const notifications = false;

// Webpack configuration | DON'T CHANGE
const plugins = [
  new MiniCssExtractPlugin({
    filename: IS_PROD ?  "[name].[contenthash].css" : "[name].css",
  }),
  new HtmlWebpackPlugin({
    title: pkg.displayName,
    template: './src/html/index.html'
  })
];

notifications ? plugins.push(
  new WebpackNotifierPlugin({
    title: pkg.displayName,
    alwaysNotify: true
  })) : plugins;

module.exports = {
  entry: {
    main: './src/index.js'
  },
  mode: ENV,
  output: {
    path: path.join(__dirname, dist),
    filename: IS_PROD ? 'bundle.[contenthash].js' : 'bundle.js',
    chunkFilename: 'bundle.[chunk].js',
    clean: true
  },
  plugins,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.svg/,
        type: 'asset/resource'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ]
      }
    ]
  },
  devServer: {
    compress: true,
    port: port,
    host: 'localhost',
    hot: true
  }
};