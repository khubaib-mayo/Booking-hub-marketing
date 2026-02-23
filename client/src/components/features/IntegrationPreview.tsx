import { Container } from "@/components/marketing/ui/Container";
import { SectionHeader } from "@/components/marketing/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";
import { CreditCard, MessageCircle, Globe, Plug, Mail, Smartphone } from "lucide-react";
import { Link } from "wouter";

const integrations = [
  { icon: CreditCard, name: "Stripe", status: "Coming Q2 2026", description: "Accept payments directly through booking forms" },
  { icon: MessageCircle, name: "WhatsApp", status: "Coming Q2 2026", description: "Send booking confirmations via WhatsApp" },
  { icon: Globe, name: "Booking Widget", status: "Coming Q3 2026", description: "Embed a booking form on your own website" },
  { icon: Mail, name: "Mailchimp", status: "Coming Q3 2026", description: "Sync customers to your email marketing lists" },
  { icon: Smartphone, name: "Mobile App", status: "Coming Q2 2026", description: "Manage bookings on the go with iOS and Android" },
  { icon: Plug, name: "Zapier", status: "Coming Q4 2026", description: "Connect BookingHub to 5,000+ other apps" },
];

export function IntegrationPreview() {
  return (
    <section className="py-24 lg:py-32" data-testid="section-integrations">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            badge="Integrations"
            title="Connects with the tools you already use"
            description="We're building integrations with the platforms tour operators use most. Here's what's coming."
          />
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {integrations.map((integration, i) => (
            <AnimateOnScroll key={integration.name} delay={i * 0.08}>
              <div
                className="flex items-start gap-4 rounded-xl border border-zinc-100 bg-white p-5 transition-all duration-200 hover:shadow-md hover:border-zinc-200"
                data-testid={`card-integration-${integration.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-50 border border-zinc-100 flex-shrink-0">
                  <integration.icon className="h-5 w-5 text-zinc-400" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-zinc-900">{integration.name}</h3>
                    <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-600 ring-1 ring-inset ring-amber-500/10">
                      {integration.status}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-500 leading-relaxed">{integration.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.3}>
          <p className="mt-10 text-center text-sm text-zinc-400">
            Need a specific integration?{" "}
            <Link href="/contact" className="text-brand-600 font-medium hover:text-brand-700 transition-colors" data-testid="link-request-integration">
              Let us know
            </Link>
          </p>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
