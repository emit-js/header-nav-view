/** @jsx emit.el */

module.exports = function(emit) {
  emit.controller("testPage", testPage)
}

function testPage(arg, prop) {
  const emit = require("./testDot")()

  require("./testView")(emit)
  require("../")(emit)

  emit.testView(prop, { element: arg.element })

  if (arg.path) {
    emit.css(prop, { href: "headerNav.css" })
  }

  return emit
}
