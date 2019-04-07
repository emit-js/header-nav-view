/** @jsx emit.el */

module.exports = function(emit) {
  emit.any("headerNavMenuViewClick", headerNavMenuViewClick)
  emit.any(
    "headerNavMenuViewRender",
    headerNavMenuViewRender
  )
  emit.view("headerNavMenuView")
}

function headerNavMenuViewRender(arg, prop, emit) {
  const { menu } = arg,
    onClick = emit.headerNavMenuViewClick.bind(null, prop)

  return (
    <span id={prop} onClick={onClick}>
      {menu}
    </span>
  )
}

function headerNavMenuViewClick(arg, prop, emit) {
  const parentProp = prop.slice(0, -1)
  const items = emit.elFind(parentProp, "items")
  const active = emit.get(prop)
  console.log(JSON.stringify(prop), active)

  emit.set(prop, !active)

  items.style.display = active ? "none" : "flex"
}
