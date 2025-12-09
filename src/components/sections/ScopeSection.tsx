"use client";

import { Reveal } from "@/components/common/Reveal";

interface ScopeSectionProps {
  includes: string[];
  excludes: string[];
}

export function ScopeSection({ includes, excludes }: ScopeSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-shell mx-auto px-4 md:px-8">
        <Reveal className="mb-12">
          <div className="border-l-4 border-signal pl-6">
            <h2 className="mb-2 font-display text-3xl md:text-4xl font-bold">
              Scope of Work
            </h2>
            <p className="font-mono text-sm text-neutral-500">
              What&apos;s included and what&apos;s outside this engagement.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal delay={100}>
            <div className="h-full border-2 border-black bg-white">
              <div className="flex items-center gap-3 border-b-2 border-black bg-black px-6 py-4">
                <div className="flex h-8 w-8 items-center justify-center bg-signal text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-white">
                  In Scope
                </h3>
              </div>

              <ul className="p-6 space-y-4">
                {includes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-signal" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="h-full border-2 border-neutral-300 bg-neutral-50">
              <div className="flex items-center gap-3 border-b-2 border-neutral-300 bg-neutral-200 px-6 py-4">
                <div className="flex h-8 w-8 items-center justify-center bg-neutral-400 text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-neutral-600">
                  Out of Scope
                </h3>
              </div>

              <ul className="p-6 space-y-4">
                {excludes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-neutral-400" />
                    <span className="text-sm text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
