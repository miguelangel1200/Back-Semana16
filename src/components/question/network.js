import { Router } from "express"
import * as Controller from "./controller"

const questionRouter = Router()

questionRouter.get("/", Controller.findAll)
questionRouter.get("/:id", Controller.findOne)
questionRouter.post("/", Controller.create)
questionRouter.put("/:id", Controller.update)
questionRouter.delete("/:id", Controller.remove)

export default questionRouter