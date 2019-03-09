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
  const parentProp = prop.slice(0, -1)
  const items = dot.elFind(parentProp, "items")
  const active = dot.get(prop)

  dot.set(prop, !active)

  items.style.display = active ? "none" : "flex"
}
