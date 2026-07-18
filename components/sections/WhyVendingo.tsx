"use client";

import { motion } from "framer-motion";
import { WHY } from "@/lib/content";
import { em } from "@/lib/em";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

// Signature animation: the bento grid assembles — cards stagger in with a
// spring scale-and-rise, one after another.
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 110, damping: 17 },
  },
};

export default function WhyVendingo() {
  return (
    <div className="hairline-t bg-paper">
      <Section id="why">
        <SectionHeading eyebrow="Why Vendi 'N' Go" title={WHY.heading} />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-12% 0px" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-16 grid auto-rows-[minmax(180px,auto)] gap-5 md:grid-cols-3"
        >
          {WHY.pillars.map((p, i) => {
            // The headline target pillar gets the solid violet treatment.
            const feature = i === WHY.pillars.length - 1;
            return (
              <motion.div
                key={p.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-3xl p-7 sm:p-8 ${
                  p.span === "lg" ? "md:col-span-2" : "md:col-span-1"
                } ${
                  feature
                    ? "bg-violet text-white"
                    : "border border-ink/10 bg-tint-50"
                }`}
              >
                <div className="relative">
                  <div
                    className={`mb-6 flex h-11 w-11 items-center justify-center rounded-xl font-mono text-sm font-bold ${
                      feature
                        ? "bg-white/15 text-white"
                        : "border border-ink/10 bg-white text-violet"
                    }`}
                  >
                    0{i + 1}
                  </div>
                  <h3
                    className={`font-display text-xl font-bold tracking-tight sm:text-2xl ${
                      feature ? "text-white" : "text-ink"
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p
                    className={`mt-3 max-w-md text-base leading-relaxed ${
                      feature ? "text-white/80" : "text-ink-soft"
                    }`}
                  >
                    {em(p.body, feature ? "dark" : "light")}
                  </p>
                  {p.sub && (
                    <span
                      className={`mt-5 inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${
                        feature
                          ? "border border-white/30 bg-white/10 text-white"
                          : "border border-violet/30 bg-violet/[0.06] text-violet"
                      }`}
                    >
                      {p.sub}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>
    </div>
  );
}
