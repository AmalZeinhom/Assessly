"use client";

import { ChangeEvent, SyntheticEvent, useId, useState } from "react";
import { OTPInputProps } from "../input.types";
import FormField from "./FormField";

export default function OTPInput({
  id,
  name,
  label,
  value,
  onChange,
  length = 6,
  status = "default",
  errorMessage,
  disabled = false,
  required = false,
}: OTPInputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const errorMessageId = `${inputId}-error`;

  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  //? This function ensures that the value only contains digits and is limited to the specified length.
  const indexValue = value.replace(/\D/g, "").slice(0, length);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value.replace(/\D/g, "").slice(0, length);

    onChange(nextValue);

    setActiveIndex(Math.min(nextValue.length, length - 1));
  };

  const handleFocus = (input: HTMLInputElement) => {
    input.setSelectionRange(indexValue.length, indexValue.length);
    setActiveIndex(Math.min(indexValue.length, length - 1));
  };

  const handleSelect = (even: SyntheticEvent<HTMLInputElement>) => {
    const cursorPosition = even.currentTarget.selectionStart ?? 0;
    setActiveIndex(Math.min(cursorPosition, length - 1));
  };

  const hasError = status === "error";

  const getSlotStyles = (index: number) => {
    const isFilled = Boolean(indexValue[index]);
    const isActive = isFocused && activeIndex === index;

    return [
      "flex h-12 w-12 items-center justify-center",
      "rounded-md border text-lg font-semibold",
      "transition-colors",
      hasError
        ? "border-distructive bg-background"
        : "border-border bg-background",
      isActive && !hasError ? "border-default ring-2 ring-default/20" : "",
      isActive && hasError
        ? "border-distructive ring-2 ring-distructive/20"
        : "",
      isFilled ? "text-foreground" : "text-grey-400",
      disabled ? "cursor-not-allowed bg-grey-100 opacity-60" : "",
    ]
      .filter(Boolean)
      .join(" ");
  };
  return (
    <FormField
      id={inputId}
      label={label}
      status={status}
      errorMessage={errorMessage}
      required={required}
    >
      <div
        dir="ltr"
        className={`relative flex w-full gap-2 ${
          disabled ? "cursor-not-allowed" : "cursor-text"
        }`}
      >
        {Array.from({ length }, (_, index) => (
          <div key={index} aria-hidden="true" className={getSlotStyles(index)}>
            {indexValue[index] ?? ""}
          </div>
        ))}

        <input
          id={inputId}
          name={name}
          type="text"
          value={indexValue}
          onChange={handleChange}
          onFocus={(event) => {
            setIsFocused(true);
            handleFocus(event.currentTarget);
          }}
          onBlur={() => setIsFocused(false)}
          onClick={(event) => handleFocus(event.currentTarget)}
          onSelect={handleSelect}
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern={`[0-9]{${length}}`}
          maxLength={length}
          required={required}
          disabled={disabled}
          aria-label={label}
          aria-invalid={hasError}
          aria-describedby={
            hasError && errorMessage ? errorMessageId : undefined
          }
          className="absolute inset-0 z-10 h-full w-full cursor-text opacity-0 disabled:cursor-not-allowed"
        />
      </div>
    </FormField>
  );
}
