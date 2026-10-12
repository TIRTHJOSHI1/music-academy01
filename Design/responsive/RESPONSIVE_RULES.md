# RudRi Tech — Responsive Rules & Guidelines

> **IMPORTANT**: These rules define viewport behavior for future implementation. Do NOT implement code until explicitly instructed ("make it responsive").

---

## 1. Viewport Breakpoint Taxonomy

| Device Class | Viewport Range | Columns | Container Margin | Touch / Cursor Target |
|---|---|---|---|---|
| **Mobile** | `360px` – `639px` | `1` column | `16px` | Min `44px` touch hit target |
| **Tablet** | `640px` – `1023px` | `2` columns | `24px` | Min `44px` touch hit target |
| **Laptop** | `1024px` – `1279px` | `3` columns | `32px` | Cursor / Mouse |
| **Desktop** | `1280px` – `1535px` | `3` or `4` columns | `32px` | Cursor / Mouse |
| **Large Desktop**| `1536px+` | `4` columns | `48px` | Cursor / Mouse |

---

## 2. Adaptation Strategies by Device

### Mobile (<640px)
- **Grid Restructuring**: Collapse multi-column grid layouts to vertical single-column stacks.
- **Typography Adjustment**: Scale down display headers using fluid `clamp()` settings (e.g. Hero drops from 64px to 36px).
- **Navigation**: Replace horizontal links with a lightweight full-screen overlay navigation drawer.
- **Performance / 3D**: Automatically disable complex real-time WebGL/3D canvases or replace with optimized static fallback cards / CSS animations to preserve battery and frame rate.
- **Touch Targets**: Ensure buttons, dropdown triggers, and tab headers maintain a minimum height of `44px` with adequate padding.

### Tablet (640px – 1023px)
- **Grid Behavior**: 2-column card layouts; side-by-side hero splits stack vertically on narrow tablets (`<768px`).
- **Interactive UI**: Support hybrid touch/cursor interactions; ensure hover states do not get stuck on touch release.

### Desktop & Ultra-Wide (1024px+)
- **Full Interactive Canvas**: Enable 3D webgl scenes, pinned scroll stages, hover glows, magnetic buttons, and multi-column comparison tables.
- **Container Max Width**: Cap main content container at `1280px` (`max-w-7xl`) or `1536px` to prevent ultra-wide line length stretching.
