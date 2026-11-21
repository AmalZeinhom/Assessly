"use client";

import OTPInput from "@/components/ui/input/OTPInput/OTPInput";
import TextArea from "@/components/ui/input/Textarea/Textarea";
import Toast from "@/components/ui/toast/Toast";
import Tooltip from "@/components/ui/tooltip/Tooltip";
import { useState } from "react";

export default function Home() {
  const [otp, setOtp] = useState("");
  const [description, setDescription] = useState("")

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col gap-6 p-8">
      <OTPInput
        label="Verification Code"
        value={otp}
        onChange={setOtp}
        length={6}
        status="default"
      />
      <Toast 
        message="Something went wrong"
        variant="error"
      />

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

      <Tooltip
        content= "Save Changes"
        position="top"
      >
        <button>Save</button>
      </Tooltip>
    </main>
  );
}
