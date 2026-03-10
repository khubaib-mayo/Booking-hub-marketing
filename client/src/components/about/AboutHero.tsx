import { Container } from "@/components/marketing/ui/Container";
import { SectionBadge } from "@/components/marketing/ui/SectionBadge";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24" data-testid="section-about-hero">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-white to-white" />
      </div>

      <Container size="narrow">
        <AnimateOnScroll>
          <div className="text-center">
            <SectionBadge>About Us</SectionBadge>
            <h1
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900"
              style={{ textWrap: "balance" } as React.CSSProperties}
              data-testid="text-about-title"
            >
              We're building the tools we{" "}
              <span className="text-brand-500">wished existed</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-zinc-500 leading-relaxed max-w-2xl mx-auto">
              Tournetix started with a frustration every tour operator knows: too many tools, too much admin, too little time for guests.
            </p>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
