"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { STEPS } from "@/lib/content";
import SectionHeading from "../ui/SectionHeading";

export default function HowItWorks() {
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
    <section id="how-it-works" ref={ref} className="relative h-[320vh] lg:h-[420vh]">
      <div className="sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden py-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="How It Works · Five steps"
            title="From signup to your first payout."
            align="left"
          />
        </div>

        {/* progress line */}
        <div className="mx-auto mt-12 w-full max-w-7xl px-5 sm:px-8">
          <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/8">
            <motion.div
              style={{ width: lineWidth }}
              className="absolute inset-y-0 left-0 rounded-full iris-gradient"
            />
          </div>
        </div>

        {/* Horizontal track (desktop) */}
        <motion.div
          style={{ x }}
          className="mt-10 hidden gap-6 pl-[calc((100vw-80rem)/2+1.25rem)] lg:flex"
        >
          {STEPS.map((step, i) => (
            <StepCard key={step.n} step={step} index={i} progress={scrollYProgress} />
          ))}
        </motion.div>

        {/* Stacked (mobile/tablet) */}
        <div className="mx-auto mt-10 grid w-full max-w-2xl gap-4 px-5 sm:px-8 lg:hidden">
          {STEPS.map((step) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="glass-strong rounded-2xl p-6"
            >
              <span className="iris-text text-3xl font-bold">{step.n}</span>
              <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-lavender">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
}: {
  step: (typeof STEPS)[number];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ margin: "-25% 0px" }}
      transition={{ type: "spring", stiffness: 110, damping: 16, delay: index * 0.04 }}
      className="glass-strong relative w-[340px] shrink-0 overflow-hidden rounded-3xl p-8"
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full iris-gradient opacity-15 blur-2xl" />
      <div className="flex items-center gap-4">
        <span className="grid h-14 w-14 place-items-center rounded-2xl iris-gradient animate-iris-drift text-xl font-bold text-white">
          {step.n}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
      </div>
      <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
        {step.title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-lavender">{step.body}</p>
      <span className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-lavender/60">
        Step {index + 1} of {STEPS.length}
      </span>
    </motion.div>
  );
}
