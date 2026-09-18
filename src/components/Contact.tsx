import { ArrowUp, ArrowUpRight, Mail, Phone, ShieldCheck } from "lucide-react";
import {
  EMAIL,
  EMAIL_HREF,
  FACEBOOK,
  MESSENGER,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP,
} from "../data/site";
import { Eyebrow, MessengerIcon, Reveal, WhatsAppIcon } from "./ui";
import logo from "../assets/logo.png";

const FacebookIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
  </svg>
);

/* ---------------------------------------------------------------- */
/*  Contact                                                         */
/* ---------------------------------------------------------------- */

const CHANNELS = [
  {
    label: "WhatsApp",
    note: "Chat with us now",
    value: PHONE_DISPLAY,
    href: WHATSAPP,
    external: true,
    small: false,
    icon: <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    label: "Call",
    note: "Talk to us directly",
    value: PHONE_DISPLAY,
    href: PHONE_TEL,
    external: false,
    small: false,
    icon: <Phone className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    label: "Email",
    note: "Write to us anytime",
    value: EMAIL,
    href: EMAIL_HREF,
    external: false,
    small: true,
    icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: FACEBOOK,
    icon: <FacebookIcon className="h-5 w-5" />,
  },
  {
    label: "Messenger",
    href: MESSENGER,
    icon: <MessengerIcon className="h-5 w-5" />,
  },
  {
    label: "WhatsApp",
    href: WHATSAPP,
    icon: <WhatsAppIcon className="h-5 w-5" />,
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-10 bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:py-24 md:px-10 md:py-32">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <Eyebrow>Contact</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-[clamp(2.3rem,6.2vw,5.6rem)] font-extrabold leading-[0.98] tracking-tight">
                Let&apos;s build something{" "}
                <span className="text-outline-k">awesome</span> together.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.1}>
              <p className="max-w-sm text-base leading-relaxed text-ink/60">
                Have a brand to launch or a logo to refresh? Reach out through
                any channel below — we&apos;d love to hear about it.
              </p>
              <div className="mt-6 inline-flex items-center gap-3 border border-ink/20 px-5 py-3">
                <ShieldCheck className="h-5 w-5 shrink-0" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">
                  100% Satisfaction — Zero Risk
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Contact board */}
        <Reveal delay={0.05}>
          <div className="mt-12 border border-ink/15 md:mt-16">
            {CHANNELS.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                {...(channel.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group grid grid-cols-[48px_1fr_auto] items-center gap-4 border-b border-ink/10 px-5 py-6 transition-colors duration-500 last:border-b-0 hover:bg-ink hover:text-paper sm:grid-cols-[64px_220px_1fr_auto] sm:gap-6 sm:px-8 md:grid-cols-[72px_260px_1fr_auto] md:px-10 md:py-9"
              >
                <span className="flex h-12 w-12 items-center justify-center border border-ink/20 transition-colors duration-500 group-hover:border-paper/40 group-hover:bg-paper group-hover:text-ink sm:h-16 sm:w-16">
                  {channel.icon}
                </span>
                <span className="hidden text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/45 transition-colors duration-500 group-hover:text-paper/50 sm:block">
                  {channel.label}
                  <br />
                  <span className="font-medium normal-case tracking-normal text-ink/35 transition-colors duration-500 group-hover:text-paper/40">
                    {channel.note}
                  </span>
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/45 transition-colors duration-500 group-hover:text-paper/50 sm:hidden">
                    {channel.label}
                  </span>
                  <span
                    className={`block break-all font-display font-bold leading-tight tracking-tight ${
                      channel.small
                        ? "text-lg sm:text-2xl md:text-[2rem]"
                        : "text-xl sm:text-3xl md:text-4xl"
                    }`}
                  >
                    {channel.value}
                  </span>
                </span>
                <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 md:h-9 md:w-9" />
              </a>
            ))}
          </div>
        </Reveal>

        {/* Social strip */}
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {SOCIALS.map((social, i) => (
            <Reveal key={social.label} delay={0.08 + i * 0.05}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-ink/15 px-6 py-5 transition-colors duration-500 hover:border-ink hover:bg-ink hover:text-paper md:px-8"
              >
                <span className="flex items-center gap-4">
                  {social.icon}
                  <span className="font-display text-base font-bold tracking-tight md:text-lg">
                    {social.label}
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 opacity-40 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
            </Reveal>
          ))}
        </div>

        {/* CTA banner */}
        <Reveal delay={0.1}>
          <div className="on-dark mt-4 flex flex-col items-start justify-between gap-8 bg-ink px-6 py-10 text-paper sm:px-10 md:flex-row md:items-center md:px-14 md:py-16">
            <div>
              <h3 className="font-display text-3xl font-extrabold leading-[1.02] tracking-tight sm:text-4xl md:text-5xl">
                Ready to stand out?
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/60 md:text-base">
                Message us on WhatsApp and let&apos;s start crafting your logo
                — 100% satisfaction guaranteed, zero risk.
              </p>
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 bg-paper px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-ink transition-transform duration-300 hover:scale-[1.03] sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/*  Footer                                                          */
/* ---------------------------------------------------------------- */

const FOOTER_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Guarantee", href: "#guarantee" },
  { label: "Contact", href: "#contact" },
];

const MARQUEE_ITEMS = [
  { text: "Designex", outline: false },
  { text: "Logo Design", outline: true },
  { text: "Brand Identity", outline: false },
  { text: "Stand Out", outline: true },
];

export function Footer() {
  return (
    <footer className="on-dark bg-ink text-paper">
      {/* Text marquee */}
      <div className="marquee overflow-hidden border-b border-paper/15 py-6 md:py-9">
        <div className="flex w-max animate-marquee items-center">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
            (item, i) => (
              <span key={i} className="flex items-center" aria-hidden={i > 3}>
                <span
                  className={`whitespace-nowrap px-6 font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl md:px-10 md:text-6xl ${
                    item.outline ? "text-outline-w-thin" : ""
                  }`}
                >
                  {item.text}
                </span>
                <span
                  className="h-2.5 w-2.5 rotate-45 bg-paper/60 md:h-3.5 md:w-3.5"
                  aria-hidden="true"
                />
              </span>
            )
          )}
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        {/* Main grid */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 md:py-20 lg:grid-cols-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <a href="#top" className="inline-flex items-center" aria-label="Designex">
              <img src={logo} alt="Designex" className="h-9 w-auto md:h-10" />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/55">
              Custom logo design &amp; brand identity. Modern, unique logos
              that help your brand stand out — with a 100% satisfaction
              guarantee and zero risk.
            </p>
            <div className="mt-7 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-paper/25 transition-colors duration-300 hover:bg-paper hover:text-ink"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-paper/40">
              Menu
            </h4>
            <ul className="mt-6 flex flex-col gap-3.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-paper/70 transition-colors hover:text-paper"
                  >
                    <span className="h-px w-0 bg-paper transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-paper/40">
              Get in touch
            </h4>
            <ul className="mt-6 flex flex-col gap-5">
              <li>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-paper/35">
                  Call / WhatsApp
                </span>
                <a
                  href={PHONE_TEL}
                  className="mt-1 block font-display text-lg font-bold tracking-tight text-paper/85 transition-colors hover:text-paper"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-paper/35">
                  Email
                </span>
                <a
                  href={EMAIL_HREF}
                  className="mt-1 block break-all font-display text-lg font-bold tracking-tight text-paper/85 transition-colors hover:text-paper"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Guarantee card */}
          <div className="lg:col-span-3">
            <div className="flex h-full flex-col justify-between gap-8 border border-paper/20 p-6 md:p-7">
              <div>
                <ShieldCheck className="h-8 w-8" />
                <h4 className="mt-4 font-display text-xl font-bold leading-tight tracking-tight">
                  100% Satisfaction Guarantee
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-paper/55">
                  Every project, every time. Zero risk.
                </p>
              </div>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 border border-paper/30 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-paper hover:text-ink"
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-paper/15 py-7 text-[11px] font-medium uppercase tracking-[0.22em] text-paper/40 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Designex. All rights reserved.</span>
          <span className="hidden lg:block">Made for brands that stand out.</span>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-paper/60 transition-colors hover:text-paper"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-paper/25 transition-colors duration-300 group-hover:bg-paper group-hover:text-ink">
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
