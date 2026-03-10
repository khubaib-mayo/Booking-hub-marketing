import { Hero } from "@/components/sections/Hero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/marketing/shared/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <ProblemStatement />
      <FeatureShowcase />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <PricingPreview />
      <FAQ />
      <CTABanner />
    </>
  );
}
