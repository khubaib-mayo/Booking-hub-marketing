import { Container } from "@/components/marketing/ui/Container";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";

const stats = [
  { value: "2025", label: "Founded" },
  { value: "40+", label: "Features shipped" },
  { value: "20+", label: "Countries served" },
  { value: "0%", label: "Per-booking fees" },
];

export function AboutStats() {
  return (
    <section className="py-16 lg:py-20 border-y border-zinc-100" data-testid="section-about-stats">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 tabular-nums" data-testid={`text-stat-${i}`}>
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-zinc-500">{stat.label}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
