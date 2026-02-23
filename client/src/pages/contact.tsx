import { useState } from "react";
import { Container } from "@/components/marketing/ui/Container";
import { MarketingButton } from "@/components/marketing/ui/MarketingButton";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-50/40 via-white to-white" />
        </div>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3.5 py-1 text-xs font-semibold text-brand-600 ring-1 ring-inset ring-brand-500/10 mb-6" data-testid="badge-contact-page">
              Contact
            </span>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900"
              style={{ textWrap: "balance" } as React.CSSProperties}
              data-testid="text-contact-title"
            >
              Get in touch
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              Have questions about BookingHub? We'd love to hear from you. Send us a message
              and we'll respond as soon as possible.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32" data-testid="section-contact-form">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-zinc-900">Send us a message</h2>
              <p className="mt-2 text-zinc-500">Fill out the form and our team will get back to you within 24 hours.</p>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center" data-testid="text-form-success">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white">
                    <Send className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-zinc-900">Message sent!</h3>
                  <p className="mt-2 text-sm text-zinc-500">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                        placeholder="John Doe"
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                        placeholder="john@example.com"
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-zinc-700">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                      placeholder="Your Tour Company"
                      data-testid="input-company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all resize-none"
                      placeholder="Tell us about your tour business and how we can help..."
                      data-testid="input-message"
                    />
                  </div>

                  <MarketingButton variant="primary" size="lg" type="submit" className="w-full sm:w-auto">
                    Send Message
                    <Send className="h-4 w-4" />
                  </MarketingButton>
                </form>
              )}
            </div>

            <div className="lg:pl-8">
              <h2 className="font-display text-2xl font-bold text-zinc-900">Other ways to reach us</h2>
              <p className="mt-2 text-zinc-500">Prefer a different channel? We've got you covered.</p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4" data-testid="contact-email">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-zinc-900">Email</h3>
                    <p className="mt-1 text-sm text-zinc-500">hello@bookinghub.app</p>
                    <p className="text-xs text-zinc-400 mt-0.5">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-phone">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-zinc-900">Phone</h3>
                    <p className="mt-1 text-sm text-zinc-500">+1 (555) 123-4567</p>
                    <p className="text-xs text-zinc-400 mt-0.5">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-address">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-zinc-900">Office</h3>
                    <p className="mt-1 text-sm text-zinc-500">
                      123 Tourism Street<br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-2xl border border-zinc-100 bg-zinc-50 p-6">
                <h3 className="font-display text-sm font-semibold text-zinc-900">Looking for support?</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                  If you're an existing customer, visit our help center for instant answers
                  or reach out to your dedicated account manager.
                </p>
                <MarketingButton variant="outline" size="sm" href="#" className="mt-4">
                  Visit Help Center
                </MarketingButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
