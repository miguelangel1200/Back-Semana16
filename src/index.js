import express from "express"
import cors from "cors"
import {CategoryRouter, QuestionRouter, ChallengueRouter} from "./components"

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.use("/api/category", CategoryRouter)
app.use("/api/question", QuestionRouter)
app.use("/api/challengue", ChallengueRouter)

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))