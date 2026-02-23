import { Container } from "@/components/marketing/ui/Container";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { DemoBooking } from "@/components/contact/DemoBooking";

export default function Contact() {
  return (
    <>
      <ContactHero />

      <section className="pb-20 lg:pb-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </Container>
      </section>

      <DemoBooking />
    </>
  );
}
