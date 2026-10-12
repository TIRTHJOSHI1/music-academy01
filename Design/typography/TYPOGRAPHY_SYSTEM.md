# RudRi Tech — Typography System

> **Source**: Built exclusively using approved fonts from `designing/font-style/FONT_LIBRARY.md`.

---

## 1. Selected Font Pairing

| Role | Selected Approved Font | Alternate Approved Option |
|---|---|---|
| **Hero & Main Display** | **Satoshi** (Modern Grotesk) | **Clash Display** |
| **Headings (H1 - H4)** | **Satoshi** (Modern Grotesk) | **Space Grotesk** |
| **Body & UI Elements** | **Plus Jakarta Sans** (Geometric Sans) | **Manrope** |
| **Technical Metrics & Code** | **JetBrains Mono** (Technical Monospace) | **Space Grotesk** |

---

## 2. Typography Scale & Specifications

| Scale Element | Desktop Size | Mobile Size | Weight | Line Height | Letter Spacing | Font Family |
|---|---|---|---|---|---|---|
| **Hero Text** | `64px` (`4rem`) | `36px` (`2.25rem`) | `900` (Black) | `1.1` | `-0.04em` | Satoshi |
| **H1 Heading** | `48px` (`3rem`) | `30px` (`1.875rem`) | `800` (ExtraBold) | `1.15` | `-0.03em` | Satoshi |
| **H2 Heading** | `36px` (`2.25rem`) | `24px` (`1.5rem`) | `700` (Bold) | `1.2` | `-0.02em` | Satoshi |
| **H3 Heading** | `24px` (`1.5rem`) | `20px` (`1.25rem`) | `600` (SemiBold) | `1.3` | `-0.01em` | Satoshi |
| **H4 Heading** | `20px` (`1.25rem`) | `18px` (`1.125rem`) | `600` (SemiBold) | `1.4` | `0em` | Plus Jakarta Sans |
| **Body Large** | `18px` (`1.125rem`) | `16px` (`1rem`) | `400` (Regular) | `1.6` | `0em` | Plus Jakarta Sans |
| **Body Regular** | `16px` (`1rem`) | `14px` (`0.875rem`) | `400` (Regular) | `1.5` | `0em` | Plus Jakarta Sans |
| **Small Copy** | `14px` (`0.875rem`) | `13px` (`0.8125rem`) | `400` (Regular) | `1.5` | `0em` | Plus Jakarta Sans |
| **Navigation** | `14px` (`0.875rem`) | `16px` (`1rem`) | `500` (Medium) | `1.0` | `0.02em` | Plus Jakarta Sans |
| **Button Text** | `14px` (`0.875rem`) | `14px` (`0.875rem`) | `600` (SemiBold) | `1.0` | `0.02em` | Plus Jakarta Sans |
| **Badges & Labels**| `12px` (`0.75rem`) | `11px` (`0.6875rem`) | `600` (SemiBold) | `1.0` | `0.08em` (Uppercase) | JetBrains Mono |
| **Metrics / Stats**| `40px` (`2.5rem`) | `28px` (`1.75rem`) | `700` (Bold) | `1.1` | `-0.02em` | JetBrains Mono |

---

## 3. Responsive Scaling & Fluid Type Rules

- Use CSS `clamp()` for smooth liquid typography scaling:
  ```css
  /* Fluid Hero Heading */
  font-size: clamp(2.25rem, 5vw + 1rem, 4rem);
  
  /* Fluid H1 Heading */
  font-size: clamp(1.875rem, 3.5vw + 1rem, 3rem);
  ```
- **Fallback Rule**: Never silently substitute Arial/Inter/system-ui. If Satoshi or Plus Jakarta Sans fails to load, report font loading error as per the master font policy.
