# BRAIN.md - Shree Music Academy

## 1. Executive Summary & GSD Workflow Context
- **Project Name:** Shree Music Academy
- **Purpose:** Primary reference file for project requirements, decisions, website architecture, design direction, tech stack, constraints, and pending tasks.
- **Workflow:** Get Shit Done (GSD). Read `BRAIN.md` first in all future sessions before inspecting other files.

---

## 2. Confirmed Information & Skill Integration
- **Project Scope:** High-craft, bespoke web experience for Shree Music Academy.
- **Loaded Design Intelligence & Component Systems:**
  - **`premium-web-design` (`Design/Claude Skill/SKILL.md`):** Award-level craft (Apple, Linear, Stripe-tier quality floor), subject-first design, anti-generic rules, custom typography pairing, single signature interactive moment, and 3-pass workflow (Plan -> Build -> Critique).
  - **`REFERENCE_DESIGN.md` (`Design/reference-design/`):** Enterprise craft, asymmetric layouts, breathable section padding (`120px`–`160px`), floating glassmorphic headers, magnetic interaction, staggered typography reveals.
  - **Component Ecosystem (Origin Kit, Animaster, Skipper UI, Scandan UI, UI Verse, Custom):** Evaluated section-by-section; no single component forced or repeated.
  - **`MOTION_SYSTEM.md` & `TYPOGRAPHY_SYSTEM.md` (`Design/motion/`, `Design/typography/`):** Fluid scale using CSS `clamp()`, strict motion curves (e.g. `cubic-bezier(0.22, 1, 0.36, 1)`), 60fps transform/opacity animations, accessibility and `prefers-reduced-motion` compliance.

---

## 3. Core Section Execution Rules & Architecture Principles

### Component Priority Hierarchy
1. **Claude Skill** (Primary design intelligence & anti-generic guardrails)
2. **Appropriate Provided Component** (Origin Kit, Animaster, Skipper UI, Scandan UI, UI Verse)
3. **Reference Design Principles** (Layout & interaction mechanics, strictly no copying)
4. **Custom Solution** (Built from scratch when existing components do not fit the UX goal)

### Section-by-Section Diversity & Quality Workflow
1. **No Layout Repetition:** Avoid using the same component type, grid rhythm, or animation across multiple sections. Every section must have a distinct composition tailored to its content.
2. **Pre-Implementation Comparison:** For every major section:
   - Identify purpose, UX goal, content density, and visual hierarchy.
   - Compare 2-3 visual/component approaches before choosing the winner.
3. **Build -> Inspect -> Refine Loop:** Implement the chosen approach, visually inspect the result, identify weaknesses, and refine until high-craft threshold is reached. Do not proceed with weak results.
4. **Unified Identity Anchor:** Maintain a single cohesive brand identity through consistent typography scale, spacing tokens, color palette, grid system, and micro-interaction feedback.
5. **Purposeful Motion & 3D:** Use 3D / GSAP / ScrollTrigger / Framer Motion strictly to advance storytelling or improve UX. Reject decorative floaters, clutter, excessive card borders, unnecessary glassmorphism, or lazy gradients.

---

## 4. Design Direction & Palette Concept

### Form Language & Materials
- Form language pulled from musical acoustics: soundwave frequencies, instrument wood & brass, raga scales, auditorium lighting, tactile pitch knobs, and crisp sheet music typography.

### Token System
- **Ground / Base:** Deep acoustic auditorium night (`#0a0812` / `#0f0c1b`).
- **Ink / Text:** High-contrast crisp ivory (`#f7f5f0`).
- **Signal / Accent:** Resonant acoustic gold / brass (`#e6b85c` / `#d49a37`) + subtle ambient soundwave glow.
- **Surface:** Matte paper / subtle dark wood translucent layering with hairlines (`rgba(255, 255, 255, 0.08)`).

---

## 5. Website Structure Plan (Draft)
- **Hero Section:** Typographic command + interactive raga / sound wave visualizer stage.
- **Programs & Disciplines:** Authored expandable stage / editorial index (Vocal, Sitar, Flute, Tabla, Western Piano, Violin).
- **Faculty & Pedigree:** Interactive masterclass teacher spotlights with performance highlights.
- **Student Performance Showcase:** Audio/video media grid with dynamic hover playback feedback.
- **Admission Portal:** Tactile inquiry form with real-time class tier calculator / program selector.

---

## 6. Tech Stack & Constraints
- **Core:** React 18 + Vite + JavaScript + Vanilla CSS design system.
- **Components:** Modular structure (`Hero.jsx`, `Navbar.jsx`, `BackgroundVideo.jsx`).
- **Styling:** Custom CSS design system tokens (`src/index.css` with fluid `clamp()` sizing, glassmorphism, responsive breakpoints).
- **Execution Rules:**
  - Strict preservation of existing media assets (`hero-bg.mp4`, `hero-logo.png`).
  - Modular React components; no unneeded external dependencies.

---

## 7. Progress & Completed Sections
- [x] Integrate 10 section-by-section design rules & component hierarchy into `BRAIN.md`.
- [x] **Home Page Hero Section & Navbar (COMPLETED & REFINED):**
  - **React + Vite Architecture:** Built modular components (`Navbar.jsx`, `BackgroundVideo.jsx`, `Hero.jsx`, `App.jsx`, `index.css`).
  - **Seamless Video Loop & Smooth Sync:** Powered by the original hardware-accelerated H.264 video (`hero-bg.mp4`) with a synchronized dual-layer crossfade system (`BackgroundVideo.jsx`). Transitions smoothly 0.8s before clip completion, eliminating frame drops, timestamp desync, and loop boundary jumps.
  - **Video Poster & Accessibility:** Video fallback (`public/assets/hero-poster.jpg`) for fast load and `@media (prefers-reduced-motion: reduce)` compliance.
  - **Navbar Component:** Glassmorphic pill navbar (`Navbar.jsx`) with gold treble clef SVG, `Cinzel` serif brand text, active nav dot indicator (`Home`), champagne gold CTA `Get Started ↗`, and mobile toggle drawer menu.
  - **Hero Branding Artwork:** Centered golden logo artwork (`hero-logo-main.png`) positioned in the upper wall area with clear framing.
  - **Animated Scroll Indicator (`ScrollIndicator.jsx`):** Relocated soundwave divider and scroll indicator to the bottom hero area. Added live animated audio equalizer bars (`.wave-bar`), high-visibility golden "SCROLL TO EXPLORE" typography with warm glow, and animated mouse scroll pill with smooth wheel glide & bouncing chevron.
- [x] **Introduction Section (`Introduction.jsx` - REBUILT & VERIFIED):**
  - **Clean Rebuild:** Completely removed reference screenshot crops. Rebuilt with pure HTML/CSS structure and standalone, photorealistic AI-generated photographs.
  - **Clean Main Photograph (`intro_studio_main.jpg`):** Generated a 4:3 sunlit conservatory interior with polished black grand piano, acoustic guitar, parquet floors, Persian rug, arched windows, and lush greenery with ZERO embedded text or UI overlays.
  - **Feature Photographs:** Generated individual macro photographs for all 4 features: Piano keys (`feature_piano.jpg`), Sheet music book (`feature_theory.jpg`), Acoustic guitar hands (`feature_practice.jpg`), and Music lesson studio (`feature_environment.jpg`).
  - **Pure HTML/CSS Typography:** "A Place Where" in `Playfair Display` serif, "Music" rendered in pure CSS with gold gradient script (`Pinyon Script` / `Alex Brush`), and "Comes Alive." in serif.
  - **Eyebrow, Paragraph & CTAs:** "WELCOME TO SHREE MUSIC ACADEMY" with CSS musical ornament, approved description copy, gold pill button "Explore Our Courses →" and circular play button "Watch Our Space".
  - **Section Background Image:** Integrated `intro_bg_waves.png` (`Resource/page deign/Elegant Cream Musical Waves.png`) as the high-resolution cover background for `.intro-section` with cream waves, flowing musical notes, staves, and golden ribbon accents. Hero section untouched.
- [x] **Full-Page Edge-to-Edge Layout & Scrollbar Hidden (`src/index.css`):**
  - Completely hidden native browser vertical and horizontal scrollbars across Chrome, Safari, Edge, and Firefox (`scrollbar-width: none`, `-ms-overflow-style: none`, `::-webkit-scrollbar { display: none }`).
  - Allowed smooth mouse wheel, keyboard, trackpad, and touch scrolling while utilizing the true 100% full viewport width without scrollbar gutter intrusions.
- [x] **Courses & Learning Paths Section (`Courses.jsx` - REPLICATED & VERIFIED):**
  - **Component & Architecture:** Modular semantic component [`src/components/Courses.jsx`](file:///d:/Music%20Academay/src/components/Courses.jsx) mounted immediately after Introduction in `App.jsx`.
  - **Dedicated Photorealistic Imagery (Generated matching reference):**
    - Card 1 (Basic Course): Grand piano keys in sunlit conservatory ([`public/assets/course_basic_piano.jpg`](file:///d:/Music%20Academay/public/assets/course_basic_piano.jpg)).
    - Card 2 (Advanced Course): Close-up of musician hands playing acoustic guitar ([`public/assets/course_advanced_guitar.jpg`](file:///d:/Music%20Academay/public/assets/course_advanced_guitar.jpg)).
    - Card 3 (International Program): Classical sheet music book on metal music stand ([`public/assets/course_intl_sheetmusic.jpg`](file:///d:/Music%20Academay/public/assets/course_intl_sheetmusic.jpg)).
  - **Header & Editorial Accents:**
    - Eyebrow `OUR COURSES` perfectly positioned beneath background musical soundwave ornament.
    - Two-line editorial heading: "Find Your Rhythm." in bold serif and "Discover Your Music." in warm radiant gold italic serif.
    - Left side decorative script text: "Learn / Practice / Grow / Perform" in cursive font.
    - Right side editorial note with vertical gold hairline: "Music for Every Stage of Your Journey.".
  - **Three Course Cards:**
    - Card 1: Basic Course with 2x2 grid (Duration: 4 Months, Total Classes: 48 Classes, Class Duration: 1 Hour, Frequency: 3 Days per Week).
    - Card 2: Advanced Course with 4-item vertical feature list.
    - Card 3: International Program with 4-item vertical feature list.
    - Floating circular gold badges with custom SVGs (Piano keys, Guitar, Globe) overlapping image and card body seams.
    - Gold gradient pill buttons `Learn More →`.
  - **Visual Verification:** Rendered in browser, captured headless screenshot, compared side-by-side with `Resource/page deign/home course.png`, refined typography, ornament spacing, badge colors, and card borders.
- [x] **Full-Page (100vh) Viewport Scaling Across Sections (`src/index.css`):**
  - Configured `.intro-section` and `.courses-section` to use `min-height: 100vh` on desktop with flex column centering.
  - Implemented fluid `clamp()` sizing based on viewport height (`vh`) and width (`vw`) for card images, paddings, headings, and margins.
  - Expanded container max-width to `min(1480px, calc(100% - 56px))` so cards spread out across the page width.
  - Ensured all 4 feature cards in Introduction and all 3 course cards + buttons in Courses fit completely inside standard 1080p / laptop screens without bottom clipping or navbar overlap.
- [x] **Our Instruments Section (`Instruments.jsx` - REPLICATED & VERIFIED):**
  - **Component & Architecture:** Modular semantic component [`src/components/Instruments.jsx`](file:///d:/Music%20Academay/src/components/Instruments.jsx) mounted immediately after Courses in `App.jsx`.
  - **Clean Photographic Assets (10 extracted & saved in `public/assets/`):**
    1. Piano (`inst_piano.jpg`)
    2. Guitar (`inst_guitar.jpg`)
    3. Tabla (`inst_tabla.jpg`)
    4. Flute (`inst_flute.jpg`)
    5. Keyboard (`inst_keyboard.jpg`)
    6. Octapad (`inst_octapad.jpg`)
    7. Dholak (`inst_dholak.jpg`)
    8. Kalimba (`inst_kalimba.jpg`)
    9. Steel Drum (`inst_steeldrum.jpg`)
    10. Clip Box (`inst_cajon.jpg`)
  - **Header & Editorial Accents:**
    - Eyebrow: `OUR INSTRUMENTS` tracked out in warm bronze font.
    - Main Heading: "Discover Your " in bold serif + "Instrument." in italic radiant gold gradient.
    - Supporting text: "Find the instrument that matches your passion.".
    - Left side decorative script text: "Music / Instruments / For a / Brighter You" in `Alex Brush`.
    - Right side editorial note with vertical gold hairline: "Different / Sounds. / Same Passion." in italic serif.
  - **10 Instrument Cards (5x2 Grid on Desktop):**
    - Warm cream surfaces (`#f6efe3`) with subtle borders and rounded corners (`20px`).
    - Circular overlapping badges (diameter 37px) in warm ivory with 2px gold borders and dark bronze vector instrument icons.
    - Card footers with `Playfair Display` bold instrument names and circular gold-ringed arrow buttons (`→`).
  - **Bottom CTA:** Champagne gold gradient pill button `Explore All Instruments →`.
  - **Full Responsiveness & Full-Page (100vh) Viewport Scaling:**
    - Desktop: 5x2 grid, side decorative elements, full `100vh` viewport rhythm.
    - Expanded container width to `min(1480px, calc(100% - 56px))` to utilize full page width across all desktop displays.
    - Configured `padding-top: clamp(82px, 9.6vh, 100px)` to provide full clearance beneath the floating pill navbar, matching the Introduction and Courses sections.
    - Re-positioned and calibrated left decorative script ("Music / Instruments / For a / Brighter You") with `top: clamp(-20px, -2.4vh, -12px)` and tight line-height, eliminating overlap with the Piano card.
    - Applied height-aware fluid tokens (`vh`) to card image wrappers (`clamp(86px, 11.8vh, 126px)`), card footers, and section paddings, eliminating bottom clipping of the CTA button on laptop screens (tested down to 1366x768).
    - Tablet: 3 columns grid, side script hidden gracefully.
    - Mobile: 2 columns grid, centered heading with clean wrapping, compact badges, no horizontal overflow.
    - Verified via headless browser screenshot comparison against `Resource/page deign/instrument discover.png`.
- [x] **Premium Animation & Motion Enhancement Across All Pages (COMPLETED & VERIFIED):**
  - **Zero Heavy Dependencies / Native GPU Motion:** Built using native `IntersectionObserver` with auto-unobserve in [`src/utils/motion.js`](file:///d:/Music%20Academay/src/utils/motion.js) and high-performance CSS transitions/keyframes in [`src/index.css`](file:///d:/Music%20Academay/src/index.css). Only animates `transform` and `opacity` on the GPU compositor thread.
  - **Progressive Enhancement:** Content is 100% visible by default; animated entrance states are strictly gated behind `html.motion-ready:not(.reduced-motion)`. If JS or observer is delayed/disabled, nothing is hidden.
  - **Accessibility Compliance:** Comprehensive `@media (prefers-reduced-motion: reduce)` rules disable all transitions, keyframe animations, and resets opacity/transforms immediately.
  - **Subtle Ambient Musical Float:** Gentle 6s ambient drift (`subtleMusicDrift`) on background musical notes and staves on About Us, Courses, Gallery, and Navbar.
  - **Micro-Interactions Across Elements:**
    - Navbar: Pulsing active diamond indicator dot (`diamondActivePulse`), smooth link color transitions, slanted CTA hover translate.
    - Buttons & CTAs: Arrow translate (`translateX(4px)`), subtle lift (`translateY(-2px)`), warm gold shadow on hover.
    - Cards: Soft elevation lift (`translateY(-4px)`) on course tier cards, philosophy cards, and instrument cards.
    - Gallery: Smooth photo hover zoom (`scale(1.035)`), lightbox opening transition (`fadeIn` overlay + `lightboxZoomIn` container), Esc key and click dismissal.
    - Contact Form: Clean golden focus halo ring (`box-shadow: 0 0 0 3px rgba(212, 160, 23, 0.16)`) and submit button feedback.
  - **Verified Without Regressions:** Validated across Home, About Us, Courses, Gallery, and Contact Us pages. Zero layout shifts, zero typography changes, all existing assets, geometry, and functionality preserved. Production build verified clean (`npm run build` exited with code 0).
- [x] **Final Production Readiness, Performance & Reliability Audit (COMPLETED & VERIFIED):**
  - **Asset & Video Reliability:** Resolved missing `hero-poster.jpg` asset fallback; production build now runs with zero build warnings and zero missing references.
  - **Dynamic Gallery Photo Visibility:** Completely decoupled dynamic gallery cards from observer opacity locks; added self-contained `@keyframes galleryCardEntrance` with `opacity: 1 !important` and eager loading on dynamic cards, guaranteeing 100% reliable rendering on filter clicks and expansions.
  - **Observer Pre-fetch & Fallback:** Added `50px` rootMargin and a 450ms safety fallback timer in `src/utils/motion.js` to ensure no content stays hidden.
  - **Enquiry Form Hardening:** Integrated double-submission lock, `VITE_ENQUIRY_ENDPOINT` async handling with error reporting, and local audit trail persistence in `localStorage`.
  - **SEO & Social Sharing:** Enhanced `index.html` with Open Graph, Twitter Cards, canonical URL, keywords, author, and theme-color tags.
  - **Branding Assets & Routing:** Created custom `favicon.svg` with gold treble clef, `robots.txt`, `sitemap.xml`, and SPA rewrite rules (`_redirects` and `vercel.json`).
  - **Production Build:** Verified clean bundle (`npm run build` completed in 634ms, total gzipped JS/CSS payload ~86.6 kB). All 5 routes verified operational.


