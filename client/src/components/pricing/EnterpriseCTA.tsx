import { Container } from "@/components/marketing/ui/Container";
import { MarketingButton } from "@/components/marketing/ui/MarketingButton";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";
import { Building2, Headphones, Shield, Zap } from "lucide-react";

const perks = [
  { icon: Building2, text: "Custom setup & data migration" },
  { icon: Headphones, text: "Dedicated account manager" },
  { icon: Shield, text: "SLA & uptime guarantees" },
  { icon: Zap, text: "Custom integrations & API" },
];

export function EnterpriseCTA() {
  return (
    <section className="py-20 lg:py-24 bg-zinc-50/50" data-testid="section-enterprise-cta">
      <Container size="narrow">
        <AnimateOnScroll>
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 sm:p-12 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
              Running a larger operation?
            </h2>
            <p className="mt-3 text-base text-zinc-500 max-w-lg mx-auto">
              Multi-location companies, DMCs, and tour aggregators need custom solutions.
              Let's talk about what you need.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              {perks.map((perk) => (
                <div key={perk.text} className="flex items-center gap-2">
                  <perk.icon className="w-4 h-4 text-brand-500" strokeWidth={1.5} />
                  <span className="text-sm text-zinc-600">{perk.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <MarketingButton variant="primary" size="lg" href="/contact" data-testid="button-talk-to-sales">
                Talk to Sales
              </MarketingButton>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
