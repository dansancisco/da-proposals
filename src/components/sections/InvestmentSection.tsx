"use client";

import { Reveal } from "@/components/common/Reveal";

interface InvestmentPhase {
  name: string;
  items: {
    label: string;
    amount: number;
  }[];
}

interface InvestmentSectionProps {
  phases: InvestmentPhase[];
  ctaHref?: string;
}

function formatCurrency(num: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(num);
}

export function InvestmentSection({ phases, ctaHref }: InvestmentSectionProps) {
  const totalInvestment = phases.reduce(
    (sum, phase) => sum + phase.items.reduce((s, item) => s + item.amount, 0),
    0
  );

  return (
    <section id="investment" className="w-full bg-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="border-l-2 border-signal pl-6">
            <h2 className="mb-2 font-display text-4xl font-bold uppercase text-white">
              Investment
            </h2>
            <p className="font-mono text-sm uppercase text-neutral-500">
              Your investment breakdown.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-px border border-white/20 bg-white/20 md:grid-cols-3">
          {phases.map((phase, phaseIndex) => {
            const phaseTotal = phase.items.reduce((s, item) => s + item.amount, 0);

            return (
              <Reveal key={phase.name} delay={phaseIndex * 100}>
                <div className="flex h-full flex-col bg-black">
                  <div className="border-b border-white/20 bg-white/10 px-6 py-4">
                    <span className="font-mono text-[10px] uppercase text-neutral-500">
                      Phase {String(phaseIndex + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-lg font-bold uppercase text-white">
                      {phase.name}
                    </h3>
                  </div>

                  <div className="flex-1 p-6 space-y-4">
                    {phase.items.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0"
                      >
                        <span className="font-mono text-xs text-neutral-400">
                          {item.label}
                        </span>
                        <span className="font-display text-lg font-bold text-white">
                          {formatCurrency(item.amount)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/20 bg-signal px-6 py-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-white/80">
                        Subtotal
                      </span>
                      <span className="font-display text-xl font-bold text-white">
                        {formatCurrency(phaseTotal)}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={phases.length * 100 + 100}>
          <div className="mt-8 border border-signal bg-signal/10 p-6 md:p-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                  Total Investment
                </span>
                <span className="font-display text-5xl font-bold text-signal md:text-6xl">
                  {formatCurrency(totalInvestment)}
                </span>
              </div>

              {ctaHref && (
                <a
                  href={ctaHref}
                  className="inline-flex items-center gap-4 bg-signal px-10 py-4 font-mono text-xs uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-black"
                >
                  <span>Accept Proposal</span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
