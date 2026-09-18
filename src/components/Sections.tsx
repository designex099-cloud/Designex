import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { WHATSAPP } from "../data/site";
import { Eyebrow, FadeWords, Reveal } from "./ui";

/* ---------------------------------------------------------------- */
/*  About                                                           */
/* ---------------------------------------------------------------- */

const FACTS = [
  { label: "Discipline", value: "Custom logo design & brand identity" },
  { label: "Style", value: "Modern, unique, memorable" },
  { label: "Guarantee", value: "100% satisfaction" },
  { label: "Risk", value: "Zero" },
];

export function About() {
  return (
    <section id="about" className="on-dark scroll-mt-10 bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <Eyebrow>About Designex</Eyebrow>
        </Reveal>

        <FadeWords
          className="mt-8 max-w-5xl font-display text-[clamp(1.7rem,4.4vw,3.8rem)] font-bold leading-[1.12] tracking-tight md:mt-12"
          text="Designex is a creative agency specializing in custom logo design and brand identity."
        />

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.32em] text-paper/50">
                What we do
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-paper/70 md:text-lg">
                We create modern, unique logos that help your brand stand out.
                Every identity is designed from scratch around your story —
                never templated, never generic.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 className="mt-10 text-[11px] font-semibold uppercase tracking-[0.32em] text-paper/50">
                Our promise
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-paper/70 md:text-lg">
                We offer a 100% satisfaction guarantee with zero risk.
                Let&apos;s build something awesome together.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            {FACTS.map((fact, i) => (
              <Reveal key={fact.label} delay={i * 0.05}>
                <div className="grid grid-cols-[110px_1fr] items-baseline gap-4 border-t border-paper/15 py-5 last:border-b md:grid-cols-[180px_1fr] md:py-7">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-paper/40">
                    {fact.label}
                  </span>
                  <span className="font-display text-lg font-bold tracking-tight md:text-2xl">
                    {fact.value}
                  </span>
                </div>
              </Reveal>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Process                                                         */
/* ---------------------------------------------------------------- */

const STEPS = [
  {
    n: "01",
    title: "Brief & Discovery",
    text: "We start by listening. You tell us about your brand, your audience, and what you want your logo to say.",
  },
  {
    n: "02",
    title: "Research & Direction",
    text: "We study your market and visual landscape to find a creative direction that makes your brand stand out.",
  },
  {
    n: "03",
    title: "Design & Concepts",
    text: "We craft custom logo concepts from scratch — modern, unique, and made to fit your brand perfectly.",
  },
  {
    n: "04",
    title: "Refine & Deliver",
    text: "Together we refine your chosen design until you love it, then deliver everything your brand needs.",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-10 bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <Reveal>
              <Eyebrow>The Process</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 font-display text-[clamp(2.4rem,6.5vw,6rem)] font-extrabold uppercase leading-[0.92] tracking-tight">
                From brief
                <br />
                to <span className="text-outline-k">brilliant.</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.12}>
              <p className="max-w-sm text-base leading-relaxed text-ink/60">
                A simple, transparent way of working — from the first message
                to the final logo. No surprises, no risk.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 md:mt-20">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.04}>
              <div className="group grid grid-cols-[64px_1fr] items-start gap-5 border-t border-ink/15 px-2 py-8 transition-colors duration-500 last:border-b hover:bg-ink hover:text-paper md:grid-cols-[150px_1fr_1fr_60px] md:items-center md:gap-8 md:px-6 md:py-12">
                <span className="font-display text-4xl font-extrabold leading-none tracking-tight text-outline-k-thin transition-colors duration-500 md:text-7xl">
                  {step.n}
                </span>
                <h3 className="font-display text-xl font-bold leading-tight tracking-tight md:text-3xl">
                  {step.title}
                </h3>
                <p className="col-span-2 max-w-md text-sm leading-relaxed text-ink/55 transition-colors duration-500 group-hover:text-paper/60 md:col-span-1 md:text-base">
                  {step.text}
                </p>
                <ArrowUpRight className="hidden h-7 w-7 -translate-x-2 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 md:block" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Satisfaction Guarantee                                          */
/* ---------------------------------------------------------------- */

export function Guarantee() {
  return (
    <section
      id="guarantee"
      className="on-dark relative scroll-mt-10 overflow-hidden bg-ink text-paper"
    >
      {/* Giant backdrop word */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none text-center font-display text-[13vw] font-extrabold uppercase leading-[0.8] tracking-tight text-outline-w-thin opacity-40"
      >
        Zero Risk
      </span>

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 text-center md:px-10 md:py-40">
        {/* Rotating badge */}
        <Reveal>
          <div className="relative mx-auto h-44 w-44 md:h-52 md:w-52">
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 h-full w-full animate-rotate-slow"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="guarantee-circle"
                  d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
                />
              </defs>
              <text
                className="fill-paper/70 uppercase"
                style={{ fontSize: 12.5, letterSpacing: "0.34em", fontWeight: 600 }}
              >
                <textPath href="#guarantee-circle">
                  100% Satisfaction Guaranteed — Zero Risk —
                </textPath>
              </text>
            </svg>
            <span className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full border border-paper/25 md:h-24 md:w-24">
              <ShieldCheck className="h-8 w-8 md:h-10 md:w-10" />
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mx-auto mt-10 text-center font-display text-[clamp(1.75rem,7.4vw,5.5rem)] font-extrabold uppercase leading-[1.04] tracking-tight sm:mt-12 md:mt-16">
            100%
            <br />
            Satisfaction.
            <br />
            <span className="text-outline-w">Zero Risk.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-paper/60 md:mt-8 md:text-lg">
            We stand behind every logo we design. Your project is covered by
            our 100% satisfaction guarantee — so you can create with total
            confidence and absolutely zero risk.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-3 bg-paper px-9 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-ink transition-transform duration-300 hover:scale-[1.04] md:mt-12"
          >
            Start Your Risk-Free Project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
