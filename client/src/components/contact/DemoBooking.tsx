import { Container } from "@/components/marketing/ui/Container";
import { MarketingButton } from "@/components/marketing/ui/MarketingButton";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";
import { Video, Clock, Users, CheckCircle } from "lucide-react";

const demoPerks = [
  { icon: Clock, text: "15-minute call" },
  { icon: Video, text: "Screen-share walkthrough" },
  { icon: Users, text: "Personalized to your business" },
  { icon: CheckCircle, text: "No commitment required" },
];

export function DemoBooking() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-50/50" data-testid="section-demo-booking">
      <Container size="narrow">
        <AnimateOnScroll>
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 sm:p-12 text-center">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-6">
              <Video className="w-6 h-6 text-brand-500" strokeWidth={1.5} />
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
              Prefer a live walkthrough?
            </h2>
            <p className="mt-3 text-base text-zinc-500 max-w-md mx-auto">
              Book a free 15-minute demo and we'll show you exactly how Tournetix
              works for your type of tour business.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {demoPerks.map((perk) => (
                <div key={perk.text} className="flex items-center gap-2">
                  <perk.icon className="w-4 h-4 text-brand-500" strokeWidth={1.5} />
                  <span className="text-sm text-zinc-600">{perk.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <MarketingButton variant="primary" size="lg" href="mailto:support@tournetix.com?subject=Demo%20Request" data-testid="button-book-demo">
                Book a Demo
              </MarketingButton>
            </div>

            <p className="mt-4 text-xs text-zinc-400">
              Or email us at{" "}
              <a href="mailto:support@tournetix.com" className="text-brand-600 hover:text-brand-700 font-medium">
                support@tournetix.com
              </a>
            </p>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
