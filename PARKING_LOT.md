# The Practise Ground — Parking Lot

Ideas and tasks to revisit later.

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

**Added:** 1 Mar 2026

**Current state:** 222 pages indexed, 467 not indexed (out of ~1,012 total pages in sitemap).

### Not-Indexed Breakdown (6 reasons):

| Reason | Count | Priority | Notes |
|--------|-------|----------|-------|
| Discovered – currently not indexed | 454 | HIGH | Google found these pages (via sitemap) but hasn't crawled them yet. This is the main issue — typical for newer domains with many structurally similar pages (936 quiz pages with same template). |
| Page with redirect | 6 | LOW | Likely www/non-www or trailing slash redirects. Check if old URLs or renamed pages are still in sitemap. |
| Excluded by 'noindex' tag | 3 | MEDIUM | Investigate — we're not intentionally noindexing any pages. Could be a Next.js default on certain routes or a meta tag issue. |
| Crawled – currently not indexed | 2 | MEDIUM | Google crawled but chose not to index. May indicate thin content on those specific pages. Identify which pages and add more unique content. |
| Not found (404) | 1 | LOW | A dead link somewhere. Find and fix or remove from sitemap. |
| Duplicate, Google chose different canonical | 1 | LOW | Google thinks two pages are duplicates and picked one. Check canonical tags. |

### Action Items to Address:

**For the 454 "Discovered – not indexed" (biggest win):**
1. **Split sitemap** — Create separate sitemaps per subject (`sitemap-english.xml`, `sitemap-maths.xml`, `sitemap-science.xml`) so Google can prioritize crawling.
2. **Improve internal linking** — Ensure every quiz page is reachable within 3 clicks from the homepage. Add cross-links between related weeks/topics.
3. **Add unique content per quiz page** — Each week page currently shows 25 MCQs with the same template. Add a short intro paragraph unique to each topic/week to differentiate pages for Googlebot.
4. **Request indexing** — For high-priority pages (grade hubs, landing pages), manually request indexing in Search Console.
5. **Build crawl demand** — More backlinks and traffic signals (ties back to Backlink Strategy above) tell Google these pages are worth crawling.

**For the 3 "noindex" pages:**
- Investigate which pages have noindex and why. Run `site:thepractiseground.in` searches or inspect URLs in Search Console to identify them.

**For the 2 "Crawled – not indexed" pages:**
- Identify the specific pages and review their content. May need more unique text, better meta descriptions, or structured data.

**For the 1 "404" page:**
- Find the dead URL and either fix the route or remove it from the sitemap.

### General Notes:
- The site is relatively new and Google takes time to crawl/index large sites with many similar pages. The 222 indexed count has been growing (visible upward trend in the graph).
- The 454 "discovered but not indexed" is not unusual for a site with ~1,000 pages that's only a few months old. Patience + the above optimizations will help.
- Phase 2 should revisit this after implementing backlink strategy and sitemap improvements.

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
