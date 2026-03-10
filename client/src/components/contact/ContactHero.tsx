import { Container } from "@/components/marketing/ui/Container";
import { SectionBadge } from "@/components/marketing/ui/SectionBadge";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-8 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-14" data-testid="section-contact-hero">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-white to-white" />
      </div>

      <Container>
        <AnimateOnScroll>
          <div className="text-center max-w-2xl mx-auto">
            <SectionBadge>Contact</SectionBadge>
            <h1
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900"
              style={{ textWrap: "balance" } as React.CSSProperties}
              data-testid="text-contact-title"
            >
              Let's get your operation{" "}
              <span className="text-brand-500">running smoother</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-500 leading-relaxed">
              Questions, demo requests, or just curious — we'd love to hear from you. Most replies within 2 hours.
            </p>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
