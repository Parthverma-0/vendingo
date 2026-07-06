import HoloBackground from "@/components/HoloBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Opportunity from "@/components/sections/Opportunity";
import Transparency from "@/components/sections/Transparency";
import PassiveIncome from "@/components/sections/PassiveIncome";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyVendingo from "@/components/sections/WhyVendingo";
import Locations from "@/components/sections/Locations";
import Testimonials from "@/components/sections/Testimonials";
import Numbers from "@/components/sections/Numbers";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <HoloBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <Opportunity />
        <Transparency />
        <PassiveIncome />
        <HowItWorks />
        <WhyVendingo />
        <Locations />
        <Testimonials />
        <Numbers />
        <Faq />
        <FinalCta />
        <Footer />
      </main>
    </>
  );
}
