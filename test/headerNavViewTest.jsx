/* eslint-env jest */
/** @jsx emit.el */

var emit = require("./page/testDot")()

require("@emit-js/render")(emit)
require("../dist/testPage")(emit)

test("build headerNavView test page", function() {
  return emit.render({
    outDir: "./dist",
    views: {
      "headerNavTest.html": {
        event: "testPage",
      },
    },
  })
})
