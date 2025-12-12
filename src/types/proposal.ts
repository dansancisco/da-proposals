export interface Proposal {
  // Metadata
  slug: string;
  clientName: string;
  contactName: string;
  createdAt: string;
  expiresAt: string;
  dealId?: number;

  // Hero
  headline: string;
  subheadline: string;

  // Situation
  situationPoints: string[];

  // Solution
  solutionOverview: string;
  campaigns: {
    name: string;
    description: string;
  }[];

  // Quality Control
  qualificationCriteria: {
    label: string;
    description: string;
  }[];

  // Deliverables
  deliverables: string[];

  // Included Features
  includedFeatures: {
    icon: string;
    title: string;
    description: string;
  }[];

  // Lead Insights
  leadInsights: {
    title: string;
    points: string[];
    loomUrl?: string;
  };

  // Client Rules (optional - will use defaults if not provided)
  clientRules?: {
    title: string;
    description: string;
  }[];

  // Case Studies
  caseStudies: {
    company: string;
    sector: string;
    metric: string;
    description: string;
    image?: string;
    link?: string;
  }[];

  // Roadmap
  roadmap: {
    phase: string;
    title: string;
    description: string;
  }[];

  // ROI Calculator defaults
  roiDefaults: {
    opportunities: number;
    closeRate: number;
    ltv: number;
    investment: number;
  };

  // Investment
  phases: {
    name: string;
    items: {
      label: string;
      amount: number;
    }[];
  }[];

  // Guarantee
  guarantee: string;
  stipulations: string[];

  // Scope
  scopeIncludes: string[];
  scopeExcludes: string[];

  // About
  about: {
    intro: string;
    values: {
      title: string;
      description: string;
    }[];
    founderName: string;
    founderTitle: string;
  };

  // FAQs
  faqs: {
    question: string;
    answer: string;
  }[];

  // Testimonials (optional)
  testimonials?: {
    id: string;
    quote: string;
    name: string;
    company: string;
    badge?: string;
  }[];

  // Accept Section (added after negotiation is complete)
  acceptSection?: {
    enabled: boolean;
    xeroInvoiceUrl: string;
    invoiceReference: string; // Format: "DA-[slug]" for webhook matching
    termsText?: string; // Custom terms text, uses default if omitted
  };

  // Proposal status
  status?: "draft" | "sent" | "pending_payment" | "accepted";
}

// Acceptance record stored in /src/data/acceptances/[slug].json
export interface ProposalAcceptance {
  slug: string;
  proposalVersion: string; // Timestamp of proposal at acceptance time
  status: "pending" | "accepted";

  // Captured when client clicks accept
  acceptedAt: string; // ISO timestamp
  clientIp: string;
  userAgent: string;
  browserInfo: {
    language: string;
    platform: string;
    screenResolution: string;
  };

  // Set when payment confirmed via webhook
  paymentConfirmedAt?: string;
  xeroPaymentId?: string;

  // Set when finalized
  pdfUrl?: string; // Google Drive link
  finalizedAt?: string;
}
