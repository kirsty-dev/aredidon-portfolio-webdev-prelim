import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[#232C42] bg-[#111827]/80 p-6",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:border-[#4C6FFF]/50",
        "hover:shadow-xl hover:shadow-[#4C6FFF]/10",
        className,
      )}
      {...props}
    />
  );
}