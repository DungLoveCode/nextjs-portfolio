"use client"
import Link from "next/link";
import { ArrowLeft, Home, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 py-24">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
        {/* Terminal label */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-mono text-xs text-muted">
          <Terminal size={14} className="text-primary" />
          <span>system.error / page_not_found</span>
        </div>

        {/* Error code */}
        <h1 className="font-mono text-[clamp(7rem,20vw,13rem)] font-bold leading-none tracking-tighter text-primary">
          404
        </h1>

        <div className="mt-6 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Looks like you're lost in the code.
          </h2>

          <p className="mx-auto max-w-md text-sm leading-7 text-muted sm:text-base">
            The page you're looking for doesn't exist, has been moved,
            or might have never existed in the first place.
          </p>
        </div>

        {/* Terminal message */}
        <div className="mx-auto mt-10 max-w-md rounded-xl border border-border bg-card/70 p-4 text-left font-mono text-xs sm:text-sm">
          <div className="mb-3 flex items-center gap-2 border-b border-border pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            <span className="ml-2 text-muted">terminal</span>
          </div>

          <p className="text-muted">
            <span className="text-primary">➜</span> portfolio
          </p>
          <p className="mt-2 text-red-400">
            Error 404: Resource not found.
          </p>
          <p className="mt-2 text-muted">
            <span className="text-primary">➜</span>{" "}
            <span className="animate-pulse">_</span>
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-mono text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
          >
            <Home size={16} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 font-mono text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>

        <p className="mt-12 font-mono text-[10px] tracking-widest text-muted">
          END OF EXECUTION
        </p>
      </div>
    </main>
  );
}
