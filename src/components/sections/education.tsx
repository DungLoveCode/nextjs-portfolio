import {
  GraduationCap,
  School,
  BookOpen,
  ExternalLink,
  Award,
} from "lucide-react";

const education = [
  {
    institution: "Nisai Global School",
    period: "2021 – 2024",
    description: "Studied at Nisai Global School.",
    icon: School,
  },
  {
    institution: "THPT Con Cuông",
    period: "2024",
    description: "Continued my education at THPT Con Cuông.",
    icon: School,
  },
  {
    institution: "Hexagon",
    period: "2024 – 2026",
    description:
      "Studied the Cambridge International A-Level programme at Hexagon.",
    icon: GraduationCap,
    link: "https://www.facebook.com/hexagonedu",
  },
];

const subjects = [
  { name: "Mathematics", grade: "—" },
  { name: "Chemistry", grade: "—" },
  { name: "Physics", grade: "A* — 94%" },
  { name: "Computer Science", grade: "—" },
];

const achievements = [
  {
    title: "The Kindness Scholarship",
    award: "British Consul General's Scholarship",
    institution: "Nisai Global School",
    year: "2022",
    description:
      "Received The Kindness Scholarship during my studies at Nisai Global School.",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-primary/30 bg-primary/5 font-mono text-xs text-primary">
              04
            </span>
            <span className="font-mono text-xs tracking-wider text-muted">
              EDUCATION
            </span>
            <span className="h-px flex-1 bg-border" />
            <span className="hidden font-mono text-[10px] text-muted sm:block">
              ACADEMIC JOURNEY
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My learning <span className="text-primary">journey.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
            A timeline of my academic journey, from secondary school
            to completing my Cambridge International A Levels.
          </p>
        </div>

        {/* Education timeline */}
        <div className="relative">
          <div className="absolute bottom-8 left-[19px] top-8 w-px bg-border" />

          <div className="space-y-6">
            {education.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.institution} className="relative flex gap-6">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-background text-primary">
                    <Icon size={18} />
                  </div>

                  <div className="flex-1 rounded-xl border border-border bg-surface/50 p-5 transition-colors hover:border-primary/30 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.institution}
                      </h3>

                      <span className="rounded-md border border-border bg-background px-3 py-1 font-mono text-xs text-primary">
                        {item.period}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-muted">
                      {item.description}
                    </p>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-primary transition-colors hover:text-primary/70"
                      >
                        Visit Hexagon
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cambridge International A-Level qualification */}
        <div className="mt-16 overflow-hidden rounded-xl border border-primary/20 bg-primary/[0.03]">
          <div className="border-b border-border px-5 py-5 sm:px-7">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <GraduationCap size={21} />
                </div>

                <div>
                  <p className="font-mono text-xs text-primary">
                    // academic.qualification
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">
                    Cambridge International A Levels
                  </h3>
                </div>
              </div>

              <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                Graduated · 2026
              </span>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
              Completed the Cambridge International A-Level
              programme at Hexagon, studying four subjects across
              mathematics, sciences, and computer science.
            </p>
          </div>

          {/* Subjects and grades */}
          <div className="p-5 sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="font-mono text-xs text-muted">
                  $ cat a-level-results.json
                </p>
                <h4 className="mt-2 font-semibold text-foreground">
                  Subjects & Grades
                </h4>
              </div>

              <BookOpen size={19} className="text-primary" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {subjects.map((subject, index) => (
                <div
                  key={subject.name}
                  className="flex items-center justify-between gap-4 rounded-lg border border-border bg-background/60 p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {subject.name}
                    </span>
                  </div>

                  <span className="rounded-md border border-dashed border-border px-3 py-1 font-mono text-xs text-muted">
                    Grade: <span className="text-primary">{subject.grade}</span>
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 font-mono text-[11px] text-muted">
              // Grades will be updated when available.
            </p>
          </div>
        </div>

        {/* Academic achievements */}
        <div className="mt-16">
          <div className="mb-8">
            <p className="font-mono text-xs text-secondary">
              $ ls achievements/
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-foreground">
              Major <span className="text-primary">Achievements.</span>
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
              Recognition and milestones earned throughout my academic journey.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="group rounded-xl border border-border bg-surface/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <Award size={21} />
                  </div>

                  <span className="rounded-md border border-border bg-background px-3 py-1 font-mono text-xs text-primary">
                    {achievement.year}
                  </span>
                </div>

                <p className="mb-2 font-mono text-xs text-primary">
                  {achievement.award}
                </p>

                <h4 className="text-lg font-semibold text-foreground">
                  {achievement.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {achievement.description}
                </p>

                <div className="mt-5 border-t border-border pt-4">
                  <p className="font-mono text-xs text-muted">
                    {achievement.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
