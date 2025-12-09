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
    <section className="py-20 md:py-32 bg-neutral-50">
      <div className="max-w-shell mx-auto px-4 md:px-8">
        <Reveal>
          <div className="relative border-4 border-black bg-white p-8 md:p-12">
            <div className="absolute -top-4 left-8 bg-signal px-4 py-1">
              <span className="font-mono text-xs uppercase tracking-widest text-white">
                Our Guarantee
              </span>
            </div>

            <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
              <div className="flex-shrink-0">
                <div className="flex h-20 w-20 items-center justify-center border-4 border-black bg-signal text-white">
                  <svg
                    className="h-10 w-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex-1">
                <h2 className="mb-4 font-display text-2xl font-bold md:text-3xl">
                  {guarantee}
                </h2>

                {stipulations.length > 0 && (
                  <div className="mt-6 border-t border-black/10 pt-6">
                    <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-neutral-500">
                      Stipulations
                    </h4>
                    <ul className="space-y-3">
                      {stipulations.map((stipulation, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 flex-shrink-0 bg-signal" />
                          <span className="text-sm text-neutral-600">
                            {stipulation}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
