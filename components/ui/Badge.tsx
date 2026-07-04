interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles =
    variant === "accent"
      ? "border-accent/40 bg-accent/10 text-accent"
      : "border-border bg-bg-surface text-text-muted";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-mono ${styles}`}
    >
      {children}
    </span>
  );
}
