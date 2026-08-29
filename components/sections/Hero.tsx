"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HERO } from "@/lib/content";
import { em } from "@/lib/em";
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

// Live-stat cards pinned to the machine panel.
const floatCards = [
  {
    label: "Your share, monthly",
    value: "₹8,640",
    sub: "projected",
    pos: "left-4 top-6 sm:-left-8 sm:top-10",
    delay: 1.0,
    drift: -8,
  },
  {
    label: "Target return p.a.",
    value: "34.6%",
    sub: "projected",
    pos: "right-4 top-[44%] sm:-right-8",
    delay: 1.2,
    drift: 10,
  },
  {
    label: "Live IoT · every 30s",
    value: "Online",
    live: true,
    pos: "bottom-6 left-4 sm:-left-8 sm:bottom-12",
    delay: 1.4,
    drift: -6,
  },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Signature: word-by-word headline rise on load, gentle parallax on scroll —
  // copy lifts, the machine panel sinks, everything fades.
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const panelY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 lg:pt-24"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* ───────────────────────── COPY ───────────────────────── */}
        <motion.div
          style={{ y: copyY, opacity: fade }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 18, delay: 0.1 }}
            className="eyebrow mb-7 inline-flex items-center gap-2.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet" />
            </span>
            {HERO.eyebrow}
          </motion.div>

          <h1 className="display text-[clamp(2.9rem,6.4vw,5rem)] text-ink">
            <motion.span
              variants={container}
              initial="hidden"
              animate="show"
              className="block [perspective:900px]"
            >
              {titleWords.map((w, i) => {
                const accent = /vending/i.test(w);
                return (
                  <motion.span
                    key={i}
                    variants={word}
                    className={`mr-[0.22em] inline-block [transform-style:preserve-3d] ${
                      accent ? "text-violet" : ""
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
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            {em(HERO.subtitle)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 140, damping: 15, delay: 0.9 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <IrisButton href="/apply" pulse>
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
            className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 lg:justify-start"
          >
            {HERO.chips.map((chip, i) => (
              <motion.span
                key={chip}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1, type: "spring", stiffness: 200, damping: 18 }}
                className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3.5 py-2 font-mono text-[10px] font-medium tracking-[0.16em] text-ink-soft"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                {chip}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* ─────────────────── MACHINE SHOWCASE PANEL ─────────────────── */}
        <motion.div
          style={{ y: panelY, opacity: fade }}
          className="relative mx-auto w-full max-w-[460px]"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.4 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-night shadow-[0_40px_80px_-40px_rgba(12,7,20,0.5)]"
          >
            <div className="absolute inset-0 animate-float-bob will-change-transform">
              <Image
                src="/vending-machine.png"
                alt="Vendingo IoT-connected vending machine"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="scale-[1.25] object-cover object-[45%_60%]"
              />
            </div>
            {/* soft violet bloom inside the panel */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-violet/25 to-transparent" />
            {/* mono corner tag */}
            <span className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur-md">
              Machine #JPR-007
            </span>
          </motion.div>

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
                className="rounded-2xl border border-ink/10 bg-white px-4 py-3 shadow-[0_16px_44px_-16px_rgba(12,7,20,0.35)]"
              >
                <div className="flex items-center gap-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                  {c.live && (
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                  )}
                  {c.label}
                </div>
                <div className="mt-0.5 font-display text-lg font-bold text-ink">
                  {c.value}
                  {c.sub && (
                    <span className="ml-1.5 font-mono text-[9px] font-medium uppercase tracking-wider text-violet">
                      {c.sub}
                    </span>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-faint lg:flex"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-8 w-px bg-gradient-to-b from-ink/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
