import { Reveal } from "@/components/common/Reveal";

interface LeadInsightsSectionProps {
  title: string;
  points: string[];
  loomUrl?: string;
}

export function LeadInsightsSection({
  title,
  points,
  loomUrl,
}: LeadInsightsSectionProps) {
  return (
    <section className="mb-20 w-full max-w-7xl mx-auto px-6 md:mb-32">
      <Reveal className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="border-l-2 border-signal pl-6">
          <h2 className="mb-2 font-display text-4xl font-bold uppercase">
            {title}
          </h2>
          <p className="font-mono text-sm uppercase text-neutral-500">
            See every opportunity, know where it came from.
          </p>
        </div>
        <div className="hidden items-center gap-2 border border-black px-3 py-1 font-mono text-[10px] uppercase md:flex">
          <div className="h-2 w-2 bg-signal" />
          {points.length} Data Points
        </div>
      </Reveal>

      <Reveal className="border border-black bg-white">
        <div className="grid md:grid-cols-2">
          {/* Points List */}
          <div className="border-b border-black p-8 md:border-b-0 md:border-r md:p-12">
            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center border border-black font-mono text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-sm leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Video or Placeholder */}
          <div className="flex items-center justify-center bg-neutral-50 p-8 md:p-12">
            {loomUrl ? (
              <div className="aspect-video w-full border border-black bg-black">
                <iframe
                  src={loomUrl}
                  className="h-full w-full"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="flex aspect-video w-full flex-col items-center justify-center border border-black bg-neutral-100">
                <div className="mb-4 flex h-16 w-16 items-center justify-center border border-black text-signal">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeWidth={1.5}
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <span className="font-mono text-[10px] uppercase text-neutral-500">
                  Dashboard Preview
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Footer Bar */}
        <div className="flex items-center justify-between border-t border-black bg-black px-4 py-2 font-mono text-[10px] uppercase text-white">
          <div>Lead Data</div>
          <div className="text-signal">Full Visibility</div>
        </div>
      </Reveal>
    </section>
  );
}
