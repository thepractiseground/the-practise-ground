# The Practise Ground — Parking Lot

Ideas and tasks to revisit later.

---

## Social Media Presence

**Added:** 15 Mar 2026

- **LinkedIn:** https://www.linkedin.com/company/108422101/admin/page-posts/published/
- **Facebook:** https://www.facebook.com/thepractiseground
- **YouTube:** https://www.youtube.com/@ThePractiseGround

---

## Backlink Strategy for Organic Traffic

**Added:** 1 Mar 2026

Discussed approaches to build backlinks and grow organic traffic to thepractiseground.in. Key ideas to explore:

1. **Resource page outreach** — Reach out to school websites, homeschooling blogs, and parent forums that maintain "free resources" or "useful links" pages. The site being genuinely free with no sign-up makes it a strong candidate for inclusion.

2. **Education directories** — Submit the site to curated directories and aggregators of free learning tools. Individually low traffic but builds domain authority over time.

3. **Content-driven backlinks (blog posts)** — Write blog posts on the site targeting long-tail educational queries (e.g., "How weekly quiz practice improves retention", "Grade 5 Science topics every student should master"). Gives other sites something to reference and link to naturally.

4. **Social proof on forums** — Contribute genuinely helpful answers on Quora, Reddit education subs, and Facebook parenting groups, mentioning the resource where relevant. Mostly nofollow links, but drives real traffic and engagement signals.

5. **WhatsApp/word-of-mouth loop** — Already implemented WhatsApp share buttons on grade hub pages. Each share drives direct traffic and engagement signals that indirectly help SEO.

6. **"For Educators" or "Link to Us" page** — Create a dedicated page making it easy for teachers and schools to reference/link to the site, with suggested descriptions and badge assets.

7. **Open Graph & social sharing meta tags** — Verify and optimize OG tags so shared links look professional and clickable across platforms.

---

## Google Search Console — Indexing Review

**Added:** 1 Mar 2026 | **Updated:** 6 Mar 2026

### Latest Report (6 Mar 2026): 873 pages indexed (+651)

Indexed pages jumped from 222 → 873 between Feb 22-25. Sitemap split is working.

| Reason | 1 Mar | 6 Mar | Change | Status |
|--------|-------|-------|--------|--------|
| **Indexed** | **222** | **873** | **+651** | Great progress |
| Discovered – not indexed | 454 | 109 | -345 | Resolving naturally |
| Crawled – not indexed | 2 | 16 | +14 | Monitor — quiz page enrichment should help |
| Page with redirect | 6 | 9 | +3 | Low priority |
| Excluded by 'noindex' tag | 3 | 3 | Same | Investigated: no noindex tags in codebase; likely phantom/cached |
| Alternative page with canonical | 0 | 2 | +2 | Low priority |
| Not found (404) | 1 | 1 | Same | No broken routes found in codebase; likely old cached URL |

### Completed Actions:
1. ~~**Split sitemap**~~ ✅ DONE (1 Mar 2026) — Created 4 per-route sitemaps. Directly contributed to the 651-page indexing jump.
2. ~~**Add unique content per quiz page**~~ ✅ DONE (6 Mar 2026) — Added topic introductions and "What you'll practise" learning objectives to all 933 quiz pages. Also improved meta titles (topic-first) and meta descriptions (using enrichment intro).
3. ~~**Investigate noindex pages**~~ ✅ DONE (6 Mar 2026) — No noindex tags anywhere in codebase. Layout.tsx explicitly sets `robots: { index: true, follow: true }`. These 3 pages are likely phantom/cached from a build transition.
4. ~~**Investigate 404 page**~~ ✅ DONE (6 Mar 2026) — No broken routes or dead links found. All internal links verified. Likely an old cached URL from a previous deploy.

### Remaining Actions:
- **Improve internal linking** — Add cross-links between related quiz weeks/topics and "Try the blog post" links where relevant.
- **Request indexing** — For high-priority pages (grade hubs, landing pages), manually request indexing in Search Console.
- **Build crawl demand** — More backlinks and traffic signals (ties back to Backlink Strategy above).
- **Monitor "Crawled – not indexed" (16 pages)** — These are pages Google visited but chose not to index. The enrichment we just deployed should help on recrawl. Check in Search Console which specific URLs these are and whether they improve after enrichment is live.

### Impressions Trend (daily):
Feb 20: 10 → Feb 25: 1,913 → Mar 1: 2,750 → Mar 3: 2,316. Strong growth trajectory.

---

## Monetization Strategy — Brainstorm

**Added:** 3 Mar 2026

The platform is currently 100% free with donations as the only revenue source. As traffic grows, we need a sustainable monetization plan that doesn't compromise the core mission of free education. Options to explore:

**Ad-based revenue:**
- **Google AdSense** — Most straightforward. Display ads on quiz pages, blog posts, or between quiz results. Risk: can feel intrusive on an education site, especially for younger students. Consider placement carefully (e.g., only on result pages, not during quizzes).
- **Sponsorship banners** — Partner with education brands (book publishers, ed-tech tools, stationery companies) for tasteful, relevant placements. Higher CPM than generic AdSense, better user experience.

**Freemium model:**
- **Core quizzes stay free forever** — this is the promise. Premium features could include: detailed answer explanations, performance tracking/analytics, downloadable PDF worksheets, personalized study plans.
- **Printable worksheet packs** — Generate PDF worksheets from quiz data, sell as affordable packs (or offer free with donation).

**Content licensing:**
- **Schools/institutions** — License bulk quiz content or a white-label version to schools and coaching centres.
- **API access** — Offer quiz data via API for other ed-tech platforms to integrate.

**Affiliate revenue:**
- **Amazon affiliate links** — Already have the colouring books section. Could expand to recommend textbooks, stationery, and study aids relevant to each grade.
- **Course/app referrals** — Partner with complementary platforms (language learning apps, coding courses) for referral commissions.

**Donations & community support:**
- **Current PayPal donation** — already live.
- **Patreon/Buy Me a Coffee** — recurring supporter model.
- **"Adopt a Grade"** — let supporters fund the creation of new grade/subject content.

**Key principles to maintain:**
1. Core quiz content must remain free and accessible — this is non-negotiable.
2. Any monetization should feel natural, not intrusive — especially given the young student audience.
3. Revenue should fund content expansion (more grades, languages, life skills courses).
4. Be transparent with users about why ads or premium features exist.

**Decision needed:** Which model(s) to pursue first, and at what traffic threshold to implement them.

---

## Quiz Accuracy Review — Completed

**Added:** 5 Mar 2026

Systematic accuracy review of all English and Maths quiz data (~15,500 questions). Reviewed grade-by-grade using automated detection (blank options, duplicates, structural issues) plus manual spot-checking of flagged items.

### Fixes Applied

**English G5** (52 questions fixed, committed 1 Mar 2026):
- W46 Q5: Wrong answer key (sequencing) — D→A
- W46 Q22-25: Blank options filled with Fact/Opinion/Neither/Both
- W47 Q1-25: All 25 blank-option questions replaced with proper Fact vs Opinion questions
- W11 Q1-23: 23 questions duplicated from W10 (Articles) replaced with Adjective questions
- W35 Q22: Duplicate proverb replaced

**English G6** (fixed 5 Mar 2026):
- W2 Q17: All 4 options were identical broken text — fixed with distinct options
- W51: Only 21 questions — added 4 to reach 25

**English G7** (fixed 5 Mar 2026):
- W12 Q11: Wrong answer key ("picture on the wall" — D "all of these" → A "on")
- W52: Entire week was missing — created 25 revision questions

**English G8** (fixed 5 Mar 2026):
- W52: Only 21 questions — added 4 (active/passive voice, idioms, literary devices)

**English G9** (fixed 5 Mar 2026):
- W52: Only 21 questions — added 4 (complex sentences, rhetorical devices, register)

**English G10** (fixed 5 Mar 2026):
- W52: Only 21 questions — added 4 (subjunctive mood, anaphora, literary criticism)

**Maths G5** (fixed 5 Mar 2026):
- W47 Q4: All 4 options identical ["2","2","2","2"] — fixed to ["2","4","1","3"]

**Maths G9** (fixed 5 Mar 2026):
- W37-39: 21 statistics questions had wrong mean/median answers (integer rounding instead of correct decimal values). All corrected.

### Review Findings — No Fix Needed

- English G6-G10: Many questions share generic prompt text ("Which is correct?") but have different options — by design, not a bug
- Maths G5-G8, G10: No mathematical errors found
- Reviewer-flagged items verified as false positives: G5 W10 Q13 ("a European" is correct), G6 W27-28 and W40-41 duplicate claims (0 duplicates found)
- Previously reported errors (G5 area=20cm, G7 -15+(-20)=5, G10 sin(90°)=0) not present in current data — likely fixed in earlier version

### Known Content Quality Notes (Not Bugs)

- English G7-G10: Some weeks have high duplication of generic question stems like "Which is correct?" across different topics. The questions themselves are different (different options/answers), but the prompt text is repetitive. This is a content quality improvement opportunity, not an accuracy issue.
- Some review/revision weeks (W50-52) intentionally repeat question patterns from earlier weeks.

---

## Content Strategy — Search Console Performance Analysis

**Added:** 5 Mar 2026

### Current Performance Snapshot (28-day, ~458 pages in search)

| Page | Impressions | Clicks | CTR |
|------|------------|--------|-----|
| /blog/letter-writing-format-guide | 7,226 | 25 | 0.35% |
| /blog/trigonometry-beginners-sin-cos-tan | 846 | 6 | 0.71% |
| /blog/subject-verb-agreement-rules | 623 | 4 | 0.64% |
| /blog/cbse-english-grammar-practice-class-6-7 | 329 | 6 | 1.82% |
| /blog/coordinate-geometry-graphs-visual-guide | 248 | 3 | 1.21% |
| /blog/mental-maths-tricks-every-student-should-know | 194 | 3 | 1.55% |
| /quiz/5 (English G5 hub) | 139 | 4 | 2.88% |
| /quiz/9 (English G9 hub) | 103 | 9 | 8.74% |
| /quiz/maths/8 (Maths G8 hub) | 73 | 5 | 6.85% |

### Key Insights

**1. Blog posts are the traffic engine, not quiz pages.**
6 of the top 10 pages by impressions are blog posts. The letter writing guide alone gets 7,226 impressions — more than all quiz hub pages combined. This confirms that informational content targeting search intent is what Google surfaces for a newer domain.

**2. CTR is critically low on high-impression blog posts.**
The letter writing guide converts at 0.35%, which is well below the 1-3% typical for educational content. The title tag and meta description are likely not compelling enough in search results. Even a modest improvement to 1.5% CTR would triple clicks from 25 to ~108 on that page alone.

**3. Quiz hub pages have high CTR but negligible impressions.**
/quiz/9 converts at 8.74% — excellent — but only gets 103 impressions. The quiz pages themselves are strong once discovered, but Google isn't surfacing them for many queries. They need blog posts as gateway content.

**4. Individual quiz week pages (/quiz/9/12 etc.) barely register.**
Students search for "trigonometry practice" or "English grammar exercises," not "grade 9 week 12 quiz." This confirms the 454 "discovered not indexed" pages — Google sees them as thin, templated content without enough unique value to index.

### Strategy: Three Pillars

**PILLAR 1 — Fix CTR on existing high-impression pages (Quick Win)**

Rewrite title tags and meta descriptions for the top blog posts to be more click-worthy in search results. Current titles are informative but not compelling.

| Blog Post | Current Title Approach | Suggested Direction |
|-----------|----------------------|---------------------|
| Letter writing format guide | Descriptive/factual | Add "with Examples" or "CBSE/ICSE Format" — searchers want to see their board name |
| Trigonometry beginners | Generic | Add "Class 9-10" or "with Solved Examples" — signals relevance |
| Subject-verb agreement | Generic | Add "Rules with Exercises" or "Practice Questions" — signals interactivity |
| CBSE English grammar | Already has "Class 6-7" | Add "Free Practice" or "with Quizzes" |

**PILLAR 2 — Create more blog posts targeting proven search demand (Growth)**

The data shows which topics Google already associates with the site. Double down on these clusters with more content:

**High-priority blog post ideas (based on what's already working):**

- "Letter Writing Format for Class 10 CBSE — Formal & Informal with Examples" (the letter writing guide is a proven winner — create grade-specific variants)
- "Trigonometry Formulas for Class 10 — Quick Reference with Practice" (extend the trig success)
- "English Grammar Rules Every Class 8 Student Should Know" (extend the G6-7 grammar success to G8)
- "ICSE English Grammar Practice — Class 9 and 10" (board-specific variant)
- "Mental Maths Worksheets for Class 5-6 — Free Printable" (extend mental maths success + ties to posters section)
- "Science Quiz for Class 7 — Test Your Knowledge" (Science has zero blog presence currently)
- "How to Improve English Vocabulary — Daily Practice for Students" (high-volume evergreen query)
- "Maths Formulas for Class 8 — Complete List with Examples" (formula reference posts get massive search volume in India)

**Medium-priority (new topic clusters):**

- "NCERT Solutions" style content — reference guides that link into quizzes
- "Exam preparation tips" — seasonal traffic spikes before board exams (Feb-Mar)
- "Study timetable for Class 10" — high search volume, builds trust

**PILLAR 3 — Make quiz pages indexable and linkable (Long-term)**

For the ~450 unindexed quiz pages, the fix isn't more blog posts — it's making each quiz page uniquely valuable:

- Add a 2-3 sentence topic introduction unique to each week (e.g., "This week covers prepositions of place — learn the difference between in, on, at, and beside through 25 practice questions")
- Add "Related Topics" links at the bottom of each quiz page connecting to other relevant weeks
- Add "Try the blog post" links where relevant blog content exists (e.g., trig quiz → trig blog post, and vice versa)
- Consider adding a "What You'll Learn" bullet list at the top of each quiz page — gives Google unique text to index

### Implementation Priority

1. **Immediate (this week):** Rewrite meta titles/descriptions for top 6 blog posts to improve CTR
2. **Short-term (next 2 weeks):** Write 3-4 new blog posts targeting proven clusters (letter writing variants, maths formulas, science quiz intro)
3. **Medium-term (next month):** Add unique topic introductions to all 936 quiz pages (can be automated — generate from topic name)
4. **Ongoing:** Publish 2-3 blog posts per month on high-search-volume educational topics, each linking to relevant quiz pages

### Metrics to Track

- Total impressions (currently growing — good sign)
- Average CTR across blog posts (target: 1.5%+, currently ~0.5%)
- Number of indexed pages (currently 222 of ~1,012)
- Clicks from blog posts to quiz pages (internal conversion)

---

## Infographic Strategy — Image Search Traffic

**Added:** 22 Mar 2026

### Goal
Drive traffic from Google Images and Pinterest by having high-quality, branded infographics attached to every blog post. Each infographic targets image-search queries like "photosynthesis diagram," "Newton's laws infographic," "letter writing format."

### Pipeline
- **Simple/text-heavy infographics** → HTML/CSS + Playwright (full text control, consistent style)
- **Complex illustrated diagrams** → NotebookLM, then post-process to add TPG branding and verify accuracy

### Tier 1 — Science Diagrams ✅ DONE (21 Mar 2026)
7 infographics created and live with download + share buttons:

| Blog Post | Infographic | Theme |
|-----------|-------------|-------|
| Photosynthesis | photosynthesis-diagram.png | Green |
| Cell Structure | cell-structure-diagram.png | Purple |
| Digestive System | digestive-system-diagram.png | Orange |
| Periodic Table | periodic-table-diagram.png | Teal |
| Newton's Laws | newtons-laws-diagram.png | Blue |
| Electricity & Circuits | electricity-circuits-diagram.png | Amber |
| Light Reflection & Refraction | light-reflection-diagram.png | Indigo |

### Tier 2 — High-Traffic Blog Posts (Priority: Image Search Volume)

These target the blog posts with highest impressions in GSC, plus topics with proven high image search demand in Indian education:

| # | Blog Post | Infographic Concept | Search Demand Signal |
|---|-----------|--------------------|--------------------|
| 1 | letter-writing-format-guide | Formal vs Informal letter format side-by-side with labeled parts (date, salutation, body, closing) | 7,226 impressions — #1 blog post |
| 2 | trigonometry-beginners-sin-cos-tan | Unit circle + SOH-CAH-TOA triangle + trig ratios table | 846 impressions — #2 blog post |
| 3 | subject-verb-agreement-rules | Rules flowchart with correct/incorrect examples | 623 impressions — #3 blog post |
| 4 | coordinate-geometry-graphs-visual-guide | Cartesian plane with distance formula, midpoint, slope | 248 impressions |
| 5 | geometry-essentials-shapes-angles-theorems | Shapes reference sheet: all types of angles, triangles, quadrilaterals with properties | Extremely high image search volume |
| 6 | algebra-made-simple-basics-to-confidence | Algebra rules cheat sheet: identities, factoring, BODMAS | High search demand |
| 7 | how-to-master-fractions-complete-guide | Visual fractions guide: equivalence, addition, multiplication with pie charts | High image demand |
| 8 | mental-maths-tricks-every-student-should-know | Speed maths tricks infographic: multiplication shortcuts, percentage tricks | 194 impressions + high share potential |

### Tier 3 — Grammar & Study Skills Visual Guides

| # | Blog Post | Infographic Concept | Notes |
|---|-----------|--------------------|----|
| 1 | parts-of-speech-made-easy | 8 Parts of Speech poster with examples and color coding | Very high image search for "parts of speech chart" |
| 2 | english-tenses-explained-simply | Tense chart: past/present/future × simple/continuous/perfect with formula + example | "English tenses chart" is a top image query |
| 3 | active-passive-voice-rules | Voice change rules with formula and 5 examples per tense | Popular exam reference |
| 4 | direct-indirect-speech-guide | Reporting speech rules: tense shifts, pronoun changes, time expressions | Exam essential |
| 5 | articles-a-an-the-guide | Decision tree: when to use a/an/the/no article | Simple but high demand |
| 6 | prepositions-complete-guide | Preposition map: in/on/at with spatial diagrams | Visual learning friendly |
| 7 | acids-bases-salts-guide | pH scale infographic with common substances + litmus test | High science image demand |
| 8 | chemical-reactions-equations-guide | Types of reactions visual: combination, decomposition, displacement, redox | Common exam reference |

### Execution Plan
- **Tier 2:** Create during next 2 sessions (8 infographics)
- **Tier 3:** Create over following 2 sessions (8 infographics)
- **Total:** 23 infographics across all blog posts with visual content potential
- All infographics include: TPG branding, download button, share button (WhatsApp, Pinterest, X, Facebook)

---

## CEFR Language Level Quizzes — Implementation Plan

**Added:** 22 Mar 2026

### Concept
Add English proficiency quizzes based on the CEFR (Common European Framework of Reference) alongside existing grade-based quizzes. This opens TPG to:
- International students (not tied to Indian grade system)
- Adult learners and competitive exam aspirants
- ESL/EFL learners globally
- Google searches like "A2 English test," "B1 grammar quiz," "CEFR level test"

### CEFR Levels

| Level | Name | Description | Approx Grade Mapping |
|-------|------|-------------|---------------------|
| A1 | Beginner | Basic phrases, simple sentences | Grade 3-4 |
| A2 | Elementary | Everyday expressions, simple descriptions | Grade 5-6 |
| B1 | Intermediate | Main points, travel situations, opinions | Grade 7-8 |
| B2 | Upper Intermediate | Complex texts, fluent interaction | Grade 9-10 |
| C1 | Advanced | Implicit meaning, academic/professional use | Grade 11-12 |
| C2 | Proficiency | Near-native understanding and expression | University+ |

### Route Structure
- `/quiz/english/` — CEFR hub page listing all 6 levels
- `/quiz/english/a1` — A1 level hub (list of all weeks)
- `/quiz/english/a1/1` — A1 Week 1 quiz

### Content Strategy
- Start with **A2 and B1** (highest search volume, maps to existing Grade 5-8 content)
- 26 weeks per level initially (can expand to 52)
- Topics curated per CEFR level descriptors (not just rebranded grade content)
- Each quiz: 25 questions (consistent with existing format)

### Implementation Phases
1. **Phase 1:** Data structure + routes + hub pages (A2 + B1, 26 weeks each = 52 quizzes)
2. **Phase 2:** Add A1 + B2 (26 weeks each = 52 more quizzes)
3. **Phase 3:** Add C1 + C2 (26 weeks each = 52 more quizzes)

---

## Mobile Experience Audit & Enhancement

**Added:** 22 Mar 2026

### Context
GSC data shows most users are on mobile. Need a thorough audit of tap targets, font sizes, spacing, and overall mobile UX to ensure the experience is optimized.

### Audit Areas
1. **Tap target sizes** — All buttons/links must be ≥44×44px (Google's mobile-friendly standard)
2. **Font readability** — Body text ≥16px on mobile, no horizontal scrolling
3. **Quiz experience on mobile** — Option buttons, progress bar, results page
4. **Blog reading experience** — Content width, image scaling, table responsiveness
5. **Navigation** — Mobile menu, breadcrumbs, back navigation
6. **Page speed** — LCP, CLS, FID on mobile (Lighthouse audit)
7. **Touch interactions** — Swipe, scroll behavior, no hover-dependent features
8. **Share/download buttons** — New ImageActions component mobile testing

---

## Phase D — Exhaustive Factual Audit of Untouched Content

**Added:** 15 Apr 2026

### Context
Phase C (quiz correctness audit) patched 129 items across CEFR French/Spanish/German/Italian buckets, but the sampling approach assumed that buckets which *looked* clean actually were clean. Spot-checks during Phase C revealed 93 systemic regressions in French A1 (previously assumed clean) — duplicate questions, wrong answers, bilingual dictionary mismatches. This strongly implies similar hidden defects exist across the much larger English/Maths/Science footprint that was never audited.

The standing directive from `CLAUDE.md` — *"We cannot have bad quality issues — it's about the students getting accurate information"* — means we cannot ship these untouched buckets with an assumption of correctness.

### Scope (approx. question counts)
| Bucket | Weeks | Questions | Audit status |
|---|---|---|---|
| English g5–g10 | 6 grades × 52 wks × 25 q | ~7,800 | Untouched |
| Maths g5–g10 | 6 grades × 52 wks × 25 q | ~7,800 | Untouched |
| Science g5–g10 | 6 grades × 52 wks × 25 q | ~7,800 | Untouched |
| g11–g12 (all subjects) | beyond format fixes | ~? | Partial (format only) |
| **Total** | | **~23,400+** | |

(Note: g5 week 52 short-count fill — 21→25 questions — is being handled in the Phase E commit, not parked.)

### Proposed Approach (cheapest → most expensive)
1. **Build deterministic detectors first** — following the successful bilingual-dictionary auto-fixer pattern from Phase C. Candidates:
   - NCERT-aligned fact dictionary for Science (states of matter, cell organelles, solar system, periodic table basics)
   - Arithmetic/identity verifier for Maths (LCM/HCF, times tables, simple algebra)
   - Grammar-rule detector for English (subject-verb agreement, tense, article use)
2. **Traffic-prioritised deep audits** — GA/sitemap rank → audit top 20 % of URLs that drive 80 % of sessions first
3. **Agent-driven semantic review** — only for residual items detectors can't catch
4. **Sample-verify after each pass** — mandatory, per Phase C lessons

### Rough Effort
- Brute-force agent audit of all 23,400 questions: 2–4 weeks
- Detector-led + traffic-prioritised: 3–5 days for 80 % coverage

### Trigger to Pick This Up
- After a regression is reported from production
- After GSC shows a sustained quality signal drop
- Or when there is dedicated audit bandwidth (≥ 1 week uninterrupted)

### Pre-requisite (done in Phase E)
- Structural CI (`qa-structural-all-files.py` on every PR) — prevents new regressions while deep audit is deferred
- Explicit answer-format rule in `CLAUDE.md` — stops single-letter drift

---
