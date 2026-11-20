import Image from "next/image";
import {
  ArrowUpRight,
  Code2,
  Gamepad2,
  Lightbulb,
  Music2,
  Terminal,
} from "lucide-react";

const interests = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building useful websites and full-stack applications that solve practical problems.",
  },
  {
    icon: Lightbulb,
    title: "Exploring Technology",
    description:
      "Experimenting with new technologies, discovering tools, and finding better ways to build things.",
  },
  {
    icon: Music2,
    title: "Music",
    description:
      "Listening to music, discovering new sounds, and finding inspiration beyond programming.",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description:
      "Exploring different worlds and enjoying interactive gaming experiences.",
  },
];

const techStack = [
  {
    category: "languages",
    items: ["Python", "JavaScript", "TypeScript"],
  },
  {
    category: "frontend",
    items: ["React.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "backend",
    items: ["Django", "Next.js"],
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        
{/* Section heading */}
<div className="mb-14">
  <div className="mb-5 flex items-center gap-3">
    <span className="flex h-7 w-7 items-center justify-center rounded-md border border-primary/30 bg-primary/5 font-mono text-xs text-primary">
      01
    </span>

    <span className="font-mono text-xs tracking-wider text-muted">
      ABOUT ME
    </span>

    <span className="h-px flex-1 bg-border" />

    <span className="hidden font-mono text-[10px] text-muted sm:block">
      PROFILE
    </span>
  </div>

  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
    A little more{" "}
    <span className="text-primary">about me.</span>
  </h2>

  <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
    Beyond the code, here's a little more about who I am,
    what I do, and what drives me.
  </p>
</div>


        {/* Main profile layout */}
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Profile photo */}
          <div className="mx-auto w-full max-w-md lg:mx-0">
            <div className="group relative">
              {/* Decorative border */}
              <div className="absolute -inset-2 rounded-2xl border border-lime-400/20 transition-colors duration-300 group-hover:border-lime-400/50" />

              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
                <Image
                  src="/images/profile.jpg"
                  alt="Luong Tuan Dung profile picture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Name on photo */}
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="font-mono text-xs text-lime-400">
                    // developer.profile
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Luong Tuan Dung
                  </h3>
                  <p className="mt-1 text-sm text-zinc-300">
                    Full-stack Developer
                  </p>
                </div>
              </div>
            </div>

            {/* Profile status */}
            <div className="mt-6 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.7)]" />
                <span className="text-sm text-zinc-300">Always learning</span>
              </div>
              <span className="font-mono text-xs text-zinc-500">
                Vinh, Vietnam
              </span>
            </div>
          </div>

          {/* Biography and tech stack */}
          <div className="space-y-8">
            <div>
              <p className="mb-5 font-mono text-sm text-lime-400">
                &gt; whoami
              </p>

              <h3 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Turning curiosity into{" "}
                <span className="text-lime-400">real-world applications.</span>
              </h3>

              <div className="mt-7 space-y-5 text-base leading-8 text-zinc-400">
                <p>
                  I began exploring programming at the start of secondary
                  school. What started as curiosity gradually developed into a
                  passion for creating websites and applications. I was
                  fascinated by how code could turn an idea into something
                  interactive and functional.
                </p>

                <p>
                  As I explored JavaScript and web development, I became
                  increasingly interested in building full-stack applications. I
                  enjoy working across the development process, from creating
                  user interfaces to developing backend systems.
                </p>

                <p>
                  I am particularly interested in practical projects such as
                  e-commerce platforms, blogging systems, and other applications
                  that address real-world needs. I also enjoy experimenting with
                  different technologies and discovering new tools that can
                  improve the way I build things.
                </p>
              </div>
            </div>

            {/* Tech stack terminal */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0c]">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <Terminal size={15} className="text-lime-400" />
                  <span className="font-mono text-xs text-zinc-400">
                    tech-stack.ts
                  </span>
                </div>

                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                  <span className="h-2 w-2 rounded-full bg-lime-400/70" />
                </div>
              </div>

              <div className="divide-y divide-white/5 p-5 font-mono text-xs sm:text-sm">
  {techStack.map((stack) => (
    <div
      key={stack.category}
      className="grid gap-2 py-3 first:pt-0 last:pb-0 sm:grid-cols-[110px_1fr]"
    >
      <span className="text-purple-400">
        {stack.category}:
      </span>

      <span className="leading-6 text-zinc-300">
        {stack.items.join(" · ")}
      </span>
    </div>
  ))}
</div>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="mt-24">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="font-mono text-xs text-secondary">
                $ ls interests/
              </p>
              <h3 className="text-2xl font-semibold text-white">
                Things I enjoy
              </h3>
            </div>

            <ArrowUpRight
              size={22}
              className="text-zinc-500"
              aria-hidden="true"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {interests.map((interest) => {
              const Icon = interest.icon;

              return (
                <div
                  key={interest.title}
                  className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-white/[0.04]"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-lime-400/20 bg-lime-400/5 text-lime-400 transition-colors group-hover:bg-lime-400/10">
                    <Icon size={21} />
                  </div>

                  <h4 className="mb-2 font-semibold text-white">
                    {interest.title}
                  </h4>

                  <p className="text-sm leading-6 text-zinc-400">
                    {interest.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
