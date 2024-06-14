

const express = require ("express")

const app = express()

const cors= require("cors")
const bookRoute = require("./routes/booksRoutes")

require("./connection/connec")

app.use(cors())
app.use(express.json())

app.use("/api/v1",bookRoute)
app.listen(8000,()=>{
console.log("my server has started");
})

