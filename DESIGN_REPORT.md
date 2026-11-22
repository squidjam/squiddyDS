# Squiddy Design System — Design Report

> Generated using the **design-critique skill** (`.agents/skills/design-critique/`), grounded in WCAG 2.2 AA, cognitive psychology, and established design principles.
>
> **Date:** 2026-11-22
> **Author:** Rebecca Frances Cansinos
> **Version:** 2.0 — Updated with verified contrast ratios and fresh rubric findings

---

## Executive Summary

The Squiddy Design System is a **well-architected Web Components library** with 90+ components built on Lit. The token-based CSS custom property system provides excellent theming support with 10 named themes and dark mode variants. This report evaluates the current design against the 8-area design-critique rubric with **verified, measured contrast ratios** and specific code references.

**Overall Verdict: `polish`** — The foundation is solid, but several WCAG AA contrast failures must be fixed before production use. One round of targeted improvements across color contrast, motion accessibility, state coverage, and anti-ai-slop cleanup will make this library production-ready.

---

## 1. Design System Architecture

### Strengths

- **Token-based theming**: CSS custom properties (`--sq-accent-primary`, `--sq-bg-default`, etc.) provide a clean, composable theming system.
- **Theme variety**: 10 named themes (blue, red, lime, cyan, green, gold, pink, fuchsia, magenta, rainbow) with light/dark mode variants.
- **Semantic token naming**: Tokens are named by purpose (`--sq-bg-surface`, `--sq-fg-muted`) rather than by hue, enabling flexible theming — follows the craft rule correctly.
- **Dark mode support**: Each theme includes dark mode variants with adjusted backgrounds, foregrounds, and shadows.
- **Component consistency**: Components reference the same CSS custom properties, ensuring visual coherence across the library.
- **Motion tokens**: Three-tier motion system (`--sq-motion-fast`: 120ms, `--sq-motion-base`: 200ms, `--sq-motion-slow`: 350ms) aligns with the Doherty Threshold.

### Findings

#### 1.1. `colour-contrast` — Default accent fails WCAG AA on white (**VERIFIED: 3.24:1**)

**Where:** `tokens.css` line 35 — `--sq-accent-primary: #FE00F0`

**Problem:** The default hot pink accent `#FE00F0` on white surfaces measures **3.24:1**, which fails the 4.5:1 WCAG 2.2 AA requirement for body text (≤16px). This means any button text, link text, or body-sized text rendered in the accent color is non-compliant. The accent also fails on the default background `#FCF7ED` at **3.04:1**.

**Fix:** Darken the default accent to at least `#C700AD` (the current `--sq-accent-primary-active` value) for text use, or introduce a `--sq-accent-text` token. Reserve `#FE00F0` for fills, icons, and decorative elements only. The craft rules state: "When the brand color clashes, darken the accent to a 600-level shade for text use."

#### 1.2. `colour-contrast` — `--sq-fg-muted` fails WCAG AA (**VERIFIED: 3.71:1**)

**Where:** `tokens.css` line 24 — `--sq-fg-muted: #BB5DAF`

**Problem:** The muted foreground color `#BB5DAF` on the default background `#FCF7ED` measures **3.71:1**, failing the 4.5:1 requirement for body text. Any component using `--sq-fg-muted` for body-sized text (helper text, captions, descriptions) is non-compliant.

**Fix:** Darken `--sq-fg-muted` to at least `#8A3D8F` (which would achieve ~4.5:1 on `#FCF7ED`). Verify across all themes.

#### 1.3. `colour-contrast` — Gold accent critically fails WCAG AA (**VERIFIED: 1.40:1**)

**Where:** `sq-theme.ts` line 320 — `--sq-accent-primary: #FFD700`

**Problem:** The gold accent `#FFD700` on white measures **1.40:1** — a catastrophic contrast failure. Gold is inherently low-contrast on light backgrounds. While the theme does provide a darker text variant (`#B89600` for `--sq-fg-muted` and `--sq-fg-link`), the primary accent itself cannot be used for any text.

**Fix:** The gold theme already uses `#B89600` for text — ensure this pattern is documented and that `--sq-accent-primary` is never used for body text in this theme. Consider darkening `--sq-accent-primary` to `#B89600` for the gold theme to prevent misuse.

#### 1.4. `colour-contrast` — Semantic colors fail for body text

**Where:** `tokens.css` lines 42–48

**Problem:** Several semantic colors fail the 4.5:1 body text requirement:
- `--sq-color-success` (`#16a34a`) on white: **3.30:1** ❌
- `--sq-color-warning` (`#d97706`) on white: **3.19:1** ❌
- `--sq-color-danger` (`#B42318`) on white: **6.57:1** ✅
- `--sq-color-info` (`#2563eb`) on white: **5.17:1** ✅

**Fix:** Darken success to `#15803D` and warning to `#B45309` for text use. These colors are fine for fills and icons, but any component rendering body text in these colors (e.g., success/warning messages) is non-compliant.

#### 1.5. `colour-contrast` — Dark mode verified passing ✅

**Where:** `tokens.css` dark mode section

**Verification:** All dark mode foreground/background pairs pass WCAG AA:
- `#F0ABFC` on `#1A0F23`: **10.50:1** ✅
- `#BB5DAF` on `#1A0F23`: **4.66:1** ✅ (barely passes)
- Red dark mode `#FFB4B4` on `#1A0F0F`: **11.12:1** ✅
- Cyan dark mode `#90E0EF` on `#0A1520`: **12.35:1** ✅

#### 1.6. `fit` — Blue theme removes all border radius

**Where:** `sq-theme.ts` line 35 — blue theme sets all radius tokens to `0px`

**Problem:** The blue theme creates a starkly different visual language (sharp corners) from all other themes. While this is a valid design choice, it should be documented as an intentional stylistic variant.

**Fix:** Document the blue theme's sharp-corner aesthetic in the theme stories.

---

## 2. Typography

### Strengths

- **Type scale follows 1.25 ratio**: The scale (12, 14, 16, 18, 20, 24, 30, 36px) closely follows a 1.25 multiplicative ratio, which the craft rules recommend.
- **Line height tokens**: Three line-height tokens (`--sq-line-height-tight`: 1.25, `--sq-line-height-normal`: 1.5, `--sq-line-height-relaxed`: 1.75) provide structured control.
- **Font family tokenization**: `--sq-font-family` with a system fallback chain provides a single point of control.

### Findings

#### 2.1. `typography` — Type scale exceeds recommended cap (8 sizes)

**Where:** `tokens.css` lines 52–59

**Problem:** The type scale has 8 sizes (xs through 4xl). The craft rules recommend capping at 6–8 sizes. While this is at the upper limit, the scale is acceptable. However, the jump from 20px (`xl`) to 24px (`2xl`) breaks the 1.25 ratio (20 × 1.25 = 25, not 24).

**Fix:** Consider adjusting `--sq-text-2xl` to `1.5625rem` (25px) to maintain the 1.25 ratio, or document the intentional deviation.

#### 2.2. `typography` — `font-weight: 700` used in component code

**Where:** `sq-heading.ts` line 19 — `font-weight: var(--sq-font-weight-bold)` (700)

**Problem:** The craft rules recommend a three-weight system: Read (400/450), Emphasize (510/550), Announce (590/600). Weight 700+ is rarely needed. `sq-heading` uses `--sq-font-weight-bold` (700) for all heading levels, and `sq-text` exposes a `bold` weight attribute.

**Fix:** Change `sq-heading` to use `--sq-font-weight-semibold` (600) instead of `--sq-font-weight-bold` (700). Reserve 700 for display/hero text only. The craft rules state: "Weight 700+ is rarely needed. If your design uses bold for 'emphasis on emphasis,' it likely lacks weight discipline elsewhere."

#### 2.3. `typography` — Button line height too tight

**Where:** `sq-button.ts` line 44 — `line-height: 1`

**Problem:** While single-line buttons can use tight line height, `line-height: 1` can cause clipping on some systems for certain font sizes. The craft rules recommend UI labels at `0.02em` letter-spacing, which is not applied.

**Fix:** Change button line-height to `1.2` and add `letter-spacing: 0.02em` for button text to match the craft rules for UI labels.

---

## 3. Spacing and Layout

### Strengths

- **Spacing tokens**: `--sq-space-1` through `--sq-space-16` (4, 8, 12, 16, 20, 24, 32, 40, 48, 64px) provide a consistent 4px-based spacing scale.
- **Gap usage**: Components use `gap` with spacing tokens for consistent internal spacing.
- **Z-index scale**: Structured z-index tokens (`--sq-z-dropdown` through `--sq-z-tooltip`) prevent z-index wars.

### Findings

#### 3.1. `layout-rhythm` — Spacing scale gaps are inconsistent

**Where:** `tokens.css` lines 72–81

**Problem:** The spacing scale jumps from 24px (`space-6`) to 32px (`space-8`), skipping the expected 28px step. The naming convention (1, 2, 3, 4, 5, 6, 8, 10, 12, 16) mixes a linear progression with a Tailwind-style naming scheme. This is minor but could confuse developers.

**Fix:** Document the naming convention. The scale is functional — the gap between 24px and 32px is acceptable for the Gestalt Law of Proximity (32–48px between groups, 8–12px within groups).

---

## 4. Component Design

### Strengths

- **Variant system**: `sq-button` offers 7 variants (primary, secondary, subtle, danger, success, warning, info) for different contexts.
- **Size system**: Components support `sm`, `md`, `lg` sizes with proportional adjustments.
- **State handling**: Components handle hover, active, disabled, and focus-visible states.
- **Loading states**: `sq-button` includes a loading spinner with proper `aria-hidden="true"`.
- **Native elements**: Components use native `<button>`, inheriting keyboard operability and screen reader support for free.

### Findings

#### 4.1. `states` — Semantic button variants use opacity for hover

**Where:** `sq-button.ts` lines 108–166 — danger, success, warning, info variants

**Problem:** The semantic variants use `opacity: 0.85` for hover and `opacity: 0.75` for active, while the primary variant uses distinct color tokens (`--sq-accent-primary-hover`, `--sq-accent-primary-active`). Opacity-based hover states are less accessible — they reduce contrast further and don't provide clear visual feedback for users with low vision.

**Fix:** Add hover and active color tokens for semantic variants (e.g., `--sq-color-danger-hover`, `--sq-color-danger-active`) to match the primary variant's pattern. This also ensures the hover state maintains WCAG AA contrast.

#### 4.2. `states` — Missing empty, error, and edge states in data components

**Where:** Data display components (sq-table, sq-tree, sq-timeline, sq-pagination)

**Problem:** The craft rules require 5 states for every interactive surface: loading, empty, error, populated, and edge. Many data display components render only the populated state. An empty table or tree with no guidance is a blank panel, not an empty state.

**Fix:** Add empty states with headline, explanation, and primary CTA. Add error states with plain-language cause and recovery action. Test edge cases: long strings, missing optional fields, extreme data volumes. The craft rules specify: "Empty is not the absence of state. It is its own state with a job."

#### 4.3. `accessibility` — Small button touch target

**Where:** `sq-button.ts` line 170 — `height: 32px`

**Problem:** The small button is 32px tall, which meets the WCAG 2.2 AA minimum of 24×24 CSS px but falls short of the recommended 44×44 AAA target. On mobile, this may be difficult to tap accurately.

**Fix:** Consider increasing the small button height to at least 36px or ensuring adequate spacing between adjacent small buttons. The craft rules recommend 44×44 for AAA compliance.

#### 4.4. `purpose-hierarchy` — Button lift effect on all variants

**Where:** `sq-button.ts` line 54 — `button:hover { transform: translateY(-1px); }`

**Problem:** The 1px upward translation on hover applies to all variants, including danger buttons. A "lifting" effect on a destructive action can feel incongruous — danger buttons should feel grounded, not playful.

**Fix:** Reserve the lift effect for primary and secondary variants only. Semantic variants (danger, success, warning, info) should use a simpler color transition.

---

## 5. Motion and Animation

### Strengths

- **Motion tokens**: Three-tier system (`--sq-motion-fast`: 120ms, `--sq-motion-base`: 200ms, `--sq-motion-slow`: 350ms) provides structured control.
- **Doherty Threshold compliance**: All motion values are under 400ms, keeping users in flow.

### Findings

#### 5.1. `accessibility` — No `prefers-reduced-motion` support (**P0 — WCAG compliance**)

**Where:** All components with transitions and animations (sq-button, sq-spinner, sq-equalizer, sq-carousel, etc.)

**Problem:** A grep search for `prefers-reduced-motion` across the entire `src/` directory returned **zero matches**. This means users who have set their OS preference for reduced motion will still experience all animations, including the spinner rotation (`@keyframes spin`), button lift effects, and carousel transitions. This violates WCAG 2.3.3 (Level AAA) and can trigger photosensitive epilepsy (WCAG 2.3.1, Level A).

**Fix:** Add a global `@media (prefers-reduced-motion: reduce)` query in `tokens.css` that disables all animations and reduces transitions:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
This is the most critical accessibility fix in this report.

#### 5.2. `states` — Spinner animation has no timeout

**Where:** `sq-button.ts` line 190 — `animation: spin 0.6s linear infinite`

**Problem:** The spinner runs indefinitely with no timeout. The craft rules specify: "Never leave a spinner running indefinitely. Start a timeout on every request." After 60 seconds, the spinner should stop and show an error with retry.

**Fix:** Add a timeout mechanism to the loading state. After 15 seconds, show a "taking longer than expected" notice. After 60 seconds, stop the animation and show an error with retry/cancel options.

---

## 6. Anti-AI-Slop Check

### Clean Areas ✅

- **No default Tailwind indigo as accent**: The design system uses brand-specific colors (hot pink `#FE00F0`, red `#EE2E31`, lime `#A8E400`, cyan `#00B4D8`) rather than the AI-default indigo `#6366f1`.
- **No invented metrics**: Component documentation uses real, verifiable descriptions.
- **No filler copy**: Component JSDoc comments are purposeful and technical.
- **No lorem ipsum**: All story content uses meaningful labels.
- **No two-stop "trust" gradients**: Themes use flat colors, not purple→blue gradients.

### Findings

#### 6.1. `anti-ai-slop` — Emoji used as icons in stories (**P1 — should fix**)

**Where:** Story files use emoji as feature icons:
- `sq-timeline.stories.ts`: `🚀`, `✅`, `⚠️` as timeline item icons
- `sq-tree.stories.ts`: `📁`, `🖼️`, `📝`, `🎬` as tree node icons
- `sq-masonry.stories.ts`: `📷` as photo placeholder labels

**Problem:** The craft rules list "Emoji as feature icons" as a cardinal sin: "Use 1.6–1.8px-stroke monoline SVG with `currentColor`." While these are in story/demo files rather than component defaults, they set a poor example for consumers of the library.

**Fix:** Replace emoji icons in stories with SVG icons or the `icon` slot pattern. The component code itself is clean — only the stories need updating.

#### 6.2. `anti-ai-slop` — Indigo colors in story demos (**P2 — polish**)

**Where:** Multiple story files use indigo hex values for demo content:
- `sq-color-picker.ts`: Default palette includes `#6366f1`, `#8b5cf6`, `#a855f7`
- `sq-masonry.stories.ts`, `sq-flex.stories.ts`, `sq-grid.stories.ts`: Demo items use `#8b5cf6`, `#6366f1`

**Problem:** The craft rules flag indigo `#6366f1` as "the most reliable AI-slop tell." While these are demo colors in stories — not the design system's accent — they could mislead consumers into thinking indigo is a recommended color.

**Fix:** Replace indigo demo colors in stories with colors from the Squiddy palette (e.g., `#D946EF` for purple, `#EE2E31` for red). The color picker default palette is a special case — it should include a full spectrum, but consider replacing the indigo entries with Squiddy-brand purples.

#### 6.3. `anti-ai-slop` — Rainbow theme as showcase

**Where:** `sq-theme.ts` rainbow and sq-theme themes

**Problem:** The rainbow theme cycles through 8 different accent colors for each child element. While this is a distinctive design choice that aligns with the Squiddy brand identity, it could be perceived as visually chaotic if not used intentionally.

**Fix:** Document the rainbow theme as a showcase/demo theme rather than a production recommendation.

---

## 7. Accessibility

### Strengths

- **Focus-visible**: Components use `:focus-visible` for keyboard-focused outlines, not `:focus`.
- **ARIA attributes**: Loading spinner uses `aria-hidden="true"` correctly.
- **Native elements**: Components use native `<button>`, inheriting keyboard operability and screen reader support for free — follows the ARIA discipline rule: "Native HTML first, then ARIA."
- **Global focus-visible**: `tokens.css` sets a global `:focus-visible` outline with 2px width and 2px offset.

### Findings

#### 7.1. `accessibility` — Focus outline contrast varies by theme

**Where:** `sq-button.ts` line 65 — `outline: 2px solid var(--sq-border-focus)`

**Problem:** The focus outline is 2px with a 2px offset, which meets the WCAG 2.4.13 (AAA) requirement of a 2 CSS px perimeter. However, `--sq-border-focus` resolves to different values per theme. The default theme uses `#FE00F0`, which has only 3.24:1 contrast on white — below the 3:1 minimum for UI components.

**Fix:** Ensure `--sq-border-focus` in every theme provides at least 3:1 contrast against adjacent surfaces. For the default theme, consider using `#AF019A` (5.97:1 on `#FCF7ED`) instead of `#FE00F0`.

#### 7.2. `accessibility` — Disabled state uses opacity only

**Where:** `sq-button.ts` line 70 — `button:disabled { opacity: 0.4; }`

**Problem:** Relying solely on opacity to indicate disabled state may not be sufficient for users with low vision or color vision deficiencies. At 40% opacity, the button becomes hard to read, and the contrast ratio drops further. The craft rules state: "Never give instructions by colour or position alone."

**Fix:** Consider adding a non-color indicator for disabled state, such as a tooltip (`title="This action is currently unavailable"`) or a subtle visual change beyond opacity (e.g., `cursor: not-allowed` is already present — good).

#### 7.3. `accessibility` — System dark mode auto-detection

**Where:** `tokens.css` lines 163–200 — `@media (prefers-color-scheme: dark)`

**Strength:** The design system auto-detects the user's OS dark mode preference when no explicit `sq-mode` is set. This is a strong accessibility feature that respects user preferences without requiring explicit action.

---

## 8. Recommendations Priority Matrix

| Priority | Area | Finding | Impact | Effort |
|---|---|---|---|---|
| **P0** | `colour-contrast` | Default accent `#FE00F0` fails WCAG AA (3.24:1) | High — WCAG compliance | Low |
| **P0** | `colour-contrast` | `--sq-fg-muted` `#BB5DAF` fails WCAG AA (3.71:1) | High — WCAG compliance | Low |
| **P0** | `colour-contrast` | Gold accent `#FFD700` critically fails (1.40:1) | High — WCAG compliance | Low |
| **P0** | `colour-contrast` | Success/warning semantic colors fail for body text | High — WCAG compliance | Low |
| **P0** | `accessibility` | Add `prefers-reduced-motion` support (zero matches in codebase) | High — WCAG 2.3.3 | Medium |
| **P1** | `states` | Add empty/error states to data components | High — UX completeness | Medium |
| **P1** | `states` | Add hover/active colors for semantic button variants | Medium — visual consistency | Low |
| **P1** | `anti-ai-slop` | Replace emoji icons in stories with SVG | Medium — design quality | Low |
| **P1** | `typography` | Change `sq-heading` from 700 to 600 weight | Medium — visual hierarchy | Low |
| **P2** | `typography` | Adjust type scale ratio at `2xl` (24→25px) | Low — design coherence | Low |
| **P2** | `anti-ai-slop` | Replace indigo demo colors in stories | Low — brand consistency | Low |
| **P2** | `accessibility` | Fix focus outline contrast in default theme | Medium — WCAG compliance | Low |
| **P2** | `typography` | Add letter-spacing to button text | Low — readability | Low |
| **P3** | `states` | Reserve lift effect for primary variants only | Low — polish | Low |
| **P3** | `accessibility` | Add non-color disabled indicator | Low — accessibility | Low |
| **P3** | `states` | Add spinner timeout mechanism | Low — UX completeness | Medium |

---

## 9. How to Use This Report

This report is designed to be used iteratively:

1. **Start with P0 items** — These are WCAG compliance-critical. The 5 P0 contrast fixes are all low-effort token changes in `tokens.css` and `sq-theme.ts`.
2. **Add `prefers-reduced-motion`** — A single global CSS rule in `tokens.css` resolves the most critical accessibility gap.
3. **Move to P1 items** — These improve UX completeness, visual consistency, and design quality.
4. **Address P2 items** — These enhance design coherence and readability.
5. **Polish with P3 items** — These are refinements that add the final touch of quality.

For each finding, the **Fix** section provides specific, actionable guidance with exact file paths and line numbers. Use the **design-critique skill** (installed in `.agents/skills/design-critique/`) to re-evaluate components after changes.

---

## 10. Contrast Audit Summary

All contrast ratios were calculated using the WCAG 2.x luminance formula. Key failures:

| Pair | Ratio | Required | Status |
|---|---|---|---|
| `#FE00F0` on `#FFFFFF` | 3.24:1 | 4.5:1 | ❌ FAIL |
| `#BB5DAF` on `#FCF7ED` | 3.71:1 | 4.5:1 | ❌ FAIL |
| `#FFD700` on `#FFFFFF` | 1.40:1 | 4.5:1 | ❌ FAIL |
| `#16a34a` on `#FFFFFF` | 3.30:1 | 4.5:1 | ❌ FAIL |
| `#d97706` on `#FFFFFF` | 3.19:1 | 4.5:1 | ❌ FAIL |
| `#B42318` on `#FFFFFF` | 6.57:1 | 4.5:1 | ✅ PASS |
| `#2563eb` on `#FFFFFF` | 5.17:1 | 4.5:1 | ✅ PASS |
| `#F0ABFC` on `#1A0F23` | 10.50:1 | 4.5:1 | ✅ PASS |
| `#0077B6` on `#FFFFFF` | 4.87:1 | 4.5:1 | ✅ PASS (cyan link) |

---

## 11. Craft References

The design-critique skill includes detailed reference documentation for:

- **Color**: Palette structure, accent discipline, contrast rules, dark themes
- **Typography**: Type scale, line height, letter-spacing, font pairing, three-weight system
- **Accessibility**: WCAG 2.2 AA compliance, ARIA discipline, touch targets, focus visibility
- **State Coverage**: Five required states, form states, error composition, loading thresholds
- **UX Writing**: Buttons, errors, empty states, destructive actions, mechanics
- **Anti-AI-Slop**: Seven cardinal sins, soft tells, how to add soul
- **Laws of UX**: Gestalt principles, decision-making, memory, interaction, behavior

These references are available in `.agents/skills/design-critique/reference/`.

---

*This report was generated using the design-critique skill, adapted from [refero_skill](https://github.com/referodesign/refero_skill) (MIT), and grounded in WCAG 2.2, NN/g heuristics, Material Design 3, Apple HIG, and cognitive psychology research. Contrast ratios were verified programmatically using the WCAG 2.x relative luminance formula.*
