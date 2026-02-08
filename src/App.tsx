import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dishesData from "@/data/dishes.json";
import { RestaurantJsonLd } from "@/seo/RestaurantJsonLd";
import { DishCard, type Dish } from "@/components/DishCard";
import { GlassCard } from "@/components/GlassCard";
import { LogoBadge } from "@/components/LogoBadge";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { useParallax } from "@/hooks/useParallax";

function AnchorLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="rounded-full px-3 py-2 text-sm font-medium text-emerald-950/80 transition hover:text-emerald-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF7EF]"
    >
      {children}
    </a>
  );
}

function Modal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          <motion.button
            className="absolute inset-0 bg-emerald-950/40 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.99 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg"
          >
            <GlassCard className="p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[12px] font-semibold tracking-[0.24em] text-emerald-700">
                    RESERVATION
                  </div>
                  <h3 className="mt-2 font-[Fraunces] text-2xl tracking-tight text-emerald-950">
                    Book the Experience
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="grid h-10 w-10 place-items-center rounded-full bg-emerald-950/5 text-emerald-950 ring-1 ring-emerald-950/10 transition hover:bg-emerald-950/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
                  aria-label="Close reservation dialog"
                >
                  <span className="text-xl leading-none">×</span>
                </button>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-emerald-900/70">
                This is a static demo—send a request and we’ll confirm your seat.
              </p>

              <form
                className="mt-6 grid gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  onClose();
                }}
              >
                <label className="grid gap-1 text-sm">
                  <span className="font-medium text-emerald-950/80">Name</span>
                  <input
                    required
                    className="h-11 rounded-2xl bg-white/70 px-4 text-emerald-950 ring-1 ring-emerald-950/15 outline-none transition focus:ring-2 focus:ring-lime-300"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-1 text-sm">
                  <span className="font-medium text-emerald-950/80">Email</span>
                  <input
                    type="email"
                    required
                    className="h-11 rounded-2xl bg-white/70 px-4 text-emerald-950 ring-1 ring-emerald-950/15 outline-none transition focus:ring-2 focus:ring-lime-300"
                    placeholder="name@domain.com"
                  />
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="grid gap-1 text-sm">
                    <span className="font-medium text-emerald-950/80">Guests</span>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      defaultValue={2}
                      className="h-11 rounded-2xl bg-white/70 px-4 text-emerald-950 ring-1 ring-emerald-950/15 outline-none transition focus:ring-2 focus:ring-lime-300"
                    />
                  </label>
                  <label className="grid gap-1 text-sm">
                    <span className="font-medium text-emerald-950/80">Time</span>
                    <input
                      type="time"
                      defaultValue="19:30"
                      className="h-11 rounded-2xl bg-white/70 px-4 text-emerald-950 ring-1 ring-emerald-950/15 outline-none transition focus:ring-2 focus:ring-lime-300"
                    />
                  </label>
                </div>
                <PrimaryButton type="submit" className="mt-2 w-full">
                  Request Reservation
                </PrimaryButton>
                <p className="text-xs text-emerald-900/60">
                  By requesting, you agree to our clean-food policy and a no-waste
                  seating commitment.
                </p>
              </form>
            </GlassCard>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function App() {
  const [reserveOpen, setReserveOpen] = useState(false);
  const parallaxStyle = useParallax(14);
  const dishes = useMemo(() => dishesData as Dish[], []);

  return (
    <div className="min-h-screen bg-[#FBF7EF] text-emerald-950">
      <RestaurantJsonLd />
      {/* Ambient gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.25),transparent_60%)] blur-2xl" />
        <div className="absolute -right-28 top-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-[-140px] left-1/3 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_60%)] blur-2xl" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-emerald-950/5 bg-[#FBF7EF]/75 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF7EF]">
            <LogoBadge />
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            <AnchorLink href="#home">Home</AnchorLink>
            <AnchorLink href="#menus">Our Menus</AnchorLink>
            <AnchorLink href="#about">About Us</AnchorLink>
            <AnchorLink href="#contact">Contact</AnchorLink>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#menus"
              className="hidden rounded-full px-4 py-2 text-sm font-semibold text-emerald-950/80 ring-1 ring-emerald-950/10 transition hover:bg-white/50 hover:text-emerald-950 md:inline-flex"
            >
              View Menus
            </a>
            <PrimaryButton onClick={() => setReserveOpen(true)}>
              Book the Experience
            </PrimaryButton>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <Section id="home" className="pt-8 sm:pt-12">
          <GlassCard className="relative overflow-hidden">
            <div className="absolute inset-0" style={parallaxStyle}>
              <img
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=2400&q=80"
                alt="Cinematic plated seasonal dish"
                className="h-[520px] w-full object-cover sm:h-[560px]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(163,230,53,0.22),transparent_42%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B3B2E]/80 via-[#0B3B2E]/25 to-transparent" />

            <div className="relative grid min-h-[520px] content-end p-6 sm:min-h-[560px] sm:p-10">
              <div className="max-w-2xl">
                <Reveal>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[12px] font-semibold tracking-[0.22em] text-white ring-1 ring-white/15 backdrop-blur">
                    ORGANIC • CHEF-CURATED • FARM-TO-TABLE
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <h1 className="mt-4 font-[Fraunces] text-4xl leading-[1.05] tracking-tight text-white sm:text-6xl">
                    Where every ingredient tells a story
                  </h1>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                    A clean food philosophy—seasonal produce, zero compromise, and
                    a cinematic dining experience designed for the modern organic
                    lifestyle.
                  </p>
                </Reveal>

                <Reveal delay={0.24}>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a href="#menus" className="inline-flex">
                      <PrimaryButton className="w-full sm:w-auto">
                        Show Our Dishes
                      </PrimaryButton>
                    </a>
                    <button
                      onClick={() => setReserveOpen(true)}
                      className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/15"
                    >
                      Reserve a Seat
                    </button>
                  </div>
                </Reveal>

                <Reveal delay={0.32}>
                  <div className="mt-8 grid grid-cols-3 gap-3 rounded-[24px] bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur sm:max-w-xl">
                    {[
                      { k: "Sourcing", v: "Local farms" },
                      { k: "Kitchen", v: "No preservatives" },
                      { k: "Tone", v: "Michelin calm" },
                    ].map((item) => (
                      <div key={item.k} className="text-center">
                        <div className="text-[11px] font-semibold tracking-[0.18em] text-white/70">
                          {item.k}
                        </div>
                        <div className="mt-1 text-sm font-semibold text-white">
                          {item.v}
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </GlassCard>
        </Section>

        {/* Menu Gallery */}
        <Section id="menus" className="py-14 sm:py-20">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="text-[12px] font-semibold tracking-[0.24em] text-emerald-700">
                  MENUS
                </div>
                <h2 className="mt-3 font-[Fraunces] text-3xl tracking-tight sm:text-4xl">
                  View Our Menus
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-emerald-900/70 sm:text-base">
                  A gallery of chef-curated dishes—built around organic produce,
                  warm seasonal tones, and bright citrus finishes.
                </p>
              </div>
              <div className="hidden sm:block">
                <button
                  onClick={() => setReserveOpen(true)}
                  className="rounded-full bg-lime-300/35 px-4 py-2 text-sm font-semibold text-emerald-950 ring-1 ring-lime-400/40 transition hover:bg-lime-300/45"
                >
                  Book tasting
                </button>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dishes.slice(0, 8).map((dish, idx) => (
              <Reveal key={dish.id} delay={0.04 * Math.min(idx, 6)}>
                <DishCard dish={dish} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Philosophy */}
        <Section id="about" className="pb-14 sm:pb-20">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            <Reveal className="lg:col-span-7">
              <GlassCard className="h-full p-7 sm:p-10">
                <div className="text-[12px] font-semibold tracking-[0.24em] text-emerald-700">
                  PHILOSOPHY
                </div>
                <h2 className="mt-3 font-[Fraunces] text-3xl leading-tight tracking-tight text-emerald-950 sm:text-5xl">
                  Clean Food. Real Ingredients. No Compromise.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-emerald-900/70 sm:text-base">
                  We source seasonal produce from partner farms, curate every
                  plate for balance, and avoid preservatives—so the food feels
                  alive. Our menu is designed like an editorial: bright greens,
                  warm roasted tones, and a calm finish.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      t: "Organic sourcing",
                      d: "Small-batch farms, transparent seasons, and traceable supply.",
                    },
                    {
                      t: "Farm-to-table",
                      d: "Built daily around what the earth offers—not what ships best.",
                    },
                    {
                      t: "No preservatives",
                      d: "Clean labels, clean prep, nothing hidden in the pantry.",
                    },
                    {
                      t: "Chef curated",
                      d: "Taste-led, nutrient-aware, designed for a premium lifestyle.",
                    },
                  ].map((x) => (
                    <div
                      key={x.t}
                      className="rounded-[22px] bg-emerald-950/[0.03] p-5 ring-1 ring-emerald-950/10"
                    >
                      <div className="font-semibold text-emerald-950">
                        {x.t}
                      </div>
                      <div className="mt-1 text-sm text-emerald-900/70">
                        {x.d}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={0.08}>
              <GlassCard className="relative h-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=2200&q=80"
                  alt="Fresh market produce"
                  loading="lazy"
                  className="h-full min-h-[320px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3B2E]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="rounded-[22px] bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur">
                    <div className="text-[12px] font-semibold tracking-[0.24em] text-white/70">
                      TODAY’S NOTE
                    </div>
                    <div className="mt-2 font-[Fraunces] text-2xl tracking-tight text-white">
                      “Luxury is freshness—served quietly.”
                    </div>
                    <div className="mt-2 text-sm text-white/75">
                      — Head Chef, Grand Veggie
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" className="pb-24 sm:pb-28">
          <Reveal>
            <GlassCard className="p-7 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <div className="text-[12px] font-semibold tracking-[0.24em] text-emerald-700">
                    CONTACT
                  </div>
                  <h2 className="mt-3 font-[Fraunces] text-3xl tracking-tight sm:text-4xl">
                    A table, a story, a clean finish.
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-emerald-900/70 sm:text-base">
                    Located in a calm, light-filled space. We offer curated
                    seatings, seasonal tastings, and private experiences.
                  </p>
                </div>

                <div className="grid gap-3 lg:col-span-5">
                  <div className="rounded-[22px] bg-emerald-950/[0.03] p-5 ring-1 ring-emerald-950/10">
                    <div className="text-sm font-semibold text-emerald-950">
                      Hours
                    </div>
                    <div className="mt-1 text-sm text-emerald-900/70">
                      Mon–Thu 11–9 • Fri–Sun 11–10
                    </div>
                  </div>
                  <div className="rounded-[22px] bg-emerald-950/[0.03] p-5 ring-1 ring-emerald-950/10">
                    <div className="text-sm font-semibold text-emerald-950">
                      Address
                    </div>
                    <div className="mt-1 text-sm text-emerald-900/70">
                      18 Orchard Lane, Green District
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <PrimaryButton
                      className="w-full"
                      onClick={() => setReserveOpen(true)}
                    >
                      Reserve Seat
                    </PrimaryButton>
                    <a
                      className="inline-flex w-full items-center justify-center rounded-full bg-white/60 px-5 py-3 text-sm font-semibold text-emerald-950 ring-1 ring-emerald-950/10 transition hover:bg-white"
                      href="#menus"
                    >
                      Explore Menus
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <footer className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-emerald-950/10 pt-8 sm:flex-row sm:items-center">
            <LogoBadge />
            <div className="text-sm text-emerald-900/60">
              © {new Date().getFullYear()} Grand Veggie. Crafted with calm,
              organic precision.
            </div>
          </footer>
        </Section>

        {/* Floating CTA */}
        <motion.button
          onClick={() => setReserveOpen(true)}
          className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-lime-300 text-emerald-950 shadow-[0_18px_60px_-22px_rgba(163,230,53,0.75)] ring-1 ring-lime-400/50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Book Now"
        >
          <span className="text-xs font-extrabold tracking-[0.14em]">BOOK</span>
        </motion.button>
      </main>

      <Modal open={reserveOpen} onClose={() => setReserveOpen(false)} />
    </div>
  );
}
