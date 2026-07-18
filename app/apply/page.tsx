import type { Metadata } from "next";
import HoloBackground from "@/components/HoloBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Become an Investor — Vendi 'N' Go",
  description:
    "Apply for a founding investor slot in the Vendi 'N' Go Jaipur pilot. Fill in the form and our team will get in touch within 24 hours.",
};

export default function ApplyPage() {
  return (
    <>
      <HoloBackground />
      <Navbar />
      <main className="relative">
        <section className="mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:pt-36">
          <div className="flex flex-col items-center text-center">
            <p className="eyebrow">Founding Investor Access</p>
            <h1 className="display mt-4 max-w-2xl text-4xl text-ink sm:text-5xl">
              Claim your machine slot.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              Fill in the form below and our team will get in touch{" "}
              <strong className="font-semibold text-ink">within 24 hours</strong>.
              Your machine could be earning right now!
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-[720px] overflow-hidden rounded-3xl border border-ink/10 bg-white p-2 sm:p-4">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSczqkId3GvxA-i_TuRwPQco2lnuJ6yaANtAkZxhGnhAuuLbsw/viewform?embedded=true"
              width="640"
              height="2541"
              title="Vendi 'N' Go investor application form"
              className="w-full"
            >
              Loading…
            </iframe>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
