import { Reveal } from "@/components/common/Reveal";

interface HeroSectionProps {
  clientName: string;
  contactName: string;
  headline: string;
  subheadline: string;
}

export function HeroSection({
  clientName,
  contactName,
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
          <div className="px-3 py-1">Confidential</div>
        </Reveal>

        <Reveal delay={100} className="mb-12 w-full max-w-5xl">
          <h1 className="mb-8 font-display text-6xl font-bold uppercase leading-tight text-black md:text-7xl lg:text-8xl lg:leading-none">
            <span className="block">{headline}</span>
          </h1>
          <p className="mx-auto max-w-2xl border-t border-black pt-4 font-mono text-sm uppercase tracking-[0.1em] text-neutral-500 md:text-base">
            {subheadline}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="border border-black bg-white px-6 py-3">
            <p className="font-mono text-sm">
              <span className="text-neutral-500">Prepared for:</span>{" "}
              <span className="text-black">{contactName}</span>
              {" · "}
              <span className="text-black">{clientName}</span>
            </p>
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-6 h-4 w-px bg-black" />
      <div className="pointer-events-none absolute bottom-0 right-6 h-4 w-px bg-black" />
    </header>
  );
}
