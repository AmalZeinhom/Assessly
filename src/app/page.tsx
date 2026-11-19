'use client'

import NumberInput from "@/components/ui/input/components/NumberInput";
import OTPInput from "@/components/ui/input/components/OTPInput";
import TextInput from "@/components/ui/input/components/TextInput";
import { useState } from "react";


export default function Home() {
     const [otp, setOtp] = useState("");


  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col gap-6 p-8">
      <OTPInput
        label="Verification Code"
        value={otp}
        onChange={setOtp}
        length={6}
        status="default"
      />

      <TextInput 
      label="Name"
      placeholder="Enter your name"
      required

      />

      <NumberInput 
      label="Age"
      placeholder="Enter your age"
      required
      />
    </main>
  );
}
