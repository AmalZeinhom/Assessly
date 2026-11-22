"use client";

import { useId } from "react";
import type { CheckboxProps } from "./checkbox.type";

export type { CheckboxAppearance, CheckboxProps } from "./checkbox.type";

export default function Checkbox({
  id,
  label,
  appearance = "outline",
  disabled,
  className = "",
  ...props
}: CheckboxProps) {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;

  return (
    <label
      htmlFor={checkboxId}
      className={`inline-flex w-fit items-center gap-3 text-base text-foreground ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
    >
      <input
        {...props}
        id={checkboxId}
        type="checkbox"
        disabled={disabled}
        className={`checkbox-input size-6 shrink-0 cursor-pointer appearance-none border-2 border-gray-300 bg-surface transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-default disabled:cursor-not-allowed ${
          appearance === "outline"
            ? "checked:border-default checked:bg-surface checked:text-default"
            : "checked:border-default checked:bg-default checked:text-surface"
        } ${className}`}
      />
      {label}
    </label>
  );
}
