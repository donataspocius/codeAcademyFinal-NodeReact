const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const cssModulesTypescriptLoader = require("css-modules-typescript-loader");

const cssLoaders = ["style-loader", "css-loader"];

module.exports = {
  entry: "./src/index.tsx",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },

      { test: /\.scss$/, use: [...cssLoaders, "sass-loader"] },
      {
        test: /\.css$/,
        use: cssLoaders,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  mode: "development",
  devServer: {
    port: 3000,
    open: true,
  },
};
