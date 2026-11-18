'use client'

import NumberInput from "@/components/ui/input/components/NumberInput";
import { useState } from "react";

export default function Home() {
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col gap-6 p-8">
      <NumberInput
        label="Quantity"
        placeholder="Enter Quantity"
        value={quantity}
        min={1}
        max={100}
        onChange={(event) => {setQuantity(Number(event.target.value))}}
      />
    </main>
  );
}
