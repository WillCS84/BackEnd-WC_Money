const express = require("express")
const sequelize = require("./config/database")
const cors = require("cors")
const routes = require("./routes")

const app = express()

require("dotenv").config()

const port = process.env.PORT

sequelize.sync().then(() => console.log("database connected succesfully"))

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(port, () => {
  console.log("Server started on port", `${port}`)
})
