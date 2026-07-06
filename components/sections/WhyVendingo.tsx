"use client";

import { motion } from "framer-motion";
import { WHY } from "@/lib/content";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 110, damping: 17 },
  },
};

export default function WhyVendingo() {
  return (
    <Section id="why">
      <SectionHeading eyebrow="Why Vendi 'N' Go" title={WHY.heading} />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-12% 0px" }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        className="mt-14 grid auto-rows-[minmax(180px,auto)] gap-5 md:grid-cols-3"
      >
        {WHY.pillars.map((p, i) => (
          <motion.div
            key={p.title}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className={`group iris-border relative overflow-hidden rounded-3xl bg-white/[0.03] p-7 sm:p-8 ${
              p.span === "lg" ? "md:col-span-2" : "md:col-span-1"
            }`}
          >
            {/* holographic hover glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute -inset-px rounded-3xl iris-gradient opacity-20 blur-md" />
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full iris-gradient opacity-30 blur-3xl" />
            </div>

            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-xl">
                <span className="iris-text font-bold">0{i + 1}</span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {p.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-lavender">
                {p.body}
              </p>
              {p.sub && (
                <span className="mt-4 inline-flex items-center rounded-full border border-iris-cyan/30 bg-iris-cyan/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-iris-cyan">
                  {p.sub}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
