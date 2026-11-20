"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { TooltipProps } from "./tooltip.types";

export default function Tooltip({
  children,
  content,
  position = "top",
  delay = 500,
  disabled = false,
  className,
}: TooltipProps) {
  if (disabled) {
    return <>{children}</>;
  }

  return (
    <TooltipPrimitive.Root delayDuration={delay}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          side={position}
          sideOffset={6}
          className={`z-50 max-w-xs rounded-md bg-gray-800 px-3 py-2
            text-xs font-medium text-white shadow-md" ${className}
          `}
        >
          {content}

          <TooltipPrimitive.Arrow
            className="fill-grey-900"
            width={10}
            height={5}
          />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}
