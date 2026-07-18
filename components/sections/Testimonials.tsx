"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/content";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

type Props = {
  id?: string;
  heading?: string;
  tag?: string;
  items?: typeof TESTIMONIALS.items;
};

// Signature animation: the two testimonial cards converge — sliding in from
// opposite edges of the page as you scroll to them.
// Defaults render the investor testimonials; the partner page passes its own.
export default function Testimonials({
  id = "testimonials",
  heading = TESTIMONIALS.heading,
  tag = TESTIMONIALS.tag,
  items = TESTIMONIALS.items,
}: Props) {
  return (
    <div className="hairline-t bg-paper">
      <Section id={id}>
        <div className="flex flex-col items-center">
          <SectionHeading eyebrow="Testimonials" title={heading} />
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 160, damping: 16, delay: 0.1 }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-tint-100 px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink"
          >
            ⚠ {tag}
          </motion.span>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ type: "spring", stiffness: 70, damping: 18, delay: i * 0.1 }}
              className="relative flex flex-col rounded-3xl border border-ink/10 bg-white p-8 sm:p-10"
            >
              <span className="font-display text-6xl font-bold leading-none text-violet">
                &ldquo;
              </span>
              <blockquote className="-mt-3 text-lg leading-relaxed text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto flex items-center justify-between border-t border-ink/10 pt-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-violet font-display text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-ink">{t.name}</p>
                    <p className="text-xs text-ink-muted">{t.place}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-display text-lg font-bold text-violet">{t.amount}</p>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-ink-muted">
                    projected
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Section>
    </div>
  );
}
