import { useState } from "react";
import { Container } from "@/components/marketing/ui/Container";
import { MarketingButton } from "@/components/marketing/ui/MarketingButton";
import { CTABanner } from "@/components/marketing/shared/CTABanner";
import { siteConfig } from "@/lib/constants";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small tour operators just getting started.",
    priceMonthly: 29,
    priceYearly: 24,
    features: [
      "Up to 100 bookings/month",
      "Basic booking engine",
      "Email notifications",
      "1 team member",
      "Standard support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing businesses that need advanced tools.",
    priceMonthly: 79,
    priceYearly: 66,
    features: [
      "Unlimited bookings",
      "Advanced booking engine",
      "Commission tracking",
      "Invoice generation",
      "5 team members",
      "Multi-channel distribution",
      "Analytics dashboard",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large operations with custom requirements.",
    priceMonthly: 199,
    priceYearly: 166,
    features: [
      "Everything in Professional",
      "Unlimited team members",
      "Custom integrations",
      "White-label booking pages",
      "API access",
      "Dedicated account manager",
      "Custom reporting",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <div>
      <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-50/40 via-white to-white" />
        </div>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3.5 py-1 text-xs font-semibold text-brand-600 ring-1 ring-inset ring-brand-500/10 mb-6" data-testid="badge-pricing-page">
              Pricing
            </span>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900"
              style={{ textWrap: "balance" } as React.CSSProperties}
              data-testid="text-pricing-title"
            >
              Simple, transparent pricing
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              No hidden fees. No long-term contracts. Start free for 14 days.
            </p>

            <div className="mt-10 inline-flex items-center rounded-full bg-zinc-100 p-1" data-testid="toggle-billing">
              <button
                onClick={() => setAnnual(false)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
                  !annual ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500"
                )}
                data-testid="button-monthly"
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
                  annual ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500"
                )}
                data-testid="button-yearly"
              >
                Yearly
                <span className="ml-1.5 text-xs text-brand-600 font-semibold">Save 20%</span>
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32" data-testid="section-plans">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "relative rounded-2xl border p-8 transition-all duration-300",
                  plan.popular
                    ? "border-brand-500 bg-white shadow-xl shadow-brand-500/10 scale-[1.02]"
                    : "border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-900/5"
                )}
                data-testid={`card-plan-${plan.name.toLowerCase()}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-brand-500 px-4 py-1 text-xs font-semibold text-white shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="font-display text-xl font-bold text-zinc-900">{plan.name}</h3>
                  <p className="mt-2 text-sm text-zinc-500">{plan.description}</p>
                </div>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-zinc-900" data-testid={`text-price-${plan.name.toLowerCase()}`}>
                    ${annual ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  <span className="text-sm text-zinc-500">/month</span>
                </div>
                {annual && (
                  <p className="mt-1 text-xs text-zinc-400">Billed annually</p>
                )}

                <MarketingButton
                  variant={plan.popular ? "primary" : "secondary"}
                  size="lg"
                  href={plan.name === "Enterprise" ? "/contact" : siteConfig.signupUrl}
                  className="w-full justify-center mt-8"
                >
                  {plan.cta}
                </MarketingButton>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-zinc-600">
                      <Check className="h-4 w-4 mt-0.5 text-brand-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Start your free trial today"
        description="Try BookingHub free for 14 days. No credit card required. Cancel anytime."
      />
    </div>
  );
}
