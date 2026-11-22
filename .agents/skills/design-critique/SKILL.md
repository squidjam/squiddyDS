---
name: design-critique
description: Evaluate and improve the visual design quality of components using a structured rubric grounded in design principles, cognitive psychology, and accessibility standards.
---

# Design Critique Skill

Evaluate and improve the visual design quality of the Squiddy Design System components using a structured rubric grounded in established design principles, cognitive psychology, and accessibility standards.

## When to Use

Trigger on: design critique, review component aesthetics, make it look better, evaluate design quality, improve visual polish, check design consistency, or any request about making components look more beautiful.

## Critique Rubric

Judge components against these 8 areas:

| Area | What to Check |
|---|---|
| `purpose-hierarchy` | Can you tell in 5 seconds what the component does? One clear visual hierarchy. |
| `typography` | Type scale consistency, comfortable line length, not too many sizes or weights. |
| `colour-contrast` | Accent used for meaning not decoration; meets WCAG 2.2 AA contrast ratios. |
| `layout-rhythm` | Spacing follows a consistent scale, alignment is tight, no crowded or dead areas. |
| `copy` | No filler text, vague labels, or invented metrics. Real, purposeful microcopy. |
| `states` | Loading, empty, error, populated, and edge states all present and well-designed. |
| `accessibility` | ARIA attributes, keyboard navigation, focus management, screen reader support. |
| `fit` | Matches the Squiddy Design System's visual language, not a generic look. |

## Verdicts

- **`ship`**: Nothing worth another round. The component is polished.
- **`polish`**: One round of fixes makes it right. Specific, actionable findings.
- **`rework`**: The direction is wrong. Fixes won't save it — needs a redesign.

At most **5 findings**, most important first. Each finding has: `area`, `where` (the component, section, or viewport), `problem` (one sentence), and `fix` (specific enough to implement).

## Craft Rules

### Color

- **Palette structure**: 70-90% neutrals, 5-10% single accent, 0-5% semantic colors, <1% effects.
- **Accent discipline**: At most 2 visible uses of the accent per screen. Links count as accent.
- **Contrast minimums**: Body text (≤16px) needs 4.5:1. Large text (>18px or 14px bold) needs 3:1. UI components against surfaces need 3:1.
- **Dark themes**: Avoid pure black (`#000`) and pure white (`#fff`). Use `#0f0f0f` and `#f0f0f0` respectively.
- **Anti-defaults**: Indigo `#6366f1` is the most reliable AI-slop tell. Two-stop "trust" gradients (purple→blue) are the second.

### Typography

- **Type scale**: Use a multiplicative scale (1.2 or 1.25). Cap at 6-8 sizes.
- **Line height**: Display/H1 (≥32px) at 1.0-1.2. Body (15-18px) at 1.5-1.6. Small (≤14px) at 1.5.
- **Letter-spacing**: ALL CAPS requires 0.06em-0.1em. Display text (≥32px) gets -0.01em to -0.03em. Body text gets 0.
- **Three-weight system**: Read (400/450), Emphasize (510/550), Announce (590/600). Weight 700+ is rarely needed.
- **Line length**: Limit body copy to 50-75 characters per line (`max-width: 65ch`).

### Accessibility

- **Target WCAG 2.2 AA** as the working standard.
- **Touch targets**: 24×24 CSS px minimum (AA), 44×44 recommended (AAA).
- **Focus visibility**: Never remove focus outline without a replacement. Use `:focus-visible` for keyboard users.
- **ARIA discipline**: Native HTML first, then ARIA. Never invent ARIA. ARIA pages average more errors than non-ARIA pages.
- **Form labels**: Every input needs a visible label. Placeholder is not a label.
- **Keyboard operability**: Every interactive element must be reachable and operable via keyboard.

### State Coverage

Every interactive surface must render **5 states**:

1. **Loading**: Skeleton, spinner, or shell with a 15s fallback.
2. **Empty**: Headline, explanation, primary CTA. Not a blank panel.
3. **Error**: Plain-language cause, recovery action, preserved user input.
4. **Populated**: The primary case.
5. **Edge**: Extreme volume, long strings, missing fields — layout must not break.

### UX Writing

- **Buttons**: Say the action and object. "Save changes" not "Submit".
- **Errors**: What happened, why (if known), what to do. Never "Something went wrong".
- **Empty states**: Say what will be here, why it's empty, offer the first action.
- **Destructive actions**: Name what's lost. Confirm button restates the action.
- **Mechanics**: Sentence case, one term per concept, no filler or lorem ipsum.

### Anti-AI-Slop

**Seven cardinal sins** (must-fix):
1. Default Tailwind indigo as accent (`#6366f1`, `#4f46e5`, etc.)
2. Two-stop "trust" gradient on hero
3. Emoji as feature icons
4. Sans-serif on display text when a serif is specified
5. Rounded card with colored left-border accent
6. Invented metrics ("10× faster", "99.9% uptime")
7. Filler copy (lorem ipsum, "feature one/two/three")

**How to add soul**: Aim for ~80% proven patterns + ~20% distinctive choice in typography, color, voice, micro-interactions, and product-specific details.

### Laws of UX

- **Hick's Law**: Decision time grows with options. Cap single decision-screens to 3-5 visible options.
- **Fitts's Law**: Bigger and closer targets are faster. Pair with 24×24 px touch target minimum.
- **Gestalt Principles**: Proximity, similarity, common region for visual grouping.
- **Jakob's Law**: Users expect your product to work like others. Reuse conventions.
- **Cognitive Load**: Minimize extraneous load through visual restraint — single accent, three-weight typography, no decorative chrome.

## How to Use This Skill

1. **Identify the component(s)** to critique — a single component, a category, or the entire library.
2. **Examine the implementation** — read the component's TypeScript/Lit code, CSS custom properties, and storybook stories.
3. **Check the rendered output** — review screenshots or storybook renders for visual issues.
4. **Apply the rubric** — judge against the 8 areas above, referencing the craft rules.
5. **Produce findings** — at most 5, most important first, with specific fixes.
6. **Give a verdict** — ship, polish, or rework.

## Output Format

When critiquing, produce a structured report:

```markdown
## Critique: [Component Name]

**Verdict:** ship / polish / rework

### Findings

1. **Area:** `typography`
   **Where:** Component heading
   **Problem:** ALL CAPS without letter-spacing looks cramped.
   **Fix:** Add `letter-spacing: 0.06em` to the heading style.

2. **Area:** `colour-contrast`
   ...
```

## Resources

Detailed craft documentation is available in the `reference/` directory:
- `reference/color.md` — Color palette structure, accent discipline, contrast rules
- `reference/typography.md` — Type scale, line height, letter-spacing, font pairing
- `reference/accessibility-baseline.md` — WCAG 2.2 AA compliance, ARIA discipline
- `reference/anti-ai-slop.md` — Seven cardinal sins, soft tells, how to add soul
- `reference/state-coverage.md` — Five required states, form states, error composition
- `reference/ux-writing.md` — Buttons, errors, empty states, destructive actions
- `reference/laws-of-ux.md` — Gestalt principles, decision-making, memory, interaction laws
