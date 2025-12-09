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
    <section className="mb-20 w-full max-w-7xl mx-auto px-6 md:mb-32">
      <Reveal className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="border-l-2 border-signal pl-6">
          <h2 className="mb-2 font-display text-4xl font-bold uppercase">
            60-Day Roadmap
          </h2>
          <p className="font-mono text-sm uppercase text-neutral-500">
            What happens and when.
          </p>
        </div>
        <div className="hidden items-center gap-2 border border-black px-3 py-1 font-mono text-[10px] uppercase md:flex">
          <div className="h-2 w-2 bg-signal" />
          {roadmap.length} Phases
        </div>
      </Reveal>

      <Reveal className="border border-black bg-white">
        <div className="divide-y divide-black">
          {roadmap.map((item, index) => (
            <div
              key={index}
              className="group grid transition-colors hover:bg-neutral-50 md:grid-cols-12"
            >
              <div className="border-b border-black bg-black p-4 text-white md:col-span-3 md:border-b-0 md:border-r">
                <span className="mb-1 block font-mono text-[10px] uppercase text-signal">
                  {item.phase}
                </span>
                <h3 className="font-display text-lg font-bold uppercase">
                  {item.title}
                </h3>
              </div>
              <div className="p-6 md:col-span-9 md:p-8">
                <p className="font-mono text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-black bg-neutral-100 px-4 py-2 font-mono text-[10px] uppercase">
          <div>Timeline</div>
          <div className="text-signal">On Track</div>
        </div>
      </Reveal>
    </section>
  );
}
