"use client";

import Checkbox from "@/components/ui/checkbox/Checkbox";
import OTPInput from "@/components/ui/input/OTPInput/OTPInput";
import TextArea from "@/components/ui/input/Textarea/Textarea";
import Toast from "@/components/ui/toast/Toast";
import { useState } from "react";

export default function Home() {
  const [otp, setOtp] = useState("");
  const [description, setDescription] = useState("");

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col gap-6 p-8">
      <OTPInput
        label="Verification Code"
        value={otp}
        onChange={setOtp}
        length={6}
        status="default"
      />
      <Toast message="Something went wrong" variant="error" />

      <TextArea
        label="Description"
        name="description"
        placeholder="Write your description..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        maxLength={200}
        showCharacterCount
        status="error"
        required
      />

      <legend className="text-base font-semibold">Label</legend>

      <Checkbox label="Checkbox Text Example" appearance="outline" />

      <Checkbox label="Checkbox Text Example" appearance="solid" />

      <Checkbox label="Checkbox Text Example" appearance="solid"  />
    </main>
  );
}
