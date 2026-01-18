import { Recipe } from "@/types/recipe";

type Props = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: Props) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 16 }}>
      <h3>{recipe.name}</h3>

      <p>
        ⏱ {recipe.cookingTimeMinutes} mins · 🔥 {recipe.caloriesEstimate} cal
      </p>

      <strong>Steps</strong>
      <ol>
        {recipe.steps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
