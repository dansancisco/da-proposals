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
    <section className="min-h-screen flex items-center justify-center bg-black text-white pt-16">
      <div className="max-w-shell mx-auto px-4 md:px-8 py-20 md:py-32">
        <Reveal>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            {clientName}
            <br />
            <span className="text-white">{headline}</span>
          </h1>
        </Reveal>

        <Reveal delay={100}>
          <p className="font-mono text-sm md:text-base text-neutral-400 max-w-2xl">
            {subheadline}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
