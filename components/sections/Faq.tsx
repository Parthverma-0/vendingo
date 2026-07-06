"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQ } from "@/lib/content";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" className="max-w-4xl">
      <SectionHeading eyebrow="FAQ" title="Questions, answered honestly." />

      <div className="mt-12 flex flex-col gap-3">
        {FAQ.map((item, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ type: "spring", stiffness: 120, damping: 20, delay: i * 0.04 }}
              className={`relative overflow-hidden rounded-2xl border bg-white/[0.03] transition-colors ${
                isOpen ? "border-transparent" : "border-white/8"
              }`}
            >
              {isOpen && (
                <motion.span
                  layoutId="faq-accent"
                  className="absolute inset-0 -z-10 rounded-2xl"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <span className="absolute inset-0 rounded-2xl iris-gradient opacity-15" />
                  <span className="absolute inset-y-0 left-0 w-1 iris-gradient" />
                </motion.span>
              )}

              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold text-white sm:text-lg">
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/15 text-lg text-white"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { type: "spring", stiffness: 90, damping: 18 },
                      opacity: { duration: 0.25 },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="max-w-2xl text-sm leading-relaxed text-lavender">
                        {item.a}
                      </p>
                      {item.flagged && (
                        <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/[0.06] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-lavender">
                          ⚠ Placeholder — client to confirm
                        </span>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
