import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data/projects";
import { ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="03 — Projects"
          title="Things I've built"
          description="Featured work that shows how I structure, build, and ship full-stack applications."
        />

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg border border-border bg-bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-xl font-semibold text-text-primary">
                  {project.title}
                </h3>
                {project.featured && <Badge variant="accent">Featured</Badge>}
              </div>

              <p className="mt-3 text-text-muted">{project.description}</p>

              <ul className="mt-4 space-y-1.5">
                {project.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm text-text-muted"
                  >
                    <span className="text-accent">→</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    variant="secondary"
                    external
                    icon={<GithubIcon size={16} />}
                  >
                    Code
                  </Button>
                )}
                {project.liveUrl && (
                  <Button
                    href={project.liveUrl}
                    variant="primary"
                    external
                    icon={<ExternalLink size={16} />}
                  >
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
