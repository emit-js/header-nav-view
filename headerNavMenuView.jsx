/** @jsx dot.el */

module.exports = function(dot) {
  dot.view("headerNavMenuView", { render })
}

function render(prop, { menu }, dot) {
  return (
    <span id={prop} onClick={toggleMenu.bind(prop)}>
      {menu}
    </span>
  )
}

function toggleMenu() {
  const prop = this
  const parentProp = prop.slice(0, -1)
  const itemsId = [...parentProp, "items"].join(".")
  const items = document.getElementById(itemsId)
  const classList = items.classList

  if (classList.contains("active")) {
    items.style.display = "none"
    classList.remove("active")
  } else {
    items.style.display = "flex"
    classList.add("active")
  }
}
