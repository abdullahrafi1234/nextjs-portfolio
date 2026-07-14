"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/lib/data/skills";
import Image from "next/image";

export function Skills() {
  const allSkills = skillCategories.flatMap((category) =>
    category.skills.map((skill) => ({
      ...skill,
      categoryLabel: category.label,
    })),
  );
  const track = [...allSkills, ...allSkills]; // seamless loop এর জন্য duplicate

  return (
    <section id="skills" className="px-6 py-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="My Skills"
          title="Technologies I Work With"
          description="A full-stack toolkit spanning frontend, backend, and both SQL & NoSQL databases."
        />

        <div className="relative overflow-hidden">
          <div className="skills-marquee flex w-max gap-6">
            {track.map((skill, i) => (
              <div
                key={`${skill.name}-${i}`}
                className="flex w-64 shrink-0 flex-col items-center rounded-xl border border-border bg-bg-surface px-6 py-10 text-center transition-colors hover:border-accent/50"
              >
                <Image
                  src={
                    skill.icon === "mongoose"
                      ? `https://cdn.simpleicons.org/mongoose/${skill.color.replace("#", "")}`
                      : `https://skillicons.dev/icons?i=${skill.icon}`
                  }
                  alt={skill.name}
                  width={80}
                  height={80}
                  unoptimized
                />
                <p className="mt-5 font-display text-xl font-semibold text-text-primary">
                  {skill.name}
                </p>
                <p className="mt-1 font-mono text-xs text-text-faint">
                  {skill.categoryLabel}
                </p>

                <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-bg">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${skill.level}%`,
                      background: skill.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Edge fade so cards don't look like they cut off abruptly */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-bg to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-bg to-transparent" />
        </div>
      </div>
    </section>
  );
}
