import express from "express"
import cors from "cors"
import { PORT } from "./config.js"
import {CategoryRouter, QuestionRouter, ChallengueRouter, ProductRouter} from "../src/components"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/category", CategoryRouter)
app.use("/api/question", QuestionRouter)
app.use("/api/challengue", ChallengueRouter)

app.use("/api/product", ProductRouter)

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))