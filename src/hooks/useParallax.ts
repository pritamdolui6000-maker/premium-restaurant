import { useEffect, useMemo, useState } from "react";

export function useParallax(intensity = 16) {
  const [y, setY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setY(window.scrollY || 0);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return useMemo(() => ({ transform: `translate3d(0, ${y / intensity}px, 0)` }), [
    y,
    intensity,
  ]);
}
