import IngredientInput from "@/components/IngredientInput";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Pantry AI</h1>
      <p>Find recipes using ingredients you already have.</p>

      <IngredientInput />
    </main>
  );
}
