'use client'

import PasswordInput from "@/components/ui/input/components/PasswordInput";
import { useState } from "react";

export default function Home() {
  const [password, setPassword] = useState("")

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col gap-6 p-8">
     <PasswordInput
      label="Password"
      placeholder="Enter Your Password"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
      required
     />
    </main>
  );
}
