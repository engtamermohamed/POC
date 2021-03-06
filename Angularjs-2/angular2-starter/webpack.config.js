var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  output:{
    path: './dist',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] }
    ]
  },
  resolve: {
    extensions: ['','.js','.ts']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
