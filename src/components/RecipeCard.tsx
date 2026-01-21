import { Recipe } from "@/types/recipe";

type Props = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: Props) {
  return (
    <div className="rounded border bg-white p-4 shadow-sm text-gray-900">
      <h3 className="text-lg font-semibold">{recipe.name}</h3>

      <p className="text-sm text-gray-500">
        ⏱ {recipe.cookingTimeMinutes} mins · 🔥 {recipe.caloriesEstimate} cal
      </p>

      <ol className="mt-2 list-decimal pl-5 text-sm text-gray-800">
        {recipe.steps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
