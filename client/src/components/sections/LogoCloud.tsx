import { Container } from "@/components/marketing/ui/Container";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";

const trustedBy = [
  "Ocean Tours",
  "Reef Adventures",
  "Sunset Cruises",
  "Mountain Treks",
  "Safari Kings",
  "Island Hopper",
];

export function LogoCloud() {
  return (
    <section className="py-14 border-y border-zinc-100 bg-zinc-50/50" data-testid="section-logo-cloud">
      <Container>
        <AnimateOnScroll>
          <p className="text-center text-sm font-medium text-zinc-400 mb-8">
            Trusted by tour operators in 20+ countries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {trustedBy.map((name) => (
              <span key={name} className="text-lg font-display font-bold text-zinc-200 select-none hover:text-zinc-300 transition-colors">
                {name}
              </span>
            ))}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
