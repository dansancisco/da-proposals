import { Reveal } from "@/components/common/Reveal";

interface SituationSectionProps {
  points: string[];
}

export function SituationSection({ points }: SituationSectionProps) {
  return (
    <section className="mb-20 w-full max-w-7xl mx-auto px-6 pt-20 md:mb-32 md:pt-32">
      <Reveal className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="border-l-2 border-signal pl-6">
          <h2 className="mb-2 font-display text-4xl font-bold uppercase">
            Current Situation
          </h2>
          <p className="font-mono text-sm uppercase text-neutral-500">
            What we heard on our call.
          </p>
        </div>
        <div className="hidden items-center gap-2 border border-black px-3 py-1 font-mono text-[10px] uppercase md:flex">
          <div className="h-2 w-2 bg-signal" />
          Discovery Notes
        </div>
      </Reveal>

      <Reveal className="border border-black bg-white">
        <div className="grid divide-y divide-black md:grid-cols-2 md:divide-x md:divide-y-0">
          <div className="p-6 md:p-8">
            <div className="mb-6 flex items-start justify-between">
              <span className="border border-black px-2 py-0.5 font-mono text-[10px] uppercase">
                Pain Points
              </span>
            </div>
            <ul className="space-y-4">
              {points.slice(0, Math.ceil(points.length / 2)).map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 bg-signal" />
                  <span className="font-mono text-sm leading-relaxed text-neutral-700">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 md:p-8">
            <div className="mb-6 flex items-start justify-between">
              <span className="border border-black px-2 py-0.5 font-mono text-[10px] uppercase">
                Goals & Needs
              </span>
            </div>
            <ul className="space-y-4">
              {points.slice(Math.ceil(points.length / 2)).map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 bg-black" />
                  <span className="font-mono text-sm leading-relaxed text-neutral-700">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-black bg-black px-4 py-2 font-mono text-[10px] uppercase text-white">
          <div>Analysis Status</div>
          <div className="text-signal">Confirmed</div>
        </div>
      </Reveal>
    </section>
  );
}
