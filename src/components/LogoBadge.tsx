import { cn } from "@/utils/cn";

export function LogoBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "group inline-flex items-center gap-3",
        className
      )}
      aria-label="Grand Veggie"
    >
      <div className="relative grid h-11 w-11 place-items-center rounded-full bg-emerald-950 text-emerald-50 shadow-[0_10px_30px_-12px_rgba(5,150,105,0.55)]">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(163,230,53,0.40),transparent_60%)]" />
        <span className="relative font-[Fraunces] text-[11px] tracking-[0.22em]">
          GV
        </span>
      </div>
      <div className="leading-tight">
        <div className="text-[12px] font-semibold tracking-[0.28em] text-emerald-950">
          GRAND
        </div>
        <div className="-mt-0.5 text-[12px] font-semibold tracking-[0.28em] text-emerald-700">
          VEGGIE
        </div>
      </div>
    </div>
  );
}
