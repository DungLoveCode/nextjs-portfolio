import { ArrowUpRight } from "lucide-react"

export default function Navbar() {
    return (
    <header className="fixed top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#"
          className="font-mono text-lg font-bold"
          aria-label="Dung - Home"
        >
          <span className="text-primary">{"<"}</span>
          Dung
          <span className="text-primary">{" />"}</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {[
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Education", "#education"],
            ["Activities", "#extracurricular"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="font-mono text-xs text-muted transition-colors hover:text-primary"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-md border border-primary/40 px-4 py-2 font-mono text-xs text-primary transition-all hover:bg-primary hover:text-background"
        >
          Let's talk <ArrowUpRight className="ml-1 inline h-3 w-3" />
        </a>
      </nav>
    </header>
    )
}
