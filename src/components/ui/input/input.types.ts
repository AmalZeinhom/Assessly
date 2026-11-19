import { InputHTMLAttributes, ReactNode } from "react";
import type { CountryCode } from "libphonenumber-js";

export type InputStatus = "default" | "error";

//!#############################

export interface FormFieldProps {
  id: string;
  label: string;
  status?: InputStatus;
  errorMessage?: string;
  required?: boolean;
  children: ReactNode;
}

//!#############################

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  status?: InputStatus;
  errorMessage?: string;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  startIconContainerClassName?: string;
}

//!#############################

export type SearchInputProps = Omit<TextInputProps, "endIcon" | "type">;

//!#############################

//? Used Omit to prevent convert the type from number to password for example
export interface NumberInputProps extends Omit<TextInputProps, "type">{
  min?: number,
  max?: number,
  step?: number
}

//!#############################

export type PasswordInputProps = Omit<TextInputProps, "endIcon" | "type">

//!#############################

export interface PhoneCountry {
  code: CountryCode, //ISO, like EG
  name: string,
  dialCode: string, // +20
}

//!#############################

export interface PhoneInputProps extends Omit<
  TextInputProps,
  "type" | "startIcon" | "endIcon" | "startIconContainerClassName"
> {
  countryCode: CountryCode;
  onCountryChange: (country: PhoneCountry) => void;
  countries?: PhoneCountry[];
}

//!#############################

export interface OTPInputProps {
  id?: string;
  name?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  length?: number;
  status?: InputStatus;
  errorMessage?: string;
  disabled?: boolean;
  required?: boolean;
}