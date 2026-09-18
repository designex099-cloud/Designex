import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import {
  EMAIL,
  EMAIL_HREF,
  FACEBOOK,
  MESSENGER,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP,
} from "../data/site";
import { MessengerIcon, WhatsAppIcon } from "./ui";
import logo from "../assets/logo.png";

export default function Nav({ ready }: { ready: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -90 }}
        animate={{ y: ready ? 0 : -90 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 mix-blend-difference text-white transition-opacity duration-300 ${
          open ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 md:px-10 md:py-6">
          <a href="#top" className="flex items-center" aria-label="Designex">
            <img src={logo} alt="Designex" className="h-6 w-auto md:h-7" />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-[12px] font-medium uppercase tracking-[0.22em] text-white/80 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 border border-white/60 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:inline-flex"
            >
              Start a Project
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="inline-flex p-1 lg:hidden"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="on-dark fixed inset-0 z-[80] flex flex-col overflow-y-auto overflow-x-hidden bg-ink text-paper"
          >
            <div className="flex shrink-0 items-center justify-between px-5 py-5 md:px-10">
              <a
                href="#top"
                onClick={() => setOpen(false)}
                className="flex items-center"
                aria-label="Designex"
              >
                <img src={logo} alt="Designex" className="h-6 w-auto" />
              </a>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="rounded-full border border-paper/30 p-2.5 transition-colors hover:bg-paper hover:text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center px-5 py-6 md:px-10">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <li key={link.href} className="overflow-hidden">
                    <motion.a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.15 + i * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group flex max-w-full items-baseline gap-3 py-1.5 font-display text-[clamp(1.6rem,7.6vw,3.5rem)] font-extrabold uppercase leading-[1.08] tracking-tight"
                    >
                      <span className="text-xs font-medium text-paper/40 transition-colors group-hover:text-paper">
                        0{i + 1}
                      </span>
                      <span className="transition-transform duration-500 group-hover:translate-x-3">
                        {link.label}
                      </span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="shrink-0 border-t border-paper/15 px-5 py-6 md:px-10"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-col gap-1 text-sm">
                  <a
                    href={PHONE_TEL}
                    className="font-semibold tracking-wide hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <a
                    href={EMAIL_HREF}
                    className="text-paper/60 hover:underline"
                  >
                    {EMAIL}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="rounded-full border border-paper/30 p-3 transition-colors hover:bg-paper hover:text-ink"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={MESSENGER}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Messenger"
                    className="rounded-full border border-paper/30 p-3 transition-colors hover:bg-paper hover:text-ink"
                  >
                    <MessengerIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={FACEBOOK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="rounded-full border border-paper/30 p-3 transition-colors hover:bg-paper hover:text-ink"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
