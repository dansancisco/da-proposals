import { Reveal } from "@/components/common/Reveal";

interface RoadmapSectionProps {
  roadmap: {
    phase: string;
    title: string;
    description: string;
  }[];
}

export function RoadmapSection({ roadmap }: RoadmapSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-shell mx-auto px-4 md:px-8">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            60 day roadmap
          </h2>
        </Reveal>

        <Reveal delay={50}>
          <p className="text-lg text-neutral-600 mb-12 max-w-2xl">
            When leads start and what is in place at each step.
          </p>
        </Reveal>

        <div className="space-y-8">
          {roadmap.map((item, index) => (
            <Reveal key={index} delay={100 + index * 50}>
              <div className="grid md:grid-cols-12 gap-4 md:gap-8 p-6 border-l-4 border-signal bg-neutral-50">
                <div className="md:col-span-3">
                  <span className="font-mono text-sm text-signal font-bold uppercase">
                    {item.phase}
                  </span>
                  <h3 className="font-display text-xl font-bold">{item.title}</h3>
                </div>
                <div className="md:col-span-9">
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
