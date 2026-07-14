# Frontend Review

## Purpose
Acts as Senior Frontend Reviewer before any change ships.

## Checks

### Duplicate Code
- [ ] No duplicated DOM markup (e.g. duplicate language switchers, duplicate logo)
- [ ] No duplicated CSS selectors with same declarations
- [ ] No duplicated JS logic (two scroll handlers, two observers)

### Duplicated Components
- [ ] Each visual component exists once in the DOM
- [ ] If a component must appear in desktop and mobile, use CSS — not two markup copies
- [ ] Example: a single language switcher serves both desktop and `nav.open` mobile menu

### Spacing Consistency
- [ ] Section padding matches: `130px 0` desktop, `88px 0` mobile
- [ ] Grid gaps are consistent across similar grids (`28px` for cards)
- [ ] No arbitrary inline `style="margin: ..."` — use utility classes

### Responsive Issues
- [ ] Check breakpoints: 900px, 768px, 640px, 560px, 480px
- [ ] Touch targets ≥ 44 × 44 px (sticky CTA, mobile toggle)
- [ ] No horizontal overflow at any width (overflow-x hidden does not justify spill)
- [ ] Nav collapses to mobile menu at 900px
- [ ] Grids collapse: 3 → 2 → 1 columns

### CSS Quality
- [ ] All inline styles extracted to classes
- [ ] All CSS lives in `css/style.css` (no `<style>` blocks in HTML)
- [ ] No `!important` overrides
- [ ] No vendor-prefix churn beyond `-webkit-` where necessary
- [ ] Uses CSS variables from `:root`
- [ ] Reduced-motion block respected

### Semantic HTML
- [ ] `<header>`, `<main>`, `<footer>`, `<section>`, `<nav>` landmarks present
- [ ] One `<h1>` per page
- [ ] No `<div>` where `<section>`/`<article>`/`<aside>` is correct
- [ ] Lists use `<ul>` when content is a list

### JavaScript Quality
- [ ] All JS lives in `js/script.js` (no inline `<script>` blocks except JSON-LD)
- [ ] Uses IIFE scope (no globals)
- [ ] Uses `'use strict'`
- [ ] All DOM queries null-checked or wrapped in `if`
- [ ] Event listeners use passive flag where relevant (scroll)
- [ ] No console.log in production

### Performance
- [ ] Hero image: `fetchpriority="high"`
- [ ] All other images: `loading="lazy"` and `width`/`height` set (CLS)
- [ ] Video: `preload="none"` with `poster`
- [ ] Fonts: `preconnect` + `display=swap`
- [ ] CSS is a single external file (cached)
- [ ] JS is a single external file (deferred naturally by position)
- [ ] No external libraries or CDN scripts (Google Fonts is OK)

### Maintainability
- [ ] Class names are descriptive (`.flavor-card`, not `.fc`)
- [ ] No leftover commented-out code
- [ ] No dead selectors (orphaned)
- [ ] File paths are correct relative to each HTML file
- [ ] Same CSS file serves both language pages

## Reject Criteria
The review fails (block merge) if:
- Duplicate component markup found
- Inline CSS or JS present
- Broken asset paths
- Missing semantic landmarks
- Hardcoded duplicate content between language pages