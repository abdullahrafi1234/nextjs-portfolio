import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { socialLinks } from "@/lib/data/social";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 text-sm text-text-faint sm:flex-row sm:justify-between">
        <p className="font-mono">
          © {new Date().getFullYear()} Rafi Abdullah. Built with Next.js &
          Tailwind CSS.
        </p>
        <div className="flex gap-4">
          {socialLinks.map((link) => {
            const icon =
              link.icon === "github" ? (
                <GithubIcon size={18} />
              ) : link.icon === "linkedin" ? (
                <LinkedinIcon size={18} />
              ) : (
                <Mail size={18} />
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
    </footer>
  );
}
