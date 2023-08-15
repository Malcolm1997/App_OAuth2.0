require("dotenv").config()

const app = require("./api/app")
require("./api/config/db")

app.listen(app.get("port") , () => {
    console.log("Server is running on port " + app.get("port") + "...")
})