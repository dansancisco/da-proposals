import { Reveal } from "@/components/common/Reveal";

interface DeliverablesSectionProps {
  deliverables: string[];
}

export function DeliverablesSection({
  deliverables,
}: DeliverablesSectionProps) {
  const midPoint = Math.ceil(deliverables.length / 2);

  return (
    <section className="mb-20 w-full max-w-7xl mx-auto px-6 md:mb-32">
      <Reveal className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="border-l-2 border-signal pl-6">
          <h2 className="mb-2 font-display text-4xl font-bold uppercase">
            Deliverables
          </h2>
          <p className="font-mono text-sm uppercase text-neutral-500">
            What we handle for you.
          </p>
        </div>
      </Reveal>

      <Reveal className="border border-black bg-white">
        <div className="grid divide-y divide-black md:grid-cols-2 md:divide-x md:divide-y-0">
          <div className="p-6 md:p-8">
            <ul className="space-y-3">
              {deliverables.slice(0, midPoint).map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 text-signal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="square"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="font-mono text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 md:p-8">
            <ul className="space-y-3">
              {deliverables.slice(midPoint).map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 text-signal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="square"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="font-mono text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
