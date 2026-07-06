"use client";

import { motion } from "framer-motion";
import { FINAL_CTA } from "@/lib/content";
import IrisButton from "../ui/IrisButton";

export default function FinalCta() {
  return (
    <section id="final-cta" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] px-6 py-16 text-center sm:px-12 sm:py-24">
        {/* full holographic wash */}
        <div className="absolute inset-0 iris-gradient animate-iris-drift opacity-90" />
        <div className="absolute inset-0 bg-canvas-deep/55" />
        <motion.div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,255,255,0.25),transparent_70%)]"
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 grid-texture opacity-20" />

        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="mx-auto max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {FINAL_CTA.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 90, damping: 18, delay: 0.1 }}
            className="mx-auto mt-5 max-w-xl text-lg text-white/90"
          >
            {FINAL_CTA.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.2 }}
            className="mt-10 flex justify-center"
          >
            <IrisButton href="#" pulse className="px-9 py-4 text-base">
              {FINAL_CTA.cta} →
            </IrisButton>
          </motion.div>

          <p className="mt-6 text-sm text-white/80">{FINAL_CTA.sub}</p>
        </div>
      </div>
    </section>
  );
}
