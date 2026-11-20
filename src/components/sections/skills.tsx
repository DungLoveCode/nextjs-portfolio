import {
  Code2,
  Layout,
  Server,
  Terminal,
  Layers3,
} from "lucide-react";

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiDjango,
  SiNextdotjs,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    description: "Languages I use to write and structure applications.",
    icon: Code2,
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    title: "Frontend Development",
    description: "Technologies I use to create responsive user interfaces.",
    icon: Layout,
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
    ],
  },
  {
    title: "Backend Development",
    description: "Frameworks I use to build application logic and backend systems.",
    icon: Server,
    skills: [
      { name: "Django", icon: SiDjango, color: "#44B78B" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000", darkLogo: true },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">

        {/* Section heading */}
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-primary/30 bg-primary/5 font-mono text-xs text-primary">
              02
            </span>

            <span className="font-mono text-xs tracking-wider text-muted">
              SKILLS & TECHNOLOGIES
            </span>

            <span className="h-px flex-1 bg-border" />

            <span className="hidden font-mono text-[10px] text-muted sm:block">
              EXPERTISE
            </span>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Tools I use to bring{" "}
                <span className="text-primary">ideas to life.</span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                A collection of programming languages and technologies
                I use to explore ideas and build web applications.
              </p>
            </div>

            <span className="font-mono text-xs text-muted">
              $ ls tech-stack/
            </span>
          </div>
        </div>

        {/* Skill categories */}
        <div className="grid gap-5 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-white/[0.04]"
              >
                {/* Decorative index */}
                <span className="absolute right-5 top-5 font-mono text-xs text-zinc-700">
                  0{index + 1}
                </span>

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-lime-400/20 bg-lime-400/5 text-lime-400 transition-colors group-hover:bg-lime-400/10">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-400">
                  {category.description}
                </p>

                <div className="my-6 h-px bg-white/10" />

                {/* Technology logos */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-xs text-zinc-300 transition-all hover:border-white/20 hover:bg-white/[0.06]"
                      >
                        <span
                          className={`flex items-center justify-center ${
                            skill.darkLogo
                              ? "rounded-sm bg-white p-0.5"
                              : ""
                          }`}
                        >
                          <SkillIcon
                            size={16}
                            style={{ color: skill.color }}
                            aria-hidden="true"
                          />
                        </span>

                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Development mindset */}
        <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0c]">
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
            <Terminal size={15} className="text-lime-400" />
            <span className="font-mono text-xs text-zinc-400">
              development-mindset.ts
            </span>
          </div>

          <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs text-purple-400">
                const mindset =
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                Always learning. Always building.
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                I enjoy exploring unfamiliar technologies, experimenting
                with new tools, and improving through practical projects.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 rounded-lg border border-lime-400/20 bg-lime-400/5 px-4 py-3">
              <Layers3 size={18} className="text-lime-400" />
              <span className="font-mono text-sm text-lime-400">
                Learn → Build → Improve
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
