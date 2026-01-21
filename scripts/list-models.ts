import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY missing");
}

async function listModels() {
  const ai = new GoogleGenAI({ apiKey });

  const pager = await ai.models.list();

  console.log("AVAILABLE MODELS (raw):\n");

  for await (const model of pager) {
    console.log(JSON.stringify(model, null, 2));
    console.log("------------");
  }
}

listModels().catch(console.error);
