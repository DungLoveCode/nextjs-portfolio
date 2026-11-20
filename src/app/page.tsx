import Hero from "@/components/sections/hero";
import About from "@/components/sections/about"
import Skill from "@/components/sections/skills"
import Projects from "@/components/sections/projects"

const sections = [
  //{
  //  id: "about",
  //  command: "$ cat about.md",
  //  title: "About Me",
  //},
  //{
  //  id: "skills",
  //  command: "$ ls skills/",
  //  title: "Skills & Technologies",
  //},
  //{
  //  id: "projects",
  //  command: "$ ls projects/",
  //  title: "Featured Projects",
  //},
  {
    id: "education",
    command: "$ cat education.md",
    title: "Education",
  },
  {
    id: "contact",
    command: "$ ./contact.sh",
    title: "Let's Connect",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Hero id="hero"/>
      <About id="about"/>
      <Skill id="skills"/>
      <Projects id ="projects" />
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="min-h-[300px] border-t border-border px-6 py-24"
        >
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-sm text-primary">
              {section.command}
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              {section.title}
            </h2>

            <p className="mt-4 text-muted">
              Coming soon...
            </p>
          </div>
        </section>
      ))}
    </main>
  );
}
