"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HERO } from "@/lib/content";
import IrisButton from "../ui/IrisButton";

const titleWords = HERO.title.split(" ");

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
};

const word = {
  hidden: { opacity: 0, y: 36, rotateX: -45, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 130, damping: 16 },
  },
};

// Live-stat cards that float around the machine.
const floatCards = [
  {
    label: "Your share, monthly",
    value: "₹13,700",
    pos: "left-[-4%] top-[18%] sm:left-[-8%]",
    delay: 1.0,
    drift: -10,
  },
  {
    label: "Target return p.a.",
    value: "13.7%",
    pos: "right-[-2%] top-[40%] sm:right-[-6%]",
    delay: 1.2,
    drift: 12,
  },
  {
    label: "Live IoT · every 30s",
    value: "Online",
    live: true,
    pos: "left-[2%] bottom-[14%] sm:left-[-4%]",
    delay: 1.4,
    drift: -8,
  },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // gentle, premium parallax — copy lifts, machine sinks, everything fades.
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const machineY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const machineScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 lg:pt-24 lg:pb-0"
    >
      {/* ambient holographic field behind everything in the hero */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[58%] top-1/2 h-[70vw] w-[70vw] max-h-[760px] max-w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.5),rgba(157,92,255,0.18)_45%,transparent_70%)] blur-[60px]" />
        <div className="absolute inset-0 grid-texture opacity-[0.25]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        {/* ───────────────────────── COPY ───────────────────────── */}
        <motion.div
          style={{ y: copyY, opacity: fade }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 18, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-lavender backdrop-blur-md"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iris-violet opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-iris-violet" />
            </span>
            {HERO.eyebrow}
          </motion.div>

          <h1 className="text-balance text-[clamp(2.7rem,6vw,4.7rem)] font-semibold leading-[1.02] tracking-tight">
            <motion.span
              variants={container}
              initial="hidden"
              animate="show"
              className="block text-white [perspective:900px]"
            >
              {titleWords.map((w, i) => {
                const accent = /income/i.test(w);
                return (
                  <motion.span
                    key={i}
                    variants={word}
                    className={`mr-[0.25em] inline-block [transform-style:preserve-3d] ${
                      accent ? "text-iris-violet" : ""
                    }`}
                  >
                    {w}
                  </motion.span>
                );
              })}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 18, delay: 0.7 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-lavender"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 140, damping: 15, delay: 0.9 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <IrisButton href="#final-cta" pulse>
              {HERO.primaryCta} →
            </IrisButton>
            <IrisButton href="#returns" variant="ghost">
              {HERO.secondaryCta}
            </IrisButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-[11px] font-semibold tracking-[0.15em] text-lavender/90 lg:justify-start"
          >
            {HERO.chips.map((chip, i) => (
              <motion.span
                key={chip}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1, type: "spring", stiffness: 200, damping: 18 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-3.5 py-2 backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-iris-violet" />
                {chip}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* ─────────────────────── MACHINE SHOWCASE ─────────────────────── */}
        <motion.div
          style={{ y: machineY, scale: machineScale, opacity: fade }}
          className="relative mx-auto w-full max-w-[440px] lg:max-w-none"
        >
          <div className="relative aspect-square w-full">
            {/* animated concentric halo rings */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute inset-[8%] rounded-full border border-iris-violet/20"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.55 }}
              className="absolute inset-[20%] rounded-full border border-iris-violet/15"
            />
            {/* outward pulse ring */}
            <motion.div
              className="absolute inset-[18%] rounded-full border border-iris-violet/40"
              animate={{ scale: [1, 1.5], opacity: [0.45, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut" }}
            />

            {/* the machine — feathered so the render's box blends into the page */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.3 }}
              className="absolute inset-0 animate-float-bob will-change-transform"
            >
              <div
                className="relative h-full w-full"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(58% 62% at 50% 46%, #000 52%, transparent 82%)",
                  maskImage:
                    "radial-gradient(58% 62% at 50% 46%, #000 52%, transparent 82%)",
                }}
              >
                <Image
                  src="/vending-machine.png"
                  alt="Vendi 'N' Go IoT-connected vending machine on an iridescent holographic pedestal"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 50vw"
                  className="scale-[1.35] object-contain object-center"
                />
              </div>
            </motion.div>

            {/* holographic floor glow under the machine */}
            <div className="absolute bottom-[6%] left-1/2 h-10 w-[58%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgba(157,92,255,0.55),transparent_70%)] blur-xl" />

            {/* floating live-stat cards */}
            {floatCards.map((c) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 18, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 160, damping: 16, delay: c.delay }}
                className={`absolute ${c.pos} z-20`}
              >
                <motion.div
                  animate={{ y: [0, c.drift, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="glass-strong rounded-2xl px-4 py-3 shadow-[0_12px_40px_-12px_rgba(124,58,237,0.7)]"
                >
                  <div className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-lavender/80">
                    {c.live && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      </span>
                    )}
                    {c.label}
                  </div>
                  <div className="mt-0.5 text-lg font-semibold text-white">
                    {c.value}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-lavender/60 lg:flex"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-8 w-px bg-gradient-to-b from-white/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
