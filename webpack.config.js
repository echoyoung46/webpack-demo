const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
// module.exports = {
//   entry: './src/index.js', // 入口起点，可以指定多个入口起点
//   output: { // 输出，只可指定一个输出配置
//     filename: 'bundle.js', // 输出文件名
//     path: path.resolve(__dirname, 'dist') // 输出文件所在的目录
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           'css-loader'
//         ]
//       },
//       {
//         test: /\.(png|svg|jpg|gif)$/,
//         use: [
//           'file-loader'
//         ]
//       },
//       {
//         test: /\.(woff|woff2|eot|ttf|otf)$/,
//         use: [
//           'file-loader'
//         ]
//       }
//     ]
//   }
// };

// module.exports = {
//   // entry: './src/index.js',
//   devtool: 'inline-source-map',
//   devServer: {
//     contentBase: path.resolve(__dirname, 'dist'),
//     hot: true,
//     hotOnly: true
//   },
//   entry: {
//     app: './src/index.js',
//     print: './src/print.js'
//   },
//   output: {
//     // filename: 'bundle.js',
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'webpack demo',
//       filename: 'index.html'
//     }),
//     new CleanWebpackPlugin(['dist']),
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NamedModulesPlugin()
//   ]
// };

// module.exports = {
//   entry: {
//     app: './src/index.js',
//     another: './src/another.js'
//   },
// i};

module.exports = {
  entry: {
    app: './src/index.js',
    // another: './src/another.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack demo',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(['dist']),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common'
    // })
  ]
  
};