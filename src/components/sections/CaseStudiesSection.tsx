import Image from "next/image";
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
    <section className="mb-20 w-full max-w-7xl mx-auto px-6 md:mb-32">
      <Reveal className="mb-8 flex items-end justify-between border-b border-black pb-4">
        <h2 className="font-display text-4xl font-bold uppercase">
          Case Studies
        </h2>
        <a
          href="https://digitalassembly.agency/case-studies"
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 py-1 font-mono text-[10px] uppercase text-neutral-500 transition-colors hover:bg-signal hover:text-white"
        >
          View more results -&gt;
        </a>
      </Reveal>

      <Reveal className="grid grid-cols-1 gap-px border border-black bg-black md:grid-cols-3">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="group flex flex-col bg-white transition-colors"
          >
            {/* Image */}
            <div className="relative h-48 w-full border-b border-black bg-neutral-100">
              {study.image ? (
                <Image
                  src={study.image}
                  alt={study.company}
                  fill
                  sizes="(min-width:768px) 33vw, 100vw"
                  className="h-full w-full object-cover contrast-125 grayscale transition-all group-hover:grayscale-0"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-black">
                  <span className="font-display text-xl font-bold text-white">
                    {study.company}
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <div className="mb-2 font-display text-6xl font-bold tracking-tighter text-signal">
                  {study.metric}
                </div>
                <p className="font-display text-sm font-bold uppercase leading-tight">
                  {study.description}
                </p>
              </div>
              <div className="mt-4 border-t border-black/10 pt-4">
                <div className="font-mono text-[10px] uppercase text-neutral-500">
                  Sector: {study.sector}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
