
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  ArrowUp,
} from "lucide-react";
import { SiFacebook, SiGithub } from "react-icons/si";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/DungLoveCode",
    icon: SiGithub,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/dung.luong18",
    icon: SiFacebook,
  },
  {
    label: "Email",
    href: "mailto:dung.luong1812k9@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  const currentYear = "2026"

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">

        {/* Main footer */}
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:gap-16 lg:py-14">

          {/* Brand and description */}
          <div>
            <Link
              href="#home"
              className="inline-block font-mono text-xl font-bold"
              aria-label="Dung - Back to home"
            >
              <span className="text-primary">{"<"}</span>
              Dung
              <span className="text-primary">{" />"}</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
              A developer passionate about building useful
              digital experiences, exploring new technologies,
              and turning ideas into reality.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                const isEmail = social.label === "Email";

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={isEmail ? undefined : "_blank"}
                    rel={
                      isEmail
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div className="md:justify-self-end md:w-full md:max-w-sm">
            <p className="mb-6 font-mono text-xs font-semibold tracking-wider text-primary">
              GET IN TOUCH
            </p>

            <p className="text-sm leading-7 text-muted">
              Have an interesting idea or want to connect?
              Feel free to reach out.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-md border border-primary/40 px-4 py-3 font-mono text-xs text-primary transition-all hover:bg-primary hover:text-background"
            >
              Let's talk
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-border py-5">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">

            {/* Copyright */}
            <p className="font-mono text-[11px] text-muted">
              © {currentYear} Dung. All rights reserved.
            </p>

            {/* Closing message */}
            <p className="font-mono text-[11px] text-muted">
              <span className="text-primary">{"<"}</span>
              Built with curiosity and code
              <span className="text-primary">{" />"}</span>
            </p>

            {/* Back to top */}
            <a
              href="#"
              className="group inline-flex items-center gap-2 font-mono text-[11px] text-muted transition-colors hover:text-primary"
            >
              BACK TO TOP

              <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border transition-all group-hover:border-primary/50 group-hover:bg-primary/5">
                <ArrowUp
                  size={13}
                  className="transition-transform group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
