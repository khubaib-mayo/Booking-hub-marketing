import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";
import { Mail, Clock, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";

const infoCards = [
  {
    icon: Mail,
    title: "Email us",
    detail: "hello@bookinghub.app",
    subtitle: "For general inquiries",
  },
  {
    icon: Clock,
    title: "Response time",
    detail: "Within a few hours",
    subtitle: "Mon–Fri, 9AM–6PM UTC",
  },
  {
    icon: MessageCircle,
    title: "Live chat",
    detail: "Coming soon",
    subtitle: "In-app support chat",
  },
  {
    icon: MapPin,
    title: "Based in",
    detail: "Portugal",
    subtitle: "Serving operators worldwide",
  },
];

const socialLinks = [
  { name: "Twitter / X", href: "#", label: "@bookinghub" },
  { name: "LinkedIn", href: "#", label: "BookingHub" },
  { name: "Instagram", href: "#", label: "@bookinghub" },
];

export function ContactInfo() {
  return (
    <div className="space-y-6" data-testid="section-contact-info">
      {infoCards.map((card, i) => (
        <AnimateOnScroll key={card.title} delay={i * 0.08} direction="right">
          <div className="flex items-start gap-4 rounded-xl border border-zinc-100 bg-white p-5 transition-all duration-200 hover:shadow-md hover:border-zinc-200" data-testid={`card-info-${i}`}>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 border border-brand-100 flex-shrink-0">
              <card.icon className="h-4 w-4 text-brand-500" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs text-zinc-400">{card.title}</p>
              <p className="text-sm font-semibold text-zinc-900 mt-0.5">{card.detail}</p>
              <p className="text-xs text-zinc-500 mt-0.5">{card.subtitle}</p>
            </div>
          </div>
        </AnimateOnScroll>
      ))}

      <AnimateOnScroll delay={0.4} direction="right">
        <div className="rounded-xl border border-zinc-100 bg-white p-5" data-testid="section-social-links">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
            Follow Us
          </p>
          <div className="space-y-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors group"
                data-testid={`link-social-${link.name.toLowerCase().replace(/\s+\/\s+/g, '-').replace(/\s+/g, '-')}`}
              >
                <div>
                  <span className="font-medium">{link.name}</span>
                  <span className="text-zinc-400 ml-2">{link.label}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300 group-hover:text-brand-500 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
