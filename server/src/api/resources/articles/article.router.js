import express from "express"
import articleController from "./article.ctrl"

export const articleRouter = express.Router()

articleRouter.post("/add", articleController.create)

