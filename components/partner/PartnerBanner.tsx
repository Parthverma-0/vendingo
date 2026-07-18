"use client";

import { PARTNER_BANNER } from "@/lib/partner-content";
import { em } from "@/lib/em";
import Reveal from "../ui/Reveal";

// Revenue highlight banner: the three core value props as one dark stat row.
export default function PartnerBanner() {
  return (
    <section id="partner-banner" className="relative px-5 py-10 sm:px-8">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-night px-6 py-14 text-center sm:px-12 sm:py-20">
        {/* faint violet bloom, matching the dark dashboard section */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[40vw] w-[60vw] -translate-x-1/2 rounded-full bg-violet/15 blur-[100px]" />
        </div>

        <div className="relative">
          <h2 className="display mx-auto max-w-2xl text-3xl text-white sm:text-4xl lg:text-5xl">
            {PARTNER_BANNER.heading}
          </h2>

          <div className="mx-auto mt-12 grid max-w-3xl gap-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10">
            {PARTNER_BANNER.stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center px-6">
                <span className="font-display text-5xl font-bold tracking-tight text-white">
                  {s.value}
                </span>
                <span className="mt-2 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white/50">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-xl text-base leading-relaxed text-white/60">
            {em(PARTNER_BANNER.body, "dark")}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
