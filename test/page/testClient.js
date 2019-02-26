const dot = require("./testDot")()

require("./testPage")(dot)

dot.testPage({ element: document.documentElement })
