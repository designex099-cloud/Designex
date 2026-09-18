import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  PenTool,
  ShieldCheck,
} from "lucide-react";
import { WHATSAPP } from "../data/site";

const LINE_VARIANTS = {
  hidden: { y: "115%" },
  show: (i: number) => ({
    y: "0%",
    transition: {
      duration: 1,
      delay: 0.25 + i * 0.13,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const FEATURES = [
  {
    icon: PenTool,
    title: "Custom Logo Design",
    text: "Every mark designed from scratch for your brand.",
  },
  {
    icon: BadgeCheck,
    title: "100% Satisfaction",
    text: "Backed by our satisfaction guarantee.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Risk",
    text: "No risk on your end. Ever.",
  },
];

export default function Hero({ ready }: { ready: boolean }) {
  const state = ready ? "show" : "hidden";

  return (
    <section
      id="top"
      className="on-dark relative flex min-h-svh flex-col overflow-hidden bg-ink text-paper"
    >
      {/* Subtle vertical guides */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute left-1/4 top-0 hidden h-full w-px bg-paper/[0.04] lg:block" />
        <span className="absolute left-2/4 top-0 hidden h-full w-px bg-paper/[0.04] lg:block" />
        <span className="absolute left-3/4 top-0 hidden h-full w-px bg-paper/[0.04] lg:block" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-5 pb-12 pt-28 sm:pt-32 md:px-10 md:pb-16 md:pt-36">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex items-center gap-4 text-paper/50 md:mb-12"
        >
          <span className="h-px w-10 bg-paper/30 md:w-20" aria-hidden="true" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] sm:text-[11px]">
            Custom Logo Design &amp; Brand Identity
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display font-extrabold uppercase leading-[0.94] tracking-tight">
          <span className="block overflow-hidden">
            <motion.span
              className="block text-[clamp(2.7rem,10vw,9.5rem)]"
              variants={LINE_VARIANTS}
              custom={0}
              initial="hidden"
              animate={state}
            >
              Logos that
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-[clamp(2.7rem,10vw,9.5rem)]"
              variants={LINE_VARIANTS}
              custom={1}
              initial="hidden"
              animate={state}
            >
              make <span className="text-outline-w">brands</span>
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-[clamp(2.7rem,10vw,9.5rem)]"
              variants={LINE_VARIANTS}
              custom={2}
              initial="hidden"
              animate={state}
            >
              stand out<span className="text-outline-w">.</span>
            </motion.span>
          </span>
        </h1>

        {/* Sub copy + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid items-end gap-8 sm:mt-12 md:mt-16 md:grid-cols-12"
        >
          <p className="max-w-md text-base leading-relaxed text-paper/60 md:col-span-5 md:text-lg">
            Designex is a creative agency crafting modern, unique logos and
            brand identities — with a 100% satisfaction guarantee and zero
            risk.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 md:col-span-7 md:justify-end">
            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-3 bg-paper px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-ink transition-transform duration-300 hover:scale-[1.03]"
            >
              View Portfolio
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 border border-paper/30 px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:border-paper hover:bg-paper hover:text-ink"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>

        {/* Trust features */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.9, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-paper/15 pt-7 sm:grid-cols-3 md:mt-16 md:pt-9"
        >
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-paper/25">
                <feature.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold tracking-tight md:text-lg">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-paper/50">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom info bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="relative mx-auto flex w-full max-w-[1440px] items-center justify-between border-t border-paper/10 px-5 py-5 text-[10px] font-medium uppercase tracking-[0.28em] text-paper/40 sm:text-[11px] md:px-10"
      >
        <span>Scroll to explore</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
        <span className="hidden sm:block">100% Satisfaction — Zero Risk</span>
      </motion.div>

      {/* Giant cropped wordmark */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 1.1, delay: 1.2 }}
        className="pointer-events-none relative -mt-1 h-[9.5vw] select-none overflow-hidden"
      >
        <span className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap font-display text-[14vw] font-extrabold leading-[0.78] tracking-tight text-outline-w-thin">
          Designex
        </span>
      </motion.div>
    </section>
  );
}
