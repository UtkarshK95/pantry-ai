import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY missing");
}

const ai = new GoogleGenAI({ apiKey });

export async function generateText(prompt: string): Promise<string> {
  const result = await ai.models.generateContent({
    model: "models/gemini-flash-latest",
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  });

  return result.text;
}
