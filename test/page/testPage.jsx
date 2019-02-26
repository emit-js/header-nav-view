/** @jsx dot.el */

module.exports = function(dot) {
  dot.controller("testPage", testPage)
}

function testPage(prop, arg) {
  const dot = require("./testDot")()

  require("./testView")(dot)
  require("./headerNavView")(dot)

  dot.testView(prop, { element: arg.element })

  if (arg.path) {
    dot.css(prop, { href: "headerNav.css" })
  }

  return dot
}
