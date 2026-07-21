import { SectionHeading } from "@/components/ui/SectionHeading";

const GITHUB_USERNAME = "abdullahrafi1234"; // replace with your real username

export function GithubActivity() {
  return (
    <section id="github-activity" className="px-6 py-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Activity"
          title="GitHub Contributions"
          description="A snapshot of my recent coding activity."
        />
        <div className="overflow-x-auto rounded-xl border border-border bg-bg-surface p-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://ghchart.rshah.org/40c463/${GITHUB_USERNAME}`}
            alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
            className="w-full min-w-150"
          />
        </div>
      </div>
    </section>
  );
}
