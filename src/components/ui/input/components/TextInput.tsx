"use client";

import { useId } from "react";
import type { InputStatus, TextInputProps } from "../input.types";
import FormField from "./FormField";

const statusStyles: Record<InputStatus, string> = {
  default: "border-border focus-visible:border-default",
  error: "border-distructive focus-visible:border-distructive",
};

export default function TextInput({
  id,
  label,
  status = "default",
  errorMessage,
  required,
  disabled,
  icon,
  type = "text",
  className = "",
  ...props
}: TextInputProps) {
  const generatedId = useId(); //? Generate a unique ID for the input field if no ID is provided
  const inputId = id ?? generatedId; //? If an ID is provided, use it; otherwise, use the generated ID

  const errorMessageId = `${inputId}-error`;

  //? DescribedBy is used to associate the input field with the error message for accessibility purposes.
  //? 1. If there is an error and error message, return the message id, otherwithe return undefined.
  //? (.filter) for removing any empty values like undefined && (.join) to turn any array to string and seperate between IDs by space
  //? || undefined if there isn't any Id, provide undefined value instead of an empty string
  const describedBy =
    [
      status === "error" && errorMessage ? errorMessageId : undefined,
      props["aria-describedby"],
    ]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <FormField
      id={inputId}
      label={label}
      status={status}
      errorMessage={errorMessage}
      required={required}
    >
      <div className="relative w-full">
        <input
          {...props}
          id={inputId}
          type={type}
          required={required}
          disabled={disabled}
          aria-invalid={status === "error" ? true : props["aria-invalid"]}
          aria-describedby={describedBy}
          className={`
          w-full
          rounded-none
          border
          bg-surface
          px-3
          py-2.5
          text-sm
          text-foreground
          placeholder:text-gray-400
          outline-none
          transition-colors
          duration-200
          focus-visible:ring-1
          disabled:cursor-not-allowed
          disabled:bg-gray-100
          disabled:text-gray-400
          ${icon ? "pr-10" : ""}
          ${statusStyles[status]}
          ${className}
        `}
        />

        {icon && (
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {icon}
          </span>
        )}
      </div>
    </FormField>
  );
}
