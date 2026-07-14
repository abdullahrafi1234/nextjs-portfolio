import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/data/projects";
import { ArrowLeft, CircleCheck, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const screenshots = project.screenshots?.length
    ? project.screenshots
    : project.image
      ? [project.image]
      : [];

  return (
    <main className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} />
          All Projects
        </Link>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h1 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
              {project.title}
            </h1>
            {project.featured && <Badge variant="accent">Featured</Badge>}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                variant="secondary"
                external
                icon={<GithubIcon size={16} />}
              >
                GitHub
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

        {project.tagline && (
          <p className="mt-2 text-text-muted">{project.tagline}</p>
        )}

        {screenshots.length > 0 && (
          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-xl border border-border bg-bg-surface">
            <Image
              src={screenshots[0]}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="font-display text-xl font-semibold text-text-primary">
              About
            </h2>
            <p className="mt-3 text-text-muted">{project.description}</p>

            {project.highlights.length > 0 && (
              <>
                <h2 className="mt-8 font-display text-xl font-semibold text-text-primary">
                  Features
                </h2>
                <div className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {project.highlights.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-2 text-sm text-text-muted"
                    >
                      <CircleCheck
                        size={16}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      {point}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-bg-surface p-5">
              <p className="font-mono text-xs uppercase tracking-wide text-text-faint">
                Tech Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>

            {(project.githubUrl || project.liveUrl) && (
              <div className="rounded-xl border border-border bg-bg-surface p-5">
                <p className="font-mono text-xs uppercase tracking-wide text-text-faint">
                  Links
                </p>
                <div className="mt-3 space-y-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-text-primary transition-colors hover:text-accent"
                    >
                      <GithubIcon size={15} /> Source Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-text-primary transition-colors hover:text-accent"
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm text-text-primary transition-colors hover:border-border-hover hover:bg-bg-surface"
          >
            <ArrowLeft size={16} />
            Back to All Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
