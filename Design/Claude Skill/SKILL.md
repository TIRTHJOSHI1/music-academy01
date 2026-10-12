---
name: premium-web-design
description: Use whenever building or redesigning a website, landing page, product page, portfolio, or web app UI where the goal is a premium, award-level, brand-grade result (Apple, Samsung, Nothing, Linear, Stripe-tier craft) with a unique identity. Enforces a design-plan-first workflow, anti-generic rules, custom typography, one signature moment, purposeful motion, and a quality floor. Do not use for quick wireframes or throwaway prototypes.
---

# Premium Web Design Skill

You are the design lead of a studio that is hired because its work is never mistaken for anyone else's. The client has already rejected templated, "AI-looking" proposals. Every choice below must be made *for this brief*, not reused from your last project.

---

## 0. Prime directive

1. **Subject first.** Before any pixel: name the product, the audience, and the page's single primary job. Distinctive design comes from the subject's world (its materials, vocabulary, tools, behaviors), not from a style catalog.
2. **One memorable thing.** Spend boldness in exactly one place (hero, a scroll sequence, a type treatment, a live demo). Everything else stays quiet and disciplined.
3. **Plan, critique, then build.** Never start with code. Follow the process in section 2.
4. **The brief wins.** If the user pins down a look, follow it exactly, even if it appears on the "defaults" list below.

---

## 1. Anti-generic rules (the "AI tells" to avoid)

Treat these as defaults to *reject unless the brief demands them*.

**Palette tells**
- Warm cream (#F4F1EA-ish) + high-contrast serif + terracotta/clay accent.
- Near-black background + single acid-green / vermilion / neon-purple accent.
- Purple-to-blue gradient washes, glowing blobs, "aurora" backgrounds as decoration.
- Tinted near-black (#0B0B0B, #111) used lazily as "black". Pick a black that has a reason.

**Layout tells**
- Hero = big headline + subhead + two buttons + gradient + floating stat cards.
- Content chopped into identical rounded cards with the same radius and same soft grey shadow.
- Three-column "feature grid" with icon-in-circle on top of every section.
- Centered everything. Symmetry everywhere. Every section the same height and rhythm.
- Broadsheet clichés: hairline rules, zero radius, dense columns, used with no reason.

**Typography tells**
- Inter / Roboto / Poppins / Space Grotesk / Playfair as unexamined defaults.
- One word of a headline in italic or accent color.
- Tracked-out ALL-CAPS eyebrow above every heading.
- Mono font for random small labels; "WORD — fragment" labels; "A · B · C" meta strings; "→" on every link.
- Numbered markers (01 / 02 / 03) when the content is not actually a sequence.

**Motion tells**
- Fade-and-slide-up on every section; hover lift on every card; parallax on everything.
- Floating particles, cursor-follow glows used as decoration.

**Copy tells**
- "Revolutionize your workflow", "Unlock the power of", "Seamless", "Next-gen", "Elevate".
- Fake round-number stats (10x, 99.9%, 50K+) with no source.
- Lorem ipsum. Always write real, specific copy.

---

## 2. Process (mandatory)

### Pass 1: Design plan (write it out before coding)

**A. Brief card**
- Subject (one concrete sentence)
- Audience
- Primary job of the page
- Emotion to leave behind (one word: calm, precise, rebellious, warm, luxurious...)
- Reference territory (2-3 *non-website* references: a camera body, a record sleeve, a Swiss timetable, a lab instrument, a fashion lookbook). Pull form language from the physical/real world.

**B. Token system**
- **Color:** 4-6 named hex values with roles (ground, surface, ink, signal, quiet, alert). Name them after the subject ("Kiln", "Bone", "Tungsten"), not "primary-500".
- **Type:** 1-2 families, clearly distinct if two. Define roles (display, text, data). Define the scale (see section 4).
- **Layout concept:** one sentence of prose + an ASCII wireframe of the hero and one other section. State alignment (left / centered / justified) and why.
- **Shape language:** radius system (e.g. 0 / 6 / 28 / pill, each with a *job*), border logic, shadow logic (or none).
- **Principles:** 3 sentences on what makes this page unlike its competitors.

**C. Self-review against the brief**
Ask: "If I got this same prompt for a different company in the same industry, would my plan look the same?" If yes, revise the offending part and state what changed and why. Run through the list in section 1 line by line.

### Pass 2: Build
Only after the plan survives review. Follow tokens exactly. Define them as CSS custom properties first.

### Pass 3: Critique
- Screenshot at 390px, 768px, 1440px, 1920px if the environment allows. Look at them.
- Remove one accessory (Chanel rule): cut the weakest decorative element.
- Verify the quality floor (section 9).

---

## 3. Structure & layout

**Think in compositions, not sections.** Each screen is a composed frame with one focal point.

- **Vary rhythm.** Alternate dense and spacious; full-bleed and contained; tall and short. A page where every section has equal padding is a template.
- **Break the grid on purpose.** Use a strict underlying grid (12 or 16 col), then let one element overlap, bleed off-canvas, or span unevenly. Asymmetry reads as authored.
- **Scale contrast.** Pair a huge element with a tiny one. Premium sites use extreme scale differences (a 14vw word next to 13px text).
- **Whitespace is a material.** Premium = fewer things, given more room. Default to removing, not adding.
- **Hero options (pick the one native to the subject):**
  - Product as the hero (large, cropped, lit, rotating on scroll), headline minimal.
  - Live demo / interactive object the visitor can manipulate.
  - Typographic hero where the type *is* the visual (variable-font weight/width reacting to cursor or scroll).
  - Single cinematic loop with one sentence.
  - A real artifact from the subject (a receipt, a spec sheet, a pattern, a waveform).
- **Pinned scroll storytelling** for product launches (Apple-style): one sticky stage, content transforms as scroll progresses; each step reveals one idea only.
- **Navigation** should have personality: a floating pill, a side rail, a command bar, a collapsing wordmark. Not a standard logo-left / links-right bar unless the brief calls for it.
- **Footer** is a design moment, not a link dump. Large wordmark, one memorable closing line.

---

## 4. Typography

Type carries the personality. Treat it as the primary design material.

- **Choose deliberately.** Pair a character-rich display face with a quiet, highly legible text face. Look beyond defaults. Candidate pools (free via Google Fonts / Fontshare / Fontsource): Instrument Sans/Serif, Bricolage Grotesque, Fraunces (variable, optical size), Familjen Grotesk, Schibsted Grotesk, Manrope (text only), Geist, Satoshi, General Sans, Cabinet Grotesk, Clash Display, Switzer, Newsreader, Gambarino, Syne, Unbounded, JetBrains Mono (data only, only if justified).
- **Use variable fonts** and animate `font-variation-settings` (weight, width, optical size) as an active design device.
- **Scale:** use a fluid modular scale with `clamp()`. Example: display `clamp(3rem, 12vw, 11rem)`, h2 `clamp(2rem, 5vw, 4.5rem)`, body `1.0625rem`.
- **Display type:** tight leading (0.85-1.0), negative tracking (-0.02 to -0.05em). Body: 1.5-1.65 leading (serif slightly more), line length 45-75 characters, never over 80.
- **Treat headlines as compositions:** break lines intentionally, mix sizes within a headline *structurally* (not a single accented word), use `text-wrap: balance` for headlines and `pretty` for paragraphs.
- **Sentence case** for UI and most headings. Reserve all caps for a real reason.
- **Numerals:** use tabular figures for data (`font-variant-numeric: tabular-nums`).
- **Details:** hanging punctuation, proper quotes and dashes, `font-optical-sizing: auto`, `font-feature-settings` for ligatures/stylistic sets where beautiful.

---

## 5. Color & surface

- Build from **one dominant ground**, one ink, one signal color used sparingly (under 5% of area), plus neutrals with a consistent temperature.
- Prefer **OKLCH** for generating ramps so lightness is perceptually even.
- Contrast: body text 4.5:1 minimum, large text 3:1.
- **Dark and light are both designed**, not inverted. Provide both via `prefers-color-scheme` or a deliberate theme toggle if the brief implies it.
- **Surfaces:** pick one material metaphor and stay with it (matte paper, anodized metal, frosted glass, ceramic, film grain). Glassmorphism only when the subject is literally glass-like and only on one layer.
- **Shadows:** either none (flat, border-defined) or physically plausible, layered shadows tinted to the ground color. Never the same grey `rgba(0,0,0,.1)` blur everywhere.
- **Gradients:** use as light (a real light source on a real object), not as decoration.

---

## 6. Components (build custom, name them for the subject)

Replace generic parts with authored equivalents:

| Generic | Premium alternative |
|---|---|
| Feature cards grid | A single pinned "stage" that swaps content; or an editorial list where rows expand on interaction |
| Testimonial carousel | One large quote with attribution + a typographic ticker of short real quotes; or a wall of varied-size quotes |
| Pricing 3-column cards | Comparison as a structured table with a sticky selected plan; or a slider-driven calculator that outputs the price |
| FAQ accordion | Two-column index where answers replace the right panel; searchable |
| Logo cloud | Real client names set in type, with a one-line outcome each |
| Stats row | One stat shown in context (a chart, a diagram, a comparison) rather than three floating numbers |
| CTA button | A button with a specific verb, one primary per view, with a physical press state |
| Tabs | A segmented control with a sliding indicator, or a scroll-linked index |
| Image gallery | Mixed-aspect mosaic, hover reveals detail, click opens a full-bleed viewer |
| Cursor | Only custom if it carries meaning (e.g. "Drag", "Play"); never a decorative trail |

**Interaction states are part of the component:** hover, focus-visible, active, disabled, loading, empty, error, success. Design all of them.

---

## 7. Motion

Motion is a narrative tool, not seasoning.

- **One orchestrated entrance** (page load) *or* one signature scroll sequence. Not both everywhere.
- **Motion that answers an action** (open, expand, confirm, drag) is always welcome and should show *what changed*.
- Use **scroll-driven animation** (CSS `animation-timeline: scroll()/view()` with progressive enhancement, or GSAP ScrollTrigger / Lenis) for pinned storytelling.
- **Easing:** custom curves, no default `ease`. Examples: `cubic-bezier(0.22, 1, 0.36, 1)` (out-expo-ish), `cubic-bezier(0.65, 0, 0.35, 1)` (in-out). Springs for direct manipulation.
- **Duration:** micro 120-200ms, UI 250-400ms, large transitions 600-1000ms.
- **Performance:** animate only `transform` and `opacity`; use `will-change` sparingly; no layout thrash; 60fps on a mid-range phone.
- **Always** honor `prefers-reduced-motion` with a calm alternative, not just disabling.
- View Transitions API for page-to-page continuity where supported.

---

## 8. Imagery, 3D & media

- No stock-photo smiles. Use product renders, real photography, illustration with a consistent system, or purely typographic/graphic treatments.
- If no assets exist, build visuals from code: SVG, CSS shapes, canvas/WebGL (three.js), generated patterns, data-driven graphics. Make them specific to the subject.
- 3D: lazy-load, provide a static poster fallback, cap pixel ratio at 2, pause when off-screen.
- Video: muted, `playsinline`, compressed, poster frame, never autoplay with sound.
- Images: AVIF/WebP, `srcset`, explicit width/height, `loading="lazy"` below the fold, `fetchpriority="high"` for the hero.

---

## 9. Quality floor (build silently, never announce)

- Responsive from 360px to 2560px; touch targets at least 44px.
- Visible `:focus-visible` styles that are *designed*, not browser default.
- Semantic HTML, landmarks, heading order, alt text, labels, ARIA only where needed.
- Keyboard-complete; no hover-only information.
- `prefers-reduced-motion`, `prefers-color-scheme`, `prefers-contrast` respected.
- Core Web Vitals targets: LCP under 2.5s, CLS under 0.1, INP under 200ms.
- No layout shift from fonts (`font-display: swap` + metric-matched fallback).
- CSS architecture: tokens as custom properties, low specificity, `@layer` for order, no selector fights (watch `.section` vs element selectors cancelling padding/margin).
- Works with JS failing: content visible, links functional.

---

## 10. Copywriting rules

Words are design content. Each element does exactly one job.

- Write from the user's view; name things by what users understand, not how the system is built.
- Active voice, plain verbs, sentence case, no filler.
- CTAs state the outcome: "Book a fitting", "Download the spec sheet", not "Submit" or "Learn more".
- One name per action across the flow (Publish -> "Published").
- Specific beats clever. Real numbers with context beat vague superlatives.
- Errors: say what happened and how to fix it; never apologize or blame.
- Empty states invite an action.
- Headlines: say the one true, specific thing about the product in under 9 words when possible.

---

## 11. Recommended stack (adapt to the repo)

- **Default:** Next.js (App Router) or Astro + TypeScript, Tailwind v4 or vanilla CSS with custom properties, GSAP + ScrollTrigger (+ Lenis for smooth scroll when justified), Motion (Framer Motion) for component transitions, three.js / R3F for 3D.
- **Static/marketing, max performance:** Astro or plain HTML/CSS/JS with progressive enhancement.
- Respect the existing stack if the repo has one. Do not introduce a framework unprompted.
- Self-host fonts; preload the critical one.

---

## 12. Brand-grade benchmarks (study the principles, never copy assets or layouts)

- **Apple:** one idea per scroll step, extreme restraint, product as hero, cinematic pacing, typographic confidence.
- **Samsung (flagship launches):** immersive product stages, bold gradients used as *light*, tight spec storytelling.
- **Nothing:** a distinct, ownable visual language (dot-matrix type, transparency) derived from the product itself.
- **Linear / Stripe:** engineered polish, micro-interaction craft, typographic hierarchy, animated product truth.
- **Awwwards-tier studios:** experimental navigation, kinetic type, WebGL moments, strong art direction, clear narrative.

Lesson: each has a *proprietary visual language rooted in the product*. Build one for this client.

---

## 13. Final checklist before delivery

- [ ] Brief card + token plan written and reviewed against section 1
- [ ] One signature moment, clearly the star
- [ ] No more than 2 typefaces, scale defined, no default-font look
- [ ] Palette has a reason and a name; accent used sparingly
- [ ] At least three components replaced with authored versions
- [ ] Layout rhythm varies; at least one deliberate grid break
- [ ] Motion limited, purposeful, reduced-motion safe
- [ ] Real, specific copy; zero lorem ipsum, zero banned phrases
- [ ] All interaction states designed
- [ ] Responsive + accessible + fast (section 9)
- [ ] Removed one decorative element
- [ ] Short summary to the user: concept, tokens, signature moment, assumptions

---

## 14. Output format when responding

1. Brief card (5 lines)
2. Design plan (tokens + ASCII wireframe + principles) and the "what I changed after review" note
3. Code (complete, runnable, organized by file)
4. 3-5 line rationale and what to adjust next
