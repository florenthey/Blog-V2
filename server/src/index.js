import express from "express"
import "dotenv/config"
import { connect } from "./config/db"

const app = express()
const { port } = process.env

connect()

app.use("/", (req, res) => {
    res.send("Ca fonctionne!")
})









app.listen(port, () => {
    console.log("Le server fonctionne!")
})