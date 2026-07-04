import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { socialLinks } from "@/lib/data/social";
import { Mail } from "lucide-react";

export function Contact() {
  const email = socialLinks.find((link) => link.icon === "mail");

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-sm text-accent">04 — Contact</span>

        <h2 className="mt-2 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
          Let&apos;s build something together
        </h2>

        <p className="mt-4 text-text-muted">
          Open to full-stack opportunities and collaborations. The fastest way
          to reach me is email.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {email && (
            <Button
              href={email.url}
              variant="primary"
              icon={<Mail size={16} />}
            >
              Say Hello
            </Button>
          )}
        </div>

        <div className="mt-10 flex justify-center gap-5">
          {socialLinks
            .filter((link) => link.icon !== "mail")
            .map((link) => {
              const icon =
                link.icon === "github" ? (
                  <GithubIcon size={20} />
                ) : (
                  <LinkedinIcon size={20} />
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
    </section>
  );
}
