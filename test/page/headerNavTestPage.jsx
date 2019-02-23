/** @jsx dot.el */

module.exports = function(dot) {
  dot.controller("headerNavTestPage", headerNavTestPage)
}

function headerNavTestPage(prop, arg) {
  var dot = require("./headerNavTestDot")()

  require("./headerNavTestView")(dot)
  require("./headerNavView")(dot)

  dot.headerNavTestView(prop, { element: arg.element })

  if (arg.path) {
    dot.css(prop, { href: "headerNav.css" })
  }

  return dot
}
