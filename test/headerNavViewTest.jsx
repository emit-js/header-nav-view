/* eslint-env jest */
/** @jsx dot.el */

var dot = require("./page/testDot")()

require("@dot-event/render")(dot)
require("./page/testPage")(dot)

test("build headerNavView test page", function() {
  return dot.render({
    outDir: "./dist",
    views: {
      "headerNavTest.html": {
        event: "testPage",
      },
    },
  })
})
