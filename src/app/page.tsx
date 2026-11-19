const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#" className="font-mono text-lg font-bold">
            <span className="text-primary">{"<"}</span>
            Dung
            <span className="text-primary">{" />"}</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-xs text-muted transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-md border border-primary/40 px-4 py-2 font-mono text-xs text-primary transition-all hover:bg-primary hover:text-background"
          >
            Let's talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="terminal-grid relative flex min-h-screen items-center px-6 pt-28 lg:px-10"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-[130px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Introduction */}
          <div className="animate-fade-up">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-surface/80 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="font-mono text-xs text-muted">
                Available for new opportunities
              </span>
            </div>

            <p className="mb-5 font-mono text-sm text-primary">
              $ whoami
            </p>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              Hello, World!
              <br />
              I'm{" "}
              <span className="text-primary">
                Dung
              </span>
              <span className="terminal-cursor" />
            </h1>

            <h2 className="mt-7 font-mono text-lg text-secondary sm:text-xl">
              Full-stack Developer
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted">
              A passionate developer and recent A Level graduate
              who loves turning ideas into functional digital
              experiences. I work across frontend, backend, and
              database development, constantly exploring new
              technologies and building things that matter.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-md bg-primary px-6 py-3 font-mono text-sm font-semibold text-background transition-transform hover:-translate-y-1"
              >
                Explore my work ↗
              </a>

              <a
                href="#contact"
                className="rounded-md border border-border bg-surface px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-8 border-t border-border pt-7">
              <div>
                <p className="font-mono text-2xl font-bold text-primary">
                  05+
                </p>
                <p className="mt-1 text-xs text-muted">
                  Technologies
                </p>
              </div>

              <div>
                <p className="font-mono text-2xl font-bold text-primary">
                  Full
                </p>
                <p className="mt-1 text-xs text-muted">
                  Stack mindset
                </p>
              </div>

              <div>
                <p className="font-mono text-2xl font-bold text-primary">
                  ∞
                </p>
                <p className="mt-1 text-xs text-muted">
                  Things to learn
                </p>
              </div>
            </div>
          </div>

          {/* Terminal window */}
          <div className="animate-fade-up [animation-delay:200ms]">
            <div className="overflow-hidden rounded-xl border border-border bg-[#0E0E14] shadow-2xl shadow-black/40">
              {/* Terminal title bar */}
              <div className="flex items-center justify-between border-b border-border bg-surface px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                  <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                  <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                </div>

                <span className="font-mono text-xs text-muted">
                  dung@portfolio: ~
                </span>

                <span className="text-xs text-muted">⌘</span>
              </div>

              {/* Terminal content */}
              <div className="space-y-6 p-6 font-mono text-xs leading-7 sm:p-8 sm:text-sm">
                <div>
                  <p className="text-primary">
                    ~/portfolio $ cat about.json
                  </p>
                  <p className="mt-2 text-muted">
                    {"{"}
                  </p>
                  <div className="pl-5">
                    <p>
                      <span className="text-secondary">"name"</span>
                      <span className="text-muted">: </span>
                      <span className="text-primary">"Luong Tuan Dung"</span>,
                    </p>
                    <p>
                      <span className="text-secondary">"role"</span>
                      <span className="text-muted">: </span>
                      <span className="text-primary">"Full-stack Developer"</span>,
                    </p>
                    <p>
                      <span className="text-secondary">"education"</span>
                      <span className="text-muted">: </span>
                      <span className="text-primary">"A Level Graduate"</span>,
                    </p>
                    <p>
                      <span className="text-secondary">"passion"</span>
                      <span className="text-muted">: </span>
                      <span className="text-primary">"Building things"</span>
                    </p>
                  </div>
                  <p className="text-muted">{"}"}</p>
                </div>

                <div>
                  <p className="text-primary">
                    ~/portfolio $ ls skills/
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Python", "Django", "JavaScript", "HTML", "CSS"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="rounded border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-primary">
                    ~/portfolio $ echo $STATUS
                  </p>
                  <p className="text-[#28C840]">
                    Ready to build something awesome.
                  </p>
                </div>

                <div className="flex items-center gap-2 border-t border-border pt-4">
                  <span className="text-primary">➜</span>
                  <span className="text-muted">Let's create something</span>
                  <span className="terminal-cursor" />
                </div>
              </div>
            </div>

            <p className="mt-4 text-center font-mono text-xs text-muted">
              // A little glimpse into my developer world
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 font-mono text-xs text-muted transition-colors hover:text-primary sm:block"
        >
          SCROLL TO EXPLORE ↓
        </a>
      </section>

      {/* Placeholder sections for upcoming development */}
      <section id="about" className="min-h-[300px] border-t border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm text-primary">$ cat about.md</p>
          <h2 className="mt-4 text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-muted">
            More about my journey coming soon.
          </p>
        </div>
      </section>

      <section id="skills" className="min-h-[300px] border-t border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm text-primary">$ ls skills/</p>
          <h2 className="mt-4 text-3xl font-bold">Skills & Technologies</h2>
        </div>
      </section>

      <section id="projects" className="min-h-[300px] border-t border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm text-primary">$ ls projects/</p>
          <h2 className="mt-4 text-3xl font-bold">Featured Projects</h2>
        </div>
      </section>

      <section id="education" className="min-h-[300px] border-t border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm text-primary">$ cat education.md</p>
          <h2 className="mt-4 text-3xl font-bold">Education</h2>
        </div>
      </section>

      <section id="contact" className="min-h-[300px] border-t border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm text-primary">$ ./contact.sh</p>
          <h2 className="mt-4 text-3xl font-bold">Let's Connect</h2>
        </div>
      </section>
    </main>
  );
}
