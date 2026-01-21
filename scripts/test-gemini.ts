import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY missing");
}

async function testGemini() {
  const ai = new GoogleGenAI({ apiKey });

  const result = await ai.models.generateContent({
    model: "models/gemini-flash-latest",
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `
Return EXACTLY valid JSON.
No markdown.
No explanations.

{
  "status": "ok",
  "message": "Gemini integration working"
}
`,
          },
        ],
      },
    ],
  });

  console.log("RAW RESPONSE:\n");
  console.log(result.text);
}

testGemini().catch(console.error);
