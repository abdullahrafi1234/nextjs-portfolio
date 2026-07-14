import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data/projects";
import { ExternalLink, Folder } from "lucide-react";
import Image from "next/image";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="My Projects" title="Featured Projects" />
          <Button href="#" variant="secondary">
            View All Projects
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const link = project.liveUrl || project.githubUrl;
            return (
              <div
                key={project.id}
                className="group overflow-hidden rounded-xl border border-border bg-bg-surface transition-colors hover:border-border-hover"
              >
                <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-bg">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Folder size={28} className="text-text-faint" />
                    </div>
                  )}

                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} link`}
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-bg/80 text-text-primary backdrop-blur-sm transition-colors hover:text-accent"
                    >
                      <ExternalLink size={15} />
                    </a>
                  ) : null}
                </div>

                <div className="p-4">
                  <h3 className="font-display text-base font-semibold text-text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-text-muted">
                    {project.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
