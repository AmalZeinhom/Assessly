"use client";

import type { ButtonProps, ButtonSize, ButtonVariant } from "./button.types";

const variants: Record<ButtonVariant, string> = {
  default: "bg-default text-white hover:bg-blue-700",

  secondary: "bg-grey-200 text-grey-900 hover:bg-grey-200",

  distructive: "bg-distructive text-white hover:bg-red-600",

  outline: "border border-grey-300 bg-surface text-foreground hover:bg-grey-50",

  ghost: "bg-transparent text-foreground hover:bg-grey-100",

  icon: "bg-default text-white hover:bg-blue-700",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2.5 text-base",
  lg: "px-6 py-3 text-lg",
};

export default function Button({
  variant = "default",
  size = "md",
  loading = false,
  fullWidth = false,
  icon = false,
  disabled,
  children,
  className = "",
  type = "button",
  ...props //? to show other HTML properities in the button
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={loading}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-md font-medium cursor-pointer
        transition-colors duration-200
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-default
        focus-visible:ring-offset-2
        disabled:cursor-not-allowed
        disabled:bg-gray-200
        disabled:text-gray-400
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {icon && (
        <span
          aria-hidden="true"
          className="size-4 inline-flex items-center justify-center bg-default text-white hover:bg-blue-700 "
        >
          {icon}
        </span>
      )}

      {loading && (
        <span
          aria-hidden="true"
          className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent"
        />
      )}

      {children}
    </button>
  );
}
