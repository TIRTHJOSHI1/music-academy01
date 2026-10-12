# RudRi Tech — Spacing System

> **Rhythm Rationale**: Engineered using an 8pt base grid for clean proportional rhythm, scaled for high-density computational interfaces and high-impact enterprise landing sections.

---

## 1. Grid & Container Boundaries

| Breakpoint | Viewport Width | Container `max-width` | Horizontal Margin / Padding |
|---|---|---|---|
| **Mobile** | `360px` – `639px` | `100%` | `16px` (`px-4`) |
| **Tablet** | `640px` – `1023px` | `640px` / `768px` | `24px` (`px-6`) |
| **Laptop** | `1024px` – `1279px` | `1024px` | `32px` (`px-8`) |
| **Desktop** | `1280px` – `1535px` | `1280px` (`max-w-7xl`) | `32px` (`px-8`) |
| **Ultra-Wide** | `1536px+` | `1536px` (`max-w-2xl`) | `48px` (`px-12`) |

---

## 2. Spacing Scale

| Token Name | Rem Value | Pixel Equivalent | Recommended Context |
|---|---|---|---|
| `space-1` | `0.25rem` | `4px` | Micro gaps between icon and badge text |
| `space-2` | `0.5rem` | `8px` | Compact button padding, chip gaps |
| `space-3` | `0.75rem` | `12px` | Standard button padding (vertical), input padding |
| `space-4` | `1.0rem` | `16px` | Card internal padding (mobile), small gaps |
| `space-6` | `1.5rem` | `24px` | Card internal padding (desktop), grid gaps |
| `space-8` | `2.0rem` | `32px` | Major component gaps, section header margin |
| `space-12` | `3.0rem` | `48px` | Sub-section vertical separation |
| `space-16` | `4.0rem` | `64px` | Main section padding (mobile) |
| `space-24` | `6.0rem` | `96px` | Hero vertical padding, main section padding (desktop) |
| `space-32` | `8.0rem` | `128px` | Major chapter scroll-stage separation |

---

## 3. Structural Component Gaps

- **Hero Composition Spacing**:
  - Badge to Headline gap: `16px` (`space-4`)
  - Headline to Subtitle gap: `24px` (`space-6`)
  - Subtitle to CTA row gap: `32px` (`space-8`)
- **Grid Gaps**:
  - Desktop 3-column grid gap: `32px` (`gap-8`)
  - Mobile 1-column stack gap: `24px` (`gap-6`)
- **Card Padding**:
  - Desktop: `32px` (`p-8`)
  - Mobile: `20px` (`p-5`)
