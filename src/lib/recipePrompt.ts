export function buildRecipePrompt(ingredients: string[]) {
  return `
You are a cooking assistant.

Given the following ingredients:
${ingredients.join(", ")}

Return EXACTLY valid JSON.
No markdown.
No explanations.

JSON schema:

[
  {
    "id": "string",
    "name": "string",
    "ingredientsUsed": [{ "name": "string" }],
    "missingIngredients": [{ "name": "string" }],
    "steps": ["string"],
    "cookingTimeMinutes": number,
    "caloriesEstimate": number
  }
]

Rules:
- Use simple realistic recipes
- If nothing can be made, return an empty array
`;
}
