"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: Mail, label: "rafibhuiyan1234@gmail.com" },
  { icon: Phone, label: "+880 1722-438145" },
  { icon: Phone, label: "+880 1568393284" },
  { icon: MapPin, label: "Tikkapara, Mohammadpur, Dhaka" },
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact Me"
          title="Get In Touch"
          description="Have a project in mind or want to work together? Feel free to send me a message."
        />

        <div className="grid gap-8 sm:grid-cols-[0.8fr_1.2fr]">
          <ul className="space-y-4">
            {contactInfo.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-surface">
                  <Icon size={16} className="text-accent" />
                </span>
                <span className="text-sm text-text-primary">{label}</span>
              </li>
            ))}
          </ul>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl border border-border bg-bg-surface p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-md border border-border bg-bg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-faint focus:border-accent focus:outline-none"
              />
              <input
                required
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-md border border-border bg-bg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-faint focus:border-accent focus:outline-none"
              />
            </div>

            <input
              required
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full rounded-md border border-border bg-bg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-faint focus:border-accent focus:outline-none"
            />

            <textarea
              required
              rows={5}
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-md border border-border bg-bg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-faint focus:border-accent focus:outline-none"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-accent), var(--color-accent-secondary))",
              }}
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={15} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={15} />
                </>
              )}
            </button>

            {status === "sent" && (
              <p className="text-center text-sm text-accent">
                Thank you for reaching out — I typically respond within 24
                hours.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-red-400">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
