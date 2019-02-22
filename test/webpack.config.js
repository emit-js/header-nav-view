var path = require("path")

module.exports = {
  entry: {
    testClient: "./test/testClient",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
  },
}
