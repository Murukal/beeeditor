const path = require('path')

module.exports = {
  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['.ts', '.tsx']
  },

  mode: 'production',

  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader', 'babel-loader'],
        exclude: /node-modules/
      }
    ]
  }
}
