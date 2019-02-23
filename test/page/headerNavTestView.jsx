/** @jsx dot.el */

module.exports = function(dot) {
  dot.any(
    "headerNavTestViewRender",
    headerNavTestViewRender
  )
  dot.any(
    "headerNavTestViewUpdate",
    headerNavTestViewUpdate
  )
  dot.view("headerNavTestView")
}

function headerNavTestViewRender(prop, arg, dot) {
  return (
    <html id={prop}>
      <head />
      <body>
        {headerNavView(prop, arg, dot)}
        <script src="headerNavTestClientBundle.js" />
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

function headerNavTestViewUpdate(prop, arg, dot) {
  headerNavView(prop, arg, dot)
}
