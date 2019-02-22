/** @jsx dot.el */

module.exports = function(dot) {
  require("./headerNavMenuView")(dot)
  dot.view("headerNavView", { render, update })
}

function render(prop, arg, dot) {
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

function update(prop, { menu }, dot) {
  dot.headerNavMenuView(prop, { menu })
}
