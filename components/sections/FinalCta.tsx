"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FINAL_CTA } from "@/lib/content";
import { em } from "@/lib/em";
import IrisButton from "../ui/IrisButton";

type Props = {
  id?: string;
  eyebrow?: string;
  content?: typeof FINAL_CTA;
  ctaHref?: string;
  secondary?: { label: string; href: string };
};

// Signature animation: the violet panel zooms open — scale, lift and fade all
// driven by scroll progress as it enters the viewport.
// Defaults render the investor CTA; the partner page passes its own content.
export default function FinalCta({
  id = "final-cta",
  eyebrow = "Founding Investor Access",
  content = FINAL_CTA,
  ctaHref = "/apply",
  secondary,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center 60%"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <section id={id} ref={ref} className="relative px-5 py-24 sm:px-8 sm:py-32">
      <motion.div
        style={{ scale, y, opacity }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-violet px-6 py-16 text-center sm:px-12 sm:py-24"
      >
        {/* deep-violet wash + slow breathing highlight */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet via-violet to-violet-deep" />
        <motion.div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,0.18),transparent_70%)]"
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative">
          <span className="eyebrow !text-white/70">{eyebrow}</span>
          <h2 className="display mx-auto mt-5 max-w-2xl text-4xl text-white sm:text-5xl lg:text-6xl">
            {content.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            {em(content.body, "dark")}
          </p>

          <div className="mt-10 flex justify-center">
            <IrisButton
              href={ctaHref}
              variant="inverse"
              pulse
              className="px-9 py-4 text-base"
            >
              {content.cta} →
            </IrisButton>
          </div>

          <p className="mt-6 text-sm text-white/75">{em(content.sub, "dark")}</p>

          {secondary && (
            <a
              href={secondary.href}
              className="mt-4 inline-block text-sm font-medium text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
            >
              {secondary.label}
            </a>
          )}
        </div>
      </motion.div>
    </section>
  );
}
