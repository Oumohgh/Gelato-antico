# Brand Style — Gelato Antico

## Purpose
Defines the visual design language for every page of the Gelato Antico website.
All UI decisions must conform to these rules.

## Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#FAF7F2` | Page background |
| `--surface` | `#FFFFFF` | Cards, sections |
| `--primary` | `#3A2B24` | Dark text, footer, visit section |
| `--secondary` | `#7A8F63` | Section tags, accents |
| `--accent` | `#C9A96A` | Gold accent, CTA, highlights |
| `--cream` | `#E8DCC8` | Avatar backgrounds |
| `--muted` | `#666666` | Body paragraph text |
| `--border` | `#E6DED3` | Dividers, card borders |

## Typography
- **Headings**: `Cormorant Garamond` (serif), weight 300–500, italic for emphasis (`<em>`)
- **Body**: `Manrope` (sans-serif), weight 300–600
- **Heading scale**: `clamp(2.1rem, 4vw, 3.3rem)` for sections; `clamp(2.6rem, 6.2vw, 5.4rem)` for hero
- **Body**: `1.02rem` paragraphs, `1.65` line-height
- **Letter-spacing**: `-0.015em` headings, `0.04em` uppercase nav

## Spacing System
- Section padding: `130px 0` desktop, `88px 0` mobile
- Container max-width: `1280px`, padding `40px` (desktop) / `24px` (mobile)
- Card gaps: `28px` (flavor grid), `24px` (testimonials), `16px` (visit cards)
- Knowledge: never use arbitrary inline margins — always CSS variables or classes

## Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| `--radius` | `20px` | Large cards, images, video |
| `--radius-sm` | `12px` | Small cards, badges, notes |
| `--radius-xs` | `8px` | Skip link corner |
| Buttons | `100px` | Pill shape |

## Shadows
- Cards hover: `0 20px 50px rgba(58,43,36,0.1)`
- Video: `0 20px 60px rgba(58,43,36,0.12)`
- Sticky CTA: `0 8px 24px rgba(58,43,36,0.3)`
- Never use shadows heavier than the above.

## Motion Principles
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` on all transitions
- Reveal: `translateY(28px) → 0` over `0.8s`
- Hover lift: `translateY(-3px to -6px)`, subtle
- Image zoom on hover: `scale(1.04–1.06)` over `0.7s`
- Cursor pulse for scroll hint: `2s ease-in-out infinite`
- **Always respect `prefers-reduced-motion`**

## Brand Tone
Premium, artisanal, warm, confident. Think Aesop × Amorino. Never use buzzwords, exclamation overload, or sales-y language. Italics for craft emphasis.

## UI Consistency Rules
1. One `.section-tag` before every section title.
2. Section titles always use `.section-title` with `<em>` for the accent word.
3. Center-aligned headers use `.section-center` wrapper.
4. Cards always have hover state defined.
5. Gold (`--accent`) is reserved for CTAs and pluck — never full backgrounds except CTA buttons.
6. Footer is the darkest surface (`#2A1F1A`).