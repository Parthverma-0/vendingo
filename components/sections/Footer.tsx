"use client";

import { motion } from "framer-motion";
import { FOOTER } from "@/lib/content";
import Logo from "../Logo";

const col = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 18 },
  },
};

// Signature animation: footer columns rise in one after another as the page ends.
export default function Footer() {
  return (
    <footer className="hairline-t relative bg-tint-50 px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-5% 0px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]"
        >
          {/* Brand */}
          <motion.div variants={col}>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              Vendi &apos;N&apos; Go — {FOOTER.tagline}
            </p>
            <p className="mt-5 font-mono text-[11px] text-ink-faint">
              © {new Date().getFullYear()} Vendi &apos;N&apos; Go. All rights reserved.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={col}>
            <h4 className="eyebrow">Quick Links</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {FOOTER.quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-soft transition-colors hover:text-violet"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={col}>
            <h4 className="eyebrow">Contact</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {FOOTER.contacts.map((c) => (
                <li key={c}>
                  {c.includes("@") ? (
                    <a
                      href={`mailto:${c}`}
                      className="break-all text-sm text-ink-soft transition-colors hover:text-violet"
                    >
                      {c}
                    </a>
                  ) : /^\+?[\d\s-]+$/.test(c) ? (
                    <a
                      href={`tel:${c.replace(/[\s-]/g, "")}`}
                      className="text-sm text-ink-soft transition-colors hover:text-violet"
                    >
                      {c}
                    </a>
                  ) : (
                    <span className="text-sm text-ink-soft">{c}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Risk disclaimer */}
        <div className="mt-12 rounded-2xl border border-ink/10 bg-white p-5">
          <p className="text-xs leading-relaxed text-ink-soft">
            <span className="font-semibold text-ink">Risk Disclaimer:</span>{" "}
            {FOOTER.disclaimer}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-8 sm:flex-row">
          <p className="font-mono text-[11px] text-ink-faint">
            Made for the Jaipur pilot · India
          </p>
          <ul className="flex items-center gap-6">
            {FOOTER.legal.map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="text-xs text-ink-soft transition-colors hover:text-violet"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
