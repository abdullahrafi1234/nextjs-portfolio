"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-1">
          {/* <Image
            src="/logo.png"
            alt="Rafi logo"
            width={36}
            height={36}
            className="object-contain"
          /> */}
          <span className="font-serif text-2xl font-bold tracking-wide text-text-primary">
            R_AFI
          </span>
        </a>

        <ul className="hidden gap-8 font-mono text-sm text-text-muted sm:absolute sm:left-1/2 sm:flex sm:-translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="text-text-primary sm:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border px-6 py-4 font-mono text-sm sm:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
