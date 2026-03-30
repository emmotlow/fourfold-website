# Landing Page Spec: fourfold.ai/build

## Overview

A conversion-focused landing page for non-technical founders who've already tried building their product using no-code tools, vibe coding, or freelancers and hit a wall. This page speaks to the person who's past the "I have an idea" stage. They've already invested time and energy. They know what they want. They just can't get there alone.

This is the page Erin links to from Reddit replies, LinkedIn posts, outreach emails, and eventually paid ads. It complements the homepage (which speaks to anyone with an idea) by speaking specifically to founders who've already tried and failed to build.

**Route:** `/build` (fourfold.ai/build)

**Tech stack:** Next.js (matches existing site), deployed on Vercel. Use the existing layout, fonts (Fraunces for headings, Outfit for body), and color tokens. This page should feel like a native part of fourfold.ai, not a separate microsite.

---

## Brand Guide (must follow)

### Colors
| Token | Hex | Usage |
|---|---|---|
| Navy Dark | #0f2847 | Hero background, pull quote blocks |
| Navy | #1e3a5f | Secondary dark, accent text |
| Gold | #c8a44e | CTAs, highlights, key metrics, left-border accents |
| Gold Light | #dfc07a | Attribution text on dark backgrounds |
| Sand | #faf8f4 | Alternating section backgrounds |
| White | #ffffff | Content sections |
| Slate 600 | #475569 | Body text |
| Slate 900 | #0f172a | Headings on light backgrounds |

### Typography
- **Headings:** Fraunces (serif), bold, tight tracking
- **Body:** Outfit (sans-serif)

### Voice rules (critical)
- Confident, not corporate. Short sentences. No jargon.
- Founder to founder over coffee. The reader is an equal.
- Concrete over abstract. Numbers over adjectives.
- No filler. No "In today's fast-paced world..."
- Contractions always. "Didn't" not "did not."
- No em dashes. Use commas, periods, or restructure.
- No connector words (Furthermore, Additionally, Moreover).
- Use "working product" not "prototype" or "mockup."
- Vary sentence length. Mix long and short.
- The customer is the hero. Lead with their problem.
- Speed paired with quality. Always. Never claim speed alone.
- Pricing is approved for public marketing: $5K / 2 weeks.

### Terminology
| Use | Instead of |
|---|---|
| working product | prototype, mockup, demo |
| enterprise-grade | high quality |
| senior engineer | developer, coder |

---

## Page Structure

The page uses alternating section backgrounds (navy dark, white, sand) consistent with the existing site. Sections flow vertically. No sidebar. Mobile-first responsive.

---

### Section 1: Hero (Navy Dark background)

**Gold kicker (small caps, gold text above heading):**
`YOU'VE ALREADY TRIED. NOW LET'S ACTUALLY BUILD IT.`

**Headline (Fraunces, large, white):**
`You did the hard part. Now let's build the real thing.`

**Subhead (Outfit, Slate 300/light gray, 2 lines max):**
`Fourfold turns your existing work, wireframes, Bubble apps, Figma files, or even a napkin sketch, into a production-grade product in two weeks for $5K.`

**CTA button (Gold background, Navy Dark text, rounded):**
`Tell Us What You've Built So Far →`

Button scrolls to the form at the bottom of the page.

**Design notes:**
- No hero image. Let the typography breathe.
- The kicker line creates instant recognition: "this page is for me."
- The headline reframes their no-code attempt as progress, not failure.

---

### Section 2: The Problem (White background)

**Section heading (Slate 900):**
`Sound familiar?`

Three cards in a horizontal row (stack vertically on mobile). Each card has a gold left-border accent (4px), Sand background, and a short scenario.

**Card 1:**
**"I built it in Bubble, but it's too slow to scale."**

**Card 2:**
**"I used Cursor/Lovable/Bolt, but I'm stuck."**

**Card 3:**
**"I hired a freelancer and got burned."**

**Design notes:**
- Headlines only. No body copy on the cards. The visitor reads one and thinks, "That's literally me." The recognition is instant; explanation would dilute it.
- These three scenarios are the exact situations surfacing in Reddit posts.

---

### Section 3: How It Works (Sand background)

A single horizontal strip (four columns on desktop, stack on mobile). No section heading needed. Minimal, visual, scannable.

**Layout:** Four numbered gold circles connected by a thin gold line. One bold label + one short sentence each.

| Step | Label | Detail |
|------|-------|--------|
| 1 | **Tell us what you've got.** | A few sentences and a screenshot. That's it. |
| 2 | **We scope the MVP.** | 48 hours. You'll know the exact cost and timeline. |
| 3 | **We build it.** | Senior engineers. AI speed. Two weeks. |
| 4 | **You own a working product.** | Code, deployment, documentation. All yours. |

**Design notes:**
- This is a process strip, not a narrative section. Think of it like a visual timeline, not a wall of text.
- One line per step. No paragraphs.

---

### Section 4: Proof (Navy Dark background)

**Section heading (Gold Light text):**
`What $5K and two weeks actually produces.`

**Case Study Card: Planorize**

A single featured case study card with the following structure:

- Gold left-border accent
- Customer quote in large italic text: **"Pact built in 2 weeks what another vendor had quoted at 4 months."**
- Attribution below quote (Gold Light text): **— Whitney Elliott, Owner, Planorize**
- Key metrics in a horizontal row (gold text): "Kickoff to working demo: 4 days" · "Alpha testers onboarding: Week 2"

**Below the card, a simple text line (Gold Light):**
`More case studies coming soon. Every engagement teaches us something new.`

**Design notes:**
- Only feature case studies Erin has approved. Start with Planorize. Add Pull Signal when ready.
- The "More coming soon" line is honest and creates a sense of momentum.
- This section should be easy to extend: just add more cards as case studies are completed.

---

### Section 5: Objection Handling (Sand background)

**Section heading (Slate 900):**
`The questions you're already asking.`

Accordion-style FAQ. Each item expands on click. Gold accent on the expand icon.

**Q: "$5K sounds too cheap. What's the catch?"**
A: No catch. AI collapsed the cost of building software. We pass those economics to you. All AI tooling and token costs are included in the $5K.

**Q: "I already have a Bubble/no-code app. Can you work with that?"**
A: Yes. We'll review what you've built and rebuild the core in production code. You won't start from zero.

**Q: "Who actually builds this?"**
A: Senior engineers who've mastered AI-assisted development. Every line is human-reviewed.

**Q: "What does the engagement actually look like?"**
A: We start with a kickoff call. Then you get a dedicated WhatsApp group where you share thoughts, feedback, and priorities in real time. Our AI agents listen to the conversation and keep the engineering team aligned, so you're always in the loop without status meetings.

**Q: "What happens after the MVP is delivered?"**
A: You own everything. Code, deployment, documentation. If you want ongoing support, we offer a $1K/month plan that covers hosting, maintenance, and limited feature adjustments. Or take it to your own team. No lock-in.

---

### Section 6: CTA / Form (Navy Dark background)

**Section heading (White, Fraunces):**
`You've put in the work. Let's finish it.`

**Subhead (Slate 300):**
`Tell us what you've built so far. A few sentences is plenty. We'll get back to you within 48 hours.`

**Form fields:**
Use the same form component as the homepage "Tell Us Your Idea" form, but with one additional optional field:

1. **Name** (text, required)
2. **Email** (email, required)
3. **What's your idea?** (textarea, required) — same as homepage
4. **What have you tried so far?** (textarea, optional) — NEW field. Placeholder text: "Bubble app, vibe coding with Cursor, hired a freelancer, etc."

**Submit button (Gold background, Navy Dark text):**
`Let's Build →`

**Below form, small text (Slate 400):**
`No commitment. No jargon. Just a real conversation about what you've built and where you want it to go.`

**Design notes:**
- The additional "What have you tried so far?" field serves two purposes: (1) it qualifies the lead by confirming they've attempted building, and (2) it gives Erin immediate context for the reply.
- If the homepage form submits to a specific endpoint or email, this form should submit to the same place with a `source: /build` tag so Erin can distinguish landing page leads from homepage leads.

---

### Section 7: Footer

Use the existing site footer. Keep it consistent.

---

## UTM and Tracking

The page should support UTM parameters for attribution:
- `?utm_source=reddit&utm_medium=social&utm_campaign=social-listening` (from Reddit replies)
- `?utm_source=linkedin&utm_medium=social&utm_campaign=thought-leadership` (from LinkedIn)
- `?utm_source=email&utm_medium=outreach&utm_campaign=direct` (from emails)

If the site uses any analytics (Vercel Analytics, Plausible, etc.), ensure the `/build` route is tracked separately from the homepage.

---

## SEO

**Title tag:** `Build Your MVP in Two Weeks for $5K | Fourfold`
**Meta description:** `Outgrew your no-code tool? Fourfold's senior engineers build production-grade MVPs in two weeks for $5K. Bring your Bubble app, Figma mockup, or idea. We'll build the rest.`
**H1:** The hero headline (only one H1 on the page)
**Canonical:** `https://www.fourfold.ai/build`

Target keywords (secondary, woven into copy naturally):
- MVP development
- build my app
- no-code to production
- affordable app development
- non-technical founder
- Bubble alternative
- vibe coding limitations

---

## Mobile Considerations

- Hero: stack headline and CTA vertically. Kicker text stays above headline.
- Problem cards: stack vertically (full width each).
- Timeline: gold line stays on left, steps stack vertically.
- FAQ: full width accordion, tap to expand.
- Form: full width, single column.
- Ensure the CTA button is visible without scrolling on mobile (sticky bottom bar, or hero CTA is above the fold).

---

## What to Build First

This page is intentionally lean. Six sections, mostly visual. No long paragraphs. The copy that exists is precise; the whitespace does the rest. Priority order:

1. Get the route `/build` set up with the existing layout/nav/footer
2. Build sections 1-3 (hero, recognition cards, process strip)
3. Add the form (Section 6), reusing the homepage form component with the extra field
4. Add the case study card (Section 4) with the Planorize quote
5. Add the FAQ accordion (Section 5) — 6 items, keep answers short
6. SEO meta tags and UTM parameter handling
7. Test on mobile

---

## Copy Guidance for Claude Code

All copy in this spec is final draft quality and follows the Fourfold brand guide. Claude Code should use this copy verbatim unless adjusting for layout constraints. If any copy needs to be shortened or rewritten, follow these rules:

- No em dashes
- No connector words (Furthermore, Additionally, Moreover)
- Contractions always
- Short paragraphs (2-3 sentences max)
- Numbers over adjectives
- "Working product" not "prototype" or "mockup"
- Customer is the hero, not Fourfold
- Honest and grounded. No superlatives.
