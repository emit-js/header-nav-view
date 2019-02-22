/** @jsx dot.el */

module.exports = function(dot) {
  dot.view("headerNavView", { render, update })
}

function render(prop, { items, logo, menu }, dot) {
  return (
    <header id={prop}>
      {logo}
      <nav>
        {menu && <span>{menu}</span>}
        {items && (
          <ul>
            {items && items.map(item => <li>{item}</li>)}
          </ul>
        )}
      </nav>
    </header>
  )
}

function update(prop, { element }) {
  const toggle = element.querySelector("span"),
    ul = element.querySelector("ul")

  toggle.addEventListener("click", function() {
    const classList = this.classList

    if (classList.contains("active")) {
      ul.style.display = "none"
      classList.remove("active")
    } else {
      ul.style.display = "flex"
      classList.add("active")
    }
  })
}
