import { type PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

export function Section({
  id,
  className,
  children,
}: PropsWithChildren<{ id?: string; className?: string }>) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </section>
  );
}
