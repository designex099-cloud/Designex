import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { WHATSAPP, WORKS } from "../data/site";
import { Eyebrow, Reveal } from "./ui";

export default function Portfolio() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setSelected((s) =>
        s === null ? s : (s + dir + WORKS.length) % WORKS.length
      ),
    []
  );

  /* Keyboard navigation + body scroll lock */
  useEffect(() => {
    if (selected === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, close, step]);

  const current = selected !== null ? WORKS[selected] : null;

  return (
    <section id="work" className="scroll-mt-10 bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:py-24 md:px-10 md:py-36">
        {/* Section header */}
        <div className="grid items-end gap-8 border-b border-ink/10 pb-8 md:grid-cols-12 md:pb-14">
          <div className="md:col-span-8">
            <Reveal>
              <Eyebrow>Portfolio — Selected Identities</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 font-display text-[clamp(2.6rem,8vw,7.5rem)] font-extrabold uppercase leading-[0.9] tracking-tight">
                The Work
                <sup className="ml-3 align-super font-display text-[0.32em] font-bold text-outline-k-thin">
                  ({WORKS.length})
                </sup>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.12}>
              <p className="max-w-sm text-base leading-relaxed text-ink/60">
                A curated gallery of custom logo designs crafted for real
                brands. Every mark is designed from scratch — tap any piece to
                view it up close.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Masonry gallery */}
        <div className="mt-8 columns-2 gap-3 sm:mt-10 md:mt-14 md:columns-3 md:gap-5 xl:columns-4">
          {WORKS.map((work, i) => (
            <motion.figure
              key={work.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: (i % 4) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative mb-3 break-inside-avoid md:mb-5"
            >
              <button
                onClick={() => setSelected(i)}
                data-cursor
                aria-label={`Open ${work.title}`}
                className="relative block w-full overflow-hidden border border-ink/10 bg-white text-left"
              >
                <img
                  src={work.src}
                  alt={`${work.title} — custom logo design by Designex`}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                />
                <span className="pointer-events-none absolute inset-0 flex flex-col justify-between bg-ink/0 p-3 opacity-0 transition-all duration-500 group-hover:bg-ink/70 group-hover:opacity-100 md:p-5">
                  <span className="flex items-start justify-between text-paper">
                    <span className="font-display text-sm font-bold tracking-widest">
                      {work.num}
                    </span>
                    <span className="rounded-full border border-paper/40 p-1.5 md:p-2">
                      <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    </span>
                  </span>
                  <span className="text-paper">
                    <span className="hidden font-display text-lg font-bold leading-tight md:block md:text-xl">
                      {work.title}
                    </span>
                    <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.28em] text-paper/70 md:text-[10px]">
                      {work.tag}
                    </span>
                  </span>
                </span>
              </button>
            </motion.figure>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-start justify-between gap-8 border-t border-ink/10 pt-10 md:mt-20 md:flex-row md:items-center md:pt-14">
          <Reveal>
            <p className="font-display text-2xl font-bold leading-tight md:text-4xl">
              Like what you see?
              <br />
              <span className="text-ink/40">Let&apos;s build yours.</span>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-ink px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-paper transition-transform duration-300 hover:scale-[1.03]"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            className="on-dark fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-5"
            role="dialog"
            aria-modal="true"
            aria-label={`${current.title} preview`}
          >
            {/* Top bar */}
            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 text-paper sm:p-5 md:p-7">
              <span className="hidden font-display text-sm font-bold tracking-[0.25em] md:block">
                {current.num}
                <span className="text-paper/40"> / {WORKS.length}</span>
              </span>
              <span className="font-display text-sm font-bold tracking-[0.25em] md:hidden">
                {current.title}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  close();
                }}
                aria-label="Close preview"
                className="rounded-full border border-paper/30 p-3 transition-colors hover:bg-paper hover:text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Image */}
            <motion.figure
              key={current.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-full flex-col items-center"
            >
              <img
                src={current.src}
                alt={`${current.title} — custom logo design by Designex`}
                draggable={false}
                className="max-h-[64vh] max-w-[92vw] object-contain sm:max-h-[72vh] md:max-h-[76vh]"
              />
              <figcaption className="mt-4 hidden w-full items-center justify-between gap-8 text-xs font-medium uppercase tracking-[0.28em] text-paper/60 md:flex">
                <span>{current.title}</span>
                <span>{current.tag} — Designex</span>
              </figcaption>
            </motion.figure>

            {/* Desktop prev / next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous project"
              className="absolute left-7 top-1/2 hidden -translate-y-1/2 rounded-full border border-paper/30 p-3 text-paper transition-colors hover:bg-paper hover:text-ink md:block"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next project"
              className="absolute right-7 top-1/2 hidden -translate-y-1/2 rounded-full border border-paper/30 p-3 text-paper transition-colors hover:bg-paper hover:text-ink md:block"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Mobile controls */}
            <div
              className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-4 md:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => step(-1)}
                aria-label="Previous project"
                className="rounded-full border border-paper/30 p-3 text-paper transition-colors hover:bg-paper hover:text-ink"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="min-w-[72px] text-center font-display text-sm font-bold tracking-[0.25em] text-paper">
                {current.num}
                <span className="text-paper/40"> / {WORKS.length}</span>
              </span>
              <button
                onClick={() => step(1)}
                aria-label="Next project"
                className="rounded-full border border-paper/30 p-3 text-paper transition-colors hover:bg-paper hover:text-ink"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
