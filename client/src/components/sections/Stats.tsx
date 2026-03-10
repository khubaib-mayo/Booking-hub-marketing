import { Container } from "@/components/marketing/ui/Container";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";

const stats = [
  { value: "10,000+", label: "Bookings processed" },
  { value: "500+", label: "Tour operators" },
  { value: "20+", label: "Countries served" },
  { value: "0%", label: "Per-booking fees" },
];

export function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-zinc-900" data-testid="section-stats">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-display text-3xl sm:text-4xl font-bold text-white tabular-nums">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
