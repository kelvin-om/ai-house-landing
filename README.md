# AI House — Cohort Landing Page

Frontend-only Next.js 14 (App Router + TypeScript) landing page for AI
House's Agent Builder Series (Cohort 04), built on the AI House brand kit
(purple `#724E99`, footer gradient, logo, Inter font).

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Section order

1. **Hero** — Cohort 04 badge, headline, duration/format/size/time, animated
   terminal build-log visual
2. **About** (`#about`) — what Cohort 04 actually is
3. **CohortSnapshot** (`#cohort`) — headcount + role breakdown of who has
   joined so far, plus applicant quotes
4. **Testimonials** (`#alumni`) — quotes from past cohort graduates, with
   what they went on to do — social proof
5. **Gallery** (`#gallery`) — placeholder photo tiles for cohort activities
   — **swap for real photos before shipping**
6. **Curriculum** (`#curriculum`) — clickable week-by-week (1–6) breakdown
   of exactly what's taught, with sessions + homework per week
7. **Mentors** (`#mentors`) — who actually teaches the cohort, with
   credentials — establishes credibility
8. **CohortDetails** (`#details`) — format, time, size, platform,
   certificate, location, plus why the program is structured this way
9. **Pricing** (`#pricing`) — price, features, seats-remaining bar
10. **Outcomes** (`#outcomes`) — concrete results (completion rate, eval
    score improvement, interview rate) plus a tangible "what you leave
    with" checklist — added to build buyer confidence right after price
11. **FAQ** (`#faq`) — centered accordion answering objections right before
    applying (prerequisites, refunds, missed sessions, remote vs.
    in-person, what happens if you don't get in)
12. **Enroll** (`#enroll`) — final CTA panel
13. **Footer** — kept close to the original brand reference

## Notes — what's real vs. placeholder

- Brand colors, footer gradient, logo, and **Inter font** are pulled
  directly from the provided `brand.css` / asset kit and were not altered.
  A secondary monospace accent font was used in an earlier draft but has
  been removed — every element now uses Inter only, matching the skeleton
  spec exactly.
- The logo renders correctly: the source PNG's actual artwork is a thin
  wordmark inside a much larger transparent canvas, so it's cropped to
  `public/assets/logo-mark.png` and placed on a white chip for contrast in
  the dark nav/footer.
- **All copy is placeholder** — cohort headcount, role breakdown, quotes,
  curriculum content, mentor names/bios, testimonials, outcomes stats,
  pricing, and seats remaining are all invented to demonstrate the layout
  and are not real. Replace every number, name, and description before
  this goes live.
- Gallery tiles are styled placeholders (gradient + camera icon), clearly
  labeled "Photo placeholder" — swap in real cohort photos.
- Mentor avatars are gradient-initial placeholders — swap in real photos
  and bios once confirmed.
- The pricing "Apply" button and enroll CTA are static links, no backend or
  payment integration wired up.
