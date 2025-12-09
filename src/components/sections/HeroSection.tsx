import { Reveal } from "@/components/common/Reveal";

interface HeroSectionProps {
  clientName: string;
  headline: string;
  subheadline: string;
}

export function HeroSection({
  clientName,
  headline,
  subheadline,
}: HeroSectionProps) {
  return (
    <header className="relative w-full border-b border-black bg-white pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <Reveal className="mb-12 flex border border-black bg-white font-mono text-[10px] uppercase tracking-tight">
          <div className="flex items-center gap-1 border-r border-black px-3 py-1 text-signal">
            <div className="h-2 w-2 bg-signal" />
            Proposal
          </div>
          <div className="border-r border-black bg-neutral-100 px-3 py-1">
            Prepared for: {clientName}
          </div>
          <div className="px-3 py-1">Confidential</div>
        </Reveal>

        <Reveal delay={100} className="mb-12 max-w-4xl">
          <h1 className="mb-8 font-display text-5xl font-bold uppercase leading-[0.85] text-black md:text-7xl lg:text-8xl">
            <span className="block">{headline}</span>
          </h1>
          <p className="mx-auto max-w-2xl border-t border-black pt-4 font-mono text-sm uppercase tracking-[0.1em] text-neutral-500 md:text-base">
            {subheadline}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <a
            href="#investment"
            className="inline-flex items-center gap-4 bg-signal px-10 py-4 font-mono text-xs uppercase tracking-[0.1em] text-white transition-colors hover:bg-black"
          >
            <span>View Investment</span>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="square"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-6 h-4 w-px bg-black" />
      <div className="pointer-events-none absolute bottom-0 right-6 h-4 w-px bg-black" />
    </header>
  );
}
