const dot = require("./headerNavTestDot")()

require("./headerNavTestPage")(dot)

dot.headerNavTestPage({ element: document.documentElement })
