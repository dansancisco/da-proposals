"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/common/Reveal";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  company: string;
  badge?: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  title?: string;
  badge?: string;
}

export function TestimonialsSection({
  testimonials,
  title = "What our clients say",
  badge = "Client Validation",
}: TestimonialsSectionProps) {
  const marqueeItems = [...testimonials, ...testimonials];
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = marqueeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mb-24 w-full overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-12 flex items-end justify-between">
          <div>
            <div className="mb-4 inline-block bg-black px-2 py-1 font-mono text-[10px] uppercase text-white">
              {badge}
            </div>
            <h2 className="font-display text-4xl font-bold uppercase">
              {title}
            </h2>
          </div>
          <a
            href="https://www.google.com/search?q=digital+assembly+south+yarra+reviews&sca_esv=382d87f28014534b&sxsrf=AE3TifOSzRGogjuLDWyRfChlr7X6JXpIdQ%3A1765311577238&ei=WYQ4aZ2jDoXrkvQPvJ-MsAk&ved=0ahUKEwjds-qLqrGRAxWFtYQIHbwPA5YQ4dUDCBE&uact=5&oq=digital+assembly+south+yarra+reviews&gs_lp=Egxnd3Mtd2l6LXNlcnAiJGRpZ2l0YWwgYXNzZW1ibHkgc291dGggeWFycmEgcmV2aWV3czIJEAAYsAMYCBgeMgkQABiwAxgIGB4yDhAAGIAEGLADGIYDGIoFMg4QABiABBiwAxiGAxiKBTILEAAYgAQYsAMYogQyCxAAGIAEGLADGKIEMggQABiwAxjvBTIIEAAYsAMY7wVIxxJQrQhYsRFwAXgAkAEAmAHKAaABlA6qAQYwLjEwLjG4AQPIAQD4AQGYAgGgAgGYAwCIBgGQBgiSBwExoAe6PbIHALgHAMIHAzAuMcgHAYAIAA&sclient=gws-wiz-serp#mpd=~11506456859822820716/customers/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black bg-white px-4 py-2 font-mono text-[10px] uppercase transition-colors hover:bg-signal hover:text-white"
          >
            View Google Reviews →
          </a>
        </Reveal>
      </div>

      <div ref={marqueeRef} className="hover-pause overflow-hidden">
        <div
          className="flex w-max py-8"
          style={{
            animation: "scroll 40s linear infinite",
            animationPlayState: isVisible ? "running" : "paused",
            willChange: isVisible ? "transform" : "auto",
          }}
        >
          {marqueeItems.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="group mr-8 flex w-[400px] flex-none flex-col border border-black bg-white shadow-card transition-none hover:border-signal hover:shadow-card-signal"
            >
              <div className="flex items-center justify-between border-b border-black bg-neutral-100 p-3 font-mono text-[10px] text-neutral-600">
                <span>{testimonial.badge || "Client Feedback"}</span>
                <span className="flex items-center gap-1 font-bold text-green-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-600" />
                  Verified
                </span>
              </div>
              <div className="flex-grow p-8">
                <p className="font-display text-lg font-bold uppercase leading-tight">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-neutral-200 bg-white p-4">
                <div>
                  <p className="text-xs font-bold uppercase">
                    {testimonial.name}
                  </p>
                  <p className="font-mono text-[10px] text-neutral-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
