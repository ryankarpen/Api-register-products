const express = require("express")
const cors = require("cors")
const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000

const conn = require("./db/conn")
conn()


const routes = require("./routes/router")

app.use("/api", routes)

app.listen(port, function(){
    console.log("Servidor online")
})