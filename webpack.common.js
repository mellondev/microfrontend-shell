const webpack = require('webpack');
const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  resolve: {
    mainFields: ['browser', 'module', 'main']
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: '@ngtools/webpack' },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: 'body',
            },
          },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          context: path.resolve(__dirname, 'src/'),
          outputPath: 'assets',
          publicPath: 'assets',
          useRelativePaths: true,
          esModule: false,
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      remotes: {},
      shared: [
        '@angular/core',
        '@angular/common',
        '@angular/router',
        '@angular/material/card',
        '@angular/material/button',
        'md-shell-core'
      ],
    }),
    new CopyPlugin({
      patterns: [
        { from: 'projects/shell/src/assets', to: 'assets' },
        { from: 'projects/shell/src/favicon.ico', to: '' },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './projects/shell/src/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/shell'),
  },
};
