"use client";

import { useState } from "react";
import IngredientInput from "@/components/IngredientInput";
import { Recipe } from "@/types/recipe";
import RecipeCard from "@/components/RecipeCard";

export default function Home() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateRecipes = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients }),
      });

      if (!res.ok) {
        throw new Error("API failed");
      }

      const data = await res.json();
      setRecipes(data);
    } catch {
      setError("Failed to generate recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: 24 }}>
      <h1>Pantry AI</h1>
      <p>Find recipes using ingredients you already have.</p>

      <IngredientInput onChange={setIngredients} />

      <button
        onClick={generateRecipes}
        disabled={ingredients.length === 0 || loading}
      >
        {loading ? "Generating..." : "Generate Recipes"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

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
