---
name: design-system-squiddy-platform
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- OPTIONAL MANAGED BLOCK MARKERS -->
<!-- TYPEUI_SH_MANAGED_START -->

# Squiddy Design System

## Mission
Deliver consistent, accessible, implementation-ready UI guidance that scales across product surfaces.

## Brand
- Product/brand: Squiddy
- Audience: Designers and frontend engineers shipping product UI
- Product surface: web app, dashboard

## Style Foundations
- Visual style: structured, editorial, warm-neutral, high-legibility
- Typography scale: text-xs, text-sm, text-md, text-lg, text-xl, text-2xl
- Color palette: bg.default=#FCF7ED (App canvas background), bg.surface=#FFFDF8 (Cards and elevated surfaces), fg.default=#370130 (Primary text), fg.muted=#BB5DAF (Secondary text), border.default=#AF019A (Dividers and input strokes), accent.primary=#FE00F0 (Primary action), accent.primaryHover=#E300C9 (Primary action hover), danger=#B42318 (Error and destructive actions)
- Spacing scale: space-1=4px (Tight inline gaps), space-2=8px (Default small spacing), space-3=12px (Compact block spacing), space-4=16px (Default section spacing), space-6=24px (Large section spacing), space-8=32px (Hero and panel spacing)
- Radius/shadow/motion tokens: radius-sm=4px (Inputs and compact controls), radius-md=8px (Buttons and cards), radius-lg=12px (Large surfaces and dialogs), radius-none=0px (Controls and surfaces that are in too deep), shadow-sm=0px 1px 2px 0px rgba(0, 0, 0, 0.08) (Subtle depth), shadow-md=0px 8px 20px 0px rgba(0, 0, 0, 0.1) (Elevated containers), motion-fast=120ms ease-out (Hover and focus transitions), motion-base=200ms ease (Panel and layout transitions)

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required
- Focus-visible rules required
- Contrast constraints required

## Writing Tone
concise, confident, implementation-focused

## Rules: Do
- must use semantic tokens, not raw hex values in component guidance.
- must define all required states: default, hover, focus-visible, active, disabled, loading, error.
- must specify responsive behavior and edge-case handling.
- must add accessibility requirements based on WCAG 2.2 Level 3

## Rules: Don't
- must not allow low-contrast text or hidden focus indicators.
- must not introduce one-off spacing or typography exceptions.
- must not use ambiguous labels or non-descriptive actions.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and tokens.
3. Define component anatomy, variants, and interactions.
4. Add accessibility acceptance criteria.
5. Add anti-patterns and migration notes.
6. End with QA checklist.

## Required Output Structure
- must include context and goals.
- must include design tokens and foundations.
- must include component-level rules (anatomy, variants, states, responsive behavior).
- must include accessibility requirements and testable acceptance criteria.
- must include content and tone standards with examples.
- must include anti-patterns and prohibited implementations.
- must include qA checklist.

## Component Rule Expectations
- must include keyboard, pointer, and touch behavior.
- must include spacing and typography token requirements.
- must include long-content, overflow, and empty-state handling.

## Framework-Specific Implementation Notes
Map tokens to CSS variables and component props in your framework layer before writing component docs.
Create light-mode with supplied values and calculate accessible dark-mode variants for colors, borders, shades, etc.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- System consistency should be preferred over local visual exceptions.

## QA Checklist
- must frontmatter exists with valid name and description.
- must guidance is under 500 lines for skill.md when possible.
- must accessibility and interaction states are explicitly documented.
- must rules are concrete, testable, and non-ambiguous.
- must output can be reused in other repositories with only variable replacement.

## Canonical Links
- TypeUI homepage: https://www.typeui.sh
- More design skills: https://www.typeui.sh/design-skills
- Last generated: 2026-11-15

<!-- TYPEUI_SH_MANAGED_END -->
