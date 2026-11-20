import { ReactNode } from "react";

export type ToastVariant = "success" | "error" | "info" | "warning";

export interface ToastProps {
  message: string;
  variant?: ToastVariant;
  icon?: ReactNode;
}
