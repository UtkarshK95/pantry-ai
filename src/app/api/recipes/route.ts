import { Recipe } from "@/types/recipe";

export async function POST(req: Request) {
  const { ingredients } = await req.json();

  const recipe: Recipe = {
    id: "1",
    name: "Simple Omelette",
    ingredientsUsed: ingredients.map((i: string) => ({ name: i })),
    missingIngredients: [],
    steps: [
      "Crack the eggs into a bowl",
      "Whisk well",
      "Cook on a pan until done",
    ],
    cookingTimeMinutes: 10,
    caloriesEstimate: 250,
  };

  return Response.json([recipe]);
}
