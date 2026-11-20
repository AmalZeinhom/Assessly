"use client";

import OTPInput from "@/components/ui/input/components/OTPInput";
import Toast from "@/components/ui/input/components/Toast";
import { useState } from "react";
import { SquareCheck } from "lucide-react";

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

      <Toast message="An Error Occurred" variant="warning" />
    </main>
  );
}
