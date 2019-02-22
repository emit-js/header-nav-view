/* eslint-env jest */
/** @jsx dot.el */

var dot = require("./dot")()

require("@dot-event/render")(dot)

dot.any("headerNavTestPage", function(prop, arg) {
  var dot = require("./dot")()

  require("../dist/headerNavView")(dot)

  dot.view("layoutView", {
    render: function(prop, arg, dot) {
      return (
        <html>
          <head />
          <body>
            {dot.headerNavView(prop, {
              items: [
                <a href="#">List item 1</a>,
                <a href="#">List item 2</a>,
              ],
              logo: "logo",
              menu: "menu",
            })}
            <script src="testClient.js" />
          </body>
        </html>
      )
    },
  })

  dot.layoutView(prop, { element: arg.element })
  dot.css(prop, { href: "headerNav.css" })

  return dot
})

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
