import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  external?: boolean;
}

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200";

  const styles =
    variant === "primary"
      ? "text-white hover:opacity-90"
      : "border border-border text-text-primary hover:border-border-hover hover:bg-bg-surface";

  return (
    <Link
      href={href}
      className={`${base} ${styles}`}
      style={
        variant === "primary"
          ? {
              background:
                "linear-gradient(90deg, var(--color-accent), var(--color-accent-secondary))",
            }
          : undefined
      }
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {icon}
      {children}
    </Link>
  );
}
