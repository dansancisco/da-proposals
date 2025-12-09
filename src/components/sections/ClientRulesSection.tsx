import { Reveal } from "@/components/common/Reveal";

interface ClientRulesSectionProps {
  rules: {
    title: string;
    description: string;
  }[];
}

export function ClientRulesSection({ rules }: ClientRulesSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-shell mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Three rules to live by
              </h2>
            </Reveal>

            <Reveal delay={50}>
              <p className="text-lg text-neutral-600">
                Our most successful clients follow these habits.
              </p>
            </Reveal>
          </div>

          <div className="space-y-8">
            {rules.map((rule, index) => (
              <Reveal key={index} delay={100 + index * 50}>
                <div>
                  <h3 className="font-bold text-lg mb-2">{rule.title}</h3>
                  <p className="text-neutral-600">{rule.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
