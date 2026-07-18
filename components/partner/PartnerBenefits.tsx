"use client";

import { motion } from "framer-motion";
import { PARTNER_BENEFITS } from "@/lib/partner-content";
import { em } from "@/lib/em";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

// Same assembling-grid treatment as the investor "Why Vendi 'N' Go" bento —
// six equal cards, with the revenue-share card getting the solid violet look.
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 110, damping: 17 },
  },
};

// Index of the headline card (10% Monthly Revenue Share).
const FEATURE_INDEX = 2;

export default function PartnerBenefits() {
  return (
    <div className="hairline-t bg-paper">
      <Section id="partner-benefits">
        <SectionHeading eyebrow="Why Vendi 'N' Go" title={PARTNER_BENEFITS.heading} />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-12% 0px" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-16 grid auto-rows-[minmax(180px,auto)] gap-5 md:grid-cols-3"
        >
          {PARTNER_BENEFITS.cards.map((c, i) => {
            const feature = i === FEATURE_INDEX;
            return (
              <motion.div
                key={c.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-3xl p-7 sm:p-8 ${
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
                    {c.title}
                  </h3>
                  <p
                    className={`mt-3 max-w-md text-base leading-relaxed ${
                      feature ? "text-white/80" : "text-ink-soft"
                    }`}
                  >
                    {em(c.body, feature ? "dark" : "light")}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>
    </div>
  );
}
