import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechStackCard } from "@/components/ui/TechStackCard";
import { skillCategories } from "@/lib/data/skills";
import Image from "next/image";

export function Skills() {
  const allSkills = skillCategories.flatMap((category) =>
    category.skills.map((skill) => ({
      ...skill,
      categoryLabel: category.label,
    })),
  );

  return (
    <section id="skills" className="px-6 py-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="My Skills"
          title="Technologies I Work With"
          description="A full-stack toolkit spanning frontend, backend, and both SQL & NoSQL databases."
        />

        <div className="grid grid-cols-4 gap-4 sm:grid-cols-5 lg:grid-cols-7">
          {allSkills.map((skill, index) => (
            <TechStackCard
              key={skill.name}
              icon={
                <Image
                  src={
                    skill.name === "Mongoose"
                      ? "https://cdn.simpleicons.org/mongoose/880000"
                      : `https://skillicons.dev/icons?i=${skill.icon}`
                  }
                  alt={skill.name}
                  width={40}
                  height={40}
                  unoptimized
                  className="h-10 w-10 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6"
                />
              }
              title={skill.name}
              category={skill.categoryLabel}
              level={skill.level}
              color={skill.color}
              delay={index * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
