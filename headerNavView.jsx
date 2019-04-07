/** @jsx emit.el */

module.exports = function(emit) {
  if (emit.headerNavView) {
    return
  }

  require("./headerNavMenuView")(emit)

  emit.any("headerNavViewRender", headerNavViewRender)
  emit.any("headerNavViewUpdate", headerNavViewUpdate)

  emit.view("headerNavView")
}

function headerNavViewRender(arg, prop, emit) {
  const { items, logo, menu } = arg

  return (
    <header id={prop}>
      {logo}
      <nav>
        {emit.headerNavMenuView(prop, { menu })}
        {items && (
          <ul id={[...prop, "items"]}>
            {items && items.map(item => <li>{item}</li>)}
          </ul>
        )}
      </nav>
    </header>
  )
}

function headerNavViewUpdate(arg, prop, emit) {
  emit.headerNavMenuView(prop, { menu: arg.menu })
}
