import { ReactNode } from "react";

interface TechStackCardProps {
  icon: ReactNode;
  title: string;
  category: string;
  level: number;
  color?: string;
  delay: number;
}

export function TechStackCard({
  icon,
  title,
  category,
  level,
  color = "var(--color-accent)",
  delay,
}: TechStackCardProps) {
  return (
    <div
      className="group relative rounded-xl border border-border bg-bg-surface p-4 opacity-0 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <div className="absolute inset-0 rounded-xl bg-linear-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex flex-col items-center text-center">
        <div className="mb-3 flex h-10 w-10 items-center justify-center">
          {icon}
        </div>

        <h3 className="text-sm font-display font-semibold text-text-primary transition-colors duration-300 group-hover:text-accent">
          {title}
        </h3>
        <p className="mt-0.5 font-mono text-[10px] text-text-faint">
          {category}
        </p>

        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-bg">
          <div
            className="h-full rounded-full"
            style={{ width: `${level}%`, background: color }}
          />
        </div>
      </div>
    </div>
  );
}
