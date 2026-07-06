import { FOOTER } from "@/lib/content";
import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-lavender">
              Vendi &apos;N&apos; Go — {FOOTER.tagline}
            </p>
            <p className="mt-5 text-xs text-lavender/60">
              © 2025 Vendi &apos;N&apos; Go. All rights reserved.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {FOOTER.quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-lavender transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Contact
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {FOOTER.contacts.map((c) => (
                <li key={c}>
                  {c.includes("@") ? (
                    <a
                      href={`mailto:${c}`}
                      className="text-sm text-lavender transition-colors hover:text-white"
                    >
                      {c}
                    </a>
                  ) : (
                    <span className="text-sm text-lavender">{c}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Risk disclaimer */}
        <div className="mt-12 rounded-2xl border border-white/8 bg-white/[0.02] p-5">
          <p className="text-xs leading-relaxed text-lavender/80">
            <span className="font-semibold text-lavender">Risk Disclaimer:</span>{" "}
            {FOOTER.disclaimer}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-lavender/60">
            Made for the Jaipur pilot · India
          </p>
          <ul className="flex items-center gap-6">
            {FOOTER.legal.map((l) => (
              <li key={l}>
                <a href="#" className="text-xs text-lavender transition-colors hover:text-white">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
