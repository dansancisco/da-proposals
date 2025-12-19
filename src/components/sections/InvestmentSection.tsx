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
}

function formatCurrency(num: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(num);
}

export function InvestmentSection({ phases }: InvestmentSectionProps) {
  // Calculate grand total across all phases
  const grandTotal = phases.reduce(
    (total, phase) => total + phase.items.reduce((s, item) => s + item.amount, 0),
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

        <div className="border border-white/20">
          <div className="grid gap-px bg-white/20 md:grid-cols-2">
            {phases.map((phase, phaseIndex) => (
              <Reveal key={phase.name} delay={phaseIndex * 100}>
                <div className="flex h-full flex-col bg-black">
                  <div className="border-b border-white/20 bg-white/10 px-6 py-4">
                    <h3 className="font-display text-lg font-bold uppercase text-white">
                      {phase.name}
                    </h3>
                  </div>

                  <div className="flex-1 bg-white/10 p-6 space-y-4">
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
                </div>
              </Reveal>
            ))}
          </div>

          {/* Combined Subtotal Bar */}
          <Reveal>
            <div className="bg-signal px-6 py-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/80">
                  Total Monthly Investment
                </span>
                <span className="font-display text-xl font-bold text-white">
                  {formatCurrency(grandTotal)}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
