const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        filename: 'script/bundle.js'
    },
    entry: {
        main: './src/index.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
        filename: 'style/[name].css',
        chunkFilename: '[id].css',
    }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    devServer: {
      port: 3000,
      open: false
    }
  };