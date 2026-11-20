import { ReactNode } from "react";

export type TooltipPositions = "top" | "bottom" | "left" | "right";

export type TooltipProps = {
    children: ReactNode,
    content: ReactNode,
    position?: TooltipPositions,
    delay?: number,
    disabled?: boolean,
    className?: string
}