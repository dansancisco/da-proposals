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
    <section className="py-20 md:py-32 bg-neutral-50 bg-grid-tech">
      <div className="max-w-shell mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                What we&apos;re going to do:
              </h2>
            </Reveal>

            <Reveal delay={50}>
              <p className="text-lg text-neutral-600 mb-8">{overview}</p>
            </Reveal>

            <div className="space-y-6">
              {campaigns.map((campaign, index) => (
                <Reveal key={index} delay={100 + index * 50}>
                  <div className="flex gap-4">
                    <span className="font-mono text-signal font-bold">
                      {index + 1}.
                    </span>
                    <div>
                      <h3 className="font-bold mb-1">{campaign.name}</h3>
                      <p className="text-neutral-600 text-sm">
                        {campaign.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Reveal delay={200}>
              <div className="aspect-[4/3] bg-neutral-200 border-2 border-black relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-signal/20 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
