"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  LoaderCircle,
} from "lucide-react";
import { SiFacebook, SiGithub } from "react-icons/si";
import { SiDiscord } from "react-icons/si";

const contactDetails = [
  {
    label: "EMAIL",
    value: "dung.luong1812k9@gmail.com",
    href: "mailto:dung.luong1812k9@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "GITHUB",
    value: "DungLoveCode",
    href: "https://github.com/DungLoveCode",
    icon: SiGithub,
    external: true,
  },
  {
    label: "FACEBOOK",
    value: "Dung Luong",
    href: "https://www.facebook.com/dung.luong18",
    icon: SiFacebook,
    external: true,
  },
  {
    label: "DISCORD",
    value: "dung.luong",
    href: "https://discord.com/users/1312993153929842748",
    icon: SiDiscord,
    external: true,
  },
  {
    label: "LOCATION",
    value: "Nghe An, Vietnam",
    href: null,
    icon: MapPin,
    external: false,
  },
];

type FormStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  
const handleSubmit = async (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  setStatus("loading");
  setErrorMessage("");

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Unable to send your message.");
    }

    setStatus("success");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    setStatus("error");
    setErrorMessage(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  }
};


  return (
    <section
      id="contact"
      className="relative px-6 py-24 sm:py-32 lg:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Section heading */}
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-primary/30 bg-primary/5 font-mono text-xs text-primary">
              06
            </span>

            <span className="font-mono text-xs tracking-wider text-muted">
              GET IN TOUCH
            </span>

            <span className="h-px flex-1 bg-border" />

            <span className="hidden font-mono text-[10px] text-muted sm:block">
              LET'S CONNECT
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let's build something{" "}
            <span className="text-primary">together.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Have an interesting idea, a question, or an
            opportunity? I'd love to hear from you.
            Feel free to send me a message.
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* Contact information */}
          <div>
            <div className="mb-7">
              <p className="font-mono text-xs font-semibold tracking-wider text-primary">
                // CONTACT_INFORMATION
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Find me here
              </h3>

              <p className="mt-2 text-sm leading-7 text-muted">
                You can reach me through any of the following
                platforms. I'll be happy to connect.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-3">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                const content = (
                  <div className="flex items-center gap-4 rounded-lg border border-border bg-surface/50 p-4 transition-all hover:border-primary/40 hover:bg-surface">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/5">
                      <Icon size={19} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[10px] tracking-wider text-muted">
                        {item.label}
                      </p>

                      <p className="mt-1 truncate text-sm font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>

                    {item.external && (
                      <ArrowUpRight
                        size={16}
                        className="shrink-0 text-muted transition-colors group-hover:text-primary"
                      />
                    )}
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={
                      item.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Availability message */}
            <div className="mt-8 rounded-lg border border-primary/20 bg-primary/[0.04] p-5">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>

                <span className="font-mono text-xs text-primary">
                  OPEN TO CONNECTIONS
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-muted">
                Interested in discussing projects,
                technology, or opportunities? Feel free
                to reach out.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-xl border border-border bg-surface/40 p-5 sm:p-8">
            {/* Form header */}
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs font-semibold tracking-wider text-primary">
                  // SEND_A_MESSAGE
                </p>

                <h3 className="mt-3 text-xl font-semibold">
                  Drop me a message
                </h3>

                <p className="mt-2 text-sm text-muted">
                  I'll get back to you as soon as possible.
                </p>
              </div>

              <div className="hidden h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-primary sm:flex">
                <MessageCircle size={20} />
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block font-mono text-xs text-muted"
                >
                  YOUR NAME
                  <span className="ml-1 text-primary">*</span>
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  autoComplete="name"
                  maxLength={100}
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted/50 focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block font-mono text-xs text-muted"
                >
                  EMAIL ADDRESS
                  <span className="ml-1 text-primary">*</span>
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted/50 focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block font-mono text-xs text-muted"
                >
                  YOUR MESSAGE
                  <span className="ml-1 text-primary">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi! I'd like to talk about..."
                  rows={6}
                  maxLength={5000}
                  required
                  className="w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-sm leading-7 text-foreground outline-none transition-all placeholder:text-muted/50 focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                />

                <p className="mt-2 text-right font-mono text-[10px] text-muted">
                  {formData.message.length}/5000
                </p>
              </div>

              

              {/* Status message */}
              {status === "success" && (
                <div
                  role="status"
                  className="flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 p-3 text-sm text-primary"
                >
                  <CheckCircle2 size={17} />
                  Message sent successfully!
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/5 p-3 text-sm text-red-400"
                >
                  <AlertCircle size={17} className="mt-0.5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-mono text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <LoaderCircle
                      size={17}
                      className="animate-spin"
                    />
                    SENDING...
                  </>
                ) : (
                  <>
                    SEND MESSAGE
                    <Send
                      size={16}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    />
                  </>
                )}
              </button>

              <p className="text-center font-mono text-[10px] leading-5 text-muted">
                Your information will only be used to respond
                to your message.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom detail */}
        <div className="mt-14 flex items-center gap-3 border-t border-border pt-6">
          <ArrowUpRight size={17} className="text-primary" />

          <p className="font-mono text-xs text-muted">
            // Looking forward to hearing from you.
          </p>
        </div>
      </div>
    </section>
  );
}
