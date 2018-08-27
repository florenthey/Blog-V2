import express from "express"
import { articleRouter } from "./resources/articles"
import { userRouter } from "./resources/users"
import { profilRouter } from "./resources/profils"

export const restRouter = express.Router()

restRouter.use("/articles", articleRouter)
restRouter.use("/users", userRouter)
restRouter.use("profils", profilRouter)