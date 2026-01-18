"use client";

import { useState } from "react";
import IngredientInput from "@/components/IngredientInput";
import { Recipe } from "@/types/recipe";
import RecipeCard from "@/components/RecipeCard";

export default function Home() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const generateRecipes = async () => {
    const res = await fetch("/api/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredients }),
    });

    const data = await res.json();
    setRecipes(data);
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
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </section>
      )}
    </main>
  );
}
