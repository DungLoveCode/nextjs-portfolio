"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Mail,
  ArrowUpRight,
} from "lucide-react";

import {
  SiGithub,
  SiFacebook,
} from "react-icons/si";

import Terminal from "./terminal";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/DungLoveCode",
    icon: SiGithub,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/dung.luong18",
    icon: SiFacebook,
  },
  {
    name: "Email",
    href: "mailto:dung.luong1812k9@gmail.com",
    icon: Mail,
  },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <>
      

      {/* Hero */}
      <section
        id="home"
        className="terminal-grid relative flex min-h-screen items-center overflow-hidden px-6 pt-28 lg:px-10"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-[130px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Introduction */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            {/* Availability */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-surface/80 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />

              <span className="font-mono text-xs text-muted">
                Passionate about building & learning
              </span>
            </div>

            <p className="mb-5 font-mono text-sm text-primary">
              $ whoami
            </p>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              Hello, World!
              <br />
              I'm{" "}
              <span className="text-primary">Dung</span>
              <span className="terminal-cursor" />
            </h1>

            <h2 className="mt-7 font-mono text-lg text-secondary sm:text-xl">
              Full-stack Developer
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted">
              A developer and recent A Level graduate who
              loves turning ideas into functional digital
              experiences. From crafting user interfaces
              to building backend systems and designing
              databases, I'm passionate about exploring
              technology and creating things that matter.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-md bg-primary px-6 py-3 font-mono text-sm font-semibold text-background transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
              >
                Explore my work
                <ArrowUpRight className="ml-2 inline h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="rounded-md border border-border bg-surface px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                Get in touch
              </a>
            </div>

            {/* Social links */}
            <div className="mt-10 flex items-center gap-5">
              <span className="font-mono text-xs text-muted">
                FIND ME ON
              </span>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={
                        social.name === "Email"
                          ? undefined
                          : "_blank"
                      }
                      rel={
                        social.name === "Email"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      aria-label={social.name}
                      title={social.name}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Bottom highlights */}
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-7">
              <div>
                <p className="font-mono text-xl font-bold text-primary">
                  Full
                </p>
                <p className="mt-1 text-xs text-muted">
                  Stack mindset
                </p>
              </div>

              <div>
                <p className="font-mono text-xl font-bold text-primary">
                  Python
                </p>
                <p className="mt-1 text-xs text-muted">
                  Backend development
                </p>
              </div>

              <div>
                <p className="font-mono text-xl font-bold text-primary">
                  ∞
                </p>
                <p className="mt-1 text-xs text-muted">
                  Things to learn
                </p>
              </div>
            </div>
          </motion.div>

          {/* Terminal */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <Terminal />

            <p className="mt-4 text-center font-mono text-xs text-muted">
              // A little glimpse into my developer world
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 font-mono text-xs text-muted transition-colors hover:text-primary sm:block"
        >
          SCROLL TO EXPLORE ↓
        </a>
      </section>
    </>
  );
}
