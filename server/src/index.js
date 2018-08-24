import express from "express"
import cors from "cors"
import "dotenv/config"
import { connect } from "./config/db"
import { restRouter } from "./api"
import passport from "passport";
import { configJWTStrategy} from './api/middlewares/passport-jwt';


const app = express()
const { port } = process.env

connect()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(passport.initialize())
configJWTStrategy();

app.get("/", (req, res) => {
    res.send("Ca fonctionne!")
})

app.use("/api", restRouter)


app.listen(port, () => {
    console.log("Le server fonctionne!")
})