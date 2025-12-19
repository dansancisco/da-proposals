import { Reveal } from "@/components/common/Reveal";

interface QualityControlSectionProps {
  criteria: {
    label: string;
    description: string;
  }[];
}

export function QualityControlSection({
  criteria,
}: QualityControlSectionProps) {
  return (
    <section className="mb-20 w-full max-w-7xl mx-auto px-6 md:mb-32">
      <Reveal className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl border-l-2 border-signal pl-6">
          <h2 className="mb-2 font-display text-4xl font-bold uppercase">
            What is a Sales-Ready Opportunity?
          </h2>
          <p className="font-mono text-sm uppercase text-neutral-500">
            Every opportunity must pass these gates.
          </p>
        </div>
        <div className="hidden items-center gap-2 border border-black px-3 py-1 font-mono text-[10px] uppercase md:flex">
          <div className="h-2 w-2 bg-signal" />
          Active Filters: {criteria.length}
        </div>
      </Reveal>

      <Reveal className="border border-black bg-white">
        <div className="grid divide-y divide-black md:grid-cols-3 md:divide-x md:divide-y-0">
          {criteria.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="group p-6 transition-colors hover:bg-neutral-50 md:p-8"
            >
              <div className="mb-8 flex items-start justify-between">
                <span className="border border-black px-2 py-0.5 font-mono text-[10px] uppercase">
                  Gate {String(index + 1).padStart(2, "0")}
                </span>
                <div className="text-signal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  >
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 font-display text-lg font-bold uppercase">
                {item.label}
              </h3>
              <p className="font-mono text-xs leading-relaxed text-neutral-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {criteria.length > 3 && (
          <div className="grid divide-y divide-black border-t border-black md:grid-cols-2 md:divide-x md:divide-y-0">
            {criteria.slice(3).map((item, index) => (
              <div
                key={index + 3}
                className="group p-6 transition-colors hover:bg-neutral-50 md:p-8"
              >
                <div className="mb-4 flex items-start justify-between">
                  <span className="border border-black px-2 py-0.5 font-mono text-[10px] uppercase">
                    Gate {String(index + 4).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mb-2 font-display text-lg font-bold uppercase">
                  {item.label}
                </h3>
                <p className="font-mono text-xs leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between border-t border-black bg-black px-4 py-2 font-mono text-[10px] uppercase text-white">
          <div>Filter Status</div>
          <div className="text-signal">100% Verification</div>
        </div>
      </Reveal>
    </section>
  );
}
