const path = require('path');
const webpack = require('webpack');

const modules = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader'
      }
    ],
  },
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    port: 8000,
    open: true,
    hot: true,
  }
}

module.exports = modules;