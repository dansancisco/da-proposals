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
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-shell mx-auto px-4 md:px-8">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Quality control
          </h2>
        </Reveal>

        <Reveal delay={50}>
          <p className="text-lg text-neutral-600 mb-12 max-w-2xl">
            How we ensure every opportunity is &ldquo;sales ready&rdquo;.
          </p>
        </Reveal>

        <div className="space-y-4">
          {criteria.map((item, index) => (
            <Reveal key={index} delay={100 + index * 50}>
              <div className="flex gap-4 items-start p-4 border-2 border-black hover:bg-neutral-50 transition-colors">
                <span className="font-mono text-signal font-bold text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="font-bold">{item.label}</span>
                  <span className="text-neutral-600"> - {item.description}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-8 text-sm text-neutral-500 font-mono">
            If an inquiry does not pass these gates, it does not count as a
            sales ready opportunity.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
