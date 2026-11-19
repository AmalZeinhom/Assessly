'use client'

import TextInput from "@/components/ui/input/components/TextInput";
import { PhoneCountry } from "@/components/ui/input/input.types";
import PhoneInput from "@/components/ui/input/Phone/PhoneInput";
import { useState } from "react";


const initialCountry: PhoneCountry = {
  code: "EG",
  name: "Egypt",
  dialCode: "+20",
};

export default function Home() {
   const [phone, setPhone] = useState("");
   const [country, setCountry] = useState<PhoneCountry>(initialCountry);

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col gap-6 p-8">
      <PhoneInput
        label="Phone Number"
        countryCode={country.code}
        onCountryChange={setCountry}
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        required
      />

      <TextInput 
      label="Name"
      placeholder="Enter your name"
      required
      
      />
    </main>
  );
}
