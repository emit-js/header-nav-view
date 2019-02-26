/* eslint-env jest */
/** @jsx dot.el */

var dot = require("../dist/testDot")()

require("@dot-event/render")(dot)
require("../dist/testPage")(dot)

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
