"use client";

import { motion } from "framer-motion";
import { RETURNS } from "@/lib/content";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import CountUp from "../ui/CountUp";

function ProjectedTag() {
  return (
    <span className="ml-2 inline-flex items-center rounded-full border border-iris-cyan/30 bg-iris-cyan/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-iris-cyan">
      Projected
    </span>
  );
}

export default function PassiveIncome() {
  return (
    <Section id="returns">
      <SectionHeading eyebrow="Passive Income" title={RETURNS.heading} />
      <Reveal className="mx-auto mt-6 max-w-2xl text-center text-lg text-lavender">
        {RETURNS.intro}
      </Reveal>

      {/* Figures */}
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {RETURNS.figures.map((f, i) => (
          <Reveal
            key={f.label}
            delay={i * 0.1}
            className="glass-strong relative overflow-hidden rounded-3xl p-7"
          >
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full iris-gradient opacity-20 blur-2xl" />
            <div className="flex items-baseline">
              {f.prefix && (
                <span className="text-2xl font-semibold text-lavender">{f.prefix}</span>
              )}
              <CountUp
                to={f.value}
                decimals={f.decimals ?? 0}
                suffix={f.suffix ?? ""}
                className="iris-text text-4xl font-bold tracking-tight sm:text-5xl"
              />
            </div>
            <p className="mt-3 text-sm text-lavender">{f.label}</p>
            <ProjectedTag />
          </Reveal>
        ))}
      </div>

      {/* Payout flow */}
      <Reveal className="mt-10">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-10">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {RETURNS.flow.map((node, i) => (
              <FlowNode key={node.label} node={node} index={i} isLast={i === RETURNS.flow.length - 1} />
            ))}
          </div>

          {/* animated payout pulse traveling the flow */}
          <div className="pointer-events-none absolute inset-x-10 top-1/2 hidden h-px md:block">
            <motion.span
              className="absolute top-0 h-2 w-2 -translate-y-1/2 rounded-full bg-iris-violet shadow-[0_0_14px_4px_rgba(157,92,255,0.7)]"
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <p className="mt-8 border-t border-white/10 pt-6 text-center text-base text-white/90">
            {RETURNS.ownLine}
          </p>
        </div>
      </Reveal>

      {/* Tagline + founders + disclaimer */}
      <Reveal className="mt-12 text-center">
        <p className="mx-auto max-w-3xl text-balance text-2xl font-medium leading-snug text-white sm:text-3xl">
          {RETURNS.tagline}
        </p>
        <div className="mx-auto mt-6 inline-flex max-w-2xl flex-col items-center gap-3">
          <span className="iris-border rounded-full bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white">
            {RETURNS.founders}
          </span>
          <span className="text-xs text-lavender/80">⚠ {RETURNS.disclaimer}</span>
        </div>
      </Reveal>
    </Section>
  );
}

function FlowNode({
  node,
  index,
  isLast,
}: {
  node: { label: string; note: string };
  index: number;
  isLast: boolean;
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 140, damping: 16, delay: index * 0.2 }}
        className="relative z-10 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center"
      >
        <div className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-xl iris-gradient animate-iris-drift text-lg font-bold text-white">
          {index + 1}
        </div>
        <p className="text-base font-semibold text-white">{node.label}</p>
        <p className="mt-1 text-xs text-lavender">{node.note}</p>
      </motion.div>

      {!isLast && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.15 }}
          className="mx-auto hidden text-2xl text-iris-cyan md:block"
        >
          →
        </motion.div>
      )}
    </>
  );
}
