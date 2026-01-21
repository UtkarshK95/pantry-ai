"use client";

import { useState } from "react";

type Props = {
  onChange: (ingredients: string[]) => void;
};

export default function IngredientInput({ onChange }: Props) {
  const [input, setInput] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);

  const addIngredient = () => {
    const value = input.trim().toLowerCase();
    if (!value) return;

    if (ingredients.includes(value)) {
      setInput("");
      return;
    }

    const updated = [...ingredients, value];
    setIngredients(updated);
    onChange(updated);
    setInput("");
  };

  return (
    <div className="space-y-3">
      <h2 className="font-semibold text-gray-800">Ingredients</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="e.g. eggs"
        className="w-full rounded border p-2"
      />

      <button
        onClick={addIngredient}
        className="rounded bg-gray-800 px-3 py-1 text-white"
      >
        Add
      </button>

      <ul className="list-disc pl-5 text-sm text-gray-700">
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
