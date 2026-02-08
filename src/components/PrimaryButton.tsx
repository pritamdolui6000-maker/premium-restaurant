import { type ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export function PrimaryButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-emerald-950 px-5 py-3 text-sm font-semibold text-emerald-50 shadow-[0_18px_50px_-18px_rgba(5,150,105,0.55)] ring-1 ring-emerald-900/20 transition will-change-transform",
        "hover:-translate-y-0.5 hover:bg-emerald-900",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF7EF]",
        className
      )}
      {...props}
    />
  );
}
