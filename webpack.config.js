const path = require('path')

module.exports = {
  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd'
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
      { test: /\.css$/, use: [{ loader: 'style-loader' }, 'css-loader'] },
      {
        test: /\.(ts|tsx)$/,
        use: [
          // {
          //   loader: 'ts-loader'
          // },
          'babel-loader'
        ],
        exclude: /node-modules/
      }
    ]
  }
}
