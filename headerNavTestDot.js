module.exports = function() {
  const dot = require("dot-event")()

  require("@dot-event/log")(dot)
  require("@dot-event/controller")(dot)
  require("@dot-event/css")(dot)
  require("@dot-event/el")(dot)
  require("@dot-event/view")(dot)

  return dot
}
