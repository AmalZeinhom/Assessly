"use client";

import { useState } from "react";
import { PasswordInputProps } from "../input.types";
import TextInput from "./TextInput";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordInput({ ...props }: PasswordInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  return (
    <TextInput
      {...props}
      type={isPasswordVisible ? "text" : "password"}
      autoComplete={props.autoComplete ?? "current-password"}
      endIcon={
        <button
          type="button"
          onClick={togglePasswordVisibility}
          aria-label={isPasswordVisible ? "Hide Password" : "Show Password"}
          aria-pressed={isPasswordVisible}
          className="
            inline-flex items-center justify-center
            text-grey-500
            transition-colors
            hover:text-foreground
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-default
            rounded-sm
          "
        >
          {isPasswordVisible ? <Eye size={18} /> : <EyeOff size={18} />}
        </button>
      }
    />
  );
}
