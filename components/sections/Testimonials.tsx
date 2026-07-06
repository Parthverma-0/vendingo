"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/content";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="flex flex-col items-center">
        <SectionHeading eyebrow="Testimonials" title={TESTIMONIALS.heading} />
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 160, damping: 16, delay: 0.1 }}
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md"
        >
          ⚠ {TESTIMONIALS.tag}
        </motion.span>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {TESTIMONIALS.items.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ type: "spring", stiffness: 100, damping: 18, delay: i * 0.15 }}
            className="glass-strong group relative overflow-hidden rounded-3xl p-8 sm:p-10"
          >
            {/* sheen sweep on entrance */}
            <motion.div
              aria-hidden
              className="sheen-sweep"
              initial={{ x: "-160%", skewX: "-20deg" }}
              whileInView={{ x: "260%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: "easeInOut", delay: 0.3 + i * 0.15 }}
            />

            <div className="relative">
              <span className="iris-text text-6xl font-bold leading-none">&ldquo;</span>
              <blockquote className="-mt-4 text-lg leading-relaxed text-white/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full iris-gradient animate-iris-drift text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-lavender">{t.place}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="iris-text text-lg font-bold">{t.amount}</p>
                  <p className="text-[10px] uppercase tracking-wider text-lavender/70">
                    projected
                  </p>
                </div>
              </figcaption>
            </div>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
