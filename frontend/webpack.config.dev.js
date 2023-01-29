const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const cssLoaders = ["style-loader", "css-loader"];

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },

      { test: /\.scss$/, use: [...cssLoaders, "sass-loader"] },
      { test: /\.css$/, use: cssLoaders },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      },
    ],
  },
  mode: "development",
  devServer: {
    port: 3000,
  },
};
