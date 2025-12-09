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
    <section className="py-20 md:py-32 bg-neutral-50 bg-grid-tech">
      <div className="max-w-shell mx-auto px-4 md:px-8">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h2>
        </Reveal>

        <Reveal delay={50}>
          <p className="text-lg text-neutral-600 mb-12 max-w-2xl">
            See every opportunity, know where it came from, and what to do next.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <ul className="space-y-4">
              {points.map((point, index) => (
                <Reveal key={index} delay={100 + index * 50}>
                  <li className="flex items-start gap-4">
                    <span className="text-signal mt-1">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="square"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>{point}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {loomUrl && (
            <Reveal delay={200}>
              <div className="aspect-video bg-neutral-200 border-2 border-black relative overflow-hidden">
                <iframe
                  src={loomUrl}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                />
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
