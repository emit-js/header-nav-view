var path = require("path")

module.exports = {
  entry: {
    headerNavTestClient: "./test/headerNavTestClient",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
  },
}
