import { type PropsWithChildren } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/utils/cn";

const variants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Reveal({
  className,
  children,
  delay = 0,
}: PropsWithChildren<{ className?: string; delay?: number }>) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
