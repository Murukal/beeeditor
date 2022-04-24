const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, 'compile'),
    filename: 'index.js',
    libraryTarget: 'umd',
    globalObject: 'this'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  mode: 'production',

  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  },

  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'], exclude: /node-modules/ },
      {
        test: /\.(ts|tsx)$/,
        use: ['babel-loader'],
        exclude: /node-modules/
      }
    ]
  },

  devServer: {
    contentBase: 'compile'
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'demo/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}
