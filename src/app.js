require('dotenv').config()
const express = require('express')
const router = require("./router/router")
require("./config/database")
const app = express()
const cors = require('cors')

app.use(cors())

app.use(express.json())

app.use("/api", router)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})