const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  context: "_dirname",
  entry: "./src/index;js",
  output: {
    path: path.resolve(__dirname, ""),
    __filename: "main.js",
    publicPath: "/",
  },
  //...
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
  ],
};
