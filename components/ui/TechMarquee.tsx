"use client";

import { skillCategories } from "@/lib/data/skills";
import Image from "next/image";

export function TechMarquee() {
  const allSkills = skillCategories.flatMap((c) => c.skills);
  const track = [...allSkills, ...allSkills]; // duplicate for seamless loop

  return (
    <div className="relative overflow-hidden border-y border-border bg-bg-surface py-6">
      <div className="marquee-track flex w-max gap-10">
        {track.map((skill, i) => (
          <div
            key={`${skill.name}-${i}`}
            className="flex shrink-0 items-center gap-2 opacity-70 transition-opacity hover:opacity-100"
          >
            <Image
              src={`https://skillicons.dev/icons?i=${skill.icon}`}
              alt={skill.name}
              width={28}
              height={28}
              unoptimized
            />
            <span className="font-mono text-sm text-text-muted">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
