const path = require('path');

module.exports = {
  entry: {
    index: './index.js',
    polyfill: './polyfill.js',
    simple: './simple.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    public: 'app.gonoodle.localhost:8080',
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
