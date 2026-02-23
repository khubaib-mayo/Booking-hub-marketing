import { Container } from "@/components/marketing/ui/Container";
import { SectionBadge } from "@/components/marketing/ui/SectionBadge";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";

interface PricingHeroProps {
  isAnnual: boolean;
  onToggle: (annual: boolean) => void;
}

export function PricingHero({ isAnnual, onToggle }: PricingHeroProps) {
  return (
    <section className="relative overflow-hidden pt-16 pb-8 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-14" data-testid="section-pricing-hero">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-white to-white" />
      </div>

      <Container>
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto">
            <SectionBadge>Pricing</SectionBadge>
            <h1
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900"
              style={{ textWrap: "balance" } as React.CSSProperties}
              data-testid="text-pricing-title"
            >
              Simple pricing,{" "}
              <span className="text-brand-500">no surprises</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto">
              No per-booking fees. No commission cuts. No hidden charges.
              Just a flat monthly price — your revenue stays yours.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white p-1.5 shadow-sm" data-testid="toggle-billing">
              <button
                onClick={() => onToggle(false)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  !isAnnual
                    ? "bg-zinc-900 text-white shadow-sm"
                    : "text-zinc-500 hover:text-zinc-700"
                }`}
                data-testid="button-monthly"
              >
                Monthly
              </button>
              <button
                onClick={() => onToggle(true)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isAnnual
                    ? "bg-zinc-900 text-white shadow-sm"
                    : "text-zinc-500 hover:text-zinc-700"
                }`}
                data-testid="button-annual"
              >
                Annual
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
