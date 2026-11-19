import * as Flags from "country-flag-icons/react/3x2";

import type { PhoneCountry } from "@/components/ui/input/input.types";

interface CountryOptionProps {
  country: PhoneCountry;
  onSelect: (country: PhoneCountry) => void;
}

export default function CountryOptions({
  country,
  onSelect,
}: CountryOptionProps) {
  const Flag = Flags[country.code as keyof typeof Flags];

  return (
    <button
      type="button"
      onClick={() => onSelect(country)}
      className="
        flex w-full items-center gap-3
        rounded-md px-3 py-2
        text-left
        transition-colors
        hover:bg-grey-100
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
      "
    >
      {Flag ? (
        <Flag aria-hidden="true" className="h-4 w-6 shrink-0 rounded-sm" />
      ) : (
        <span className="flex h-4 w-6 shrink-0 items-center justify-center text-xs">
          {country.code}
        </span>
      )}

      <span className="flex-1 truncate text-sm text-foreground">
        {country.name}
      </span>

      <span className="text-xs text-grey-500">{country.code}</span>

      <span className="text-sm font-medium text-foreground">
        {country.dialCode}
      </span>
    </button>
  );
}
