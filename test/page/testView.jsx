/** @jsx dot.el */

module.exports = function(dot) {
  dot.any("testViewRender", testViewRender)
  dot.any("testViewUpdate", testViewUpdate)
  dot.view("testView")
}

function testViewRender(prop, arg, dot) {
  return (
    <html id={prop}>
      <head />
      <body>
        {headerNavView(prop, arg, dot)}
        <script src="testClientBundle.js" />
      </body>
    </html>
  )
}

function headerNavView(prop, arg, dot) {
  return dot.headerNavView(prop, {
    items: [
      <a href="#">List item 1</a>,
      <a href="#">List item 2</a>,
    ],
    logo: "logo",
    menu: "menu",
  })
}

function testViewUpdate(prop, arg, dot) {
  headerNavView(prop, arg, dot)
}
