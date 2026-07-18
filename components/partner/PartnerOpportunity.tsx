"use client";

import { PARTNER_OPPORTUNITY } from "@/lib/partner-content";
import { em } from "@/lib/em";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import CountUp from "../ui/CountUp";

// Mirrors the investor Opportunity module: big count-up stat card on the left,
// a "who brings what" split card on the right.
export default function PartnerOpportunity() {
  const { footfallStat, split } = PARTNER_OPPORTUNITY;

  return (
    <div className="hairline-t bg-paper">
      <Section id="partner-opportunity">
        <SectionHeading eyebrow="The Opportunity" title={PARTNER_OPPORTUNITY.heading} />
        <Reveal className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-ink-soft">
          {em(PARTNER_OPPORTUNITY.body)}
        </Reveal>

        <div className="mt-16 grid items-stretch gap-5 lg:grid-cols-2">
          {/* Unused footfall stat */}
          <Reveal className="relative overflow-hidden rounded-3xl border border-ink/10 bg-tint-50 p-8 sm:p-10">
            <p className="eyebrow">Unused footfall, unmonetized</p>
            <div className="mt-6 flex items-end gap-1">
              <CountUp
                to={footfallStat.value}
                className="font-display text-6xl font-bold leading-none tracking-tight text-violet sm:text-7xl"
              />
              <span className="pb-1 font-display text-3xl font-bold text-violet sm:text-4xl">
                {footfallStat.suffix}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-soft">
              {footfallStat.label}
            </p>
            <p className="mt-6 border-t border-ink/10 pt-5 text-sm text-ink">
              {footfallStat.bottomLine}
            </p>
          </Reveal>

          {/* Who brings what */}
          <Reveal
            delay={0.1}
            className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white p-8 sm:p-10"
          >
            <p className="eyebrow">{split.label}</p>
            <div className="mt-8 flex flex-col">
              {split.rows.map((row, i) => {
                const yours = row.who === "On you";
                return (
                  <div
                    key={row.item}
                    className={`flex items-center justify-between py-4 ${
                      i > 0 ? "border-t border-ink/10" : ""
                    }`}
                  >
                    <span className="font-display text-base font-bold text-ink">
                      {row.item}
                    </span>
                    <span
                      className={`rounded-full px-3.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider ${
                        yours
                          ? "border border-violet/30 bg-violet/[0.06] text-violet"
                          : "bg-violet text-white"
                      }`}
                    >
                      {row.who}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 border-t border-ink/10 pt-5 text-sm leading-relaxed text-ink-soft">
              {split.note}
            </p>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
