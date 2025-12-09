"use client";

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
}

export function AboutSection({
  headline = "About Digital Assembly",
  description,
  stats,
  team,
}: AboutSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-black text-white">
      <div className="max-w-shell mx-auto px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <div className="border-l-4 border-signal pl-6">
                <h2 className="mb-4 font-display text-3xl md:text-4xl font-bold">
                  {headline}
                </h2>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-6 text-lg leading-relaxed text-neutral-300">
                {description}
              </p>
            </Reveal>

            {stats && stats.length > 0 && (
              <Reveal delay={200}>
                <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/20 pt-10 md:grid-cols-4">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <span className="block font-display text-3xl font-bold text-signal">
                        {stat.value}
                      </span>
                      <span className="mt-1 block font-mono text-xs uppercase tracking-widest text-neutral-400">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          {team && team.length > 0 && (
            <div>
              <Reveal delay={150}>
                <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-neutral-500">
                  Your Team
                </h3>
              </Reveal>

              <div className="space-y-6">
                {team.map((member, index) => (
                  <Reveal key={member.name} delay={200 + index * 50}>
                    <div className="flex gap-4 border-2 border-white/20 bg-white/5 p-4">
                      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center bg-signal font-display text-2xl font-bold text-white">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-display text-lg font-bold">
                          {member.name}
                        </h4>
                        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-signal">
                          {member.role}
                        </p>
                        <p className="text-sm text-neutral-400">{member.bio}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
