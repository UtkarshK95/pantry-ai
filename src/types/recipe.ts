import { Ingredient } from "./ingredient";

export type Recipe = {
  id: string;
  name: string;

  ingredientsUsed: Ingredient[];
  missingIngredients: Ingredient[];

  steps: string[];

  cookingTimeMinutes: number;
  caloriesEstimate: number;
};
