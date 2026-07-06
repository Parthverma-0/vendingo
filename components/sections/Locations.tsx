"use client";

import { motion } from "framer-motion";
import { LOCATIONS } from "@/lib/content";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import IrisButton from "../ui/IrisButton";

function Pin({ x, y, delay, label }: { x: number; y: number; delay: number; label: string }) {
  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-full"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, y: -50, scale: 0 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ type: "spring", stiffness: 260, damping: 12, delay }}
    >
      <div className="group relative flex flex-col items-center">
        {/* pulse ring */}
        <motion.span
          className="absolute bottom-0 h-6 w-6 rounded-full iris-gradient"
          animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay }}
        />
        <span className="relative z-10 grid h-7 w-7 place-items-center rounded-full iris-gradient shadow-[0_0_18px_4px_rgba(157,92,255,0.55)]">
          <span className="h-2 w-2 rounded-full bg-white" />
        </span>
        <span className="mt-1 h-3 w-px bg-white/40" />
        <span className="pointer-events-none absolute bottom-9 whitespace-nowrap rounded-md border border-white/10 bg-canvas-deep/90 px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

export default function Locations() {
  return (
    <Section id="locations">
      <SectionHeading eyebrow="Preferred Locations" title={LOCATIONS.heading} />
      <Reveal className="mx-auto mt-6 max-w-2xl text-center text-lg text-lavender">
        {LOCATIONS.body}
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Stylized Jaipur map */}
        <Reveal className="glass-strong relative aspect-[4/3] overflow-hidden rounded-3xl">
          <div className="absolute inset-0 grid-texture opacity-40" />
          <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_45%_40%,rgba(124,58,237,0.18),transparent_70%)]" />
          {/* faux roads */}
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
            <motion.path
              d="M -10 120 Q 200 80 320 200 T 600 260"
              stroke="rgba(184,169,217,0.18)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            />
            <motion.path
              d="M 80 -10 Q 140 160 300 220 T 520 420"
              stroke="rgba(184,169,217,0.14)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.2 }}
            />
          </svg>

          <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-lavender">
            Jaipur · Pilot Zone
          </span>

          {LOCATIONS.categories.map((c, i) => (
            <Pin key={c.name} x={c.x} y={c.y} delay={0.3 + i * 0.15} label={c.name} />
          ))}
        </Reveal>

        {/* Category cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{ show: { transition: { staggerChildren: 0.09 } } }}
          className="flex flex-col gap-3"
        >
          {LOCATIONS.categories.map((c) => (
            <motion.div
              key={c.name}
              variants={{
                hidden: { opacity: 0, x: 30 },
                show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 140, damping: 18 } },
              }}
              whileHover={{ x: 4 }}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4 sm:p-5"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl iris-gradient animate-iris-drift text-white">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                <div>
                  <p className="text-base font-semibold text-white">{c.name}</p>
                  <p className="text-xs text-lavender">{c.detail}</p>
                </div>
              </div>
              <span className="text-lavender/50 transition-transform group-hover:translate-x-1">→</span>
            </motion.div>
          ))}

          <Reveal delay={0.2} className="mt-2">
            <IrisButton href="#final-cta" className="w-full">
              {LOCATIONS.cta}
            </IrisButton>
          </Reveal>
        </motion.div>
      </div>
    </Section>
  );
}
