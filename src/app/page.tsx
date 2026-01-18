"use client";

import { useState } from "react";
import IngredientInput from "@/components/IngredientInput";
import { Recipe } from "@/types/recipe";

export default function Home() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const generateRecipes = () => {
    const fakeRecipe: Recipe = {
      id: "1",
      name: "Simple Omelette",
      ingredientsUsed: ingredients.map((i) => ({ name: i })),
      missingIngredients: [],
      steps: [
        "Crack the eggs into a bowl",
        "Whisk well",
        "Cook on a pan until done",
      ],
      cookingTimeMinutes: 10,
      caloriesEstimate: 250,
    };

    setRecipes([fakeRecipe]);
  };

  return (
    <main style={{ padding: 24 }}>
      <h1>Pantry AI</h1>
      <p>Find recipes using ingredients you already have.</p>

      <IngredientInput onChange={setIngredients} />

      <button
        onClick={generateRecipes}
        style={{ marginTop: 16 }}
        disabled={ingredients.length === 0}
      >
        Generate Recipes
      </button>

      {recipes.length > 0 && (
        <section style={{ marginTop: 24 }}>
          <h2>Recipes</h2>

          {recipes.map((recipe) => (
            <div key={recipe.id} style={{ marginBottom: 16 }}>
              <h3>{recipe.name}</h3>
              <p>Time: {recipe.cookingTimeMinutes} mins</p>
              <p>Calories: {recipe.caloriesEstimate}</p>

              <ol>
                {recipe.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}
