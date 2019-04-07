/** @jsx emit.el */

module.exports = function(emit) {
  emit.any("testViewRender", testViewRender)
  emit.any("testViewUpdate", testViewUpdate)
  emit.view("testView")
}

function testViewRender(arg, prop, emit) {
  return (
    <html id={prop}>
      <head />
      <body>
        {headerNavView(arg, prop, emit)}
        <script src="testClientBundle.js" />
      </body>
    </html>
  )
}

function headerNavView(arg, prop, emit) {
  return emit.headerNavView(prop, {
    items: [
      <a href="#">List item 1</a>,
      <a href="#">List item 2</a>,
    ],
    logo: "logo",
    menu: "menu",
  })
}

function testViewUpdate(arg, prop, emit) {
  headerNavView(arg, prop, emit)
}
