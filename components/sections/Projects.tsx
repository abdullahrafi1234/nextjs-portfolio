"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data/projects";
import { motion } from "framer-motion";
import { ArrowUpRight, Folder } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="My Projects" title="Featured Projects" />
          <Button href="#projects" variant="secondary">
            View All Projects
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="h-full"
            >
              <Link
                href={`/projects/${project.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-bg-surface transition-colors hover:border-accent/50"
              >
                <div className="relative aspect-video w-full shrink-0 overflow-hidden border-b border-border bg-bg">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Folder size={28} className="text-text-faint" />
                    </div>
                  )}

                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-bg/80 text-text-primary backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight size={15} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-display text-base font-semibold text-text-primary transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 flex-1 text-sm text-text-muted">
                    {project.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
