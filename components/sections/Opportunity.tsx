"use client";

import { motion } from "framer-motion";
import { OPPORTUNITY } from "@/lib/content";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import CountUp from "../ui/CountUp";

// Comparison bar: lower density = more machines per person = better penetration.
// We visualize "market headroom" — Japan's bar is nearly full, India's barely started.
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
        <span className="text-sm font-semibold text-white">{country}</span>
        <span className="text-sm text-lavender">{ratio}</span>
      </div>
      <div className="relative h-4 w-full overflow-hidden rounded-full border border-white/10 bg-white/[0.03]">
        <motion.div
          className={`absolute inset-y-0 left-0 rounded-full ${accent}`}
          initial={{ width: "0%" }}
          whileInView={{ width: `${fill}%` }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ type: "spring", stiffness: 50, damping: 18, delay }}
        >
          <motion.span
            className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.5),transparent)]"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: delay + 0.6 }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function Opportunity() {
  const { idleStat, comparison } = OPPORTUNITY;

  return (
    <Section id="opportunity">
      <SectionHeading
        eyebrow="The Opportunity"
        title={OPPORTUNITY.heading}
      />
      <Reveal className="mx-auto mt-6 max-w-2xl text-center text-lg text-lavender">
        {OPPORTUNITY.body}
      </Reveal>

      <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-2">
        {/* Idle savings stat */}
        <Reveal className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-10">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full iris-gradient opacity-25 blur-3xl" />
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-lavender">
            India&apos;s idle savings
          </p>
          <div className="mt-5 flex items-end gap-2">
            <span className="text-2xl font-semibold text-lavender">₹</span>
            <CountUp
              to={idleStat.value}
              className="iris-text text-6xl font-bold leading-none sm:text-7xl"
            />
            <span className="iris-text pb-1 text-3xl font-bold sm:text-4xl">
              {idleStat.suffix}
            </span>
          </div>
          <p className="mt-5 max-w-sm text-base text-lavender">{idleStat.label}</p>
          <p className="mt-6 text-sm text-white/80">
            That capital could be owning real, income-producing assets instead.
          </p>
        </Reveal>

        {/* India vs Japan comparison */}
        <Reveal delay={0.1} className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-lavender">
            {comparison.label}
          </p>
          <div className="mt-8 flex flex-col gap-7">
            <Bar
              country={comparison.japan.country}
              ratio={comparison.japan.ratio}
              fill={96}
              delay={0.15}
              accent="iris-gradient"
            />
            <Bar
              country={comparison.india.country}
              ratio={comparison.india.ratio}
              fill={9}
              delay={0.35}
              accent="bg-gradient-to-r from-iris-purple to-iris-magenta"
            />
          </div>
          <p className="mt-8 border-t border-white/10 pt-5 text-sm text-white/80">
            {comparison.note}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
