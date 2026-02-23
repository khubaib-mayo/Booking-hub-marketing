import { Container } from "@/components/marketing/ui/Container";
import { CTABanner } from "@/components/marketing/shared/CTABanner";
import { Globe, Heart, Target, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Every feature we build starts with a real problem faced by tour operators. We listen, understand, and deliver.",
  },
  {
    icon: Lightbulb,
    title: "Simplicity",
    description: "Powerful doesn't have to mean complicated. We make complex operations feel effortless.",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description: "Tourism is global. We support multiple currencies, languages, and time zones out of the box.",
  },
  {
    icon: Target,
    title: "Reliability",
    description: "Your business depends on us. We maintain 99.9% uptime and enterprise-grade security.",
  },
];

const team = [
  { name: "Alex Thompson", role: "CEO & Co-Founder", bio: "Former tour operator with 15 years in the tourism industry." },
  { name: "Priya Sharma", role: "CTO & Co-Founder", bio: "Previously built booking systems at Expedia and Booking.com." },
  { name: "James Wilson", role: "Head of Product", bio: "Product leader with a passion for delightful user experiences." },
  { name: "Maria Santos", role: "Head of Customer Success", bio: "Dedicated to ensuring every customer gets maximum value." },
];

export default function About() {
  return (
    <div>
      <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-50/40 via-white to-white" />
        </div>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3.5 py-1 text-xs font-semibold text-brand-600 ring-1 ring-inset ring-brand-500/10 mb-6" data-testid="badge-about-page">
              About Us
            </span>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900"
              style={{ textWrap: "balance" } as React.CSSProperties}
              data-testid="text-about-title"
            >
              Built by tour operators, for tour operators
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              We started BookingHub because we lived the pain of managing a tour business
              with disconnected tools. We knew there had to be a better way.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32 bg-zinc-50/50" data-testid="section-story">
        <Container size="narrow">
          <div className="prose prose-zinc prose-lg mx-auto">
            <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900 text-center">Our Story</h2>
            <p className="text-zinc-500 leading-relaxed text-center mt-6">
              In 2020, our founders Alex and Priya were running a small adventure tour company
              in New Zealand. They spent more time juggling spreadsheets, chasing commission
              calculations, and manually generating invoices than actually creating amazing
              experiences for their guests.
            </p>
            <p className="text-zinc-500 leading-relaxed text-center mt-4">
              They searched for a solution that combined booking management, commission tracking,
              and invoicing in one place — but everything they found was either too complicated,
              too expensive, or built for hotels rather than tour operators.
            </p>
            <p className="text-zinc-500 leading-relaxed text-center mt-4">
              So they built BookingHub. Today, we serve over 2,500 tour operators in 45 countries,
              helping them save time, reduce errors, and grow their businesses.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32" data-testid="section-values">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Our values
            </h2>
            <p className="mt-4 text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto">
              These principles guide everything we build and every decision we make.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center"
                data-testid={`card-value-${value.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-zinc-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32 bg-zinc-50/50" data-testid="section-team">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Meet the team
            </h2>
            <p className="mt-4 text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto">
              A small, passionate team dedicated to making tour operators' lives easier.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="text-center"
                data-testid={`card-team-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-brand-300 to-brand-600 flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-white">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-zinc-900">
                  {member.name}
                </h3>
                <p className="text-sm text-brand-600 font-medium">{member.role}</p>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Join our mission"
        description="Help us build the future of tourism technology. Start your free trial today."
      />
    </div>
  );
}
