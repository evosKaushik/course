import type { Request, Response } from "express";
import { getRecommendation } from "../services/langchain.service.js";

export const recommendedMoviesController = async (req: Request, res: Response) => {
    try {
        const {
            userPrompt = "Suggest movies for rainy night",
            genre = "thriller",
            mood = "relaxed",
            count = "5"
        } = req.body

        const result = await getRecommendation({
            userPrompt, genre, mood, count: Number(count)
        })
        console.log({result})
        res.status(201).json({result}) 
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Somethings goes wrong" })
    }
}