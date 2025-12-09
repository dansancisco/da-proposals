import { Reveal } from "@/components/common/Reveal";

interface SolutionSectionProps {
  overview: string;
  campaigns: {
    name: string;
    description: string;
  }[];
}

export function SolutionSection({ overview, campaigns }: SolutionSectionProps) {
  return (
    <section className="mb-20 w-full max-w-7xl mx-auto px-6 md:mb-32">
      <Reveal className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="border-l-2 border-signal pl-6">
          <h2 className="mb-2 font-display text-4xl font-bold uppercase">
            The Solution
          </h2>
          <p className="font-mono text-sm uppercase text-neutral-500">
            How we&apos;ll solve this for you.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <div className="border border-black bg-white p-6 md:p-8">
            <div className="mb-6">
              <span className="border border-black px-2 py-0.5 font-mono text-[10px] uppercase">
                Overview
              </span>
            </div>
            <p className="font-mono text-sm leading-relaxed text-neutral-700">
              {overview}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100} className="md:col-span-1">
          <div className="border border-black bg-black p-6 md:p-8 h-full">
            <div className="mb-6">
              <span className="border border-signal px-2 py-0.5 font-mono text-[10px] uppercase text-signal">
                Campaigns
              </span>
            </div>
            <div className="space-y-4">
              {campaigns.map((campaign, index) => (
                <div key={index} className="border-b border-white/20 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-lg font-bold text-signal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display font-bold uppercase text-white mb-1">
                        {campaign.name}
                      </h3>
                      <p className="font-mono text-xs leading-relaxed text-neutral-400">
                        {campaign.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
