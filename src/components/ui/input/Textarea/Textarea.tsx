import { ChangeEvent, useId, useState } from "react";
import type { TextareaProps } from "../input.types";
import FormField from "../components/FormField";

export default function TextArea({
  id,
  label,
  status = "default",
  errorMessage,
  rows = 4,
  value,
  defaultValue,
  onChange,
  className = "",
  required,
  disabled,
  maxLength,
  showCharacterCount = false,
  "aria-describedby": ariaDescribedBy,
  ...props
}: TextareaProps) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;

  const errorMessageId = `${textareaId}-error`;
  const characterCountId = `${textareaId}-count`;

const [uncontrolledLength, setUncontrolledLength] = useState(
  String(defaultValue ?? "").length,
);

const characterCount =
  value !== undefined ? String(value ?? "").length : uncontrolledLength;

const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
  if (value === undefined) {
    setUncontrolledLength(event.currentTarget.value.length);
  }

  onChange?.(event);
};
  //? This ensures that screen readers can correctly associate the error message with the textarea when there is an error.
  //? We used an array because there might be multiple values for aria-describedby. The filter(Boolean) method removes any undefined values from the array, and join("") combines the remaining values into a single string.
  const describedBy =
    [
      ariaDescribedBy, //? Include any existing aria-describedby value passed as a prop from the parent component.
      status === "error" && errorMessage ? errorMessageId : undefined,
      showCharacterCount ? characterCountId : undefined,
    ]
      .filter(Boolean)
      .join(" ") || undefined;

  const statusStyles = {
    default:
      "border-gray-200 focus-visible:border-default focus-visible:ring-default/20",
    error:
      "border-distructive focus-visible:border-distructive focus-visible:ring-distructive/20",
  };
  return (
    <FormField
      id={textareaId}
      label={label}
      status={status}
      errorMessage={errorMessage}
      required={required}
    >
      <div className="flex w-full flex-col gap-1">
        <textarea
          {...props}
          id={textareaId}
          rows={rows}
          {...(value !== undefined ? { value } : { defaultValue })}
          onChange={handleChange}
          required={required}
          disabled={disabled}
          maxLength={maxLength}
          aria-invalid={status === "error"}
          aria-describedby={describedBy}
          className={`block w-full rounded-md border bg-surface px-3 py-2 text-sm text-foreground
              outline-none transition-colors placeholder:text-gray-400 focus-visible:ring-2
              disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 resize-y ${statusStyles[status]} ${className}`}
        />

        {showCharacterCount && (
          <div id={characterCountId} className="flex justify-end">
            <span className="text-xs text-gray-500">
              {characterCount}
              {maxLength !== undefined && `/${maxLength}`}
            </span>
          </div>
        )}
      </div>
    </FormField>
  );
}
