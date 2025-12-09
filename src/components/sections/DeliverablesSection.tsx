import { Reveal } from "@/components/common/Reveal";

interface DeliverablesSectionProps {
  deliverables: string[];
}

export function DeliverablesSection({
  deliverables,
}: DeliverablesSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-neutral-50">
      <div className="max-w-shell mx-auto px-4 md:px-8">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            What we handle
          </h2>
        </Reveal>

        <ul className="space-y-4 max-w-2xl">
          {deliverables.map((item, index) => (
            <Reveal key={index} delay={index * 50}>
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
                <span className="text-lg">{item}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
