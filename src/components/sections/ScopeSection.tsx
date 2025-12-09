"use client";

import { Reveal } from "@/components/common/Reveal";

interface ScopeSectionProps {
  includes: string[];
  excludes: string[];
}

export function ScopeSection({ includes, excludes }: ScopeSectionProps) {
  return (
    <section className="mb-20 w-full max-w-7xl mx-auto px-6 md:mb-32">
      <Reveal className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="border-l-2 border-signal pl-6">
          <h2 className="mb-2 font-display text-4xl font-bold uppercase">
            Scope of Work
          </h2>
          <p className="font-mono text-sm uppercase text-neutral-500">
            What&apos;s included and what&apos;s outside this engagement.
          </p>
        </div>
      </Reveal>

      <Reveal className="grid gap-px border border-black bg-black md:grid-cols-2">
        {/* In Scope */}
        <div className="bg-white">
          <div className="flex items-center gap-3 border-b border-black bg-black px-6 py-4">
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
            <h3 className="font-display text-lg font-bold uppercase text-white">
              In Scope
            </h3>
            <span className="ml-auto font-mono text-[10px] uppercase text-signal">
              {includes.length} Items
            </span>
          </div>

          <ul className="p-6 space-y-4">
            {includes.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-signal" />
                <span className="font-mono text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Out of Scope */}
        <div className="bg-neutral-50">
          <div className="flex items-center gap-3 border-b border-black bg-neutral-200 px-6 py-4">
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
            <h3 className="font-display text-lg font-bold uppercase text-neutral-600">
              Out of Scope
            </h3>
            <span className="ml-auto font-mono text-[10px] uppercase text-neutral-500">
              {excludes.length} Items
            </span>
          </div>

          <ul className="p-6 space-y-4">
            {excludes.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-neutral-400" />
                <span className="font-mono text-sm text-neutral-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
