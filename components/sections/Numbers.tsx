"use client";

import { motion } from "framer-motion";
import { NUMBERS } from "@/lib/content";
import Section from "../ui/Section";
import CountUp from "../ui/CountUp";

export default function Numbers() {
  return (
    <Section id="numbers">
      <div className="glass-strong relative overflow-hidden rounded-[2rem] p-8 sm:p-14">
        <div className="absolute -left-20 top-0 h-60 w-60 rounded-full iris-gradient opacity-20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full iris-gradient opacity-15 blur-3xl" />

        <div className="relative flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 140, damping: 16 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-iris-violet" />
            {NUMBERS.badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            {NUMBERS.heading}
          </motion.h2>
          <p className="mt-4 max-w-xl text-base text-lavender">{NUMBERS.note}</p>
        </div>

        <div className="relative mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {NUMBERS.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ type: "spring", stiffness: 120, damping: 16, delay: i * 0.1 }}
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 text-center"
            >
              <CountUp
                to={s.value}
                suffix={s.suffix}
                className="iris-text text-4xl font-bold tracking-tight sm:text-5xl"
              />
              <p className="mt-2 text-sm text-lavender">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
