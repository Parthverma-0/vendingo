import type { Metadata } from "next";
import HoloBackground from "@/components/HoloBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Become a Location Partner — Vendi 'N' Go",
  description:
    "Apply to host a Vendi 'N' Go smart vending machine at your premises. Fill in the form and our team will get in touch within 24 hours.",
};

export default function PartnerApplyPage() {
  return (
    <>
      <HoloBackground />
      <Navbar />
      <main className="relative">
        <section className="mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:pt-36">
          <div className="flex flex-col items-center text-center">
            <p className="eyebrow">Founding Partner Access</p>
            <h1 className="display mt-4 max-w-2xl text-4xl text-ink sm:text-5xl">
              Put your space to work.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              Fill in the form below and our team will get in touch{" "}
              <strong className="font-semibold text-ink">within 24 hours</strong>{" "}
              to schedule a free site visit.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-[720px] overflow-hidden rounded-3xl border border-ink/10 bg-white p-2 sm:p-4">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSebRNa6AVLr9d2Pzm6jlFslgfCP7eaQips6uYaSZqFy9yQFhg/viewform?embedded=true"
              title="Vendi 'N' Go location partner application form"
              className="h-[75vh] min-h-[600px] w-full sm:h-[80vh]"
            >
              Loading…
            </iframe>
          </div>
          <p className="mt-4 text-center text-xs text-ink-muted sm:hidden">
            Form not scrolling smoothly?{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSebRNa6AVLr9d2Pzm6jlFslgfCP7eaQips6uYaSZqFy9yQFhg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-violet underline underline-offset-2"
            >
              Open it directly
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
