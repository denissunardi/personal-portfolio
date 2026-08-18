# Portfolio Content Rewrite — Denis Sunardi Samsico

Rebrand the "Sagar Shah" template portfolio into Denis Sunardi Samsico's
Fullstack (backend-leaning) developer portfolio. **Design/layout does not
change** — only content strings, one section removal, tech logos, one photo,
and the CV PDF. Wording should read confident and interesting to both HRD/
recruiters and freelance clients, while staying honest to the CV.

## Source of truth (from CV)

- **Name:** Denis Sunardi Samsico
- **Title:** Backend / Fullstack Developer
- **Summary:** Experienced developing & maintaining web apps, APIs, trading
  systems, internal dashboards, payment integrations, CMS platforms, inventory
  management systems.
- **Location:** Sunter, North Jakarta, DKI Jakarta · Jakarta, born Feb 1994
- **Email:** Deniaz.94@gmail.com
- **Phone:** +6281413313057
- **LinkedIn:** https://www.linkedin.com/in/denis-sunardi/
- **Education:** BINUS University — Bachelor of Computer Science (2012–2016)
- **Languages:** Bahasa Indonesia, English
- **Skills:** Frameworks: Laravel, CodeIgniter, Gin · Back-End: PHP, Golang ·
  Databases: MySQL, PostgreSQL · Front-End: HTML, CSS, jQuery
- **Experience:**
  - **Darmawan Aryansyah Teknologi** — Fullstack Developer (Dec 2025 – Jul 2026):
    Supported OJK audit prep by explaining IT system flows for a cryptocurrency
    trading client; built backend services and WebSocket integrations for a
    commodity futures trading platform; integrated a payment gateway; built data
    pages with advanced filtering.
  - **Pawoon** — Fullstack Developer (dates TBC — see Open Question):
    Built a CMS with full CRUD; built company-profile and campaign websites for
    branding/promotion. (Pawoon is a POS product; confirm role scope.)
  - **Expecto** — Backend Developer (Nov 2017 – Jan 2019):
    Integrated front-end with backend systems; built/shipped features for
    educational platforms; implemented SMS verification; built APIs for mobile
    and web using Laravel.

## Confirmed decisions

- Positioning: **Fullstack, balanced** — "Fullstack Developer" with strong
  backend emphasis (PHP/Laravel/CodeIgniter/Golang/Gin), frontend acknowledged
  (HTML/CSS/jQuery). Drop all "AI Engineer" framing.
- Status: **Both freelance and full-time** — CTAs welcome recruiters/HRD and
  project clients (e.g. "open to opportunities and freelance projects").
- Trust bar & Work: **Text-only** — remove third-party client logos and project
  screenshots; describe real work in words (trading systems, payment gateway,
  CMS, educational platforms).
- Photo: **Provide one professional headshot**; remove the About family photo.
- Testimonials: **Remove the whole section.**
- Tech grid: **User provides SVG logos** for own stack.

## Assets needed from user

1. **Headshot** — square, ≥800×800px, `.jpg`. Replaces `sagar-headshot.jpg`.
2. **Tech SVG logos** for: Laravel, CodeIgniter, Golang (Go), Gin, PHP, MySQL,
   PostgreSQL (repo already has `postgresql.svg`), jQuery, HTML5, CSS3, Git.
   PostgreSQL logo already exists and can be reused. Any logo not supplied →
   fall back to a text pill for that item.
3. **CV PDF** — an English PDF to replace
   `public/files/sagar-shah-full-stack-ai-engineer.pdf` (new filename:
   `denis-sunardi-fullstack-developer.pdf`).
4. **GitHub / X (or other) profile URLs** — optional. If none, social links are
   removed from footer/site and replaced with LinkedIn (see below).
5. **Pawoon employment dates** (start/end `YYYY-MM`) — required to compute
   durations without breaking the build (see `duration.ts` gate).
6. **Optional real testimonials** — none required (section removed). If provided
   later, section can be restored.

## Implementation tasks (ordered)

Implementer must switch to an implementation-capable agent. Run
`npm run verify` at the end — it is the gate (tsc, eslint, check-tokens,
check-anchors, check-duration, next build).

### 1. Global identity — `src/content/site.ts`

- `wordmark`: `sagarshah.dev` → new wordmark (recommend `denissunardi.dev` or
  the deployed domain; ask user — see Open Question).
- `name`: "Sagar Shah" → "Denis Sunardi Samsico".
- `jobTitle`: → "Fullstack Developer".
- `url`, `title`, `titleTemplate`, `description`, `keywords`: rewrite for Denis /
  Fullstack / Jakarta / PHP-Laravel-Golang. Drop "AI".
- `email`/`emailHref` → Deniaz.94@gmail.com.
- `phoneLabel`/`phoneHref` → +6281413313057 / tel:+6281413313057.
- `availability`: keep `available: true`; label → e.g. "Open to roles & freelance".
- `social`: replace GitHub/X with LinkedIn (or user-provided). Note: `icon`
  strings map via `BRAND_GLYPHS` (keyed by label) in `site-footer.tsx` and
  `GLYPHS` in hero — a LinkedIn glyph/icon must exist or be added, else keep it
  a plain text link. Confirm icon handling during implementation.
- `repoUrl`, `figmaTemplateUrl`: point to user repo or remove references in
  footer if none.
- `cv.href` → `/files/denis-sunardi-fullstack-developer.pdf`, `cv.label` keep
  "Download CV".
- `notFound`/`errorPage` bodies: swap the email address.

### 2. Hero — `src/content/hero.ts`

- `eyebrow`: → "Fullstack Developer · Backend-focused · 8+ years shipping"
  (verify years against real first-job date; CV shows work from 2017 → ~8 yrs).
- `headlineLead`: → "Hi, I'm Denis".
- `headlineClaim`: → something like "I build the backend that makes web
  products work." (interesting, backend-forward, honest).
- `subhead`: rewrite — PHP/Laravel/CodeIgniter & Golang/Gin, APIs, trading
  systems, payment integrations, CMS. Drop "React on top, Node underneath" and
  "AI in the loop".
- Terminal lines array (`branch`/`status`/`prompt`): replace with real
  highlights — e.g. "APIs & WebSocket integrations", "payment gateway
  integration", "CMS & inventory systems", status "Open to roles & freelance".
  Keep the same kinds/shape (terminal component is unchanged).

### 3. Services / capabilities — `src/content/capabilities.ts`

- Rewrite the capability cards to backend/fullstack offerings: API design &
  integration, payment gateway integration, real-time (WebSocket) services,
  CMS & admin dashboards, database design (MySQL/PostgreSQL), frontend
  integration. Keep `icon` as existing string keys from `CAPABILITY_ICONS`
  (`src/components/primitives/icon.tsx`) — reuse available icon names; do not
  invent new icon strings without adding them to the map.

### 4. Work — `src/content/work.ts` (text-only)

- Remove screenshot image imports and the `screenshot`/`alt` fields, OR replace
  images with neutral placeholders. **Check `WorkContent` type in `types.ts`
  and `ProjectCard`/`work.tsx` component**: `sizes`/screenshot may be required.
  If the type requires an image, either (a) relax the type to make screenshot
  optional and update the card to render a text-only variant, or (b) keep a
  generic placeholder graphic. Prefer (a) — implementer decides based on type.
- Replace the 5 template projects with real work items (no external logos):
  1. **Commodity Futures Trading Platform** (Darmawan Aryansyah Teknologi) —
     backend services + WebSocket integrations; supported OJK audit readiness.
  2. **Cryptocurrency Trading — Compliance & Systems** — explained IT flows for
     OJK audit; payment gateway integration; advanced data filtering pages.
  3. **CMS Platform** (Pawoon) — full CRUD content management for web apps.
  4. **Company-profile & Campaign Websites** (Pawoon) — branding/promo sites.
  5. **Educational Platform** (Expecto) — feature dev, SMS verification, Laravel
     APIs for mobile & web.
  - Remove `domain`/`href`/`linkLabel` where there is no public URL (check type
    allows optional). NDA/internal projects: no links, no logos — describe
    outcomes.
- Update `header.heading`/`eyebrow` wording to fit ("Work" / "What I've built").

### 5. About — `src/content/about.ts`

- `header.heading`: rewrite (drop "A decade..."; use ~8 years, honest).
- `paragraphs`: rewrite — backend-leaning fullstack, first production code 2017,
  domains worked (fintech/trading, payments, education, CMS), based in Jakarta.
  Drop AI/agents language.
- `quickBits`: replace with real facts — "Backend / Fullstack Developer",
  "Based in Jakarta (WIB)", "BINUS — Computer Science", "PHP · Laravel ·
  Golang", "Open to roles & freelance", languages (ID/EN).
- `closing`: reword for both HRD + freelance.
- **Remove family photo**: delete `familyPhoto` import/usage; check `about.tsx`
  and `AboutContent` type — make the image optional or remove the image slot so
  the layout still renders (verify no required prop breaks).

### 6. Tech stack — `src/content/tech.ts` + `src/assets/images/tech/`

- Add user-provided SVGs to `src/assets/images/tech/`. Reuse existing
  `postgresql.svg`. For any missing logo, use a text pill fallback.
- Rebuild `LOGOS` imports and groups to match CV skills:
  - **Frameworks**: Laravel, CodeIgniter, Gin
  - **Languages / Back-End**: PHP, Golang
  - **Databases**: MySQL, PostgreSQL
  - **Front-End**: HTML, CSS, jQuery
  - **Tools**: Git
- Remove all React/Next/Node/AI/Figma/Storybook/etc. logos not in the stack.
- Delete now-unused SVG assets under `tech/` (optional cleanup) — ensure no
  remaining import references them.
- Update `header` wording.

### 7. Experience — `src/content/experience.ts`

- `header.heading`/`subhead`: reword (no "A decade, three chapters" unless it
  fits; use honest count).
- Replace `roles` with real companies:
  1. **Darmawan Aryansyah Teknologi** — Fullstack Developer — `2025-12` →
     `2026-07` (CV states these dates; confirm — future dates are unusual, see
     Open Question). Bullets from CV.
  2. **Pawoon** — Fullstack Developer — `startISO`/`endISO` **TBC (required)**.
  3. **Expecto** — Backend Developer — `2017-11` → `2019-01`. Bullets from CV.
- Replace company `logo` imports (`upwork/greenapex/dotnpixel`) — either supply
  real company logos or set logos to a text/monogram fallback (check
  `ExperienceContent` type + `experience.tsx` for required `logo`). If logo is
  required by type, add small placeholder or relax the type.
- **`duration.ts` staleness gate:** `check:duration` asserts total career length
  is in [120, 144) months. Denis's real total (2017-11 → present, minus gaps) is
  well under 120 → **this gate will fail**. Implementer must update the bounds/
  copy in `scripts/check-duration.mjs` and any "decade" wording, OR the
  computed-duration assertions, to match Denis's real tenure. Do NOT fake dates
  to satisfy it. This is a required build-unblock step.

### 8. FAQ — `src/content/faq.ts`

- Rewrite Q&A for Denis: stack, availability (roles + freelance), how to reach
  (Deniaz.94@gmail.com), what he builds (APIs, payments, trading, CMS). Keep
  "no pricing on page" convention. Update the getting-started email.

### 9. CTA / Contact — `src/content/cta.ts`

- `heading`/`eyebrow`: reword for HRD + clients.
- Contact rows: email → Deniaz.94@gmail.com; phone → +6281413313057; add
  LinkedIn row (https://www.linkedin.com/in/denis-sunardi/). Keep copy-button
  behavior. Verify row shape against `CtaContent` type.

### 10. Remove Testimonials section (multi-file)

- `src/app/page.tsx`: remove `<Testimonials />` and its import.
- `src/content/types.ts`: remove `"testimonials"` from `SECTION_IDS`.
- `src/content/nav.ts`: remove the Testimonials nav link (nav has ≤5 links; fine).
- `src/content/footer.ts`: remove the `#testimonials` footer link.
- `src/lib/llms.ts`: remove `TESTIMONIALS` import and the `## Testimonials`
  block (lines ~80–83) so `/llms.txt` builds.
- Delete `src/content/testimonials.ts` and
  `src/components/sections/testimonials.tsx` (and unused avatar assets
  `avatars/eugen.png`, `krisztian.png`).
- **`check-anchors.mjs` gate:** every `SECTION_ID` must render AND be linked
  from `src/content/`. Removing testimonials from `SECTION_IDS` + nav + footer
  keeps this consistent. Verify no remaining `#testimonials` href anywhere
  (grep) or the anchor check fails.

### 11. Footer — `src/content/footer.ts`

- `wordmark`, `tagline` ("Fullstack Developer. Backend-focused."), `location`
  (Jakarta · WIB/UTC+7), copyright/"coded in ... " line → Jakarta, Indonesia.
- Remove/replace repo link; fix nav links (drop testimonials).

### 12. Nav — `src/content/nav.ts`

- `wordmark.label`/`href`, `cv.href` (new PDF filename), `cta.label`
  (e.g. "Let's talk" is fine). Remove testimonials link (done in step 10).

### 13. Assets & metadata files

- Replace `public/files/...pdf` with Denis's CV; rename and update all `href`
  references (`site.ts`, `nav.ts`, `llms.ts` if present).
- Replace `src/assets/images/sagar-headshot.jpg` with Denis's headshot (keep
  filename or rename + update `hero.ts`/`about.ts` imports).
- Delete `sagar-family.jpg`, `sagar-full-pose.jpg` if now unused (grep first).
- `src/app/` metadata: `manifest.ts`, `robots.ts`, `sitemap.ts`,
  `opengraph-image.tsx`, `layout.tsx` — check for hardcoded name/domain/AI
  copy and update. OG image pulls from `SITE`, but verify no literals.
- `src/lib/json-ld.ts`: verify it reads `SITE` (name/jobTitle/url) — update any
  literals.

## Token / design constraints (must respect)

- **No design changes.** Do not hand-write color/type/radius/shadow utilities in
  section/data-display/page files — those live in `src/design/tokens.ts` only
  (`check-tokens.mjs` gate). Content edits are plain strings, so this is mostly
  N/A, but if any component variant is added for text-only Work/About images,
  route styles through `tokens.ts` and mirror `typography`/`components` keys in
  `DESIGN.md`.
- No hex/oklch/arbitrary Tailwind values anywhere in `src/`.
- New SVG logos go in `assets/`, imported as `StaticImageData` — do not inline.

## Validation

1. `npm run typecheck` — types after removing testimonials & optional images.
2. `npm run lint`.
3. `npm run check:tokens` — no stray utilities / DESIGN.md drift.
4. `npm run check:anchors` — no dead `#testimonials`; every section linked.
5. `npm run check:duration` — **will require updating the bounds/copy** for
   Denis's real tenure (do not fake dates).
6. `npm run verify` — full gate incl. `next build`.
7. Manual: hero, services, work, about, tech, experience, faq, contact all read
   as Denis; CV downloads; LinkedIn link works; no "Sagar"/"AI Engineer"/
   template domain left (grep `Sagar|sagarshah|AI Engineer|shahsagarm`).

## Open questions (resolve during implementation)

1. **Domain/wordmark** — what domain will this deploy to? (`denissunardi.dev`?)
   Needed for `wordmark`, `url`, metadata, footer.
2. **Pawoon dates** — exact `startISO`/`endISO` (`YYYY-MM`). Required for the
   experience durations and the duration gate.
3. **Darmawan Aryansyah dates** — CV shows Dec 2025 – Jul 2026 (future). Confirm
   these are correct or provide actual dates; they affect duration calc.
4. **Social links** — GitHub/X handles, or LinkedIn-only? Affects footer/hero
   icons (glyph must exist for any icon-rendered social).
5. **Years-of-experience number** — confirm the "X+ years" figure to use in
   hero eyebrow / about (CV work starts 2017 ≈ 8 years).
