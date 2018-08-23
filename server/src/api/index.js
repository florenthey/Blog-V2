import express from "express"
import { articleRouter } from "./resources/articles"

export const restRouter = express.Router()

restRouter.use("/articles", articleRouter)