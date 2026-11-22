import type { InputHTMLAttributes } from "react";

export type CheckboxAppearance = "outline" | "solid";

export interface CheckboxProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "size"
  > {
  label: string;
  appearance?: CheckboxAppearance;
  containerClassName?: string;
}