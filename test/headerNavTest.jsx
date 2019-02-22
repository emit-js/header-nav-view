/* eslint-env jest */
/** @jsx dot.el */

var dot = require("../dist/headerNavTestDot")()

require("@dot-event/render")(dot)
require("../dist/headerNavTestPage")(dot)

test("headerNavTestPage", function() {
  return dot.render({
    outDir: "./dist",
    views: {
      "headerNavTest.html": {
        event: "headerNavTestPage",
      },
    },
  })
})
