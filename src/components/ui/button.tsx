import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary" | "ghost" | "outline" | "accent";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "bg-[#0F6D7A] text-white hover:bg-[#0c5661] focus-visible:outline-[#FF4D2E]",
  secondary:
    "bg-[#1E1E22] text-[#EDEEF2] hover:bg-[#2a2a30] border border-white/10",
  ghost:
    "bg-transparent text-[#EDEEF2] hover:bg-white/5 border border-transparent",
  outline:
    "border border-white/15 bg-transparent text-[#EDEEF2] hover:border-white/40",
  accent: "bg-[#FF4D2E] text-white hover:bg-[#e64325] focus-visible:outline-[#0F6D7A]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm md:text-base",
  lg: "h-12 px-6 text-base md:text-lg",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export function buttonVariants(
  variant: ButtonVariant = "default",
  size: ButtonSize = "md",
) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variantClasses[variant],
    sizeClasses[size],
  );
}
