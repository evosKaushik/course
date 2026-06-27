import "dotenv/config"

import express from "express"
import cors from "cors"
import { getRecommendation } from "./services/langchain.service.js"

const app = express()

app.use(cors())

app.use(express.json())


app.get("/health", (req, res) => {
    res.json({ status: "ok" })
})
app.post("/movie/", getRecommendation)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})