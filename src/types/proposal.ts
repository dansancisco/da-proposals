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
}
