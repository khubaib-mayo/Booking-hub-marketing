import { Container } from "@/components/marketing/ui/Container";
import { SectionHeader } from "@/components/marketing/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";
import { Linkedin, Twitter, Globe } from "lucide-react";

const team = [
  {
    name: "Usman",
    role: "Founder & CEO",
    bio: "Built BookingHub from the ground up after seeing firsthand how tour operators struggle with manual operations. Passionate about creating tools that let small businesses compete with the big players.",
    initials: "U",
    links: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
];

export function Team() {
  return (
    <section className="py-24 lg:py-32" data-testid="section-team">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            badge="Our Team"
            title="The people behind BookingHub"
            description="We're a small, focused team that moves fast and ships every week."
          />
        </AnimateOnScroll>

        <div className="mt-16 flex justify-center">
          <div className={`grid gap-8 ${
            team.length === 1
              ? "grid-cols-1 max-w-md"
              : team.length === 2
              ? "grid-cols-1 sm:grid-cols-2 max-w-2xl"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl"
          }`}>
            {team.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i * 0.1}>
                <div className="rounded-2xl border border-zinc-100 bg-white p-6 lg:p-8 text-center transition-all duration-300 hover:shadow-lg hover:border-zinc-200" data-testid={`card-team-${i}`}>
                  <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/20">
                    <span className="text-2xl font-bold text-white">{member.initials}</span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold text-zinc-900">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-brand-500">{member.role}</p>
                  <p className="mt-3 text-sm text-zinc-500 leading-relaxed">{member.bio}</p>

                  <div className="mt-5 flex items-center justify-center gap-3">
                    {member.links.linkedin && member.links.linkedin !== "#" && (
                      <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 transition-colors"
                        data-testid="link-linkedin"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.links.twitter && member.links.twitter !== "#" && (
                      <a href={member.links.twitter} target="_blank" rel="noopener noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 transition-colors"
                        data-testid="link-twitter"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.links.website && member.links.website !== "#" && (
                      <a href={member.links.website} target="_blank" rel="noopener noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 transition-colors"
                        data-testid="link-website"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
