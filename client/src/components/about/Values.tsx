import { Container } from "@/components/marketing/ui/Container";
import { SectionHeader } from "@/components/marketing/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";
import { Eye, Zap, Heart, Shield } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Clarity over complexity",
    description:
      "Tour operators don't have time to learn complicated software. Every screen, every button, every workflow in Tournetix is designed to be immediately obvious. If it needs a tutorial, we redesign it.",
  },
  {
    icon: Zap,
    title: "Automate the boring stuff",
    description:
      "Commission calculations, invoice generation, payment reminders, status updates — if a computer can do it, a human shouldn't have to. We automate everything we can so operators can focus on their guests.",
  },
  {
    icon: Heart,
    title: "Built for the small guys",
    description:
      "We're not chasing enterprise contracts. We build for the 5-person tour company in Cancún, the solo dive instructor in Thailand, the family-run boat tour in Greece. Pricing, features, and support — all designed for small teams.",
  },
  {
    icon: Shield,
    title: "Your data, your business",
    description:
      "We don't take a cut of your bookings. We don't sell your customer data. We don't lock you into annual contracts. Flat pricing, full data export, and you can leave anytime. Your business is yours.",
  },
];

export function Values() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-50/50" data-testid="section-values">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            badge="Our Values"
            title="What we believe"
            description="These aren't wall posters. They're the decisions we make every day when building Tournetix."
          />
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {values.map((value, i) => (
            <AnimateOnScroll key={value.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-zinc-100 bg-white p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:border-zinc-200 hover:-translate-y-0.5 h-full" data-testid={`card-value-${i}`}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 border border-brand-100">
                  <value.icon className="h-5 w-5 text-brand-500" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-zinc-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
