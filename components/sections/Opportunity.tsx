"use client";

import { motion } from "framer-motion";
import { OPPORTUNITY } from "@/lib/content";
import { em } from "@/lib/em";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import CountUp from "../ui/CountUp";

// Signature animation: market-headroom bars grow across on scroll while the
// idle-savings figure counts up — Japan's bar is nearly full, India's barely started.
function Bar({
  country,
  ratio,
  fill,
  delay,
  accent,
}: {
  country: string;
  ratio: string;
  fill: number; // 0-100
  delay: number;
  accent: string;
}) {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-baseline justify-between">
        <span className="font-display text-sm font-bold text-ink">{country}</span>
        <span className="font-mono text-xs text-ink-muted">{ratio}</span>
      </div>
      <div className="relative h-3 w-full overflow-hidden rounded-full border border-ink/10 bg-ink/[0.03]">
        <motion.div
          className={`absolute inset-y-0 left-0 rounded-full ${accent}`}
          initial={{ width: "0%" }}
          whileInView={{ width: `${fill}%` }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ type: "spring", stiffness: 50, damping: 18, delay }}
        />
      </div>
    </div>
  );
}

export default function Opportunity() {
  const { idleStat, comparison } = OPPORTUNITY;

  return (
    <div className="hairline-t bg-paper">
      <Section id="opportunity">
        <SectionHeading eyebrow="The Opportunity" title={OPPORTUNITY.heading} />
        <Reveal className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-ink-soft">
          {em(OPPORTUNITY.body)}
        </Reveal>

        <div className="mt-16 grid items-stretch gap-5 lg:grid-cols-2">
          {/* Idle savings stat */}
          <Reveal className="relative overflow-hidden rounded-3xl border border-ink/10 bg-tint-50 p-8 sm:p-10">
            <p className="eyebrow">India&apos;s idle savings</p>
            <div className="mt-6 flex items-end gap-2">
              <span className="font-display text-2xl font-bold text-ink-muted">₹</span>
              <CountUp
                to={idleStat.value}
                className="font-display text-6xl font-bold leading-none tracking-tight text-violet sm:text-7xl"
              />
              <span className="pb-1 font-display text-3xl font-bold text-violet sm:text-4xl">
                {idleStat.suffix}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-soft">
              {idleStat.label}
            </p>
            <p className="mt-6 border-t border-ink/10 pt-5 text-sm text-ink">
              That capital could be owning real, income-producing assets instead.
            </p>
          </Reveal>

          {/* India vs Japan comparison */}
          <Reveal
            delay={0.1}
            className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white p-8 sm:p-10"
          >
            <p className="eyebrow">{comparison.label}</p>
            <div className="mt-9 flex flex-col gap-8">
              <Bar
                country={comparison.japan.country}
                ratio={comparison.japan.ratio}
                fill={96}
                delay={0.15}
                accent="bg-violet"
              />
              <Bar
                country={comparison.india.country}
                ratio={comparison.india.ratio}
                fill={9}
                delay={0.35}
                accent="bg-violet-deep"
              />
            </div>
            <p className="mt-9 border-t border-ink/10 pt-5 text-sm leading-relaxed text-ink-soft">
              {comparison.note}
            </p>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
