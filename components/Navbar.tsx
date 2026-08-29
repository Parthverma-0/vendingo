"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { NAV_LINKS } from "@/lib/content";
import Logo from "./Logo";
import IrisButton from "./ui/IrisButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24);
  });

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.1 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-ink/10 bg-white/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="/#hero" aria-label="Vendingo home">
            <Logo />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative rounded-full px-3.5 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
                >
                  {link.label}
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-violet transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <IrisButton href="/apply" className="px-5 py-2.5 text-[13px]">
              Explore the Opportunity
            </IrisButton>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/10 bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded-full bg-ink" />
              <span className="h-0.5 w-5 rounded-full bg-ink" />
              <span className="h-0.5 w-3.5 rounded-full bg-ink" />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-ink/20 backdrop-blur-sm" />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col gap-2 border-l border-ink/10 bg-white px-6 pb-10 pt-6"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/10 text-2xl text-ink"
                >
                  &times;
                </button>
              </div>

              <motion.ul
                className="mt-8 flex flex-col gap-1"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                }}
              >
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      show: { opacity: 1, x: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 border-b border-ink/10 py-4 font-display text-2xl font-bold text-ink hover:text-violet"
                    >
                      <span className="font-mono text-[11px] font-medium text-violet">
                        0{i + 1}
                      </span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-auto flex flex-col gap-3">
                <IrisButton href="/apply" className="w-full" pulse>
                  Explore the Opportunity
                </IrisButton>
                <IrisButton href="/location-partner" variant="ghost" className="w-full">
                  Partner Your Location
                </IrisButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
