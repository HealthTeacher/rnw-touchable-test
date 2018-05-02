const path = require('path');

module.exports = {
  entry: {
    index: './index.js',
    nested: './nested.js',
    polyfill: './polyfill.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
