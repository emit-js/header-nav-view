/** @jsx dot.el */

module.exports = function(dot) {
  dot.any("headerNavMenuViewClick", headerNavMenuViewClick)
  dot.any(
    "headerNavMenuViewRender",
    headerNavMenuViewRender
  )
  dot.view("headerNavMenuView")
}

function headerNavMenuViewRender(prop, arg, dot) {
  const { menu } = arg,
    onClick = dot.headerNavMenuViewClick.bind(null, prop)

  return (
    <span id={prop} onClick={onClick}>
      {menu}
    </span>
  )
}

function headerNavMenuViewClick(prop, arg, dot) {
  const items = dot.elFind(prop, "items", [-2, 1])
  const active = dot.get(prop)

  dot.set(prop, !active)

  items.style.display = active ? "none" : "flex"
}
