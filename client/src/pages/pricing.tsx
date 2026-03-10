import { useState } from "react";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingCards } from "@/components/pricing/PricingCards";
import { PricingComparison } from "@/components/pricing/PricingComparison";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { EnterpriseCTA } from "@/components/pricing/EnterpriseCTA";
import { CTABanner } from "@/components/marketing/shared/CTABanner";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      <PricingHero isAnnual={isAnnual} onToggle={setIsAnnual} />

      <PricingCards isAnnual={isAnnual} />

      <PricingComparison />

      <EnterpriseCTA />

      <PricingFAQ />

      <CTABanner
        title="Start your free trial today"
        description="14 days. All features. No credit card. See why hundreds of tour operators chose Tournetix."
      />
    </>
  );
}
