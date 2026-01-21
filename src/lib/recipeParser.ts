import { Recipe } from "@/types/recipe";

export function parseRecipes(text: string): Recipe[] {
  try {
    const parsed = JSON.parse(text);

    if (!Array.isArray(parsed)) {
      throw new Error("Response is not an array");
    }

    return parsed.map((r, index) => ({
      id: r.id ?? String(index),
      name: r.name ?? "Untitled recipe",
      ingredientsUsed: r.ingredientsUsed ?? [],
      missingIngredients: r.missingIngredients ?? [],
      steps: r.steps ?? [],
      cookingTimeMinutes: Number(r.cookingTimeMinutes ?? 0),
      caloriesEstimate: Number(r.caloriesEstimate ?? 0),
    }));
  } catch (err) {
    console.error("Failed to parse Gemini output:", text);
    throw new Error("Invalid recipe format");
  }
}
