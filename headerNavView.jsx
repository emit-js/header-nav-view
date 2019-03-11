/** @jsx dot.el */

module.exports = function(dot) {
  if (dot.headerNavView) {
    return
  }

  require("./headerNavMenuView")(dot)

  dot.any("headerNavViewRender", headerNavViewRender)
  dot.any("headerNavViewUpdate", headerNavViewUpdate)

  dot.view("headerNavView")
}

function headerNavViewRender(prop, arg, dot) {
  const { items, logo, menu } = arg

  return (
    <header id={prop}>
      {logo}
      <nav>
        {dot.headerNavMenuView(prop, { menu })}
        {items && (
          <ul id={[...prop, "items"]}>
            {items && items.map(item => <li>{item}</li>)}
          </ul>
        )}
      </nav>
    </header>
  )
}

function headerNavViewUpdate(prop, { menu }, dot) {
  dot.headerNavMenuView(prop, { menu })
}
