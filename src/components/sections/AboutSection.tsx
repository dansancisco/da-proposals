"use client";

import Image from "next/image";
import { Reveal } from "@/components/common/Reveal";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
}

interface AboutSectionProps {
  headline?: string;
  description: string;
  stats?: {
    label: string;
    value: string;
  }[];
  team?: TeamMember[];
  founderImage?: string;
}

export function AboutSection({
  headline = "About Digital Assembly",
  description,
  stats,
  team,
  founderImage = "/images/founder.jpg",
}: AboutSectionProps) {
  // Get the primary team member (founder)
  const founder = team?.[0];

  return (
    <section className="mb-20 w-full max-w-7xl mx-auto px-6 md:mb-32">
      <Reveal className="border border-black bg-white">
        {/* Header Bar */}
        <div className="flex h-8 items-center justify-between bg-black px-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-signal" />
            <span className="font-mono text-[10px] uppercase text-white">
              Your key contact // ID: 001
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Image Column */}
          <div className="flex w-full items-center justify-center border-b border-black bg-neutral-100 p-8 md:w-1/3 md:border-b-0 md:border-r">
            <div className="relative aspect-square w-full max-w-xs border border-black bg-white p-1">
              <div className="relative h-full w-full">
                <Image
                  src={founderImage}
                  alt={founder?.name || "Daniel Sandoval"}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover contrast-125"
                />
              </div>
              {/* Corner decorations */}
              <div className="absolute left-0 top-0 h-2 w-2 border-l border-t border-black" />
              <div className="absolute right-0 top-0 h-2 w-2 border-r border-t border-black" />
              <div className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-black" />
              <div className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-black" />
            </div>
          </div>

          {/* Content Column */}
          <div className="flex flex-1 flex-col justify-center gap-6 p-8 md:w-2/3 md:p-12">
            <div>
              <h2 className="mb-4 font-display text-4xl font-bold uppercase">
                {headline}
              </h2>
              {founder && (
                <div className="flex gap-2">
                  <div className="bg-signal px-2 py-1 font-mono text-[10px] uppercase text-white">
                    {founder.role}
                  </div>
                </div>
              )}
            </div>

            <p className="font-mono text-sm leading-relaxed text-neutral-600">
              {description}
            </p>

            {stats && stats.length > 0 && (
              <div className="grid grid-cols-2 gap-px border border-black bg-black md:grid-cols-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-4">
                    <div className="text-xl font-bold text-black">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[10px] uppercase text-neutral-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
