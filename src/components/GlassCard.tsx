import { type PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

export function GlassCard({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "rounded-[28px] bg-white/65 shadow-[0_22px_70px_-45px_rgba(6,78,59,0.55)] ring-1 ring-emerald-950/10 backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
