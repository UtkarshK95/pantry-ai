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
    <main className="min-h-screen bg-gray-50 p-6 text-gray-900">
      <div className="mx-auto max-w-2xl space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Pantry AI</h1>

        <p className="text-gray-600">
          Find recipes using ingredients you already have.
        </p>

        <IngredientInput onChange={setIngredients} />

        <button
          onClick={generateRecipes}
          disabled={ingredients.length === 0 || loading}
          className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Recipes"}
        </button>

        {error && <p className="text-red-500">{error}</p>}

        <section className="space-y-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </section>
      </div>
    </main>
  );
}
