module.exports = function() {
  const emit = require("@emit-js/emit")()

  require("@emit-js/log")(emit)
  require("@emit-js/controller")(emit)
  require("@emit-js/css")(emit)
  require("@emit-js/el")(emit)
  require("@emit-js/store")(emit)
  require("@emit-js/view")(emit)

  emit("logLevel", "debug")

  return emit
}
