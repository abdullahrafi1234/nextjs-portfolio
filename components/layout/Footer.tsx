import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const resources = [
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "/resume.pdf" },
  { label: "Experience", href: "#experience" },
];

const connectLinks = [
  {
    label: "GitHub",
    href: "https://github.com/YOUR-GITHUB-USERNAME",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/YOUR-LINKEDIN-USERNAME",
    icon: LinkedinIcon,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-5">
          {/* Branding + bio + direct contact */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-wide text-text-primary">
                R_AFI
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-text-muted">
              Full-Stack Web Developer with a Mathematics background, building
              modern, responsive, and scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wide text-text-primary">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wide text-text-primary">
              Resources
            </h4>
            <ul className="mt-4 space-y-2.5">
              {resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wide text-text-primary">
              Connect
            </h4>
            <ul className="mt-4 space-y-2.5">
              {connectLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent"
                    >
                      <Icon size={14} />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-text-faint">
            © {new Date().getFullYear()} Rafi Abdullah. All rights reserved.
          </p>
          <p className="text-xs text-text-faint">
            Built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
