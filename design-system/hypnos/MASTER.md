# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/hypnos/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Hypnos
**Generated:** 2026-09-02 (hand-authored spec — supersedes auto-generated search output)
**Category:** Product / App UI
**Design Dials:** Variance 2/10 (Centered / Minimal) | Motion 2/10 (Purposeful, spring-based) | Density 1/10 (Spacious)

---

## Core Aesthetic & Philosophy

- **Style:** Minimalist, Swiss-inspired, Apple HIG–compliant. Clean hierarchy, high negative space, content-first layout.
- **Palette:** Neutral monochrome base (zinc). Dark-first. Crisp 1px borders. Refined, low-saturation accents only — **no saturated "AI purple/pink" gradients.**
- **Typography:** Inter / SF Pro–inspired scale. Strict modular sizing, tight tracking on large headers (`-0.03em`), high-contrast text.
- **Motion:** Purposeful, spring-based physics via Framer Motion (`stiffness: 300, damping: 30`). No arbitrary or looping motion. Every animation conveys spatial continuity or state change.
- **Interactions:** 44×44px minimum touch targets, deliberate hover states, instant feedback on click/tap, zero layout shift (CLS < 0.1).

---

## Global Rules

### Color Palette

Dark mode is the default. Light mode mirrors the same roles.

| Role | Dark | Light | CSS Variable |
|------|------|-------|--------------|
| Background | `#09090b` | `#ffffff` | `--color-background` |
| Surface / Card | `#111113` | `#fafafa` | `--color-card` |
| Elevated surface | `#18181b` | `#f4f4f5` | `--color-elevated` |
| Border | `#27272a` | `#e4e4e7` | `--color-border` |
| Border (strong) | `#3f3f46` | `#d4d4d8` | `--color-border-strong` |
| Text primary | `#f4f4f5` | `#09090b` | `--color-foreground` |
| Text muted | `#a1a1aa` | `#52525b` | `--color-muted-foreground` |
| Text subtle | `#71717a` | `#71717a` | `--color-subtle-foreground` |
| Accent (fg/CTA fill) | `#f4f4f5` | `#18181b` | `--color-accent` |
| On accent | `#09090b` | `#fafafa` | `--color-on-accent` |
| Focus ring | `#a1a1aa` | `#71717a` | `--color-ring` |
| Destructive | `#f87171` | `#dc2626` | `--color-destructive` |
| Success | `#4ade80` | `#16a34a` | `--color-success` |

**Notes:** Accent is a near-white/near-black tonal fill, not a hue. If a single brand hue is ever introduced, keep it desaturated and use it for links/selection only — never as a gradient wash.

### Typography

- **Font family:** `Inter` with system `-apple-system, "SF Pro Text", "SF Pro Display"` ahead of it in the stack so Apple platforms render SF Pro natively.
- **Fallback stack:** `-apple-system, BlinkMacSystemFont, "SF Pro Text", Inter, "Segoe UI", system-ui, sans-serif`
- **Google Fonts (Inter fallback for non-Apple):** `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`

**Modular scale (1.25 / major third, spacious):**

| Token | Size | Line height | Tracking | Usage |
|-------|------|-------------|----------|-------|
| `--text-display` | `3.5rem` (56px) | `1.05` | `-0.03em` | Marketing hero only |
| `--text-h1` | `2.5rem` (40px) | `1.1` | `-0.03em` | Page title |
| `--text-h2` | `2rem` (32px) | `1.15` | `-0.02em` | Section title |
| `--text-h3` | `1.5rem` (24px) | `1.25` | `-0.02em` | Subsection |
| `--text-lg` | `1.125rem` (18px) | `1.5` | `-0.01em` | Lead paragraph |
| `--text-base` | `1rem` (16px) | `1.6` | `0` | Body |
| `--text-sm` | `0.875rem` (14px) | `1.5` | `0` | Secondary text, labels |
| `--text-xs` | `0.75rem` (12px) | `1.4` | `0.01em` | Metadata, captions |

- Weights: 400 body, 500 UI labels, 600 headings, 700 sparingly.
- Never letter-spacing-positive on anything larger than `--text-sm`.

### Spacing Variables

*Density: 1/10 — Spacious. 4px base unit.*

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` | Tight inline gaps |
| `--space-sm` | `8px` | Icon gaps, chip padding |
| `--space-md` | `16px` | Control padding, list gaps |
| `--space-lg` | `24px` | Card padding |
| `--space-xl` | `40px` | Between related blocks |
| `--space-2xl` | `64px` | Section spacing |
| `--space-3xl` | `104px` | Page section rhythm |

### Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `6px` | Inputs, chips |
| `--radius-md` | `10px` | Buttons, cards |
| `--radius-lg` | `16px` | Modals, sheets |
| `--radius-full` | `9999px` | Avatars, pills |

### Elevation

Shadows are minimal and low-opacity — depth comes from borders and surface tint, not heavy drop shadows.

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.24)` | Resting cards (dark) |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.32)` | Dropdowns, popovers |
| `--shadow-lg` | `0 16px 48px rgba(0,0,0,0.40)` | Modals, sheets |

---

## Motion

**Engine:** Framer Motion. Springs, not duration-based easing, for anything that moves position or size.

```ts
// Canonical spring — use for layout, sheets, popovers, drag settle
const spring = { type: "spring", stiffness: 300, damping: 30 } as const;

// Opacity-only / color transitions may use a short tween
const fade = { duration: 0.15, ease: "easeOut" } as const;
```

Rules:
- ✅ Animate to convey **spatial continuity** (where did this come from?) or **state change** (what just happened?).
- ✅ Use `layout` / `AnimatePresence` for enter/exit and reflow.
- ✅ Honor `prefers-reduced-motion`: collapse to an instant opacity change, render final state immediately.
- ❌ No looping, ambient, decorative, or scroll-parallax motion.
- ❌ No animation longer than ~350ms of perceived settle.
- ❌ No motion that causes layout shift on load (reserve space; CLS < 0.1).

---

## Component Specs

### Buttons

Minimum hit area 44×44px (pad if the visual box is smaller).

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  min-height: 44px; padding: 0 16px;
  border-radius: var(--radius-md);
  font: 500 var(--text-sm)/1 Inter, -apple-system, system-ui, sans-serif;
  cursor: pointer;
  transition: background-color 120ms ease, border-color 120ms ease, opacity 120ms ease;
}
.btn-primary   { background: var(--color-accent); color: var(--color-on-accent); }
.btn-primary:hover  { opacity: 0.9; }
.btn-primary:active { opacity: 0.8; }           /* instant, no transform */
.btn-secondary { background: transparent; color: var(--color-foreground); border: 1px solid var(--color-border-strong); }
.btn-secondary:hover { background: var(--color-elevated); }
.btn:focus-visible { outline: 2px solid var(--color-ring); outline-offset: 2px; }
```

### Cards

```css
.card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
}
.card--interactive { cursor: pointer; transition: border-color 120ms ease, background-color 120ms ease; }
.card--interactive:hover { border-color: var(--color-border-strong); background: var(--color-elevated); }
```

### Inputs

```css
.input {
  min-height: 44px; padding: 0 12px;
  background: var(--color-card);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-sm);
  font-size: 16px; /* prevent iOS zoom */
  color: var(--color-foreground);
  transition: border-color 120ms ease, box-shadow 120ms ease;
}
.input::placeholder { color: var(--color-subtle-foreground); }
.input:focus { outline: none; border-color: var(--color-ring); box-shadow: 0 0 0 3px rgb(161 161 170 / 0.18); }
```

### Modals / Sheets

```css
.overlay { background: rgb(0 0 0 / 0.6); backdrop-filter: blur(2px); }
.modal {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-2xl);
  box-shadow: var(--shadow-lg);
  max-width: 480px; width: calc(100% - 32px);
}
```

Enter/exit with the canonical spring: overlay fades, panel springs from `scale: 0.96, y: 8` to rest.

---

## Style Guidelines

**Style:** Minimalism & Swiss Style · Apple HIG

**Keywords:** Clean, functional, spacious, high contrast, grid-based, restrained, monochrome, content-first

**Best For:** Product dashboards, auth flows, settings, focused task UI

**Key Effects:** 1px borders over shadows · surface-tint elevation · subtle 120ms hover on color only · spring transitions for position/size · clear type hierarchy via size + weight, not color

### Layout

- 8-column max content grid, centered, `max-width` ~1120px for app shells, ~720px for reading.
- Generous section rhythm (`--space-3xl`).
- Left-aligned text; avoid centered body copy beyond hero.

---

## Anti-Patterns (Do NOT Use)

- ❌ Saturated purple/pink/blue gradient washes ("AI look")
- ❌ Duration-based easing for things that move position/size (use springs)
- ❌ Looping, ambient, or decorative motion; scroll parallax
- ❌ Emojis as icons — use SVG (Lucide, already installed)
- ❌ Layout-shifting hover transforms; any load-time CLS
- ❌ Touch targets under 44×44px
- ❌ Low-contrast text (< 4.5:1 body, < 3:1 large)
- ❌ Invisible focus states
- ❌ Positive letter-spacing on large text
- ❌ Heavy drop shadows as the primary depth cue

---

## Pre-Delivery Checklist

- [ ] Dark mode is the default and fully styled; light mode mirrors all roles
- [ ] No saturated gradients; accents are tonal zinc
- [ ] Fonts: Inter with SF Pro ahead in the stack; headers tracked `-0.03em`
- [ ] All motion via Framer Motion springs (`stiffness: 300, damping: 30`); opacity-only may tween ≤150ms
- [ ] `prefers-reduced-motion` collapses motion to instant final state
- [ ] Every clickable element: `cursor: pointer`, ≥44×44px, visible `:focus-visible`
- [ ] Hover changes color only (120ms), never layout
- [ ] CLS < 0.1 — space reserved for async content, images, fonts
- [ ] Icons from Lucide only; no emoji
- [ ] Body contrast ≥ 4.5:1 in both themes
- [ ] Responsive: 375 / 768 / 1024 / 1440px; no horizontal scroll on mobile
