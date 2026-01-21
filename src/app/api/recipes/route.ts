import { generateText } from "@/lib/gemini";
import { buildRecipePrompt } from "@/lib/recipePrompt";
import { Recipe } from "@/types/recipe";
import { parseRecipes } from "@/lib/recipeParser";

export async function POST(req: Request) {
  try {
    const { ingredients } = await req.json();

    const prompt = buildRecipePrompt(ingredients);
    const text = await generateText(prompt);

    const recipes = parseRecipes(text);

    return Response.json(recipes);
  } catch (error) {
    console.error("Recipe generation failed:", error);

    return new Response(
      JSON.stringify({ error: "Failed to generate recipes" }),
      { status: 500 }
    );
  }
}
