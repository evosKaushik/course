import { ChatGoogle } from "@langchain/google/node"
import { ChatPromptTemplate } from "@langchain/core/prompts"

const model = new ChatGoogle({
    model: "gemini-2.5-flash",
    temperature: 0.3
})

const promptTemplate = ChatPromptTemplate.fromMessages([
    [
        "system",
        `You are movie recommendation expert.
        Return high-quality recommendations based on:
        - user's request
        - genre
        - mood
        - count

        Every movie should feel intentional
        Do not recommend only the most obvious titles every time.
        `
    ], [
        "human",
        `
        Preferences:
        - Genre: {genre}
        - Mood: {mood}
        - Number of movies: {count}
        `
    ]
])

export async function getRecommendation(input: {
    userPrompt: string,
    genre: string,
    mood: string,
    count: number,
}) {
    const chain = promptTemplate.pipe(model)

    const res = await chain.invoke({
        userPrompt: input.userPrompt,
        genre: input.genre,
        mood: input.mood,
        count: input.count
    })

    console.log(res.text)

    return res.text
}