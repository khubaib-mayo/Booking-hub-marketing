import { Container } from "@/components/marketing/ui/Container";
import { MarketingButton } from "@/components/marketing/ui/MarketingButton";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";
import { Check, X, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";

interface PricingCardsProps {
  isAnnual: boolean;
}

const plans = [
  {
    id: "solo",
    name: "Solo",
    tagline: "For individual operators",
    monthlyPrice: 19,
    annualPrice: 10,
    bookingLimit: "200 bookings/month",
    pricePerBooking: "$0.10",
    popularLabel: null as string | null,
    popularSubtext: null as string | null,
    features: [
      { text: "1 user", included: true, highlight: false },
      { text: "200 bookings/month", included: true, highlight: false },
      { text: "Invoice generation", included: true, highlight: false },
      { text: "Financial dashboard", included: true, highlight: false },
      { text: "Tour analytics", included: true, highlight: false },
      { text: "Email automation", included: true, highlight: false },
      { text: "CSV/PDF exports", included: true, highlight: false },
      { text: "Commission tracking", included: false, highlight: false },
      { text: "Team management", included: false, highlight: false },
      { text: "Custom form builder", included: false, highlight: false },
    ],
    ctaVariant: "secondary" as const,
    ctaText: "Start Free Trial",
    highlight: false,
  },
  {
    id: "team",
    name: "Team",
    tagline: "For growing tour companies",
    monthlyPrice: 39,
    annualPrice: 20,
    bookingLimit: "500 bookings/month",
    pricePerBooking: "$0.08",
    popularLabel: "Most Popular",
    popularSubtext: "Chosen by 70% of operators",
    features: [
      { text: "Up to 10 team members", included: true, highlight: false },
      { text: "500 bookings/month", included: true, highlight: false },
      { text: "Everything in Solo", included: true, highlight: false },
      { text: "Commission tracking", included: true, highlight: true },
      { text: "Agent performance reports", included: true, highlight: true },
      { text: "Custom form builder", included: true, highlight: true },
      { text: "Bulk actions & payouts", included: true, highlight: false },
      { text: "Priority email support", included: true, highlight: false },
      { text: "Custom branding", included: false, highlight: false },
      { text: "API access", included: false, highlight: false },
    ],
    ctaVariant: "primary" as const,
    ctaText: "Start Free Trial",
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For larger operations",
    monthlyPrice: 79,
    annualPrice: 40,
    bookingLimit: "Unlimited bookings",
    pricePerBooking: null as string | null,
    popularLabel: null as string | null,
    popularSubtext: null as string | null,
    features: [
      { text: "Unlimited team members", included: true, highlight: false },
      { text: "Unlimited bookings", included: true, highlight: false },
      { text: "Everything in Team", included: true, highlight: false },
      { text: "API access", included: true, highlight: false },
      { text: "Custom branding & white-label", included: true, highlight: false },
      { text: "Dedicated account manager", included: true, highlight: false },
      { text: "Advanced reporting", included: true, highlight: false },
      { text: "SLA guarantee", included: true, highlight: false },
      { text: "Custom integrations", included: true, highlight: false },
      { text: "Priority phone support", included: true, highlight: false },
    ],
    ctaVariant: "secondary" as const,
    ctaText: "Contact Sales",
    highlight: false,
  },
];

export function PricingCards({ isAnnual }: PricingCardsProps) {
  return (
    <section className="pb-20 lg:pb-28" data-testid="section-pricing-cards">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-5 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <AnimateOnScroll key={plan.id} delay={i * 0.1}>
                <div
                  className={cn(
                    "relative flex flex-col rounded-2xl border p-6 lg:p-8 transition-all duration-300",
                    plan.highlight
                      ? "border-brand-500 bg-white shadow-xl shadow-brand-500/10 md:scale-105 md:-my-4 z-10"
                      : "border-zinc-200 bg-white hover:shadow-lg hover:border-zinc-300"
                  )}
                  data-testid={`card-plan-${plan.id}`}
                >
                  {plan.popularLabel && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-brand-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-brand-500/25">
                        <Sparkles className="w-3 h-3" />
                        {plan.popularLabel}
                      </span>
                    </div>
                  )}

                  <div className={cn(plan.popularLabel && "mt-2")}>
                    <h3 className="font-display text-lg font-semibold text-zinc-900">{plan.name}</h3>
                    <p className="mt-0.5 text-sm text-zinc-500">{plan.tagline}</p>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-5xl font-bold tracking-tight text-zinc-900" data-testid={`text-price-${plan.id}`}>
                        ${price}
                      </span>
                      <span className="text-sm text-zinc-400">/month</span>
                    </div>
                    {isAnnual && (
                      <p className="mt-1 text-xs text-emerald-600 font-medium">
                        ${plan.monthlyPrice - plan.annualPrice}/mo saved vs monthly
                      </p>
                    )}
                    {isAnnual && (
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Billed ${price * 12}/year
                      </p>
                    )}
                  </div>

                  <div className="mt-4 rounded-lg bg-zinc-50 p-3">
                    <p className="text-sm font-medium text-zinc-700">{plan.bookingLimit}</p>
                    {plan.pricePerBooking && (
                      <p className="text-xs text-zinc-400 mt-0.5">
                        That's just {plan.pricePerBooking} per booking
                      </p>
                    )}
                  </div>

                  {plan.popularSubtext && (
                    <p className="mt-3 text-xs text-brand-600 font-medium text-center">
                      {plan.popularSubtext}
                    </p>
                  )}

                  <ul className="mt-6 flex-1 space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-2.5">
                        {feature.included ? (
                          <Check className={cn(
                            "h-4 w-4 flex-shrink-0 mt-0.5",
                            feature.highlight ? "text-brand-500" : "text-emerald-500"
                          )} />
                        ) : (
                          <X className="h-4 w-4 text-zinc-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={cn(
                            "text-sm",
                            feature.included
                              ? feature.highlight
                                ? "text-zinc-900 font-medium"
                                : "text-zinc-600"
                              : "text-zinc-400"
                          )}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <MarketingButton
                      variant={plan.ctaVariant}
                      size="lg"
                      href={plan.id === "enterprise" ? "/contact" : siteConfig.signupUrl}
                      className={cn(
                        "w-full justify-center",
                        plan.highlight && "shadow-lg shadow-brand-500/20"
                      )}
                      data-testid={`button-cta-${plan.id}`}
                    >
                      {plan.ctaText}
                      <ArrowRight className="w-4 h-4" />
                    </MarketingButton>
                  </div>

                  <p className="mt-3 text-center text-[11px] text-zinc-400">
                    {plan.id === "enterprise" ? "Custom setup included" : "14-day free trial · No credit card"}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll delay={0.3}>
          <div className="mt-10 max-w-md mx-auto">
            <div className="rounded-full bg-amber-50 border border-amber-100 px-5 py-2.5 text-center">
              <p className="text-sm text-amber-700">
                <span className="font-semibold">Early adopter pricing</span> — lock in these rates before they increase
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
