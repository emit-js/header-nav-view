const emit = require("./testDot")()

require("./testPage")(emit)

emit.testPage({ element: document.documentElement })
