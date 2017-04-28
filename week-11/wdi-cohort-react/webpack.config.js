// Include the contents of some package
const HTMLWebpackPlugin = require('html-webpack-plugin');

// Configure it
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + "/app/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  entry: [
    './app/main.jsx'
  ],
  output: {
    path: __dirname + "/dist",
    filename: 'app_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig
  ]
};
