"use client";

import { motion } from "framer-motion";
import { PARTNER_WHY_US } from "@/lib/partner-content";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

// Light-background version of the Transparency checklist: six operational
// reasons organizations pick Vendi 'N' Go.
export default function PartnerWhyUs() {
  return (
    <div className="hairline-t bg-paper">
      <Section id="partner-why-us" className="max-w-5xl">
        <SectionHeading eyebrow="Why Us" title={PARTNER_WHY_US.heading} />

        <ul className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
          {PARTNER_WHY_US.features.map((f, i) => (
            <motion.li
              key={f}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 140, damping: 18, delay: i * 0.08 }}
              className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-white p-5 text-sm leading-relaxed text-ink"
            >
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-violet text-[10px] font-bold text-white">
                ✓
              </span>
              {f}
            </motion.li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
