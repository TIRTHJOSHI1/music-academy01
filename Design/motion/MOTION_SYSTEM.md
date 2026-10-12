# RudRi Tech — Motion & Animation System

> **Principle**: Purposeful, high-performance motion. Zero gratuitous animation. Motion must serve context, focus attention, or provide physical feedback.

---

## 1. Animation Stack Guidelines

| Animation Need | Recommended Tool | Rationale |
|---|---|---|
| **UI Micro-interactions** | **Framer Motion** | Declarative layout transitions, spring physics for buttons/modals/cards |
| **Scroll Storytelling** | **GSAP + ScrollTrigger** | Pinning, timeline scrubbing, multi-stage parallax, high-precision camera control |
| **Simple Hover / State** | **CSS Transitions** | Zero runtime overhead for color shifts, scale changes, border glows |
| **3D Mesh & Shader Scenes** | **Three.js / React Three Fiber** | Reserved exclusively for interactive hardware/compute node visualizers |

---

## 2. Timing & Easing Curves

```css
/* Standard Smooth Out (UI Entrances) */
--ease-out-cubic: cubic-bezier(0.33, 1, 0.68, 1);

/* Physical Spring (Buttons & Modals) */
--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);

/* Inertial Deceleration (Scroll Reveals) */
--ease-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1.0);
```

| Action | Duration | Easing | Behaviour |
|---|---|---|---|
| **Hover / Active State** | `150ms` – `200ms` | `ease-out` | Instant response, zero lag |
| **Dropdown / Accordion** | `250ms` – `300ms` | `--ease-out-cubic` | Smooth expansion |
| **Card Reveal on Scroll** | `500ms` – `600ms` | `--ease-decelerate` | Staggered by `100ms` per item |
| **Section Transition** | `700ms` – `900ms` | `--ease-decelerate` | Controlled fade + vertical slide (`20px`) |
| **3D Stage Scrub** | Linked to scroll | Scrub `0.5s` | Smooth inertia following scrollbar |

---

## 3. Motion Patterns & Rules

- **Hover States**: Subtle scale up (`1.02`), border luminance increase, cyan glow blur (`0 0 20px rgba(6, 182, 212, 0.3)`).
- **Entrance Animations**: Fade in + translate up (`y: 24px` -> `y: 0px`).
- **Scroll Pinning**: Lock container during multi-step feature walkthroughs; unpin cleanly after the final step.
- **Accessibility Rule**: Respect `prefers-reduced-motion: reduce`:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```
