import { Reveal } from "@/components/common/Reveal";

interface SituationSectionProps {
  points: string[];
}

export function SituationSection({ points }: SituationSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-shell mx-auto px-4 md:px-8">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            Your situation as it stands:
          </h2>
        </Reveal>

        <div className="space-y-6 max-w-3xl">
          {points.map((point, index) => (
            <Reveal key={index} delay={index * 50}>
              <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
                {point}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
