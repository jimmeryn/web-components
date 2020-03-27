const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  resolve: {
    extensions: [".js", "jsx", "css"],
    modules: ["node_modules"]
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "main.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: "/node_modules/",
        use: "babel-loader"
      },
      {
        test: /\.css?$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
      filename: "index.html"
    })
  ]
};
