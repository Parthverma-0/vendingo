"use client";

import { motion } from "framer-motion";
import { PARTNER_LOCATIONS } from "@/lib/partner-content";
import { em } from "@/lib/em";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import IrisButton from "../ui/IrisButton";

// Same pin-drop Jaipur map and icon-card + arrow pattern as the investor
// Locations section, reframed with footfall signals per category plus the
// full list of eligible location types.
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
          className="absolute bottom-0 h-6 w-6 rounded-full bg-violet"
          animate={{ scale: [1, 2.4], opacity: [0.35, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay }}
        />
        <span className="relative z-10 grid h-7 w-7 place-items-center rounded-full bg-violet shadow-[0_6px_16px_-4px_rgba(124,58,237,0.6)]">
          <span className="h-2 w-2 rounded-full bg-white" />
        </span>
        <span className="mt-1 h-3 w-px bg-ink/30" />
        <span className="pointer-events-none absolute bottom-9 whitespace-nowrap rounded-md border border-ink/10 bg-white px-2 py-1 font-mono text-[10px] font-medium text-ink opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

export default function PartnerLocations() {
  return (
    <div className="bg-tint-50">
      <Section id="partner-locations">
        <SectionHeading eyebrow="Preferred Locations" title={PARTNER_LOCATIONS.heading} />
        <Reveal className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-ink-soft">
          {em(PARTNER_LOCATIONS.body)}
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Stylized Jaipur map */}
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-ink/10 bg-white">
            {/* subtle grid */}
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(10,10,10,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.05) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_45%_40%,rgba(124,58,237,0.07),transparent_70%)]" />
            {/* faux roads */}
            <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
              <motion.path
                d="M -10 120 Q 200 80 320 200 T 600 260"
                stroke="rgba(124,58,237,0.25)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              />
              <motion.path
                d="M 80 -10 Q 140 160 300 220 T 520 420"
                stroke="rgba(10,10,10,0.12)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, delay: 0.2 }}
              />
            </svg>

            <span className="eyebrow absolute left-4 top-4 rounded-full border border-ink/10 bg-white px-3 py-1">
              Jaipur · Pilot Zone
            </span>

            {PARTNER_LOCATIONS.categories.map((c, i) => (
              <Pin key={c.name} x={c.x} y={c.y} delay={0.3 + i * 0.15} label={c.name} />
            ))}
          </Reveal>

          {/* Category cards — footfall signal per category */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={{ show: { transition: { staggerChildren: 0.09 } } }}
            className="flex flex-col gap-3"
          >
            {PARTNER_LOCATIONS.categories.map((c, i) => (
              <motion.div
                key={c.name}
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 140, damping: 18 } },
                }}
                whileHover={{ x: 4 }}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-white p-4 sm:p-5"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet/[0.08] font-mono text-xs font-bold text-violet">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-display text-base font-bold text-ink">{c.name}</p>
                    <p className="text-xs text-ink-muted">{c.detail}</p>
                  </div>
                </div>
                <span className="text-ink-faint transition-transform group-hover:translate-x-1 group-hover:text-violet">
                  →
                </span>
              </motion.div>
            ))}

            <Reveal delay={0.2} className="mt-2">
              <IrisButton href="/location-partner/apply" className="w-full">
                {PARTNER_LOCATIONS.cta} →
              </IrisButton>
            </Reveal>
          </motion.div>
        </div>

        {/* All eligible location types */}
        <Reveal className="mt-12">
          <p className="eyebrow mb-5 text-center">We also install at</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {PARTNER_LOCATIONS.types.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3.5 py-2 text-xs font-medium text-ink-soft"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
