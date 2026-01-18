"use client";

import { useState } from "react";

type Props = {
  onChange: (ingredients: string[]) => void;
};

export default function IngredientInput({ onChange }: Props) {
  const [input, setInput] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);

  const addIngredient = () => {
    const value = input.trim();
    if (!value) return;

    const updated = [...ingredients, value];
    setIngredients(updated);
    onChange(updated);

    setInput("");
  };

  return (
    <div style={{ maxWidth: 400 }}>
      <h2>Add Ingredients</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="e.g. eggs"
        style={{ padding: 8, width: "100%" }}
      />

      <button onClick={addIngredient} style={{ marginTop: 8 }}>
        Add
      </button>

      <ul style={{ marginTop: 16 }}>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
