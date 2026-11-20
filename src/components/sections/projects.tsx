import Image from "next/image"

import {
  ArrowUpRight,
  Terminal,
  BookOpen,
  ShoppingBag,
  Newspaper,
} from "lucide-react";

import {
  SiPython,
  SiDjango,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiMarkdown,
  SiGithub,
} from "react-icons/si";

const projects = [
  {
    number: "01",
    title: "DungShip",
    subtitle: "Developer Content Platform",
    description:
      "A developer-focused content platform inspired by Fireship, built for publishing programming tutorials, course introductions, and technical guides. It supports Markdown-based content creation, user authentication, and user management, with content and account information stored in a database.",
    features: [
      "Markdown-based article publishing",
      "User authentication and management",
      "Database-backed content storage",
    ],
    image: "dungship",
    featured: true,
    github: "https://github.com/DungLoveCode/django-dungship",
    technologies: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Django", icon: SiDjango, color: "#44B78B" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "Markdown", icon: SiMarkdown, color: "#FFFFFF" },
    ],
  },
  {
    number: "02",
    title: "Personal Blog",
    subtitle: "Personal Blogging Platform",
    description:
      "A personal blogging website created to share everyday experiences, memorable moments, and stories with others. It allows posts to contain both written content and images, with post information stored in a database.",
    features: [
      "Create and publish blog posts",
      "Attach images to posts",
      "Database-backed post storage",
    ],
    image: "blog",
    featured: false,
    github: "https://github.com/DungLoveCode/Django_original_blog",
    technologies: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Django", icon: SiDjango, color: "#44B78B" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
    ],
  },
  {
    number: "03",
    title: "E-shopping Website",
    subtitle: "E-commerce Platform",
    description:
      "An online shopping platform where suppliers can publish products along with their descriptions and details. The project includes user authentication and management, providing a foundation for managing product listings.",
    features: [
      "Supplier product listings",
      "Product details and descriptions",
      "User authentication and management",
    ],
    image: "eshopping",
    featured: false,
    github:
      "https://github.com/DungLoveCode/Django_original_shopping_website",
    technologies: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Django", icon: SiDjango, color: "#44B78B" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
    ],
  },
];

//function ProjectPreview({
//  variant,
//}: {
//  variant: string;
//}) {
//  return (
//    <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-[#111113]">
//      {/* Browser header */}
//      <div className="flex h-8 items-center gap-2 border-b border-white/10 bg-[#19191c] px-3 sm:h-9">
//        <div className="flex gap-1.5">
//          <span className="h-2 w-2 rounded-full bg-red-400/70" />
//          <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
//          <span className="h-2 w-2 rounded-full bg-green-400/70" />
//        </div>
//
//        <div className="mx-auto flex h-5 w-2/3 items-center justify-center rounded bg-black/30 px-2">
//          <span className="truncate font-mono text-[8px] text-zinc-500 sm:text-[10px]">
//            {variant === "dungship"
//              ? "dungship.dev"
//              : variant === "blog"
//                ? "personal-blog.com"
//                : "eshopping.com"}
//          </span>
//        </div>
//      </div>
//
//      {/* Preview content */}
//      <div className="h-full p-3 sm:p-5">
//        {variant === "dungship" && (
//          <div className="h-full">
//            <div className="flex items-center justify-between">
//              <span className="font-mono text-[10px] font-bold text-lime-400 sm:text-sm">
//                {"<"} DungShip {" />"}
//              </span>
//              <div className="flex gap-2">
//                <span className="h-2 w-8 rounded bg-white/10 sm:w-12" />
//                <span className="h-2 w-8 rounded bg-white/10 sm:w-12" />
//                <span className="h-2 w-8 rounded bg-lime-400/50 sm:w-12" />
//              </div>
//            </div>
//
//            <div className="mt-4 grid h-[70%] grid-cols-[1.2fr_0.8fr] gap-3 sm:mt-7">
//              <div className="flex flex-col justify-center">
//                <span className="font-mono text-[7px] text-lime-400 sm:text-[9px]">
//                  DEVELOPER RESOURCES
//                </span>
//                <div className="mt-2 text-sm font-bold text-white sm:text-2xl">
//                  Learn. Build.
//                  <br />
//                  <span className="text-lime-400">Ship faster.</span>
//                </div>
//                <div className="mt-2 h-1 w-4/5 rounded bg-white/10" />
//                <div className="mt-1 h-1 w-3/5 rounded bg-white/10" />
//                <div className="mt-3 w-fit rounded bg-lime-400 px-2 py-1 font-mono text-[7px] text-black sm:text-[9px]">
//                  Explore courses →
//                </div>
//              </div>
//
//              <div className="flex flex-col gap-2">
//                <div className="rounded border border-white/10 bg-white/[0.04] p-2">
//                  <div className="font-mono text-[7px] text-purple-400 sm:text-[9px]">
//                    # Tutorial
//                  </div>
//                  <div className="mt-2 h-1 w-full rounded bg-white/20" />
//                  <div className="mt-1 h-1 w-3/4 rounded bg-white/10" />
//                  <div className="mt-2 h-5 rounded bg-lime-400/10 sm:h-8" />
//                </div>
//                <div className="rounded border border-white/10 bg-white/[0.04] p-2">
//                  <div className="font-mono text-[7px] text-purple-400 sm:text-[9px]">
//                    ## Guide
//                  </div>
//                  <div className="mt-2 h-1 w-full rounded bg-white/20" />
//                  <div className="mt-1 h-1 w-2/3 rounded bg-white/10" />
//                </div>
//              </div>
//            </div>
//          </div>
//        )}
//
//        {variant === "blog" && (
//          <div className="h-full">
//            <div className="flex items-center justify-between">
//              <span className="font-serif text-xs font-bold text-white sm:text-base">
//                my little journal.
//              </span>
//              <div className="flex gap-2">
//                <span className="h-2 w-8 rounded bg-white/10 sm:w-12" />
//                <span className="h-2 w-8 rounded bg-white/10 sm:w-12" />
//              </div>
//            </div>
//
//            <div className="mt-4 grid grid-cols-[1.1fr_0.9fr] gap-3 sm:mt-7">
//              <div className="flex flex-col justify-center">
//                <span className="font-mono text-[7px] text-lime-400 sm:text-[9px]">
//                  PERSONAL STORIES
//                </span>
//                <div className="mt-2 font-serif text-sm font-bold text-white sm:text-2xl">
//                  Moments worth
//                  <br />
//                  remembering.
//                </div>
//                <div className="mt-2 h-1 w-full rounded bg-white/10" />
//                <div className="mt-1 h-1 w-4/5 rounded bg-white/10" />
//                <div className="mt-3 font-mono text-[7px] text-zinc-500 sm:text-[9px]">
//                  READ THE LATEST STORY →
//                </div>
//              </div>
//
//              <div className="grid grid-rows-2 gap-2">
//                <div className="relative overflow-hidden rounded bg-gradient-to-br from-amber-900/60 to-orange-950/40">
//                  <div className="absolute bottom-2 left-2 h-1 w-1/2 rounded bg-white/50" />
//                </div>
//                <div className="relative overflow-hidden rounded bg-gradient-to-br from-emerald-900/60 to-teal-950/40">
//                  <div className="absolute bottom-2 left-2 h-1 w-2/3 rounded bg-white/50" />
//                </div>
//              </div>
//            </div>
//          </div>
//        )}
//
//        {variant === "shopping" && (
//          <div className="h-full">
//            <div className="flex items-center justify-between">
//              <span className="font-mono text-[10px] font-bold text-white sm:text-sm">
//                E<span className="text-lime-400">SHOP</span>
//              </span>
//              <div className="flex gap-2">
//                <span className="h-2 w-8 rounded bg-white/10 sm:w-12" />
//                <span className="h-2 w-8 rounded bg-white/10 sm:w-12" />
//                <ShoppingBag size={12} className="text-zinc-400" />
//              </div>
//            </div>
//
//            <div className="mt-3 sm:mt-5">
//              <div className="text-xs font-bold text-white sm:text-lg">
//                Discover products.
//              </div>
//              <div className="mt-1 h-1 w-2/3 rounded bg-white/10" />
//
//              <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4">
//                {[
//                  "bg-gradient-to-br from-blue-900/70 to-indigo-950",
//                  "bg-gradient-to-br from-amber-800/70 to-orange-950",
//                  "bg-gradient-to-br from-emerald-900/70 to-green-950",
//                ].map((color, index) => (
//                  <div key={index}>
//                    <div className={`flex aspect-[4/3] items-center justify-center rounded ${color}`}>
//                      <ShoppingBag
//                        size={18}
//                        className="text-white/50 sm:size-6"
//                      />
//                    </div>
//                    <div className="mt-2 h-1 w-4/5 rounded bg-white/20" />
//                    <div className="mt-1 h-1 w-1/2 rounded bg-lime-400/50" />
//                  </div>
//                ))}
//              </div>
//            </div>
//          </div>
//        )}
//      </div>
//
//      {/* Placeholder indicator */}
//      <div className="absolute bottom-2 right-2 rounded border border-white/10 bg-black/60 px-2 py-1 font-mono text-[8px] text-zinc-400">
//        PREVIEW PLACEHOLDER
//      </div>
//    </div>
//  );
//}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 py-24 sm:py-32 lg:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Section heading */}
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-primary/30 bg-primary/5 font-mono text-xs text-primary">
              03
            </span>

            <span className="font-mono text-xs tracking-wider text-muted">
              SELECTED PROJECTS
            </span>

            <span className="h-px flex-1 bg-border" />

            <span className="hidden font-mono text-[10px] text-muted sm:block">
              MY WORK
            </span>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Things I've{" "}
                <span className="text-primary">built.</span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                A collection of projects where I've turned ideas
                into functional web applications and explored
                different aspects of development.
              </p>
            </div>

            <span className="font-mono text-xs text-muted">
              $ ls projects/
            </span>
          </div>
        </div>

        {/* Project list */}
        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-lime-400/30 hover:bg-white/[0.035]"
            >
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

                {/* Screenshot*/}
                <div className="border-b border-white/10 p-3 sm:p-5 lg:border-b-0 lg:border-r">
                  <Image src={`/images/projects/${project.image}.png`} alt={`Screenshot of ${project.title}`} width={1200} height={675} className="aspect-video w-full rounded-lg object-cover"/>
                </div>

                {/* Project information */}
                <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-xs text-lime-400">
                      PROJECT_{project.number}
                    </span>

                    {project.featured && (
                      <span className="rounded-full border border-lime-400/20 bg-lime-400/5 px-3 py-1 font-mono text-[10px] text-lime-400">
                        FEATURED
                      </span>
                    )}
                  </div>

                  <p className="mb-2 font-mono text-xs text-zinc-500">
                    {project.subtitle}
                  </p>

                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  {/* Key features */}
                  <div className="mt-5 space-y-2">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2 text-xs text-zinc-400"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-lime-400" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => {
                      const TechIcon = technology.icon;

                      return (
                        <span
                          key={technology.name}
                          title={technology.name}
                          className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-2 font-mono text-[10px] text-zinc-300 transition-colors hover:border-white/20"
                        >
                          <TechIcon
                            size={14}
                            style={{ color: technology.color }}
                          />
                          {technology.name}
                        </span>
                      );
                    })}
                  </div>

                  {/* GitHub link */}
                  <div className="mt-7 border-t border-white/10 pt-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs text-zinc-300 transition-colors hover:text-lime-400"
                    >
                      <SiGithub size={16} />
                      View source code
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex items-center gap-3 font-mono text-xs text-zinc-500">
          <Terminal size={14} className="text-lime-400" />
          <span>More ideas, experiments, and projects are on the way.</span>
        </div>
      </div>
    </section>
  );
}
