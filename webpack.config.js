const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: {
    index: './src/js/index.js',
    auth: './src/js/auth.js',
    home: './src/js/home.js',
   /* popular: './src/js/popular.js',
    archive: './src/js/archive.js',*/
    settings: './src/js/settings.js'
  },
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
     
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/settings.html',
      filename: 'settings.html',
      chunks: ['settings']
    }),
    new HtmlWebpackPlugin({
      template: './src/home.html',
      filename: 'home.html',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      template: './src/auth.html',
      filename: 'auth.html',
      chunks: ['auth']
    }),
  ],
  resolve: {
    extensions: ['.js', '.scss']
  }
};
