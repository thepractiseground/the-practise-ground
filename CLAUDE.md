# The Practice Ground (TPG) — Project Context

## ⚠️ Standing Directive (read first, act always)
> **"We cannot have bad quality issues — it's about the students getting accurate information."**

This is the non-negotiable quality bar for every TPG task. It applies to:
- **Quizzes** — every question must have a correct answer that is actually present in the options, exactly 4 unique options, real NCERT/CEFR-aligned content, zero placeholders (no "Option A/B/C/D" strings, no dummy text).
  - **Answer format rule (non-negotiable):** Every `answer` field MUST be a single capital letter `"A"`, `"B"`, `"C"`, or `"D"` — pointing at the zero-indexed position in the `options` array (A=index 0, B=1, C=2, D=3). Never store the answer text itself, never store `"a"`/`" A "`/`"1"`/`"option A"` — the `QuizEngine.tsx` component only accepts the single-letter form. CI enforces this via `scripts/qa-structural-all-files.py` on every PR.
- **Blog posts** — facts must be accurate, citations trustworthy, FAQs answerable, grammar clean.
- **Images & assets** — no broken links, correct alt text, no misleading visuals.
- **Data files** — schema valid, structurally consistent (e.g., 25 Qs/week), enrichment complete (intro, objectives, study tips).

**Action rules:**
1. Before shipping ANY content change, run structural + content validation (see `scripts/qa-structural-all-files.py` — CI enforces this on every PR touching `src/data/*.json`).
2. If a placeholder, broken option, or fabricated fact is detected, fix it in the same session — do not defer.
3. Prefer NCERT / CBSE / CEFR-aligned sources. When uncertain, verify or flag rather than guess.
4. Commit with a descriptive message and push so the fix reaches students immediately.
5. Never reduce the quality bar for speed. Students > velocity.

## Overview
Educational platform at **thepractiseground.in** offering free quizzes for English, Maths, Science (Grades 5-12) and language learning (French, German, Spanish at A1-C1 CEFR levels).

## Tech Stack
- **Framework:** Next.js 16.1.6 + React 19.2.3
- **Styling:** Tailwind CSS 4 + PostCSS
- **Language:** TypeScript 5
- **Hosting:** Vercel (inferred from Next.js)

## Project Structure
```
the-practise-ground/
  src/
    app/           # Next.js app router (blog, quiz, about, contact, donate, for-parents, fun, posters-printables)
    components/    # React components (HeroImage, WhatsAppShareBlog, ImageActions, etc.)
    data/          # Static data files
      blog-posts.ts  # 77 blog posts, ~15,000 lines, 634KB — THE main content file
    lib/           # Utilities (markdown.ts for markdown-to-HTML)
  public/
    images/
      blog/        # Blog featured images (PNG, ~1200x630)
      og/          # OpenGraph fallback images by category
```

## Blog Posts Data (`src/data/blog-posts.ts`)
- **77 blog posts** as TypeScript array of `BlogPost` objects
- **Type:** `{ slug, title, metaDescription, keywords[], excerpt, author, publishDate, lastModified?, readTime, category, grade, content, featuredImage?, featuredImageAlt? }`
- **Categories:** Grammar, Exam Prep, Study Tips, Vocabulary, Maths Concepts, Maths Tips, Problem Solving, Physics, Chemistry, Biology, Science, Fun & Learning
- **17 posts** have `featuredImage` set (7 core science + 6 class-11/12 + 4 others)
- **60 posts** need images

## FAQ System
- FAQ sections in blog content use markdown: `## FAQ` or `## Frequently Asked Questions`
- Q&A format: `**Q: question?**\nA: answer text` (single newline) or `**Q: question?**\n\nA: answer text` (double newline in 10 science posts)
- **Auto-generated FAQPage schema.org** in `src/app/blog/[slug]/page.tsx` (line ~411) via regex:
  ```js
  /\*\*Q:\s*(.+?)\*\*\nA:\s*([\s\S]*?)(?=\n\n\*\*Q:|\n\n##|\n\n$|$)/g
  ```
- **Known bug:** Regex uses `\n` (single newline) but 10 science posts use `\n\n` (double newline) — fix: change `\n` to `\n\n?`

## Blog Image Workflow
- **Tool:** Gemini Nano Banana 2 (external AI image generator)
- **Prompt pattern:** Landscape, dark navy background (#0B1F3F), title + subtitle + relevant illustrations + "thepractiseground.in" watermark
- **Pipeline:** Generate in Gemini -> zoom/verify -> fix if needed -> download -> copy to `public/images/blog/` -> update `blog-posts.ts` with `featuredImage` + `featuredImageAlt`
- **Naming convention:** `{descriptive-slug}-diagram.png`
- **Dimensions:** 1200x630px PNG

## Key Files to Edit
| File | Purpose | Size |
|------|---------|------|
| `src/data/blog-posts.ts` | All 77 posts (content, metadata, images) | 15,014 lines |
| `src/app/blog/[slug]/page.tsx` | Blog post renderer, FAQ schema, featured image display | 471 lines |
| `src/app/blog/page.tsx` | Blog listing page with cards | ~200 lines |
| `PARKING_LOT.md` | Project ideas and future tasks | Long |

## Important Notes
- Content uses template literals (backtick strings) — escape any backticks in content with `\``
- Edit blog-posts.ts **bottom-to-top** when making multiple insertions to avoid line number drift
- Run `npm run build` after edits to catch syntax errors
- The blog page auto-generates Article + BreadcrumbList + FAQPage structured data (JSON-LD)
- 23,400+ quiz questions across all subjects
- 873 pages indexed in Google Search Console (as of Mar 2026)

## Current Status (as of April 2026)
- 67/77 posts have FAQ sections (8 still need them)
- 17/77 posts have featured images (60 still need them)
- SEO: meta descriptions, keywords, OG tags, canonical URLs, structured data all implemented
- Site is live and growing (2,316 daily impressions as of early March 2026)
