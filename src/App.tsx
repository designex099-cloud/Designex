import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import { About, Guarantee, Process } from "./components/Sections";
import { Contact, Footer } from "./components/Contact";

/* ---------------------------------------------------------------- */
/*  Preloader                                                       */
/* ---------------------------------------------------------------- */

function Preloader() {
  const letters = "Designex".split("");
  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink text-paper"
    >
      <div className="overflow-hidden">
        <div className="flex">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: "115%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-5xl font-extrabold tracking-tight md:text-7xl"
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 h-px w-40 origin-left bg-paper/40 md:w-56"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-paper/50"
      >
        Logo Design &amp; Brand Identity
      </motion.p>
    </motion.div>
  );
}

/* ---------------------------------------------------------------- */
/*  App                                                             */
/* ---------------------------------------------------------------- */

export default function App() {
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reveal = window.setTimeout(() => {
      setReady(true);
      setLoading(false);
    }, 1900);
    return () => window.clearTimeout(reveal);
  }, []);

  return (
    <div className="bg-ink font-body text-paper">
      <Cursor />

      <AnimatePresence>{loading && <Preloader key="preloader" />}</AnimatePresence>

      <div className="grain" aria-hidden="true" />

      <Nav ready={ready} />

      <main>
        <Hero ready={ready} />
        <Portfolio />
        <About />
        <Process />
        <Guarantee />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
