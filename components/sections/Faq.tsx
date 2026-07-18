"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQ } from "@/lib/content";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

type Props = {
  id?: string;
  title?: string;
  items?: typeof FAQ;
};

// Signature animation: a shared violet accent glides between questions as you
// open them (layoutId), while answers spring open in place.
// Defaults render the investor FAQ; the partner page passes its own items.
export default function Faq({
  id = "faq",
  title = "Questions, answered honestly.",
  items = FAQ,
}: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="bg-paper">
      <Section id={id} className="max-w-4xl">
        <SectionHeading eyebrow="FAQ" title={title} />

        <div className="mt-14 flex flex-col">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ type: "spring", stiffness: 120, damping: 20, delay: i * 0.04 }}
                className="relative border-b border-ink/10"
              >
                {isOpen && (
                  <motion.span
                    layoutId="faq-accent"
                    className="absolute inset-y-0 left-0 w-[3px] bg-violet"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-6 text-left sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-[11px] font-medium text-violet">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-base font-bold sm:text-lg ${
                        isOpen ? "text-violet-deep" : "text-ink"
                      }`}
                    >
                      {item.q}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border text-lg ${
                      isOpen
                        ? "border-violet bg-violet text-white"
                        : "border-ink/15 text-ink"
                    }`}
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
                      <div className="px-5 pb-7 sm:px-6 sm:pl-[52px]">
                        <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
