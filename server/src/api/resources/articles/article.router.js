import express from "express"
import articleController from "./article.ctrl"

export const articleRouter = express.Router()

articleRouter.post("/add", articleController.create)
articleRouter.get("/", articleController.findAll)

articleRouter.route("/:id")
  .get(articleController.findOne)
  .put(articleController.update)
  .delete(articleController.delete)