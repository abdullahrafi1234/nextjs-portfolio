"use client";

import { Badge } from "@/components/ui/Badge";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { socialLinks } from "@/lib/data/social";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Mail } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 py-8 sm:py-12">
      <div className="star-field pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        {/* Left: text */}
        <div>
          <Badge variant="accent">Full Stack Developer</Badge>

          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-text-primary sm:text-5xl">
            Rafi <span className="gradient-text">Abdullah</span>
          </h1>
          <p className="mt-1 font-display text-xl font-medium text-text-muted">
            Full Stack Developer
          </p>

          <p className="mt-5 max-w-md text-text-muted">
            I build modern, responsive and scalable web applications with React,
            TypeScript & PostgreSQL, and bring ideas to life on the web.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects" variant="primary">
              View My Work →
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>

          <div className="mt-8 flex gap-5">
            {socialLinks.map((link) => {
              const icon =
                link.icon === "github" ? (
                  <GithubIcon size={20} />
                ) : link.icon === "linkedin" ? (
                  <LinkedinIcon size={20} />
                ) : (
                  <Mail size={20} />
                );
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-text-muted transition-colors hover:text-accent"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right: image + floating badges */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="glow-blob absolute inset-0 -z-10" />

          <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-surface">
            <Image
              src="/hero.png"
              alt="Rafi Abdullah"
              width={400}
              height={480}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-8 z-10 flex items-center gap-3 rounded-xl border border-border bg-bg-surface px-5 py-4 shadow-2xl"
          >
            <span className="font-display text-2xl font-bold text-accent">
              1+
            </span>
            <span className="text-xs leading-tight text-text-muted">
              Year
              <br />
              Learning
            </span>
          </motion.div>

          {/* Floating badge: code icon */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -right-6 -top-6 z-10 rounded-xl border border-border bg-bg-surface p-3.5 shadow-2xl"
          >
            <Code2 size={22} className="text-accent" />
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-text-faint transition-colors hover:text-accent"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
