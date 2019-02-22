const dot = require("../dist/headerNavTestDot")()

require("../dist/headerNavTestPage")(dot)

dot.headerNavTestPage({ element: document.documentElement })
