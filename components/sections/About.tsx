import { SectionHeading } from "@/components/ui/SectionHeading";
import { journeySteps } from "@/lib/data/journey";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="01 — About"
          title="From proofs to production code"
          description="A Mathematics background taught me to think in structures and systems — web development gave me the tools to build them."
        />

        <div className="space-y-6">
          {journeySteps.map((step) => (
            <div
              key={step.id}
              className="grid gap-2 border-l-2 border-border pl-6 sm:grid-cols-[140px_1fr] sm:gap-6"
            >
              <span className="font-mono text-xs text-text-faint">
                {step.period}
              </span>
              <p className="text-text-primary">
                <span className="text-accent">Given</span> {step.given},{" "}
                <span className="text-accent">then</span> {step.then}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
