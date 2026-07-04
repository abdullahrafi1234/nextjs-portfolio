import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { socialLinks } from "@/lib/data/social";
import { ArrowDown, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden px-6"
    >
      {/* Graph-paper texture — signature nod to Math background */}
      <div className="grid-texture pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-5xl">
        <span className="font-mono text-sm text-accent">
          Given: a Mathematics background
        </span>

        <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-text-primary sm:text-6xl">
          Rafi Abdullah
        </h1>

        <p className="mt-4 max-w-xl text-lg text-text-muted sm:text-xl">
          Full Stack Developer building clean, logical, full-stack experiences —
          with React, TypeScript, MongoDB & PostgreSQL.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button href="#contact" variant="secondary">
            Get in Touch
          </Button>
        </div>

        <div className="mt-10 flex gap-5">
          {socialLinks.map((link) => {
            const icon =
              link.icon === "github" ? (
                <GithubIcon size={20} />
              ) : link.icon === "linkedin" ? (
                <LinkedinIcon size={20} />
              ) : (
                <Mail size={20} />
              );
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-text-muted transition-colors hover:text-accent"
              >
                {icon}
              </a>
            );
          })}
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-faint transition-colors hover:text-accent"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
