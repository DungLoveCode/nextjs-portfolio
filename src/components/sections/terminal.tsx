"use client";

import { useEffect, useState } from "react";

const commands = [
  {
    command: "whoami",
    output: "Luong Tuan Dung — Full-stack Developer",
  },
  {
    command: "ls skills/",
    output: "Python  Django  JavaScript  HTML  CSS",
  },
];

export default function Terminal() {
  const [commandIndex, setCommandIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timeout: ReturnType<typeof setTimeout>;

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        timeout = setTimeout(resolve, ms);
      });

    const runTerminal = async () => {
      let index = 0;

      while (!cancelled) {
        const current = commands[index];

        setTypedCommand("");
        setShowOutput(false);

        for (let i = 0; i < current.command.length; i++) {
          if (cancelled) return;

          setTypedCommand(current.command.slice(0, i + 1));
          await sleep(65);
        }

        if (cancelled) return;

        await sleep(350);
        if (cancelled) return;

        setShowOutput(true);

        await sleep(1800);
        if (cancelled) return;

        index = (index + 1) % commands.length;
        setCommandIndex(index);
      }
    };

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      setCommandIndex(0);
      setTypedCommand(commands[0].command);
      setShowOutput(true);
    } else {
      runTerminal();
    }

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, []);

  const currentCommand = commands[commandIndex];

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-[#0E0E14] shadow-2xl shadow-black/40">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-border bg-surface px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>

        <span className="font-mono text-xs text-muted">
          dung@portfolio: ~
        </span>

        <span className="font-mono text-xs text-muted">
          ⌘
        </span>
      </div>

      {/* Terminal body */}
      <div className="min-h-[390px] space-y-7 p-6 font-mono text-xs leading-7 sm:p-8 sm:text-sm">
        <div>
          <p className="text-primary">
            ~/portfolio $ cat about.json
          </p>

          <div className="mt-2 text-muted">
            {"{"}
            <div className="pl-5">
              <p>
                <span className="text-secondary">"name"</span>:{" "}
                <span className="text-primary">
                  "Luong Tuan Dung"
                </span>,
              </p>
              <p>
                <span className="text-secondary">"role"</span>:{" "}
                <span className="text-primary">
                  "Full-stack Developer"
                </span>,
              </p>
              <p>
                <span className="text-secondary">"education"</span>:{" "}
                <span className="text-primary">
                  "A Level Graduate"
                </span>,
              </p>
              <p>
                <span className="text-secondary">"passion"</span>:{" "}
                <span className="text-primary">
                  "Building things"
                </span>
              </p>
            </div>
            {"}"}
          </div>
        </div>

        {/* Animated command */}
        <div aria-live="polite">
          <p className="text-primary">
            ~/portfolio $ {typedCommand}
            {!showOutput && (
              <span className="terminal-cursor" />
            )}
          </p>

          <div className="min-h-8 pt-1 text-[#28C840]">
            {showOutput && (
              <p className="animate-fade-up">
                {currentCommand.output}
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <p className="text-muted">
            <span className="text-primary">➜</span>{" "}
            Always learning. Always building.
            <span className="terminal-cursor" />
          </p>
        </div>
      </div>
    </div>
  );
}
