import { Router } from "express"
import * as Controller from "./controller"

const challengueRouter = Router()

challengueRouter.get("/", Controller.findAll)
challengueRouter.get("/:id", Controller.findOne)
challengueRouter.post("/", Controller.create)
challengueRouter.put("/:id", Controller.update)
challengueRouter.delete("/:id", Controller.remove)

export default challengueRouter