# Fourfold.ai Website Restructure: Implementation Plan

**For:** Claude Code implementation
**Date:** March 20, 2026
**Stack:** Next.js on Vercel
**Project:** `fourfold-website` (prj_fbqhSKCNrvruS9A5Ik8uP0NSkRIs)
**Team:** `team_cMKAJfruVBZLppsLIZ5AUzfn`
**Domains:** fourfold.ai, www.fourfold.ai

---

## Important: Do Not Modify

**`/build` route:** The page at `www.fourfold.ai/build` is a standalone landing page that is intentionally not linked from the site navigation. Do NOT modify, move, redirect, or reference this page in any way. Leave it exactly as-is.

---

## Overview

Restructure the fourfold.ai site from 3 pages to 4 pages + blog. The homepage gets dramatically leaner. ODM moves to the blog. A new /pact page is added. Every page drives to the Tally form CTA.

### Architecture Change

```
CURRENT                              NEW
────────────────────                 ────────────────────
/ (7 sections)                  →    / (5 lean sections)
/how-we-work                    →    /how-we-work (streamlined)
/outcome-driven-management      →    /pact (NEW page)
                                →    /blog (NEW, with ODM as first post)
```

### New Navigation

```
How We Work  |  The Platform  |  Blog  |  [Tell Us Your Idea] (gold CTA button)
```

- "How We Work" → /how-we-work
- "The Platform" → /pact
- "Blog" → /blog
- "Tell Us Your Idea" → /#contact (or Tally form link)
- Remove "Our Approach" nav item entirely

---

## Brand Guide Reference

Follow these rules for ALL copy:

- **Naming:** "Fourfold" in headers, CTAs, branded elements. "Pact" in narrative/body copy.
- **No em dashes** (— character). Use commas, periods, or restructure.
- **No connector words:** "Furthermore," "Additionally," "Moreover." Just start the next sentence.
- **Contractions always:** "didn't" not "did not," "it's" not "it is."
- **Short paragraphs:** 2-3 sentences max.
- **No banned terms:** "synergy," "leverage" (as cliché), "innovative," "transformative," "disruption/disruptive," "prototype" (use "working product"), "developer/coder" (use "senior engineer"), "high quality/top quality" (use "enterprise-grade"), "project/contract" in marketing context (use "engagement").
- **No "software factory"** on the website. Describe the concept without the term.
- **Speed claims always paired with quality.**
- **No filler:** No "In today's fast-paced world..."

### Colors

| Token | Hex | Usage |
|---|---|---|
| Navy Dark | #0f2847 | Primary dark background, hero sections |
| Gold | #c8a44e | CTAs, highlights, accents |
| Gold Light | #dfc07a | Secondary gold, attribution text on dark |
| Sand | #faf8f4 | Warm off-white backgrounds |
| White | #ffffff | Content section backgrounds |
| Slate 600 | #475569 | Body text |
| Slate 900 | #0f172a | Headings on light backgrounds |

### Typography

| Role | Font |
|---|---|
| Headings | Fraunces (serif), bold |
| Body | Outfit (sans-serif) |

---

## Page 1: Homepage `/`

**Goal:** Hook visitors in 30 seconds. Answer: Why you, Why us, Why now. Route to deeper pages or the Tally form. Cut everything else.

### What to remove from the current homepage

- **"The Economics of Building Changed"** section (3 paragraphs) → condensed into "Why Now"
- **"You Have the Hardest Part Figured Out"** section (4 paragraphs) → condensed into "Why You"
- **"How It Works"** 4-step section → cut (already on /how-we-work)
- **"Why Fourfold Delivers Differently"** 4-feature section → moved to /how-we-work
- **"Who This Is For"** 4-persona section → cut entirely

### New homepage structure (5 sections)

---

#### Section 1: Hero
**Background:** Navy Dark (#0f2847)

```
HEADING: Your idea. Our engineering. Two weeks.
         (keep "Two weeks." as the gold-accented line break, matching current style)

BODY:
Fourfold builds working software products in two weeks for $5K. You bring
the market expertise. We bring a production system that turns it into
enterprise-grade software.

CTA BUTTON (gold): Tell Us Your Idea → links to #contact / Tally form

PROOF LINE (smaller, gold-light text):
We recently helped a client go from kickoff to working demo in 4 days.
By week 2, they were onboarding customers.
```

---

#### Section 2: Why You
**Background:** White (#ffffff)

```
HEADING: You already have the hardest part figured out.

BODY:
The best products don't come from people who know how to code. They come
from people who deeply understand a problem. You've done the research.
You know what needs to exist. You just need a team that can build it
without burning six months and six figures to find out if it works.

ROUTING BUTTON (outline or secondary style): See How We Build → /how-we-work
```

---

#### Section 3: Why Us
**Background:** Sand (#faf8f4)

```
HEADING: A production system, not a dev shop.

BODY:
Fourfold isn't a freelancer with AI tools. Every engagement runs on Pact,
a coordination platform that orchestrates AI agents, senior engineers,
and your team's context into a single delivery pipeline.

The agents build. The engineers make judgment calls. The platform handles
coordination, quality gates, and approvals. And it learns your
organization, so every engagement is faster and more precise than the last.

ROUTING BUTTON (outline or secondary style): Meet the Platform → /pact
```

---

#### Section 4: Why Now
**Background:** White (#ffffff)

```
HEADING: The economics of building changed. Most people missed it.

BODY:
A year ago, building a software product meant six figures and six months
before you knew if anyone wanted it. AI rewrote that math. A senior
engineer on Pact can now build in days what used to take a team weeks.

The gap between "I have an idea" and "I have a product" has never been
smaller.

BOLD LINE: $5K. Two weeks. A working product.

CTA BUTTON (gold): Tell Us Your Idea → #contact / Tally form

SUBTEXT (small): No commitment. No jargon. Just a real conversation
about what you're building.
```

---

#### Section 5: Tally Form
**Background:** Navy Dark (#0f2847)

```
HEADING: Tell Us Your Idea

BODY:
A few sentences is plenty. We'll get back to you within 48 hours.

[TALLY FORM EMBED — keep the existing Tally form embed here]

SUBTEXT: No commitment. No jargon. Just a real conversation about your idea.
```

---

## Page 2: How We Work `/how-we-work`

**Goal:** For visitors who clicked "See How We Build." Show the process, prove the quality, drive to Tally form. Streamlined from current version.

### What changes from current /how-we-work

- New "A System, Not Just a Team" hero replaces current hero
- "A Delivery Model Built for AI Speed" section removed (absorbed into new hero)
- "Custom AI Agents for Your Project" section removed (covered by /pact now)
- Two-week timeline stays but gets tightened
- "What Makes This Different" section rebuilt (incorporates "Why Fourfold Delivers Differently" from old homepage)
- "What You Get" section stays, gets condensed to one paragraph
- CTA added at bottom

### New structure

---

#### Section 1: Hero
**Background:** Navy Dark (#0f2847)

```
HEADING: Fast doesn't mean reckless.
         (keep "reckless." as the gold-accented line, matching current style)

BODY:
Fourfold delivers working products in two weeks by combining senior
engineers who've mastered AI-assisted development with Pact, a production
system that handles the coordination.

CTA BUTTON (gold): Tell Us Your Idea → Tally form
```

---

#### Section 2: The Process
**Background:** White (#ffffff)

```
HEADING: How It Works

STEP 1 HEADING: Tell us your idea.
STEP 1 BODY: Not a business plan. Just the problem you're solving, who
it's for, and what "working" looks like.

STEP 2 HEADING: We scope it together.
STEP 2 BODY: Within 48 hours, we define the MVP: the smallest version of
your product that proves the concept.

STEP 3 HEADING: We build it.
STEP 3 BODY: Senior engineers build your product on Pact. AI agents
handle the production work. Engineers handle the architecture and quality.
Pact handles the coordination, tracking, and risk detection.

STEP 4 HEADING: You decide what's next.
STEP 4 BODY: Two weeks later, you have a functional product you can demo,
test with customers, or show investors. We deliver a technical roadmap so
you know exactly where to go from here.
```

---

#### Section 3: What Makes This Different
**Background:** Sand (#faf8f4)

```
HEADING: Why Fourfold delivers differently.

ITEM 1 HEADING: Engineers who've mastered AI development.
ITEM 1 BODY: Our senior engineers don't use AI as autocomplete. They've
mastered how to structure code properly, prevent hallucination-related
bugs, and use AI tools to produce enterprise-grade output.

ITEM 2 HEADING: A system that coordinates everything.
ITEM 2 BODY: Every engagement runs on Pact. The platform tracks progress,
detects risks, routes decisions, manages quality gates, and keeps your
team informed, all automatically.

ITEM 3 HEADING: Your second engagement is faster than your first.
ITEM 3 BODY: Pact learns your organization: approval chains, security
requirements, compliance needs, team preferences. That knowledge
compounds. Contractors start fresh every time. Pact remembers.

ITEM 4 HEADING: Outcome-based pricing.
ITEM 4 BODY: $5K for a working product. We charge for the engagement,
not hours. Our incentive is to deliver, not to extend.
```

---

#### Section 4: What You Get
**Background:** White (#ffffff)

```
HEADING: What you walk away with.

BODY:
A working product that real users can interact with. Full code ownership,
your IP, no lock-in. A technical roadmap with clear documentation of
what was built, how it's structured, and where to go next. Real-time
visibility throughout the engagement via Pact. And an honest assessment:
if we think you should pivot, scale up, or walk away, we'll tell you.
```

---

#### Section 5: CTA
**Background:** Navy Dark (#0f2847)

```
HEADING: Ready to build?

CTA BUTTON (gold): Tell Us Your Idea → Tally form
```

---

## Page 3: The Platform `/pact`

**Goal:** Explain what Pact is and why it matters. For visitors who clicked "Meet the Platform" from homepage, or who arrived from blog/thought leadership.

### This is a new page. Create it from scratch.

---

#### Section 1: Hero
**Background:** Navy Dark (#0f2847)

```
HEADING: Fourfold runs on Pact.

SUBHEADING: A production system for AI-powered software delivery.

BODY:
Pact is what makes Fourfold possible. It's the coordination platform
that turns AI agents, senior engineers, and your organizational context
into a continuous delivery pipeline.

You don't manage Pact. You don't even see most of it. You just see the
result: working software, delivered fast, built to your standards.
```

---

#### Section 2: Three Layers
**Background:** White (#ffffff)

```
HEADING: Three layers. One system.

SUBHEADING 1: AI Agents
BODY 1: Pact's agents handle the production work. They spec features,
write code, run tests, conduct reviews, generate documentation, and
manage deployments. Each agent is purpose-built for its role. Together,
they produce the volume of output that used to require a full
engineering team.

SUBHEADING 2: Coordination Engine
BODY 2: Agents alone aren't enough. Pact routes work through quality
gates, manages approval workflows, sequences dependencies, and surfaces
risks before they become blockers. It integrates with your existing
tools and meets your team where they already work.

SUBHEADING 3: Institutional Memory
BODY 3: This is what separates Pact from a collection of AI tools.
Every engagement builds a model of your organization: your approval
chains, compliance requirements, data structures, security standards,
and team preferences. That model persists and improves. Your second
engagement is faster than your first. Your third is faster still.
```

---

#### Section 3: Who It's For
**Background:** Sand (#faf8f4)

```
HEADING: You need custom software. You don't need an engineering department.

ITEM 1 HEADING: Teams without engineering bandwidth.
ITEM 1 BODY: Your marketing, sales, HR, or ops team knows exactly what
tool they need. They just can't get on the engineering roadmap. Pact lets
them ship without waiting.

ITEM 2 HEADING: Founders and solopreneurs.
ITEM 2 BODY: You want to ship a real product, not a slide deck. Pact
gives you production-grade engineering capacity without hiring a team.

ITEM 3 HEADING: Companies that keep building.
ITEM 3 BODY: You don't need one app. You need an ongoing ability to turn
ideas into working software. Pact compounds knowledge across engagements,
so every engagement builds on the last.
```

---

#### Section 4: Pact + Fourfold
**Background:** Navy Dark (#0f2847)

```
HEADING: The system and the service.

BODY:
Pact is the platform. Fourfold is how you access it.

When you work with Fourfold, you get a senior engineer who makes the
judgment calls, the architectural decisions, and the quality guarantees.
Behind that engineer is Pact: handling the production volume, the
coordination, and the institutional memory that makes everything move
faster.

$5K. Two weeks. A working product and a system that already knows
your business.

CTA BUTTON (gold): Tell Us Your Idea → Tally form
```

---

## Page 4: Blog `/blog`

**Goal:** Thought leadership hub. Establish credibility. Drive inbound. Each post ends with CTA to Tally form.

### Blog setup

Create a `/blog` route with:
- Blog index page listing posts (title, date, short excerpt)
- Individual post pages at `/blog/[slug]`
- Simple, clean layout matching the site's existing typography and colors
- Each post ends with a consistent CTA block (see template below)

### Blog post CTA template (appears at bottom of every post)

**Background:** Sand (#faf8f4) with gold left-border accent

```
HEADING: We're building this.

BODY:
Fourfold is Pact's AI-managed consultancy. We deliver working software
products in two weeks for $5K, powered by the production system described
above. If you've got an idea, tell us about it.

CTA LINK: Tell Us Your Idea → Tally form (or /#contact)
```

### Blog Post 1: Outcome-Driven Management

**Slug:** `/blog/outcome-driven-management`
**Title:** Outcome-Driven Management: A New Operating System for Work
**Date:** March 20, 2026
**Author:** Fourfold.ai

**Intro paragraph (new, not on current ODM page):**

```
We built Pact on a simple conviction: management should measure what
matters, not what's easy to count. Most organizations track tasks,
hours, and status updates. None of those tell you whether the actual
business result is on track.

That's why we developed Outcome-Driven Management (ODM), the operating
framework behind everything Pact does. Here's how it works, and why it
matters more now than ever.
```

**Body content:**

Migrate the full content from the current `/outcome-driven-management` page into this blog post. Preserve all section headings, body copy, and structure. The sections are:

1. "Modern Work Has Changed, but Management Hasn't." (3 sub-points)
2. "Rule-driven processes inherently introduce risk..." (2 numbered points)
3. "ODM is a framework designed to make outcomes, not rules, the atomic unit of work." (4 core concepts: Outcomes Not Tasks, Ownership Across Silos, Real-Time Escalation, Power of Chains)
4. "Three forces make ODM essential:" (Acceleration, Accountability, Agents)
5. "ODM Implementation: The Algorithm" (Measurable, Assignment, Example, the 3-step algorithm)
6. "How Everyone Becomes an Outcome Manager with ODM" (business owner benefits, example)
7. "Who Benefits Most From ODM" (Organizations Using AI Agents, Services Companies, Executives)
8. "Getting Started with ODM"

**Updated closing (replaces current "Getting Started" last paragraph):**

```
ODM can be implemented in a week in small teams and then scaled across
entire organizations. Pact is the AI management layer that makes ODM
operational: tracking outcomes, surfacing risks, coordinating work across
people and AI agents, and compounding organizational knowledge with every
engagement.
```

**Then the standard blog CTA block follows.**

---

## Routing and Redirects

### Add redirect: `/outcome-driven-management` → `/blog/outcome-driven-management`

Since the ODM page currently exists and may have external links pointing to it, set up a 301 redirect so visitors land on the blog post instead of a 404.

In Next.js, add to `next.config.js` (or `next.config.mjs`):

```js
async redirects() {
  return [
    {
      source: '/outcome-driven-management',
      destination: '/blog/outcome-driven-management',
      permanent: true,
    },
  ]
}
```

---

## Footer Updates

Update the footer navigation to match the new nav:

```
CURRENT:
How We Work | Our Approach | Contact

NEW:
How We Work | The Platform | Blog | Contact
```

- "The Platform" → /pact
- "Blog" → /blog
- "Contact" → /#contact
- Remove "Our Approach"

---

## CTA Inventory (Every page must drive to Tally form)

| Page | CTA Locations |
|---|---|
| Homepage | Hero button, "Why Now" button, Tally form embed at bottom |
| /how-we-work | Hero button, bottom "Ready to build?" section |
| /pact | Bottom "Pact + Fourfold" section |
| /blog index | Optional subtle CTA in sidebar or below post list |
| /blog/[post] | End-of-post CTA block (standard template) |

No page should have zero CTAs. No page should end without a clear next step.

---

## Implementation Order

1. **Create `/pact` page** (new page, no dependencies)
2. **Create `/blog` route and blog post template** (new, no dependencies)
3. **Create first blog post** (ODM content migrated from /outcome-driven-management)
4. **Update navigation** (header and footer: add "The Platform" and "Blog," remove "Our Approach")
5. **Add redirect** from /outcome-driven-management → /blog/outcome-driven-management
6. **Restructure homepage** (replace 7 sections with 5 lean sections)
7. **Streamline /how-we-work** (rebuild with new structure above)
8. **Test all routes, CTAs, and the redirect**
9. **Deploy**

---

## Notes for Implementation

- **Tally form:** Keep the existing Tally form embed. If it's currently loaded via script tag or iframe on the homepage contact section, replicate the same embed wherever a Tally form is needed. Don't create a new form.
- **Visual style:** Match the existing site's section patterns: alternating Navy Dark / White / Sand backgrounds, Fraunces headings, Outfit body text, gold accent on CTAs and highlights.
- **Responsive:** Ensure new pages match the existing responsive behavior (the site already has a mobile menu toggle).
- **Metadata:** Add appropriate `<title>` and `<meta description>` for new pages:
  - `/pact`: Title: "The Platform — Fourfold.ai" | Description: "Pact is the production system behind Fourfold. AI agents, coordination, and institutional memory in one delivery pipeline."
  - `/blog`: Title: "Blog — Fourfold.ai"
  - `/blog/outcome-driven-management`: Title: "Outcome-Driven Management: A New Operating System for Work — Fourfold.ai"
