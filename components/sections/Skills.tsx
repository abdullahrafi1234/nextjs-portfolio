import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/lib/data/skills";
import Image from "next/image";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="02 — Skills"
          title="Tools I build with"
          description="A full-stack toolkit spanning frontend, backend, and both SQL & NoSQL databases."
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-lg border border-border bg-bg-surface p-6"
            >
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-text-muted">
                {category.label}
              </h3>

              <div className="mt-4 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 rounded-md border border-border bg-bg px-3 py-2"
                  >
                    <Image
                      src={`https://skillicons.dev/icons?i=${skill.icon}`}
                      alt={skill.name}
                      width={20}
                      height={20}
                      unoptimized
                    />
                    <span className="font-mono text-xs text-text-primary">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
