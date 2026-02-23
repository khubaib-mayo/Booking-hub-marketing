import { Container } from "@/components/marketing/ui/Container";
import { MarketingButton } from "@/components/marketing/ui/MarketingButton";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";

const openRoles = [
  {
    title: "Head of Growth",
    type: "Full-time · Remote",
    description: "Drive our go-to-market strategy. Tourism industry connections a huge plus.",
  },
  {
    title: "Full-Stack Engineer",
    type: "Full-time · Remote",
    description: "React, TypeScript, Node.js, PostgreSQL. Help us build the next 50 features.",
  },
  {
    title: "Customer Success Lead",
    type: "Full-time · Remote",
    description: "Onboard tour operators, gather feedback, and turn users into champions.",
  },
];

export function JoinUs() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-50/50" data-testid="section-join-us">
      <Container size="narrow">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-4">
              Careers
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900" style={{ textWrap: "balance" } as React.CSSProperties}>
              Help us build the future of tourism software
            </h2>
            <p className="mt-4 text-base text-zinc-500 max-w-xl mx-auto">
              We're a remote-first team looking for people who care about craft,
              move fast, and want to make a real impact on small businesses worldwide.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="space-y-4">
          {openRoles.map((role, i) => (
            <AnimateOnScroll key={role.title} delay={i * 0.1}>
              <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-zinc-200 bg-white p-5 sm:p-6 transition-all duration-200 hover:shadow-md hover:border-zinc-300 cursor-pointer" data-testid={`card-role-${i}`}>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 border border-brand-100 flex-shrink-0 mt-0.5">
                    <Briefcase className="h-4 w-4 text-brand-500" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 group-hover:text-brand-600 transition-colors">
                      {role.title}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3 h-3 text-zinc-400" />
                      <p className="text-xs text-zinc-400">{role.type}</p>
                    </div>
                    <p className="mt-1.5 text-sm text-zinc-500">{role.description}</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:text-brand-500 transition-colors flex-shrink-0 hidden sm:block" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.3}>
          <div className="mt-8 text-center">
            <p className="text-sm text-zinc-400 mb-4">
              Don't see your role? We're always looking for talented people.
            </p>
            <MarketingButton variant="secondary" size="md" href="/contact" data-testid="button-send-cv">
              Send Us Your CV
            </MarketingButton>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
