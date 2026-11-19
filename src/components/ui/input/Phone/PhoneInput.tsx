"use client";

import TextInput from "../components/TextInput";

import type { PhoneInputProps } from "@/components/ui/input/input.types";

import { COUNTRIES } from "@/components/ui/input/Phone/country.data";
import CountrySelector from "./CountrySelector";

export default function PhoneInput({
  countryCode,
  onCountryChange,
  countries = COUNTRIES,
  ...props
}: PhoneInputProps) {
  const selectedCountry =
    countries.find((country) => country.code === countryCode) ?? countries[0];

  if (!selectedCountry) return null;

  return (
    <TextInput
      {...props}
      type="tel"
      inputMode="tel"
      autoComplete={props.autoComplete ?? "tel-national"}
      placeholder={props.placeholder ?? "Enter phone number"}
      startIconContainerClassName="right-3"
      startIcon={
        <CountrySelector
          country={selectedCountry}
          countries={countries}
          disabled={props.disabled}
          onChange={onCountryChange}
        />
      }
    />
  );
}
