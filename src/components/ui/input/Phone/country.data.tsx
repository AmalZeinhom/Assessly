import { getCountries, getCountryCallingCode } from "libphonenumber-js";

import type { PhoneCountry } from "@/components/ui/input/input.types";

const countryNames = new Intl.DisplayNames(["en"], {
  type: "region",
});

export const COUNTRIES: PhoneCountry[] = getCountries()
  .map((code) => ({
    code,
    name: countryNames.of(code) ?? code,
    dialCode: `+${getCountryCallingCode(code)}`,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));
