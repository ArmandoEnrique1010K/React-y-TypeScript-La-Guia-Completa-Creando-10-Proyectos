import { streamText } from "ai";
import { openrouter } from "../lib/ai";

export async function generateRecipeFromOpenRouter(prompt: string) {
    const result = streamText({
        model: openrouter("openai/gpt-oss-20b:free"),
        prompt,
        system: "Eres un bartender que tiene 50 años de experiencia y le sirvió una bebida a James Bond",
        temperature: 0.6,
    });

    return result.textStream;
}
