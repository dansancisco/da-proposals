import { Reveal } from "@/components/common/Reveal";

interface ClientRulesSectionProps {
  rules: {
    title: string;
    description: string;
  }[];
}

export function ClientRulesSection({ rules }: ClientRulesSectionProps) {
  return (
    <section className="mb-20 w-full max-w-7xl mx-auto px-6 md:mb-32">
      <Reveal className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="border-l-2 border-signal pl-6">
          <h2 className="mb-2 font-display text-4xl font-bold uppercase">
            Three Rules to Live By
          </h2>
          <p className="font-mono text-sm uppercase text-neutral-500">
            Our most successful clients follow these habits.
          </p>
        </div>
        <div className="hidden items-center gap-2 border border-black px-3 py-1 font-mono text-[10px] uppercase md:flex">
          <div className="h-2 w-2 bg-signal" />
          {rules.length} Rules
        </div>
      </Reveal>

      <Reveal className="grid gap-px border border-black bg-black md:grid-cols-3">
        {rules.map((rule, index) => (
          <div
            key={index}
            className="group flex flex-col bg-white p-8 transition-colors hover:bg-neutral-50"
          >
            <div className="mb-6 flex items-start justify-between">
              <span className="flex h-10 w-10 items-center justify-center border border-black font-display text-xl font-bold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="text-signal">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeWidth={1.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-3 font-display text-lg font-bold uppercase">
              {rule.title}
            </h3>
            <p className="font-mono text-xs leading-relaxed text-neutral-600">
              {rule.description}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
