"use client";

import { useState } from "react";
import { Reveal } from "@/components/common/Reveal";
import { CTAButton } from "@/components/ui/CTAButton";

interface AcceptSectionProps {
  slug: string;
  xeroInvoiceUrl: string;
  termsText?: string;
}

export function AcceptSection({
  slug,
  xeroInvoiceUrl,
  termsText,
}: AcceptSectionProps) {
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const defaultTermsText =
    "I have read and agree to Digital Assembly's Terms of Service and acknowledge that this proposal accurately reflects the services to be provided. Payment of the invoice constitutes acceptance of these terms.";

  const handleAccept = async () => {
    if (!agreed) return;

    setSubmitting(true);
    setError(null);

    try {
      // Collect browser info for acceptance record
      const browserInfo = {
        language: navigator.language,
        platform: navigator.platform,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
      };

      const response = await fetch("/api/accept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          userAgent: navigator.userAgent,
          browserInfo,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to process acceptance");
      }

      // Redirect to Xero invoice payment page
      window.location.href = xeroInvoiceUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setSubmitting(false);
    }
  };

  return (
    <section id="accept" className="w-full bg-signal py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <h2 className="mb-4 font-display text-4xl font-bold uppercase text-white">
            Ready to Get Started?
          </h2>
          <p className="mb-12 font-mono text-sm uppercase text-white/80">
            Accept this proposal to begin working together
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-white p-8 md:p-12">
            <div className="mb-8">
              <label className="flex cursor-pointer items-start gap-4 group">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-5 w-5 cursor-pointer border-2 border-black accent-signal"
                />
                <span className="font-mono text-sm text-neutral-600 group-hover:text-black">
                  {termsText || defaultTermsText}
                </span>
              </label>
            </div>

            {error && (
              <div className="mb-6 border border-red-200 bg-red-50 p-4 font-mono text-sm text-red-700">
                {error}
              </div>
            )}

            <CTAButton
              onClick={handleAccept}
              disabled={!agreed || submitting}
              className={`w-full justify-center ${
                !agreed || submitting ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              {submitting ? "Processing..." : "Accept & Pay"}
            </CTAButton>

            <p className="mt-6 text-center font-mono text-xs text-neutral-500">
              You will be redirected to our secure payment page
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
