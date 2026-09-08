# The Swamp presentation notes

## One-line pitch

**The Swamp turns scattered fan signals into a confident next move—in 48 hours, with receipts.**

The product is not another reporting dashboard. It is the decision layer between fragmented analytics and a marketer’s judgment.

## Five-minute deck

### 1. The swamp (0:00–0:40)

Marketing already has data. The problem is that it arrives in different tools, at different speeds, with no shared definition of “this should change our plan.”

**Slide:** fragmented screenshots and inputs converging on one unanswered question: “What should we do next?”

### 2. The decision contract (0:40–1:20)

Introduce the **K·E·Y.** framework:

- **K — Keep it simple:** name one repeated signal, not 20 metrics.
- **E — Explain the point:** show what it means, who is driving it, and the supporting comments.
- **Y — Your next step:** name a time-bound action, owner, audience, and test.

**Slide:** the three-column K·E·Y. rail from the website.

### 3. Show, don’t tell (1:20–3:10)

Demo this path in the prototype:

1. Read the red momentum signal.
2. Move across the K·E·Y. decision rail.
3. Open **View 31 source posts** to show traceability.
4. Point to the specific audience shift and the demographic coverage caveat.
5. Add the strategist’s cultural lens and approve the move.
6. Select **Prepare artist brief** to reveal the live-page / Google Docs / HTML handoff.

Narration: “AI finds repetition. The team decides whether it matters.”

### 4. Why the team can trust it (3:10–4:05)

Every recommendation includes:

- Source posts, timestamp, and platform contribution
- Pattern count and comparison baseline
- Confidence and data-coverage caveats
- A human cultural read and explicit approval
- A record of the decision and its owner

This makes the AI layer inspectable rather than magical.

### 5. How to build it (4:05–5:00)

Start with one artist, one active campaign, and one decision loop:

```text
Approved APIs + link intake sheet
              ↓
Normalized campaign event model
              ↓
Pattern + sentiment enrichment
              ↓
Evidence-backed signal registry
              ↓
K·E·Y. decision room → human approval → artist brief
              ↑                              ↓
              └────── outcome feedback ─────┘
```

Eight-week prototype path: **Connect → Normalize → Prove → Decide.** Do not wait for a perfect enterprise data lake before testing whether the decision workflow is useful.

## Recommendations beyond the initial concept

1. **Make the atomic unit a decision, not a dashboard.** Store each signal with its evidence, interpretation, action, owner, and observed outcome.
2. **Use recurrence plus velocity—not sentiment alone.** Sarcasm, multilingual slang, fandom language, and platform culture make a single sentiment score too brittle for strategy.
3. **Add a signal threshold policy.** For example: surface a “move” only when a pattern crosses a campaign-relative baseline, repeats across at least two platforms, or has enough high-quality source evidence. Everything else stays in “watch.”
4. **Separate internal and artist-safe layers.** Internal views may include uncertainty, competing interpretations, and tactical owners. Shared briefs should be concise, confident, and stripped of sensitive details.
5. **Preserve source-level provenance.** Every AI sentence should be traceable to posts, queries, date ranges, and model/prompt versions. Show unavailable or partial demographic coverage explicitly.
6. **Close the learning loop.** Record whether the team acted and what changed afterward; that is how the system learns which patterns matter to this label and artist—not just what patterns exist.
7. **Measure operating value.** Track median time from signal to decision, percentage of recommendations acted on, false-positive / reversal rate, test lift, and brief adoption. Follower counts and sentiment are inputs, not proof that the system works.
8. **Use approved platform access.** Keep the spreadsheet as a useful human-curation queue, but fetch through official or licensed APIs where possible instead of assuming every URL can be reliably scraped.

## What current products validate

- [Sprout Social Listening](https://sproutsocial.com/features/social-media-listening/) validates cross-network monitoring, sentiment analysis, demographics, and AI summaries—but the opportunity here is an artist-specific decision and approval workflow.
- [Brandwatch Listen](https://www.brandwatch.com/products/listen/) validates real-time trend detection, unusual-change alerts, and source-level exploration.
- [Spotify for Artists audience segments](https://artists.spotify.com/blog/introducing-new-audience-segmentation-on-spotify-for-artists) validate framing audiences by relationship and movement toward fandom rather than only reporting totals.
- [YouTube Analytics dimensions](https://developers.google.com/youtube/analytics/dimensions) validate access to country and age-group cuts while also illustrating why each platform needs its own coverage rules.
- [Google Cloud’s human-in-the-loop pattern](https://docs.cloud.google.com/architecture/choose-design-pattern-agentic-ai-system) and the [NIST Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf) support explicit human review, provenance, and evaluation against organization guidelines for judgment-heavy AI workflows.

## Likely questions

**Why not just use Sprout or Brandwatch?**

Use them as listening inputs where available. The Swamp is the label-specific system of action: it combines source evidence with artist context, the team’s cultural lens, ownership, and outcome learning.

**Does AI make the decision?**

No. It finds repeated language, movement, and audience shifts. A marketer supplies the cultural interpretation and approves the move.

**What is the smallest useful version?**

One active campaign, three sources, the K·E·Y. template, source links, human approval, and one shareable brief.

**How do we know it works?**

Measure whether decisions happen faster and whether actions informed by the system outperform the campaign’s prior baseline or a holdout.
