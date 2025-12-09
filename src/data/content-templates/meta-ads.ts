/**
 * Meta Ads Content Template
 *
 * Standardized content for Meta Ads (Facebook/Instagram) proposals.
 * NOTE: Meta Ads is NOT sold standalone - always bundled with Google Ads.
 */

export const metaAdsTemplate = {
  // UNIVERSAL BENEFITS - Same for ALL channels (10 items)
  // Uses same includedFeatures as Google Ads

  // DELIVERABLES - Channel-specific execution (high-level)
  // Meta Ads adds these to Google Ads deliverables
  additionalDeliverables: [
    "Meta Ads campaign strategy and audience research (Facebook & Instagram)",
    "Ad creative development (static images, carousel ads, basic video)",
    "Facebook Pixel and conversion tracking implementation",
    "Multi-channel lead capture (including Facebook Lead Forms)",
    "Ongoing campaign optimization (daily bid management, audience testing, creative refresh)",
    "Combined monthly performance reporting (Google + Meta campaigns)"
  ],

  // SOLUTION OVERVIEW (for Google + Meta combo)
  solutionOverview: "We use Google Ads to capture high-intent searchers, then expand your reach with Meta campaigns targeting ideal prospects on Facebook and Instagram. This multi-channel approach maximizes lead volume while maintaining quality through strategic targeting and tracking.",

  // CAMPAIGNS - Meta-specific channels
  campaigns: [
    {
      name: "Google Search Ads",
      description: "Capture high-intent searchers actively looking for your services"
    },
    {
      name: "Meta Ads (Facebook/Instagram)",
      description: "Reach ideal prospects with interest-based targeting and retargeting campaigns"
    },
    {
      name: "Google Local Services Ads (Optional)",
      description: "Appear at the top with Google Guaranteed badge"
    }
  ],

  // META CAMPAIGN TYPES
  metaCampaignTypes: [
    "Interest & Behavior Targeting (cold traffic)",
    "Lookalike Audiences (similar to best customers)",
    "Retargeting (website visitors, landing page viewers)",
    "Facebook Lead Forms (low-friction lead capture)"
  ],

  // QUALITY CONTROL - Same as Google Ads
  qualificationNote: "Strategic targeting ensures your ads only show to high-intent prospects actively looking for your services. Lead management system lets you classify and score every inquiry, so we can optimize toward your highest-value sources across both Google and Meta.",

  // ROADMAP (Google + Meta combined)
  roadmap: [
    {
      phase: "Week 1-2",
      title: "Discovery & Google Ads Setup",
      description: "Google Ads account setup, keyword research, campaign build. Landing page development. Meta Pixel installation (for future retargeting)."
    },
    {
      phase: "Week 3-4",
      title: "Launch Google Ads + Meta Setup",
      description: "Go live with Google Ads campaigns. Meta Ads account setup and audience research. Ad creative development for Meta campaigns. Build retargeting audience from Google Ads traffic."
    },
    {
      phase: "Week 5-8",
      title: "Meta Launch & Optimize",
      description: "Launch Meta campaigns (interest targeting, lookalikes, retargeting). Daily monitoring and optimization across both channels. First qualified leads start flowing from both Google and Meta."
    },
    {
      phase: "Month 3+",
      title: "Scale & Refine",
      description: "Analyze performance using What Converts data. Scale winning campaigns on both platforms. Cut underperformers. Continuous creative refresh (Meta) and keyword expansion (Google)."
    }
  ],

  // SCOPE DEFINITION (Google + Meta combined)
  scopeIncludes: [
    "Google Ads search campaign management",
    "Meta Ads campaign management (Facebook & Instagram)",
    "Google Local Services Ads (where applicable)",
    "Audience research and targeting strategy",
    "Ad creative development (static images, carousel ads, basic video)",
    "Conversion-focused landing pages",
    "Facebook Lead Forms setup (optional)",
    "Lead tracking and management (What Converts)",
    "Call tracking and recording",
    "AI-powered live chat setup",
    "Facebook Pixel and conversion tracking",
    "Weekly performance summaries",
    "Monthly strategy calls",
    "Ongoing optimization (both channels)",
    "Optional CRM integration"
  ],

  scopeExcludes: [
    "SEO services (sold separately or as add-on)",
    "Professional video production (beyond basic video ads using client footage)",
    "Social media content management or posting",
    "Influencer partnerships or collaborations",
    "Print or offline advertising",
    "Website development beyond landing pages",
    "Active community management or comment moderation"
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

  // FAQs - Same as Google Ads but mentions both channels
  faqs: [
    {
      question: "How quickly will I start seeing leads?",
      answer: "Most clients see their first leads within 14 days as campaigns go live. The full 60-day build and proof phase is about stabilizing volume, improving quality, and pushing toward the agreed opportunity target across both Google and Meta."
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

  // INVESTMENT STRUCTURE - Google + Meta Bundle
  investmentExample: {
    monthlyManagement: {
      name: "Monthly Management (Google + Meta)",
      items: [
        { label: "Multi-Channel Campaign Management", amount: 2500 }
      ]
    },
    adSpend: {
      name: "Ad Spend (Minimum)",
      items: [
        { label: "Combined Google + Meta Budget", amount: 2500 }
      ]
    }
  },

  investmentNote: "Combined ad spend across Google and Meta: $2,500/month minimum. Typical allocation: $1,500-2,000 Google Ads + $500-1,000 Meta Ads. Can be adjusted based on performance data.",

  // GUARANTEE - Placeholder (customized per client)
  guaranteeExample: "Guarantee TBD - customized per client. Likely focused on qualified opportunity volume across both channels.",

  stipulations: [
    "Minimum 90-day commitment required",
    "Combined ad spend maintained at minimum $2,500/month",
    "Client must follow up on leads within 4 business hours",
    "All lead outcomes must be tracked in What Converts system"
  ]
};
