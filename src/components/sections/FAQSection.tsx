"use client";

import { useState } from "react";
import { Reveal } from "@/components/common/Reveal";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-black">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-neutral-50"
      >
        <div className="flex items-start gap-4">
          <span className="font-mono text-sm text-signal">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-lg font-bold uppercase">
            {faq.question}
          </span>
        </div>
        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center border border-black transition-colors ${
            isOpen ? "bg-signal text-white border-signal" : "bg-white text-black"
          }`}
        >
          <svg
            className={`h-4 w-4 transition-transform ${isOpen ? "rotate-45" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="square" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="border-t border-black bg-neutral-50 p-6">
          <p className="font-mono text-sm leading-relaxed text-neutral-600">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="mb-20 w-full max-w-7xl mx-auto px-6 md:mb-32">
      <Reveal className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="border-l-2 border-signal pl-6">
          <h2 className="mb-2 font-display text-4xl font-bold uppercase">
            FAQ
          </h2>
          <p className="font-mono text-sm uppercase text-neutral-500">
            Common questions about working together.
          </p>
        </div>
        <div className="hidden items-center gap-2 border border-black px-3 py-1 font-mono text-[10px] uppercase md:flex">
          <div className="h-2 w-2 bg-signal" />
          {faqs.length} Questions
        </div>
      </Reveal>

      <Reveal>
        <div className="space-y-px border border-black bg-black">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white">
              <FAQItem faq={faq} index={index} />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
