/**
 * Google Ads Content Template
 *
 * Standardized content for Google Ads proposals.
 * Use this template for standalone Google Ads engagements.
 */

export const googleAdsTemplate = {
  // UNIVERSAL BENEFITS - Same for ALL channels (10 items)
  includedFeatures: [
    {
      icon: "page",
      title: "High-Converting Landing Pages",
      description: "Proven pages designed to turn visitors into actionable leads that drive revenue"
    },
    {
      icon: "content",
      title: "Professional Content & Creative",
      description: "Ad copy, landing page content, and imagery—all built to convert your ideal customers"
    },
    {
      icon: "dashboard",
      title: "Real-Time Performance Dashboard",
      description: "Track every detail of your campaign performance in real-time, on any device"
    },
    {
      icon: "tracking",
      title: "Lead Tracking & Management System",
      description: "Capture and manage every inbound lead (calls, forms, live chat) with full attribution"
    },
    {
      icon: "phone",
      title: "Inbound Call Recording",
      description: "Record every call to track quality, identify winning keywords, and train your team"
    },
    {
      icon: "calendar",
      title: "Monthly Strategy Calls",
      description: "Review performance, discuss what's working, and align on next steps"
    },
    {
      icon: "report",
      title: "Transparent Monthly Reporting",
      description: "Clear breakdown of what happened last month, what we're doing next, and why"
    },
    {
      icon: "roi",
      title: "ROI Tracking & Attribution",
      description: "Know exactly which campaigns are delivering your highest-value opportunities"
    },
    {
      icon: "integration",
      title: "CRM Integration (Optional)",
      description: "Connect your existing CRM for seamless lead handoff and follow-up"
    },
    {
      icon: "headset",
      title: "Direct Access to Your Strategist",
      description: "No support queues. No account managers. Direct line to the person running your campaigns"
    }
  ],

  // DELIVERABLES - Channel-specific execution (high-level)
  deliverables: [
    "Google Ads account setup and campaign build",
    "Conversion-focused landing page design and development",
    "Multi-channel lead capture (call tracking, forms, AI-powered live chat)",
    "Lead management system setup (What Converts platform)",
    "Analytics and conversion tracking implementation",
    "CRM integration (one-time setup if applicable)",
    "Ongoing campaign optimization (daily bid management, ad testing, budget allocation)",
    "Monthly performance reporting with clear metrics and insights"
  ],

  // SOLUTION OVERVIEW
  solutionOverview: "We leverage Google Ads strategies to put you in front of high-value buyers at the exact moment they're searching for your services. Every inquiry is captured and logged in a simple pipeline you can see and manage.",

  // CAMPAIGNS - Customizable based on client needs
  campaigns: [
    {
      name: "Google Search Ads",
      description: "Target high-intent searches from buyers actively looking for your services"
    },
    {
      name: "Google Local Services Ads",
      description: "Appear at the top with Google Guaranteed badge (where applicable)"
    },
    {
      name: "Display Remarketing (Optional)",
      description: "Stay in front of visitors who didn't convert on first visit"
    }
  ],

  // QUALITY CONTROL / QUALIFICATION CRITERIA
  qualificationNote: "Strategic targeting ensures your ads only show to high-intent searchers actively looking for your services. Lead management system lets you classify and score every inquiry, so we can optimize toward your highest-value sources.",

  qualificationCriteria: [
    {
      label: "Project Type Match",
      description: "Commercial vs. residential, service type alignment"
    },
    {
      label: "Service Area",
      description: "Located within your defined service territory"
    },
    {
      label: "Intent Level",
      description: "Actively seeking quote/proposal, not just researching"
    },
    {
      label: "Contact Information",
      description: "Phone number and/or email provided (for forms/chat)"
    },
    {
      label: "Minimum Scope",
      description: "Project meets minimum size/value requirements"
    }
  ],

  // ROADMAP
  roadmap: [
    {
      phase: "Week 1-2",
      title: "Discovery & Setup",
      description: "Deep dive into your business, ideal customer profile, and competitive landscape. Google Ads account setup, call tracking provisioning, analytics configuration."
    },
    {
      phase: "Week 3-4",
      title: "Campaign Build",
      description: "Keyword research and campaign architecture. Ad copy creation and landing page design/development. Lead tracking system setup and CRM integration (if applicable)."
    },
    {
      phase: "Week 5-8",
      title: "Launch & Optimize",
      description: "Go live with campaigns. Daily monitoring and bid optimization. First qualified leads start flowing."
    },
    {
      phase: "Month 3+",
      title: "Scale & Refine",
      description: "Analyze results using What Converts data. Scale what's working, cut what isn't. Continuous improvement based on quotable lead data."
    }
  ],

  // SCOPE DEFINITION
  scopeIncludes: [
    "Google Ads search campaign management",
    "Google Local Services Ads management (where applicable)",
    "Custom landing pages (one per service/location as needed)",
    "Lead tracking and management (What Converts platform)",
    "Call tracking and recording",
    "AI-powered live chat setup",
    "Weekly performance summaries",
    "Monthly strategy calls",
    "Ongoing campaign optimization",
    "Optional CRM integration"
  ],

  scopeExcludes: [
    "Organic SEO services",
    "Social media advertising",
    "Website development beyond landing pages",
    "CRM setup or ongoing management (beyond one-time integration)",
    "Sales training or coaching",
    "Print or offline advertising"
  ],

  // CLIENT RULES - Standardized for all channels
  clientRules: [
    {
      title: "Same-Day Follow-Up",
      description: "Contact qualified leads within 4 hours of receiving them. Speed to lead is critical."
    },
    {
      title: "Track Every Outcome",
      description: "Log the result of every lead in our shared system so we can optimize targeting."
    },
    {
      title: "Monthly Reviews",
      description: "Join our monthly strategy calls to review performance and adjust approach."
    }
  ],

  // FAQs - Standardized questions with channel-specific answers
  faqs: [
    {
      question: "How quickly will I start seeing leads?",
      answer: "Most clients see their first leads within 14 days as campaigns go live. The full 60-day build and proof phase is about stabilizing volume, improving quality, and pushing toward the agreed opportunity target."
    },
    {
      question: "What happens if it doesn't work?",
      answer: "If you meet the agreed stipulations and we don't deliver the promised volume of sales-ready opportunities, our guarantee applies and we refund 100% of our management fee for that period."
    },
    {
      question: "What do you need from us to make this successful?",
      answer: "Respond to leads fast, dedicate time each day to nurture opportunities, and follow up on every opportunity until you get a clear yes/no."
    },
    {
      question: "How much time does this require from our team?",
      answer: "Outside of onboarding and a simple review rhythm, your time investment is minimal. You focus on calls and closing; we handle the system."
    },
    {
      question: "Can we pause or cancel?",
      answer: "After the initial 60-day build and proof phase, it's month-to-month with no long contracts. You stay because the engine produces opportunities and revenue."
    }
  ],

  // INVESTMENT STRUCTURE - Example/Template
  // Actual pricing will be customized per proposal
  investmentExample: {
    setupPhase: {
      name: "60-Day Build & Proof Phase",
      items: [
        { label: "Campaign Strategy & Build", amount: 2500 },
        { label: "Landing Page Development", amount: 1500 }
      ]
    },
    monthlyManagement: {
      name: "Monthly Management (Month 3+)",
      items: [
        { label: "Campaign Management", amount: 1500 },
        { label: "Lead Tracking & Reporting", amount: 1000 }
      ]
    },
    adSpend: {
      name: "Ad Spend (Recommended)",
      items: [
        { label: "Google Ads Budget", amount: 3000 },
        { label: "Local Services Ads Budget", amount: 1000 }
      ]
    }
  },

  // GUARANTEE - Placeholder (customized per client)
  guaranteeExample: "If we don't deliver at least [X] qualified opportunities in the first 90 days, we'll manage your campaigns for free until we do.",

  stipulations: [
    "Minimum 90-day commitment required",
    "Ad spend must be maintained at recommended levels",
    "Client must follow up on leads within 4 business hours",
    "All lead outcomes must be tracked in What Converts system"
  ]
};
