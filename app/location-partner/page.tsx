import type { Metadata } from "next";
import HoloBackground from "@/components/HoloBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import PartnerHero from "@/components/partner/PartnerHero";
import PartnerOpportunity from "@/components/partner/PartnerOpportunity";
import PartnerTransparency from "@/components/partner/PartnerTransparency";
import PartnerShare from "@/components/partner/PartnerShare";
import PartnerBenefits from "@/components/partner/PartnerBenefits";
import PartnerLocations from "@/components/partner/PartnerLocations";
import PartnerWhyUs from "@/components/partner/PartnerWhyUs";
import PartnerBanner from "@/components/partner/PartnerBanner";
import {
  PARTNER_STEPS,
  PARTNER_TESTIMONIALS,
  PARTNER_FAQ,
  PARTNER_FINAL_CTA,
} from "@/lib/partner-content";

export const metadata: Metadata = {
  title: "Location Partner Program — Vendi 'N' Go",
  description:
    "Host a Vendi 'N' Go smart vending machine at your premises — zero investment, zero electricity cost, and a transparent 10% monthly revenue share, tracked live.",
};

export default function LocationPartnerPage() {
  return (
    <>
      <HoloBackground />
      <Navbar />
      <main className="relative">
        <PartnerHero />
        <PartnerOpportunity />
        <PartnerTransparency />
        <PartnerShare />
        <PartnerBenefits />
        <HowItWorks
          id="partner-how-it-works"
          title="From application to your first payout."
          steps={PARTNER_STEPS}
        />
        <PartnerLocations />
        <PartnerWhyUs />
        <PartnerBanner />
        <Testimonials
          id="partner-testimonials"
          heading={PARTNER_TESTIMONIALS.heading}
          tag={PARTNER_TESTIMONIALS.tag}
          items={PARTNER_TESTIMONIALS.items}
        />
        <Faq id="partner-faq" items={PARTNER_FAQ} />
        <FinalCta
          id="location-final-cta"
          eyebrow="Founding Partner Access"
          content={PARTNER_FINAL_CTA}
          ctaHref="/location-partner/apply"
          secondary={{ label: "Schedule a Free Site Visit", href: "tel:+919261873063" }}
        />
        <Footer />
      </main>
    </>
  );
}
