import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/lib/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="My Experience"
          title="Where I've Worked"
          description="Hands-on teaching experience alongside my journey as a developer."
        />

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="rounded-xl border border-border bg-bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-xl font-semibold text-text-primary">
                  {exp.role}
                </h3>
                <Badge variant="accent">{exp.type}</Badge>
              </div>

              <p className="mt-2 font-mono text-sm text-text-faint">
                {exp.organization}
              </p>

              <ul className="mt-4 space-y-1.5">
                {exp.highlights.map((point) => (
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
                {exp.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
