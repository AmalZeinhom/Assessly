import { ToastProps, ToastVariant } from "../input.types";
import {
  SquareCheck,
  SquareX,
  Info,
  TriangleExclamationPointIcon,
} from "lucide-react";

const variantStyles: Record<ToastVariant, string> = {
  success: "text-emerald-500",
  error: "text-distructive",
  info: "text-default",
  warning: "text-yellow-500",
};

const variantIcons = {
  success: SquareCheck,
  error: SquareX,
  info: Info,
  warning: TriangleExclamationPointIcon,
};

export default function Toast({
  message,
  variant = "success",
  icon,
}: ToastProps) {
  const Icon = variantIcons[variant];
  return (
    <div
      className="bg-gray-800 px-4 py-3 text-start flex items-center gap-2"
    >
      <span className={variantStyles[variant]}>
        {icon ?? <Icon size={20} aria-hidden="true" />}
      </span>
      <p className="text-sm font-medium text-surface">{message}</p>
    </div>
  );
}
