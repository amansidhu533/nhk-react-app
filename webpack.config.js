const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  context: "_dirname",
  entry: "./src/index;js",
  output: {
    path: path.resolve(__dirname, "dist"),
    __filename: "index.js",
    publicPath: "/",
  },
  devServer: { historyApiFallback: { index: "./index.html" } },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
  ],
};
