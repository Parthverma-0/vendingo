"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { NUMBERS } from "@/lib/content";
import CountUp from "../ui/CountUp";

// Signature animation: the dark band swells open as you scroll — scale and
// corner radius driven by scroll progress — then the goal figures count up inside.
export default function Numbers() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [48, 32]);

  return (
    <section id="numbers" ref={ref} className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
      <motion.div
        style={{ scale, borderRadius: radius }}
        className="relative overflow-hidden bg-night p-8 sm:p-14"
      >
        {/* violet blooms in the dark */}
        <div className="pointer-events-none absolute -left-20 top-0 h-60 w-60 rounded-full bg-violet/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-violet/15 blur-3xl" />

        <div className="relative flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 140, damping: 16 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet-bright" />
            {NUMBERS.badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="display mt-7 text-4xl text-white sm:text-5xl"
          >
            {NUMBERS.heading}
          </motion.h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">
            {NUMBERS.note}
          </p>
        </div>

        <div className="relative mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {NUMBERS.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ type: "spring", stiffness: 120, damping: 16, delay: i * 0.1 }}
              className="bg-night p-6 text-center sm:p-8"
            >
              <CountUp
                to={s.value}
                suffix={s.suffix}
                className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl"
              />
              <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-white/50">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
