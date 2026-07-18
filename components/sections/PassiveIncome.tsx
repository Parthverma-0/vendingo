"use client";

import { motion } from "framer-motion";
import { RETURNS } from "@/lib/content";
import { em } from "@/lib/em";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import CountUp from "../ui/CountUp";

function ProjectedTag() {
  return (
    <span className="mt-3 inline-flex w-fit items-center rounded-full border border-violet/30 bg-violet/[0.06] px-2.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-violet">
      Projected
    </span>
  );
}

// Signature animation: the three headline figures rise in as ruled editorial
// columns and count up in sequence; the payout flow then draws its connector line.
export default function PassiveIncome() {
  return (
    <div className="bg-tint-50">
      <Section id="returns">
        <SectionHeading eyebrow="Passive Income" title={RETURNS.heading} />
        <Reveal className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-ink-soft">
          {RETURNS.intro}
        </Reveal>

        {/* Figures — ruled editorial columns */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={{ show: { transition: { staggerChildren: 0.18 } } }}
          className="mt-16 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-ink/10"
        >
          {RETURNS.figures.map((f) => (
            <motion.div
              key={f.label}
              variants={{
                hidden: { opacity: 0, y: 36 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 90, damping: 18 },
                },
              }}
              className="flex flex-col border-t-2 border-ink pt-6 md:px-8 md:first:pl-0 md:last:pr-0"
            >
              <div className="flex items-baseline">
                {f.prefix && (
                  <span className="font-display text-2xl font-bold text-ink-muted">
                    {f.prefix}
                  </span>
                )}
                <CountUp
                  to={f.value}
                  decimals={f.decimals ?? 0}
                  suffix={f.suffix ?? ""}
                  className="font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl"
                />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.label}</p>
              <ProjectedTag />
            </motion.div>
          ))}
        </motion.div>

        {/* Payout flow */}
        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white p-8 sm:p-10">
            <div className="relative grid items-stretch gap-6 md:grid-cols-3">
              {/* connector line that draws across behind the nodes */}
              <div className="pointer-events-none absolute inset-x-16 top-[26px] hidden h-px md:block">
                <motion.span
                  className="absolute inset-y-0 left-0 w-full origin-left bg-violet/40"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-20% 0px" }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
                />
              </div>
              {RETURNS.flow.map((node, i) => (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ type: "spring", stiffness: 140, damping: 16, delay: i * 0.25 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <span className="grid h-[52px] w-[52px] place-items-center rounded-2xl bg-violet font-display text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="mt-4 font-display text-base font-bold text-ink">{node.label}</p>
                  <p className="mt-1 text-xs text-ink-muted">{node.note}</p>
                </motion.div>
              ))}
            </div>

            <p className="mt-9 border-t border-ink/10 pt-6 text-center text-base text-ink">
              {em(RETURNS.ownLine)}
            </p>
          </div>
        </Reveal>

        {/* Tagline + founders + disclaimer */}
        <Reveal className="mt-14 text-center">
          <p className="display mx-auto max-w-3xl text-2xl text-ink sm:text-3xl">
            {RETURNS.tagline}
          </p>
          <div className="mx-auto mt-7 flex max-w-2xl flex-col items-center gap-3">
            <span className="rounded-full border border-violet/30 bg-white px-5 py-2.5 text-sm font-medium text-ink">
              {em(RETURNS.founders)}
            </span>
            <span className="font-mono text-[11px] tracking-wide text-ink-muted">
              ⚠ {RETURNS.disclaimer}
            </span>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
