import { Reveal } from "@/components/common/Reveal";

interface CaseStudiesSectionProps {
  caseStudies: {
    company: string;
    sector: string;
    metric: string;
    description: string;
    image?: string;
  }[];
}

export function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-neutral-50">
      <div className="max-w-shell mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-12">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
              Results we&apos;ve delivered
            </h2>
          </Reveal>

          <Reveal delay={50}>
            <a
              href="https://digitalassembly.agency/case-studies"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block bg-signal text-white px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-black transition-colors"
            >
              See More
            </a>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <Reveal key={index} delay={index * 50}>
              <div className="bg-white border-2 border-black overflow-hidden hover:shadow-card transition-shadow">
                <div className="aspect-video bg-neutral-200 relative">
                  {study.image ? (
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${study.image})` }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-black text-white p-4">
                      <span className="font-display text-xl font-bold text-center">
                        {study.company}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="font-display text-4xl font-bold text-signal mb-2">
                    {study.metric}
                  </div>
                  <p className="text-sm text-neutral-600 mb-2">
                    {study.description}
                  </p>
                  <p className="font-mono text-xs text-neutral-400 uppercase">
                    Sector: {study.sector}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
