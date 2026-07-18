"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { STEPS } from "@/lib/content";
import SectionHeading from "../ui/SectionHeading";

type Step = { n: string; title: string; body: string };

type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  steps?: Step[];
};

// Signature animation: pinned section — the five steps travel horizontally as
// you scroll while a violet progress line draws across the top.
// Defaults render the investor flow; the Location Partner page passes its own.
export default function HowItWorks({
  id = "how-it-works",
  eyebrow = "How It Works · Five Steps",
  title = "From signup to your first payout.",
  steps = STEPS,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Horizontal travel of the card track on desktop.
  const x = useTransform(scrollYProgress, [0.05, 0.95], ["2%", "-62%"]);
  // Progress line draws across.
  const lineWidth = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "100%"]);

  return (
    <section id={id} ref={ref} className="relative h-[320vh] bg-paper lg:h-[420vh]">
      <div className="sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden py-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow={eyebrow} title={title} align="left" />
        </div>

        {/* progress line */}
        <div className="mx-auto mt-12 w-full max-w-7xl px-5 sm:px-8">
          <div className="relative h-px w-full bg-ink/10">
            <motion.div
              style={{ width: lineWidth }}
              className="absolute inset-y-[-1px] left-0 bg-violet"
            />
          </div>
        </div>

        {/* Horizontal track (desktop) */}
        <motion.div
          style={{ x }}
          className="mt-12 hidden gap-5 pl-[calc((100vw-80rem)/2+1.25rem)] lg:flex"
        >
          {steps.map((step, i) => (
            <StepCard key={step.n} step={step} index={i} total={steps.length} />
          ))}
        </motion.div>

        {/* Stacked (mobile/tablet) */}
        <div className="mx-auto mt-10 grid w-full max-w-2xl gap-4 px-5 sm:px-8 lg:hidden">
          {steps.map((step) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="rounded-2xl border border-ink/10 bg-white p-6"
            >
              <span className="font-mono text-2xl font-bold text-violet">{step.n}</span>
              <h3 className="mt-3 font-display text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index, total }: { step: Step; index: number; total: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ margin: "-25% 0px" }}
      transition={{ type: "spring", stiffness: 110, damping: 16, delay: index * 0.04 }}
      className="relative w-[340px] shrink-0 rounded-3xl border border-ink/10 bg-white p-8 transition-colors hover:border-violet/40"
    >
      <div className="flex items-center gap-4">
        <span className="font-mono text-4xl font-bold text-violet">{step.n}</span>
        <span className="h-px flex-1 bg-ink/10" />
      </div>
      <h3 className="mt-7 font-display text-2xl font-bold tracking-tight text-ink">
        {step.title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-ink-soft">{step.body}</p>
      <span className="mt-7 inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
        Step {index + 1} of {total}
      </span>
    </motion.div>
  );
}
