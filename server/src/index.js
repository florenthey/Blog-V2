import express from "express"
import "dotenv/config"
import { connect } from "./config/db"
import { restRouter } from "./api"

const app = express()
const { port } = process.env

connect()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.send("Ca fonctionne!")
})

app.use("/api", restRouter)


app.listen(port, () => {
    console.log("Le server fonctionne!")
})