import { Link } from "wouter";
import { Container } from "@/components/marketing/ui/Container";
import { SectionHeader } from "@/components/marketing/ui/SectionHeader";
import { MarketingButton } from "@/components/marketing/ui/MarketingButton";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";

const plans = [
  {
    name: "Solo",
    description: "For individual operators",
    price: "$29",
    period: "/month",
    features: [
      "1 user",
      "Unlimited bookings",
      "Invoice generation",
      "Financial analytics",
      "Email automation",
    ],
    popular: false,
  },
  {
    name: "Team",
    description: "For growing tour companies",
    price: "$79",
    period: "/month",
    features: [
      "Up to 10 users",
      "Everything in Solo",
      "Commission tracking",
      "Agent performance",
      "Custom form builder",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Business",
    description: "For larger operations",
    price: "$149",
    period: "/month",
    features: [
      "Up to 50 users",
      "Everything in Team",
      "API access",
      "Custom branding",
      "Dedicated support",
      "Advanced reporting",
    ],
    popular: false,
  },
];

export function PricingPreview() {
  return (
    <section className="py-24 lg:py-32" data-testid="section-pricing-preview">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            badge="Pricing"
            title="Simple pricing, no per-booking fees"
            description="Unlike competitors who take 3-6% of every booking, Tournetix is a flat monthly fee. Your revenue stays yours."
          />
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <AnimateOnScroll key={plan.name} delay={i * 0.1}>
              <div
                className={cn(
                  "relative flex flex-col rounded-2xl border p-6 lg:p-8 transition-all duration-300 hover:shadow-lg",
                  plan.popular
                    ? "border-brand-500 bg-white shadow-lg shadow-brand-500/5 scale-[1.02]"
                    : "border-zinc-200 bg-white hover:border-zinc-300"
                )}
                data-testid={`card-plan-${plan.name.toLowerCase()}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="font-display text-lg font-semibold text-zinc-900">{plan.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{plan.description}</p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-zinc-900">{plan.price}</span>
                  <span className="text-sm text-zinc-400">{plan.period}</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <MarketingButton
                    variant={plan.popular ? "primary" : "outline"}
                    size="md"
                    href={siteConfig.signupUrl}
                    className="w-full justify-center"
                  >
                    Start Free Trial
                  </MarketingButton>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="mt-10 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
              data-testid="link-compare-features"
            >
              Compare all features
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
