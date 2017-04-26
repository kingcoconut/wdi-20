const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + "/app/index.html",
  filename: "index.html",
  inject: 'body'
})

module.exports = {
  entry: [
    __dirname + "/app/index.jsx"
  ],
  output: {
    path: __dirname + "/dist",
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig
  ]
}
