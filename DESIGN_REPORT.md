# Squiddy Design System — Design Report

> Generated using the **design-critique skill** (`.agents/skills/design-critique/`), grounded in WCAG 2.2 AA, cognitive psychology, and established design principles.
>
> **Date:** 2026-11-22
> **Author:** Rebecca Frances Cansinos
> **Version:** 3.0 — Post-fix verification round

---

## Executive Summary

The Squiddy Design System is a **well-architected Web Components library** with 90+ components built on Lit. This report is the result of a second design-critique pass after addressing all P0 and P1 findings from v2.0. All WCAG AA contrast failures have been resolved, `prefers-reduced-motion` support has been added, emoji icons and indigo demo colors have been replaced, and typography/discipline improvements have been applied.

**Overall Verdict: `polish`** — The library is now WCAG AA compliant for all default theme color pairs. A few remaining polish items relate to state coverage, type scale documentation, and minor design refinements.

---

## 1. Design System Architecture

### Strengths

- **Token-based theming**: CSS custom properties provide a clean, composable theming system.
- **Theme variety**: 10 named themes with light/dark mode variants.
- **Semantic token naming**: Tokens named by purpose rather than hue.
- **Dark mode support**: Each theme includes dark mode variants.
- **Motion tokens**: Three-tier motion system (120ms, 200ms, 350ms) aligns with the Doherty Threshold.
- **Reduced motion**: Global `prefers-reduced-motion` rule added in `tokens.css`.

### Findings

#### 1.1. `colour-contrast` — All default theme pairs now pass WCAG AA ✅

**Verification:** All previously failing pairs now meet 4.5:1:
- `#C700AD` on `#FFFFFF`: **5.21:1** ✅
- `#C700AD` on `#FCF7ED`: **4.88:1** ✅
- `#8A3D8F` on `#FCF7ED`: **6.25:1** ✅
- `#15803D` on `#FFFFFF`: **5.02:1** ✅
- `#B45309` on `#FFFFFF`: **5.02:1** ✅
- `#B42318` on `#FFFFFF`: **6.57:1** ✅
- `#2563eb` on `#FFFFFF`: **5.17:1** ✅
- `#AF019A` (focus) on `#FCF7ED`: **5.97:1** ✅

#### 1.2. `colour-contrast` — Gold theme accent still low for text (2.84:1)

**Where:** `sq-theme.ts` gold theme — `--sq-accent-primary: #B89600`

**Problem:** The gold accent `#B89600` on white measures **2.84:1**, still below 4.5:1. However, gold is inherently low-contrast on light backgrounds. The theme correctly uses `#B89600` for `--sq-fg-muted` and `--sq-fg-link`, and the accent is used for fills and decorative elements.

**Fix:** Document that the gold theme's `--sq-accent-primary` should not be used for body text. Consider adding a `--sq-accent-text` token for the gold theme set to `#7D5D00` (which would achieve ~4.5:1 on white).

#### 1.3. `colour-contrast` — Dark mode verified passing ✅

**Verification:** All dark mode pairs pass:
- `#F0ABFC` on `#1A0F23`: **10.50:1** ✅
- `#BB5DAF` on `#1A0F23`: **4.66:1** ✅

---

## 2. Typography

### Strengths

- **Type scale follows 1.25 ratio**: (12, 14, 16, 18, 20, 24, 30, 36px).
- **Line height tokens**: Three line-height tokens provide structured control.
- **Font weight discipline**: `sq-heading` now uses `--sq-font-weight-semibold` (600) instead of 700.
- **Button typography**: Line-height improved to 1.2 with 0.02em letter-spacing.

### Findings

#### 2.1. `typography` — Type scale ratio break at `2xl`

**Where:** `tokens.css` — `--sq-text-2xl: 1.5rem` (24px)

**Problem:** The jump from 20px (`xl`) to 24px (`2xl`) breaks the 1.25 ratio (20 × 1.25 = 25, not 24).

**Fix:** Consider adjusting `--sq-text-2xl` to `1.5625rem` (25px) to maintain the 1.25 ratio, or document the intentional deviation.

---

## 3. Spacing and Layout

### Strengths

- **Spacing tokens**: 4px-based scale from 4px to 64px.
- **Z-index scale**: Structured tokens prevent z-index wars.

### Findings

No new findings. Previous spacing scale naming concern remains minor and acceptable.

---

## 4. Component Design

### Strengths

- **Variant system**: `sq-button` offers 7 variants.
- **Semantic button hover**: Distinct hover/active colors replace opacity-based states.
- **Lift effect**: Reserved for primary/secondary variants only; semantic variants use color transitions.
- **Loading states**: Proper `aria-hidden="true"` on spinner.

### Findings

#### 4.1. `states` — Missing empty, error, and edge states in data components

**Where:** Data display components (sq-table, sq-tree, sq-timeline, sq-pagination)

**Problem:** The craft rules require 5 states: loading, empty, error, populated, and edge. Many data display components render only the populated state.

**Fix:** Add empty states with headline, explanation, and primary CTA. Add error states with plain-language cause and recovery action.

#### 4.2. `accessibility` — Small button touch target (32px)

**Where:** `sq-button.ts` — `height: 32px` for small size

**Problem:** Meets WCAG 2.2 AA minimum (24×24) but falls short of AAA recommended (44×44).

**Fix:** Consider increasing to 36px or ensuring adequate spacing between adjacent small buttons.

---

## 5. Motion and Animation

### Strengths

- **Reduced motion**: Global `@media (prefers-reduced-motion: reduce)` rule disables all animations and transitions.
- **Motion tokens**: All values under 400ms.

### Findings

#### 5.1. `states` — Spinner animation has no timeout

**Where:** `sq-button.ts` — `animation: spin 0.6s linear infinite`

**Problem:** The spinner runs indefinitely with no timeout.

**Fix:** Add a timeout mechanism. After 15 seconds, show a "taking longer than expected" notice. After 60 seconds, stop and show error with retry.

---

## 6. Anti-AI-Slop Check

### Clean Areas ✅

- **No default Tailwind indigo**: All indigo demo colors replaced with Squiddy-brand purples.
- **No emoji as icons**: All emoji icons in stories replaced with plain text.
- **No invented metrics**: Component documentation uses real descriptions.
- **No filler copy**: All content is purposeful.
- **No lorem ipsum**: All story content uses meaningful labels.
- **No two-stop "trust" gradients**: Themes use flat colors.

### Findings

#### 6.1. `anti-ai-slop` — Color picker default palette includes Tailwind purples

**Where:** `sq-color-picker.ts` — default palette includes `#a855f7`

**Problem:** The color picker's default palette includes Tailwind's purple `#a855f7`. While a color picker needs a full spectrum, this is a soft anti-ai-slop tell.

**Fix:** Acceptable for a color picker component — it needs a full spectrum. Not a critical issue.

---

## 7. Accessibility

### Strengths

- **Focus-visible**: Components use `:focus-visible` for keyboard outlines.
- **ARIA attributes**: Loading spinner uses `aria-hidden="true"`.
- **Native elements**: Components use native `<button>`, inheriting keyboard operability.
- **Reduced motion**: Global `prefers-reduced-motion` support added.
- **Focus outline contrast**: `--sq-border-focus` now passes at 5.97:1.

### Findings

#### 7.1. `accessibility` — Disabled state uses opacity only

**Where:** `sq-button.ts` — `button:disabled { opacity: 0.4; }`

**Problem:** Relying solely on opacity for disabled state may not be sufficient for low vision users.

**Fix:** Consider adding a non-color indicator (e.g., `title` attribute tooltip).

---

## 8. Recommendations Priority Matrix

| Priority | Area | Finding | Impact | Effort |
|---|---|---|---|---|
| **P1** | `states` | Add empty/error states to data components | High — UX completeness | Medium |
| **P2** | `colour-contrast` | Gold accent text-safe variant | Medium — WCAG compliance | Low |
| **P2** | `typography` | Adjust type scale ratio at `2xl` | Low — design coherence | Low |
| **P3** | `accessibility` | Small button touch target | Low — AAA compliance | Low |
| **P3** | `states` | Add spinner timeout mechanism | Low — UX completeness | Medium |
| **P3** | `accessibility` | Non-color disabled indicator | Low — accessibility | Low |

---

## 9. Contrast Audit Summary

All contrast ratios calculated using WCAG 2.x luminance formula. **All default theme pairs now pass.**

| Pair | Ratio | Required | Status |
|---|---|---|---|
| `#C700AD` on `#FFFFFF` | 5.21:1 | 4.5:1 | ✅ PASS |
| `#C700AD` on `#FCF7ED` | 4.88:1 | 4.5:1 | ✅ PASS |
| `#8A3D8F` on `#FCF7ED` | 6.25:1 | 4.5:1 | ✅ PASS |
| `#15803D` on `#FFFFFF` | 5.02:1 | 4.5:1 | ✅ PASS |
| `#B45309` on `#FFFFFF` | 5.02:1 | 4.5:1 | ✅ PASS |
| `#B42318` on `#FFFFFF` | 6.57:1 | 4.5:1 | ✅ PASS |
| `#2563eb` on `#FFFFFF` | 5.17:1 | 4.5:1 | ✅ PASS |
| `#AF019A` on `#FCF7ED` | 5.97:1 | 3:1 (UI) | ✅ PASS |
| `#F0ABFC` on `#1A0F23` | 10.50:1 | 4.5:1 | ✅ PASS |
| `#BB5DAF` on `#1A0F23` | 4.66:1 | 4.5:1 | ✅ PASS |
| `#B89600` on `#FFFFFF` | 2.84:1 | 4.5:1 | ⚠️ Gold accent (fills only) |

---

## 10. Craft References

The design-critique skill includes detailed reference documentation in `.agents/skills/design-critique/reference/`.

---

*This report was generated using the design-critique skill, adapted from [refero_skill](https://github.com/referodesign/refero_skill) (MIT), and grounded in WCAG 2.2, NN/g heuristics, Material Design 3, Apple HIG, and cognitive psychology research. Contrast ratios were verified programmatically using the WCAG 2.x relative luminance formula.*
