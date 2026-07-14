import { Button } from "@/components/ui/Button";
import { Circle, Mail, MapPin, User } from "lucide-react";

const infoRows = [
  { icon: User, label: "Name", value: "Abdullah Al Rafi Bhuiyan" },
  { icon: Mail, label: "Email", value: "rafibhuiyan1234@gmail.com" },
  { icon: MapPin, label: "Location", value: "Mohammadpur, Dhaka" },
];

export function About() {
  return (
    <section id="about" className="px-6 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left: heading + description + CV button */}
          <div>
            <span className="font-mono text-sm text-accent">About Me</span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-text-muted">
              I&apos;m Abdullah Al Rafi Bhuiyan, a Full-Stack Web Developer with
              a Mathematics background. I build responsive, scalable web
              applications using React, TypeScript, Node.js, and PostgreSQL —
              with a strong foundation in REST APIs, authentication, and
              database design.
            </p>

            <div className="mt-6">
              <Button href="/resume.pdf" variant="secondary">
                Download CV
              </Button>
            </div>
          </div>

          {/* Right: info card only */}
          <div className="rounded-xl border border-border bg-bg-surface p-6">
            <ul className="space-y-5">
              {infoRows.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-bg">
                    <Icon size={16} className="text-accent" />
                  </span>
                  <div>
                    <p className="text-xs text-text-faint">{label}</p>
                    <p className="text-sm font-medium text-text-primary">
                      {value}
                    </p>
                  </div>
                </li>
              ))}

              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-bg">
                  <Circle size={10} className="fill-green-500 text-green-500" />
                </span>
                <div>
                  <p className="text-xs text-text-faint">Availability</p>
                  <p className="text-sm font-medium text-text-primary">
                    Available for work
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
