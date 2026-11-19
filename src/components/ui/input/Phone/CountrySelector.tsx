"use client";

import * as Flags from "country-flag-icons/react/3x2";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import type { PhoneCountry } from "../input.types";
import CountryOption from "@/components/ui/input/Phone/CountryOptions";

interface CountrySelectorProps {
  country: PhoneCountry;
  countries: PhoneCountry[];
  disabled?: boolean;
  onChange: (country: PhoneCountry) => void;
}

export default function CountrySelector({
  country,
  countries,
  disabled = false,
  onChange,
}: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const selectorRef = useRef<HTMLDivElement>(null);
  const searchInputId = useId();

  const Flag = Flags[country.code as keyof typeof Flags];

  const filteredCountries = countries.filter((item) => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return true;

    return (
      item.name.toLowerCase().includes(query) ||
      item.code.toLowerCase().includes(query) ||
      item.dialCode.includes(query)
    );
  });

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event: PointerEvent) => {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleSelect = (selectedCountry: PhoneCountry) => {
    onChange(selectedCountry);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div ref={selectorRef} className="relative w-full">
      <button
        type="button"
        disabled={disabled}
        aria-label={`Selected country: ${country.name}, ${country.dialCode}`}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((previous) => !previous)}
        className="
          inline-flex items-center gap-2
          rounded-sm
          text-sm font-medium text-foreground
          transition-colors
          hover:text-primary
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-primary
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        {Flag && (
          <Flag aria-hidden="true" className="h-4 w-6 shrink-0 rounded-sm" />
        )}

        <span className="text-sm text-grey-950">{country.code}</span>

        <span className="text-sm text-grey-950">({country.dialCode})</span>

        <ChevronDown
          size={14}
          className={`text-grey-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-label="Select a country"
          className="
            absolute -left-3 top-full z-50 mt-2
            w-[calc(100%+1.5rem)] max-w-[calc(100vw-2rem)]
            rounded-lg border border-border
            bg-surface p-2
            shadow-lg
          "
        >
          <div
            className="
            flex items-center gap-2
            rounded-md border border-border
            px-3 py-2
            focus-within:border-primary
          "
          >
            <Search
              size={16}
              className="shrink-0 text-grey-400"
              aria-hidden="true"
            />

            <input
              id={searchInputId}
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search country or code..."
              aria-label="Search countries"
              autoFocus
              className="
                w-full bg-transparent
                text-sm text-foreground
                outline-none
                placeholder:text-grey-400
              "
            />
          </div>

          <div
            className="
            mt-2 max-h-60
            overflow-y-auto
            rounded-md border border-border
          "
          >
            {filteredCountries.length > 0 ? (
              filteredCountries.map((item) => (
                <CountryOption
                  key={item.code}
                  country={item}
                  onSelect={handleSelect}
                />
              ))
            ) : (
              <p
                className="
                px-3 py-6
                text-center text-sm text-grey-500
              "
              >
                No countries found.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
