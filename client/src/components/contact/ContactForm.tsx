import { useState, type FormEvent } from "react";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  company: string;
  tourCount: string;
  subject: string;
  message: string;
}

const tourCountOptions = [
  { value: "", label: "How many tours do you run?" },
  { value: "1-10", label: "1–10 per month" },
  { value: "11-50", label: "11–50 per month" },
  { value: "51-200", label: "51–200 per month" },
  { value: "200+", label: "200+ per month" },
  { value: "not-sure", label: "Not sure yet" },
];

const subjectOptions = [
  { value: "", label: "What can we help with?" },
  { value: "demo", label: "I'd like a demo" },
  { value: "pricing", label: "Question about pricing" },
  { value: "features", label: "Question about features" },
  { value: "partnership", label: "Partnership inquiry" },
  { value: "support", label: "Technical support" },
  { value: "other", label: "Something else" },
];

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    tourCount: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", tourCount: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function updateField(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  if (status === "success") {
    return (
      <AnimateOnScroll>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-8 sm:p-12 text-center" data-testid="text-form-success">
          <div className="mx-auto w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
            <CheckCircle className="w-7 h-7 text-emerald-500" />
          </div>
          <h3 className="font-display text-xl font-semibold text-zinc-900">
            Message sent!
          </h3>
          <p className="mt-2 text-sm text-zinc-500 max-w-sm mx-auto">
            Thanks for reaching out. We'll get back to you within a few hours.
            Check your inbox for a confirmation.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
            data-testid="button-send-another"
          >
            Send another message
          </button>
        </div>
      </AnimateOnScroll>
    );
  }

  return (
    <AnimateOnScroll>
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8" data-testid="section-contact-form">
        <h2 className="font-display text-lg font-semibold text-zinc-900">
          Send us a message
        </h2>
        <p className="mt-1 text-sm text-zinc-500">
          Fill out the form below and we'll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5" data-testid="form-contact">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="John Smith"
                className={cn(
                  "w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors",
                  errors.name
                    ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                    : "border-zinc-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                )}
                data-testid="input-name"
              />
              {errors.name && <p className="mt-1 text-xs text-red-500" data-testid="error-name">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="john@company.com"
                className={cn(
                  "w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors",
                  errors.email
                    ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                    : "border-zinc-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                )}
                data-testid="input-email"
              />
              {errors.email && <p className="mt-1 text-xs text-red-500" data-testid="error-email">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                Company Name
              </label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => updateField("company", e.target.value)}
                placeholder="Ocean Tours"
                className="w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                data-testid="input-company"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                Monthly Tours
              </label>
              <select
                value={form.tourCount}
                onChange={(e) => updateField("tourCount", e.target.value)}
                className="w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100 appearance-none"
                data-testid="select-tour-count"
              >
                {tourCountOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-700 mb-1.5">
              Subject
            </label>
            <select
              value={form.subject}
              onChange={(e) => updateField("subject", e.target.value)}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100 appearance-none"
              data-testid="select-subject"
            >
              {subjectOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-700 mb-1.5">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              placeholder="Tell us about your tour business and how we can help..."
              rows={5}
              className={cn(
                "w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors resize-none",
                errors.message
                  ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                  : "border-zinc-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              )}
              data-testid="input-message"
            />
            {errors.message && <p className="mt-1 text-xs text-red-500" data-testid="error-message">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-3 text-sm font-medium text-white shadow-sm shadow-brand-500/20 hover:bg-brand-600 active:bg-brand-700 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            data-testid="button-submit"
          >
            {status === "sending" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </button>

          {status === "error" && (
            <p className="text-sm text-red-500" data-testid="text-form-error">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>
      </div>
    </AnimateOnScroll>
  );
}
