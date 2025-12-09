# DA Proposals Content Guide

This guide explains how to create new proposals using the standardized content templates.

## Quick Start

All proposals now follow a standardized content structure with:
- **10 Universal Benefits** (same for all channels)
- **Channel-specific deliverables** (what we build)
- **Standardized client rules** (3 rules for all channels)
- **Standardized FAQ questions** (5 questions with channel-specific answers)
- **60-day pricing model** (implementation + ongoing)

## Universal Proposal Structure

All proposals follow this fixed section order:

1. **Hero** - Value prop headline
2. **Current Situation** - Mirror their pain (empathy)
3. **The Solution** - What we're building (vision)
4. **What's Included** - 10 benefits they get (value)
5. **Case Studies** - Social proof (trust)
6. **Testimonials** - More social proof (trust)
7. **Deliverables** - What we actually do (credibility)
8. **Roadmap** - Timeline expectations (clarity)
9. **ROI Calculator** - Interactive value demonstration (justification)
10. **Investment** - Pricing (commitment)
11. **Guarantee** - Risk reversal (confidence)
12. **Scope Definition** - Boundaries (expectations)
13. **About DA** - Team credibility (relationship)
14. **Client Rules** - What they need to do (partnership)
15. **FAQ** - Handle objections (close)

## Content Templates

Located in `/src/data/content-templates/`:

### 1. Google Ads Template (`google-ads.ts`)

Use for standalone Google Ads engagements.

**Key Features:**
- Google Search Ads focus
- Optional Google Local Services Ads
- Optional Display Remarketing
- Lead qualification through strategic targeting
- What Converts platform for lead management

**Typical Investment:**
- Setup: $4,000 ($2,500 campaign build + $1,500 landing page)
- Monthly: $2,500-3,000 management
- Ad Spend: $3,000-4,000/month

### 2. SEO Template (`seo.ts`)

Use for standalone SEO engagements or SEO components in multi-channel packages.

**Key Features:**
- Technical SEO + on-page optimization
- Content creation (service, location, blog pages)
- Local SEO + Google Business Profile optimization
- AI Answer Engine Optimization (AEO)
- E-E-A-T compliance

**Typical Investment:**
- Flat monthly fee: $3,500-5,000 (varies by scope)
- No setup fee breakdown
- Minimum 6-month commitment recommended

### 3. Meta Ads Template (`meta-ads.ts`)

**IMPORTANT:** Meta Ads is NOT sold standalone - always bundled with Google Ads.

**Key Features:**
- Facebook + Instagram campaigns
- Interest targeting, lookalikes, retargeting
- Ad creative development (static, carousel, video)
- Facebook Lead Forms
- Bundled with Google Ads for multi-channel approach

### 4. Google + Meta Combo Template (`google-meta-combo.ts`)

Use for multi-channel Google Ads + Meta Ads packages.

**Key Features:**
- All Google Ads features
- All Meta Ads features
- Cross-channel optimization
- Combined reporting and insights

**Typical Investment:**
- Setup: $5,000 ($3,000 campaign build + $2,000 landing page)
- Monthly: $2,500 management (covers both channels)
- Ad Spend: $2,500/month minimum (combined across Google + Meta)

## Creating a New Proposal

### Step 1: Choose Your Template

1. **Google Ads only** → Use `google-ads.ts`
2. **SEO only** → Use `seo.ts`
3. **Google Ads + Meta Ads** → Use `google-meta-combo.ts`
4. **Google Ads + SEO** → Combine templates manually

### Step 2: Copy Template Content

Create a new JSON file in `/src/data/proposals/[slug].json`

Example structure:
```json
{
  "slug": "client-name-service",
  "clientName": "Client Name",
  "contactName": "Contact Person",
  "createdAt": "2025-12-09T00:00:00.000Z",
  "expiresAt": "2026-01-08T00:00:00.000Z",
  "dealId": 12345,

  "headline": "Your Custom Headline",
  "subheadline": "Your custom subheadline explaining the offer.",

  "situationPoints": [
    "Pain point 1",
    "Pain point 2",
    "Goal 1",
    "Goal 2"
  ],

  "solutionOverview": "Copy from template",

  "campaigns": [
    // Copy from template
  ],

  "qualificationCriteria": [
    // Copy from template or customize
  ],

  "deliverables": [
    // Copy from template
  ],

  "includedFeatures": [
    // ALWAYS use the 10 universal benefits
  ],

  "roadmap": [
    // Copy from template or customize
  ],

  "roiDefaults": {
    "opportunities": 20,
    "closeRate": 30,
    "ltv": 5000,
    "investment": 3500
  },

  "phases": [
    // Customize pricing based on channel
  ],

  "guarantee": "Customize per client",

  "stipulations": [
    // Copy from template or customize
  ],

  "scopeIncludes": [
    // Copy from template
  ],

  "scopeExcludes": [
    // Copy from template
  ],

  "clientRules": [
    // ALWAYS use the 3 standardized rules
  ],

  "faqs": [
    // ALWAYS use the 5 standardized questions
  ],

  "about": {
    // Standard DA about section
  },

  "testimonials": [
    // Use from homepage or select relevant ones
  ]
}
```

### Step 3: Customize Client-Specific Content

**Required Customizations:**
1. **Situation Points** - Mirror the client's specific pain points and goals (4-6 points)
2. **Headline/Subheadline** - Make it specific to their industry/needs
3. **Qualification Criteria** - Adjust based on their business model (5 criteria)
4. **ROI Defaults** - Set realistic numbers for their industry
5. **Pricing (phases)** - Customize based on scope and channel mix
6. **Guarantee** - Customize based on confidence level and client needs
7. **Case Studies** - Select relevant examples from DA website
8. **Testimonials** - Select 4 relevant testimonials

**DO NOT Customize:**
- **includedFeatures** (10 universal benefits) - Keep these exactly as is
- **clientRules** (3 standardized rules) - Keep these exactly as is
- **FAQs** (5 questions) - Keep questions the same, can adjust answers slightly for channel

### Step 4: Set Pricing

All inbound channels follow the **60-day implementation model**:

**Phase 1: 60-Day Build & Proof Phase**
- Implementation fee (customized per client and channel mix)
- Media spend (for paid channels, minimum thresholds apply)

**Phase 2: Month 3+ Ongoing**
- Monthly management fee (customized per client)
- Media spend continues at agreed minimums

**Example (Google Ads + Meta):**
```json
"phases": [
  {
    "name": "60-Day Build & Proof Phase",
    "items": [
      { "label": "Multi-Channel Campaign Strategy & Build", "amount": 3000 },
      { "label": "Landing Page Development", "amount": 2000 }
    ]
  },
  {
    "name": "Monthly Management (Month 3+)",
    "items": [
      { "label": "Google + Meta Campaign Management", "amount": 2500 }
    ]
  },
  {
    "name": "Ad Spend (Minimum)",
    "items": [
      { "label": "Combined Google + Meta Budget", "amount": 2500 }
    ]
  }
]
```

**Note:** Month-to-month after 60 days (no long contracts)

## Content Positioning Principles

### Benefit-First Positioning

**What's Included = Outcomes** (what they get)
- "High-Converting Landing Pages" (not "We build landing pages")
- "ROI Tracking & Attribution" (not "We set up Google Analytics")

**Deliverables = Execution** (what we build)
- "Google Ads account setup and campaign build"
- "Conversion-focused landing page design and development"

### Outcome Over Activity

❌ **Don't say:** "We do keyword research and competitor analysis"
✅ **Do say:** "Know exactly which campaigns are delivering your highest-value opportunities"

❌ **Don't say:** "We set up call tracking"
✅ **Do say:** "Record every call to track quality, identify winning keywords, and train your team"

### High-Level Over Granular

Keep deliverables at a high level - don't list every sub-task:

❌ **Too granular:**
- Negative keyword research
- Quality Score optimization
- Ad extension testing
- Bid adjustment by device

✅ **High-level:**
- Ongoing campaign optimization (daily bid management, ad testing, budget allocation)

## Lead Qualification vs. Pre-Screening

**Important distinction:**

**We DO:**
- Strategic targeting (ads only show to relevant searches/audiences)
- Lead tracking and classification (post-capture in What Converts)
- Lead scoring based on criteria

**We DON'T:**
- Manually screen leads before handoff to client
- Delay lead delivery for qualification
- Block leads from reaching the client

**Positioning:**
> "Strategic targeting ensures your ads only show to high-intent searchers actively looking for your services. Lead management system lets you classify and score every inquiry, so we can optimize toward your highest-value sources."

## Guarantee Guidelines

Guarantees should be:
1. **Specific** - Define clear metrics (e.g., "15 qualified opportunities")
2. **Timebound** - Set clear window (e.g., "first 90 days")
3. **Conditional** - Require client adherence to stipulations
4. **Actionable** - Clear consequence if not met (e.g., "free management until we do")

**Example:**
> "If we don't deliver at least 15 qualified opportunities in the first 90 days, we'll manage your campaigns for free until we do."

**Stipulations:**
- Minimum 90-day commitment required
- Ad spend maintained at recommended levels
- Client must follow up on leads within 4 business hours
- All lead outcomes tracked in What Converts system

## Case Studies & Testimonials

### Case Studies
- Pull from existing DA website
- Select 2-3 relevant examples per proposal
- Match industry/service type when possible

### Testimonials
- Use scrolling testimonials from homepage
- Select 4 testimonials
- Include company name and badge (industry/service type)

## File Naming Convention

Proposal JSON files should use this format:
```
/src/data/proposals/[client-slug].json
```

Examples:
- `security-system-solution.json`
- `commercial-roofing-company.json`
- `dental-practice-marketing.json`

## Validation Checklist

Before finalizing a proposal, verify:

- [ ] 10 universal benefits in `includedFeatures`
- [ ] Channel-specific deliverables (8-10 items, high-level)
- [ ] 3 standardized client rules
- [ ] 5 standardized FAQ questions
- [ ] Customized situation points (4-6 items)
- [ ] Customized qualification criteria (5 items)
- [ ] Customized pricing phases (60-day model)
- [ ] Customized guarantee (specific, timebound, conditional)
- [ ] Relevant case studies (2-3)
- [ ] Relevant testimonials (4)
- [ ] ROI defaults set for industry
- [ ] Scope includes/excludes match channel
- [ ] Expiration date set (typically 30 days from creation)

## Common Mistakes to Avoid

1. **Mixing benefits and deliverables** - Keep them separate and clear
2. **Getting too granular in deliverables** - Stay high-level
3. **Changing universal benefits** - Use the same 10 for all channels
4. **Customizing client rules or FAQ questions** - Keep standardized
5. **Forgetting the 60-day pricing model** - All inbound follows this structure
6. **Selling Meta Ads standalone** - Always bundle with Google Ads
7. **Positioning leads as "pre-screened"** - They go direct to client, tracked post-capture
8. **Over-promising on SEO timelines** - Set expectations for 3-6 months
9. **Using setup fees for SEO** - Flat monthly pricing only
10. **Missing stipulations on guarantee** - Always include conditions

## Questions?

If you need to add new channels (Web Dev, Outbound) or have questions about these templates, refer to the plan file at:
`/Users/daniel/.claude/plans/polymorphic-imagining-prism.md`

---

**Last Updated:** December 9, 2025
**Version:** 1.0
**Status:** All inbound channels finalized (Google Ads, SEO, Meta Ads)
