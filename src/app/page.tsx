"use client";

import OTPInput from "@/components/ui/input/components/OTPInput";
import Tooltip from "@/components/ui/tooltip/Tooltip";
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

     

      <Tooltip
        content= "Save Changes"
        position="top"
      >
        <button>Save</button>
      </Tooltip>
    </main>
  );
}
