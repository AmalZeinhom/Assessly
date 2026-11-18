import { FormFieldProps } from "../input.types";
import { Asterisk } from "lucide-react";

export default function FormField({
  id,
  label,
  status = "default",
  errorMessage,
  required = false,
  children,
}: FormFieldProps) {

  const errorMessageId = `${id}-error`;

  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground flex">
        {label}

        {required && (
          <span className="ml-1 text-distructive" aria-hidden="true">
            <Asterisk size={12} />
          </span>
        )}
      </label>

      {children}

      {status == "error" && errorMessage && (
          <p className="text-xs text-distructive" id={errorMessageId} role="alert">
            {errorMessage}
          </p>
      )}
    </div>
  );
}
