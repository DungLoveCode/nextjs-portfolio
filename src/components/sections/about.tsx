import {
    Code2,
    Terminal,
    Music2,
    Gamepad2,
    ArrowUpRight,
} from "lucide-react";


const interests = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building websites and full-stack applications that solve practical problems and create meaningful user experiences.",
    tag: "01",
  },
  {
    icon: Terminal,
    title: "Exploring Technology",
    description:
      "Experimenting with emerging technologies, discovering new tools, and finding creative ways to build better things.",
    tag: "02",
  },
  {
    icon: Music2,
    title: "Music",
    description:
      "Enjoying music, discovering new sounds, and finding inspiration beyond the world of programming.",
    tag: "03",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description:
      "Playing games, exploring different worlds, and enjoying interactive experiences.",
    tag: "04",
  },
];



const profile = [
  { key: "name", value: "Luong Tuan Dung" },
  { key: "role", value: "Full-stack Developer" },
  { key: "education", value: "A Level Graduate" },
  {
    key: "subjects",
    value: ["9709", "9701", "9702", "9618"],
  },
  {
    key: "languages",
    value: ["Python", "JavaScript", "TypeScript"],
  },
  {
    key: "backend",
    value: ["Django", "Next.js"],
  },
  {
    key: "frontend",
    value: ["React.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
  },
  {
    key: "interests",
    value: ["Web Development", "Technology"],
  },
];


export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-border px-6 py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16">
          <p className="font-mono text-sm text-primary">
            $ cat about.md
          </p>

          <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                A little about{" "}
                <span className="text-primary">me.</span>
              </h2>

              <p className="mt-4 max-w-xl text-muted leading-7">
                Beyond the code, here's a little more about
                who I am, what I do, and what drives me.
              </p>
            </div>

            <span className="font-mono text-xs text-muted">
              // GET TO KNOW ME
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          {/* Personal introduction */}
          
<div className="space-y-7">
  <div>
    <span className="font-mono text-xs text-secondary">
      01 / THE PERSON
    </span>

    <h3 className="mt-4 text-2xl font-semibold leading-snug sm:text-3xl">
      Turning curiosity into{" "}
      <span className="text-primary">
        real-world applications.
      </span>
    </h3>
  </div>

  <div className="space-y-5 text-sm leading-8 text-muted sm:text-base">
    <p>
      I began exploring programming at the start of
      secondary school, initially developing an interest
      in technology through experimenting with Python.
      What started as a curiosity about writing code
      gradually grew into a passion for creating websites
      and applications. I was fascinated by how a few
      lines of code could turn an idea into something
      interactive and functional.
    </p>

    <p>
      As I explored JavaScript and web development, I
      became increasingly interested in building full-stack
      applications. I enjoy working across the entire
      development process — from designing user interfaces
      and implementing frontend functionality to developing
      backend systems and structuring databases.
    </p>

    <p>
      I'm particularly drawn to projects with practical
      applications, such as e-commerce platforms, blogging
      systems, and other web applications that address
      real-world needs. I enjoy experimenting with different
      technologies, learning new tools, and discovering
      better ways to approach development.
    </p>

    <p>
      Beyond programming, I enjoy listening to music and
      playing games. I'm always curious about what can be
      built with technology, and I look forward to expanding
      my skills, taking on more challenging projects, and
      eventually creating products that make a meaningful
      difference in people's everyday lives.
    </p>
  </div>

  <div className="border-l-2 border-primary pl-5 py-1">
    <p className="font-mono text-sm text-foreground">
      "Stay curious. Keep building."
    </p>
    <p className="mt-2 text-xs text-muted">
      — My approach to development
    </p>
  </div>
</div>


          {/* Developer profile editor */}
          <div className="overflow-hidden rounded-xl border border-border bg-[#0E0E14] shadow-2xl shadow-black/20">
            {/* Editor header */}
            <div className="flex items-center justify-between border-b border-border bg-surface px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-muted">
                <Code2 size={14} />
                profile.ts
              </div>

              <span className="font-mono text-xs text-primary">
                TS
              </span>
            </div>

            {/* Editor tab */}
            <div className="border-b border-border px-5 py-3">
              <div className="inline-flex items-center gap-2 border-b-2 border-primary pb-2 font-mono text-xs text-foreground">
                <span className="text-secondary">{"</>"}</span>
                profile.ts
              </div>
            </div>

            {/* Code */}
            <div className="overflow-x-auto p-5 font-mono text-xs leading-8 sm:p-7 sm:text-sm">
              <div className="min-w-[310px]">
                <p>
                  <span className="text-secondary">const</span>{" "}
                  <span className="text-primary">developer</span>{" "}
                  <span className="text-muted">=</span>{" "}
                  <span className="text-muted">{"{"}</span>
                </p>

                {profile.map((item) => (
                  <div
                    key={item.key}
                    className="grid grid-cols-[24px_110px_12px_1fr] items-start"
                  >
                    <span className="text-muted/40">
                      ·
                    </span>

                    <span className="text-secondary">
                      {item.key}
                    </span>

                    <span className="text-muted">:</span>

                    <span className="break-words text-primary">
                      {Array.isArray(item.value)
                        ? `[${item.value.map((v) => `"${v}"`).join(", ")}]`
                        : `"${item.value}"`}
                      ,
                    </span>
                  </div>
                ))}

                <p className="text-muted">{"};"}</p>

                <div className="mt-8 border-t border-border pt-5">
                  <p className="text-muted">
                    <span className="text-secondary">export</span>{" "}
                    <span className="text-secondary">default</span>{" "}
                    <span className="text-primary">developer</span>;
                  </p>
                </div>
              </div>
            </div>

            {/* Editor footer */}
            <div className="flex items-center justify-between border-t border-border bg-surface px-5 py-3">
              <span className="font-mono text-[10px] text-muted">
                UTF-8 · TypeScript
              </span>

              <span className="font-mono text-[10px] text-[#28C840]">
                ● All systems normal
              </span>
            </div>
          </div>
        </div>

        {/* Areas of interest */}
        <div className="mt-24">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="font-mono text-xs text-secondary">
                02 / WHAT I DO
              </p>
              <h3 className="mt-3 text-2xl font-bold">
                Areas of interest<span className="text-primary">.</span>
              </h3>
            </div>

            <span className="hidden font-mono text-xs text-muted sm:block">
              // MY DEVELOPMENT WORLD
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {interests.map((interest) => {
              const Icon = interest.icon;

              return (
                <div
                  key={interest.tag}
                  className="group rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-hover"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 text-primary">
                      <Icon size={20} />
                    </div>

                    <span className="font-mono text-xs text-muted">
                      {interest.tag}
                    </span>
                  </div>

                  <h4 className="mt-6 text-lg font-semibold">
                    {interest.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {interest.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 font-mono text-xs text-primary opacity-70 transition-opacity group-hover:opacity-100">
                    Explore area
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
