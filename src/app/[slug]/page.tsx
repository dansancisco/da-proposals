import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { PasswordGate } from "@/components/common/PasswordGate";
import { ExpiryNotice } from "@/components/common/ExpiryNotice";
import { ProposalHeader } from "@/components/layout/ProposalHeader";
import { ProposalFooter } from "@/components/layout/ProposalFooter";

import { HeroSection } from "@/components/sections/HeroSection";
import { SituationSection } from "@/components/sections/SituationSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { QualityControlSection } from "@/components/sections/QualityControlSection";
import { DeliverablesSection } from "@/components/sections/DeliverablesSection";
import { IncludedSection } from "@/components/sections/IncludedSection";
import { ClientRulesSection } from "@/components/sections/ClientRulesSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { ROICalculatorSection } from "@/components/sections/ROICalculatorSection";
import { InvestmentSection } from "@/components/sections/InvestmentSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { ScopeSection } from "@/components/sections/ScopeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

import type { Proposal } from "@/types/proposal";

// Load proposal data from JSON files
async function getProposal(slug: string): Promise<Proposal | null> {
  try {
    const proposal = await import(`@/data/proposals/${slug}.json`);
    return proposal.default as Proposal;
  } catch {
    return null;
  }
}

// Generate static params for all proposals
export async function generateStaticParams() {
  // This will be populated as proposals are added
  // For now, return empty array - pages will be generated on-demand
  return [];
}

// Generate metadata for SEO (even though we're noindexed)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const proposal = await getProposal(slug);

  if (!proposal) {
    return {
      title: "Proposal Not Found | Digital Assembly",
    };
  }

  return {
    title: `Proposal for ${proposal.clientName} | Digital Assembly`,
    description: proposal.subheadline,
  };
}

export default async function ProposalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proposal = await getProposal(slug);

  if (!proposal) {
    notFound();
  }

  // Check if proposal is expired
  const isExpired = new Date(proposal.expiresAt) < new Date();

  if (isExpired) {
    return (
      <ExpiryNotice
        clientName={proposal.clientName}
        expiresAt={proposal.expiresAt}
      />
    );
  }

  return (
    <PasswordGate proposal={proposal}>
      <div className="min-h-screen bg-white">
        <ProposalHeader />

        <main>
          {/* Hero outside grid background like homepage */}
          <HeroSection
            clientName={proposal.clientName}
            contactName={proposal.contactName}
            headline={proposal.headline}
            subheadline={proposal.subheadline}
          />

          {/* Grid background wrapper for main content - matches homepage */}
          <div className="bg-grid-tech">
            <SituationSection points={proposal.situationPoints} />

            <SolutionSection
              overview={proposal.solutionOverview}
              campaigns={proposal.campaigns}
            />

            {proposal.qualificationCriteria.length > 0 && (
              <QualityControlSection criteria={proposal.qualificationCriteria} />
            )}

            {proposal.deliverables.length > 0 && (
              <DeliverablesSection deliverables={proposal.deliverables} />
            )}

            {proposal.includedFeatures.length > 0 && (
              <IncludedSection features={proposal.includedFeatures} />
            )}

            <ClientRulesSection rules={proposal.clientRules} />

            {proposal.caseStudies.length > 0 && (
              <CaseStudiesSection caseStudies={proposal.caseStudies} />
            )}

            {proposal.testimonials && proposal.testimonials.length > 0 && (
              <TestimonialsSection testimonials={proposal.testimonials} />
            )}

            {proposal.roadmap.length > 0 && (
              <RoadmapSection roadmap={proposal.roadmap} />
            )}

            <ROICalculatorSection defaults={proposal.roiDefaults} />

            <InvestmentSection phases={proposal.phases} />

            <GuaranteeSection
              guarantee={proposal.guarantee}
              stipulations={proposal.stipulations}
            />

            <ScopeSection
              includes={proposal.scopeIncludes}
              excludes={proposal.scopeExcludes}
            />

            <AboutSection
              description={proposal.about.intro}
              team={[
                {
                  name: proposal.about.founderName,
                  role: proposal.about.founderTitle,
                  bio: "",
                },
              ]}
            />

            {proposal.faqs.length > 0 && <FAQSection faqs={proposal.faqs} />}
          </div>
        </main>

        <ProposalFooter />
      </div>
    </PasswordGate>
  );
}
