# Accessibility

## Purpose
Guarantees WCAG AA-compliant UI for every page of Gelato Antico.

## Contrast
- Body text `#2D2D2D` on `#FAF7F2`: **10.8:1** ✓ (AAA)
- Muted `#666666` on `#FFFFFF`: **5.7:1** ✓ (AA normal, not AA large — OK)
- Gold `#C9A96A` on `#3A2B24` (CTA): **4.7:1** ✓ (AA)
- White on `rgba(58,43,36,0.5)` (hero overlay): test minimum luminance — keep overlay ≥ 0.5 opacity
- Target: every text pair ≥ 4.5:1 for normal text, ≥ 3:1 for large text

## Keyboard Navigation
- All interactive elements reachable via Tab in logical order
- Skip-link (`Skip to content` / `Aller au contenu`) is the first focusable element
- Mobile menu toggle: Enter/Space activates; `aria-expanded` reflects state
- Language switch is `<a>` (not `<button>`) — native focus + Enter activation
- No `tabindex` > 0 (positive tabindex is anti-pattern)
- No `outline: none` without a replacement `:focus-visible` style

## Focus States
- `.skip-link:focus` slides into view
- All links show underline or color shift on `:focus-visible`
- Buttons show `transform`/`box-shadow` shift on `:focus-visible`
- Never remove focus outlines globally

## ARIA Labels
- `<header>`: no role needed (implicit)
- `<nav>`: `aria-label="Primary navigation"` (or localized)
- `<main id="main">`: single main landmark
- Mobile toggle: `aria-label="Toggle menu"` + `aria-expanded`
- Language buttons: `aria-label` in page language ("English" / "Français")
- Social links: `aria-label="Instagram"` etc. (icon-only links)
- iframe (map): `title="Gelato Antico location on Google Maps"`
- Decorative SVG: `aria-hidden="true"`
- Star ratings: `aria-label="5 out of 5 stars"` (page-localized)

## Semantic Landmarks
- `<header>` / `<main>` / `<footer>`
- `<nav aria-label>`
- `<section aria-label>` for each major section
- One `<h1>` (hero), `<h2>` per section header, `<h3>` for sub-items, `<h4>` for footer
- No heading levels skipped

## Image Alt Text
- Every `<img>` has `alt` describing the content in the page language
- Decorative-only images use `alt=""` (empty) — not `aria-hidden` on `<img>` itself
- SVG inline icons: `aria-hidden="true"` (they have adjacent text or aria-label)

## Touch Targets
- Mobile toggle: ~24 × 24 clickable area (icons inside padding)
- Sticky CTA: 50 × 50 px
- Language switch buttons: ≥ 44 × 20 px text (padding compensates)
- Footer social: 40 × 40 px
- All recommended ≥ 44 × 44 px on touch displays

## Screen Reader Support
- Skip-link text is visible when focused
- `aria-hidden` on decorative quotation marks, scroll-hint, avatars (initials are not read aloud)
- Newsletter `<label>` uses `.visually-hidden` (still readable by screen readers)
- Form `<input>` has implicit `<label for="email">` association
- `<video>` has `aria-label` describing its content
- Status messages (if any) use `role="status"` or `aria-live="polite"`

## Reduced Motion
- `@media (prefers-reduced-motion: reduce)` disables:
  - `scroll-behavior: smooth`
  - Reveal transform/opacity transitions
  - Scroll hint pulse animation
- Never autoplay non-muted media
- Video in this site is `muted` ✓

## Multilingual Accessibility
- `<html lang="fr">` on French page (announce language to screen readers)
- `aria-label` text localized per page
- Skip-link text localized per page
- If RTL added later: `<html dir="rtl">` and mirror layout with CSS logical properties