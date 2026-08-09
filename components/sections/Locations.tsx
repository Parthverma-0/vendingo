"use client";

import { motion } from "framer-motion";
import { LOCATIONS, WHATSAPP_LINK } from "@/lib/content";
import { em } from "@/lib/em";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import IrisButton from "../ui/IrisButton";

function mapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export default function Locations() {
  return (
    <div className="bg-tint-50">
      <Section id="locations">
        <SectionHeading eyebrow="Preferred Locations" title={LOCATIONS.heading} />
        <Reveal className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-ink-soft">
          {em(LOCATIONS.body)}
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Real, live Jaipur map */}
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-ink/10 bg-white">
            <iframe
              src={LOCATIONS.mapEmbedSrc}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vendi 'N' Go Jaipur pilot zone map"
            />
            <span className="eyebrow pointer-events-none absolute left-4 top-4 rounded-full border border-ink/10 bg-white px-3 py-1">
              Jaipur · Pilot Zone
            </span>
          </Reveal>

          {/* Category cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={{ show: { transition: { staggerChildren: 0.09 } } }}
            className="flex flex-col gap-3"
          >
            {/* Live now — real, already-installed machines */}
            <div className="flex flex-wrap gap-2 pb-1">
              {LOCATIONS.live.map((l) => (
                <a
                  key={l.name}
                  href={mapsSearchUrl(l.query)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition-colors hover:border-emerald-600/40"
                >
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  Live now · {l.name}
                </a>
              ))}
            </div>

            {LOCATIONS.categories.map((c, i) => (
              <motion.a
                key={c.name}
                href={mapsSearchUrl(c.query)}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 140, damping: 18 } },
                }}
                whileHover={{ x: 4 }}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-white p-4 sm:p-5"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet/[0.08] font-mono text-xs font-bold text-violet">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-display text-base font-bold text-ink">{c.name}</p>
                    <p className="text-xs text-ink-muted">{c.detail}</p>
                  </div>
                </div>
                <span className="text-ink-faint transition-transform group-hover:translate-x-1 group-hover:text-violet">
                  →
                </span>
              </motion.a>
            ))}

            <Reveal delay={0.2} className="mt-2">
              <IrisButton
                href={WHATSAPP_LINK("Hi! I'd like to talk about Vendi 'N' Go.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                {LOCATIONS.cta}
              </IrisButton>
            </Reveal>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
