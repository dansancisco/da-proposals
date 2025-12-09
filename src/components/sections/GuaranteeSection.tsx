"use client";

import { Reveal } from "@/components/common/Reveal";

interface GuaranteeSectionProps {
  guarantee: string;
  stipulations: string[];
}

export function GuaranteeSection({
  guarantee,
  stipulations,
}: GuaranteeSectionProps) {
  return (
    <section className="mb-20 mt-20 w-full max-w-7xl mx-auto px-6 md:mb-32 md:mt-32">
      <Reveal className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="border-l-2 border-signal pl-6">
          <h2 className="mb-2 font-display text-4xl font-bold uppercase">
            Our Guarantee
          </h2>
          <p className="font-mono text-sm uppercase text-neutral-500">
            We stand behind our work.
          </p>
        </div>
        <div className="hidden items-center gap-2 border border-black px-3 py-1 font-mono text-[10px] uppercase md:flex">
          <div className="h-2 w-2 bg-signal" />
          Protected
        </div>
      </Reveal>

      <Reveal className="border border-black bg-white">
        <div className="grid md:grid-cols-12">
          {/* Icon Column */}
          <div className="flex items-center justify-center border-b border-black bg-signal p-8 md:col-span-3 md:border-b-0 md:border-r">
            <div className="flex h-24 w-24 items-center justify-center border-4 border-white text-white">
              <svg
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="square"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
          </div>

          {/* Content Column */}
          <div className="p-8 md:col-span-9 md:p-12">
            <h3 className="mb-6 font-display text-2xl font-bold uppercase md:text-3xl">
              {guarantee}
            </h3>

            {stipulations.length > 0 && (
              <div className="border-t border-black pt-6">
                <h4 className="mb-4 font-mono text-[10px] uppercase text-neutral-500">
                  Stipulations
                </h4>
                <ul className="grid gap-3 md:grid-cols-2">
                  {stipulations.map((stipulation, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-signal" />
                      <span className="font-mono text-sm text-neutral-600">
                        {stipulation}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Footer Bar */}
        <div className="flex items-center justify-between border-t border-black bg-black px-4 py-2 font-mono text-[10px] uppercase text-white">
          <div>Guarantee Status</div>
          <div className="text-signal">Active</div>
        </div>
      </Reveal>
    </section>
  );
}
