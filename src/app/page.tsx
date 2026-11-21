import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about"
import Skill from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Education from "@/components/sections/education";
import Extracurricular from "@/components/sections/extracurricular";
import Contact from "@/components/sections/contact";



export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Education />
      <Extracurricular />
      <Contact />
    </main>
  );
}
