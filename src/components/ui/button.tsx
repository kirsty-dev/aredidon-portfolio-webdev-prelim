import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-sky-400/50",
        variant === "primary" &&
          "bg-[#4C6FFF] text-white hover:-translate-y-0.5 hover:bg-[#3d5ce6] hover:shadow-lg hover:shadow-[#4C6FFF]/20",
        variant === "outline" &&
          "border border-[#232C42] text-[#E7EBF5] hover:-translate-y-0.5 hover:border-[#4C6FFF] hover:text-[#4C6FFF]",
        className,
      )}
      {...props}
    />
  );
}