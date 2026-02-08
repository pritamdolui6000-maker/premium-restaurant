import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export type Dish = {
  id: string;
  name: string;
  category: string;
  image: string;
  /** Optional tiny blurred placeholder */
  blurDataURL?: string;
  /** Optional intrinsic size for better CLS */
  imageWidth?: number;
  imageHeight?: number;
  description: string;
  price: number;
};

export function DishCard({ dish }: { dish: Dish }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className={cn(
        "group relative overflow-hidden rounded-[26px] bg-white/70 ring-1 ring-emerald-950/10",
        "shadow-[0_18px_60px_-45px_rgba(6,78,59,0.7)]"
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-emerald-950/5">
        {/* Blur-up placeholder to avoid step-by-step perceived loading */}
        {dish.blurDataURL ? (
          <img
            src={dish.blurDataURL}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-[1.2] object-cover blur-2xl"
          />
        ) : null}

        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          width={dish.imageWidth}
          height={dish.imageHeight}
          className={cn(
            "relative h-full w-full object-cover",
            "transition duration-700 ease-out group-hover:scale-[1.08]"
          )}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/55 via-emerald-950/0 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex rounded-full bg-white/70 px-3 py-1 text-[12px] font-semibold tracking-wide text-emerald-950 ring-1 ring-emerald-950/10 backdrop-blur">
          {dish.category}
        </div>
      </div>

      <div className="space-y-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-[Fraunces] text-lg tracking-tight text-emerald-950">
            {dish.name}
          </h3>
          <div className="shrink-0 rounded-full bg-lime-300/35 px-3 py-1 text-sm font-semibold text-emerald-950 ring-1 ring-lime-400/40">
            ${dish.price}
          </div>
        </div>
        <p className="text-sm leading-relaxed text-emerald-900/70">
          {dish.description}
        </p>
      </div>
    </motion.article>
  );
}
