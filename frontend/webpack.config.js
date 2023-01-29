const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const cssLoaders = [MiniCssExtractPlugin.loader, "css-loader"];

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[hash].css",
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader" },
      { test: /\.scss$/, use: [...cssLoaders, "sass-loader"] },
      { test: /\.css$/, use: cssLoaders },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // (1)
        use: "url-loader",
      },
    ],
  },
  mode: "production",
};
