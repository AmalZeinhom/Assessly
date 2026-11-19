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

//? Used Omit to prevent convert the type from number to password for example
export interface NumberInputProps extends Omit<TextInputProps, "type">{
  min?: number,
  max?: number,
  step?: number
}

export type PasswordInputProps = Omit<TextInputProps, "icon" | "type">