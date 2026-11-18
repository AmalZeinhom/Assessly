import { InputHTMLAttributes, ReactNode } from "react";

export type InputStatus = "default" | "error";

export interface FormFieldProps {
  id: string;
  label: string;
  status?: InputStatus;
  errorMessage?: string;
  required?: boolean;
  children: ReactNode;
}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  status?: InputStatus;
  errorMessage?: string;
  icon?: ReactNode;
}

export type SearchInputProps = Omit<TextInputProps, "icon" | "type">;