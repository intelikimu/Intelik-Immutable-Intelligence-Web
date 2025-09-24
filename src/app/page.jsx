import { HeroSection } from "../components/hero-section";
import { ServicesSection } from "../components/services-section";
import { CaseStudiesSection } from "../components/case-studies-section";
import { CTASection } from "../components/cta-section";
import { PartnersSection } from "../components/partners-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PartnersSection />
      <CaseStudiesSection />
      <CTASection />
    </>
  );
} 