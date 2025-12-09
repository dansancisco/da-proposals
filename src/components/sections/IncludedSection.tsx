import { Reveal } from "@/components/common/Reveal";

interface IncludedSectionProps {
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export function IncludedSection({ features }: IncludedSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-shell mx-auto px-4 md:px-8">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            What&apos;s included
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 50}>
              <div className="p-6 border-2 border-black hover:shadow-card transition-shadow">
                <span className="text-2xl mb-4 block">{feature.icon}</span>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-600">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
