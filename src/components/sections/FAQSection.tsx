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
    <Reveal delay={index * 50}>
      <div className="border-2 border-black">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-neutral-50"
        >
          <span className="font-display text-lg font-bold">{faq.question}</span>
          <span
            className={`flex h-8 w-8 flex-shrink-0 items-center justify-center border-2 border-black transition-colors ${
              isOpen ? "bg-signal text-white" : "bg-white text-black"
            }`}
          >
            <svg
              className={`h-4 w-4 transition-transform ${isOpen ? "rotate-45" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="square"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="border-t-2 border-black bg-neutral-50 p-6">
            <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-shell mx-auto px-4 md:px-8">
        <Reveal className="mb-12">
          <div className="border-l-4 border-signal pl-6">
            <h2 className="mb-2 font-display text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="font-mono text-sm text-neutral-500">
              Common questions about working together.
            </p>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
