interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <span className="font-mono text-sm text-accent">{eyebrow}</span>
      <h2 className="mt-2 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-text-muted">{description}</p>}
    </div>
  );
}
