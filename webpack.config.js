const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
  entry: './src/index.ts',

  mode: 'production',

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
    static: 'compile'
  },

  performance: { hints: false },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'demo/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    // 开发模式下的入口改为demo下得index.ts
    config.entry = './demo/index.tsx'

    // devtool
    config.devtool = 'inline-source-map'
  } else {
    // 生产模式打包，需要排除react和react-dom
    config.externals = {
      react: 'react',
      'react-dom': 'react-dom'
    }
  }

  return config
}
