import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "success" | "warning";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
    default: "bg-[#0F6D7A]/90 text-white",
    outline: "border border-white/20 text-[#EDEEF2]",
    success: "bg-emerald-500/90 text-white",
    warning: "bg-[#FF4D2E]/90 text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        "shadow-sm backdrop-blur",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
