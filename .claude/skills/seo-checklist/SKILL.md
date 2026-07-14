# SEO Checklist

## Purpose
Every page modification automatically verifies SEO compliance.

## Per-Page Checklist

### Title
- Length: 50–60 characters.
- Contains primary keyword: "artisan gelato Marrakech" / "glacier artisanal Marrakech".
- Format: "Brand — Primary Keyword | Location".

### Meta Description
- Length: 140–160 characters.
- Natural sentence with 1–2 secondary keywords.
- Different per language.

### Canonical
- Each language page has its own `<link rel="canonical">`.
- English: `https://www.gelatoantico.ma/`
- French: `https://www.gelatoantico.ma/fr/`

### hreflang
- Every page declares all three hreflang tags:
  - `hreflang="en"` → English URL
  - `hreflang="fr"` → French URL
  - `hreflang="x-default"` → English (fallback)
- URLs must be absolute.

### Open Graph
- `og:type`, `og:url`, `og:title`, `og:description`, `og:image`, `og:image:alt`
- `og:locale` matches page language (`en_US` or `fr_FR`)
- `og:locale:alternate` lists the other language

### Twitter Cards
- `twitter:card = summary_large_image`
- Title, description, image match the page language.

### Structured Data
- `IceCreamShop` schema on both pages.
- Includes: name, address, geo, telephone, openingHours, rating, priceRange, hasMap.
- `inLanguage` field matches page language.

### Image Alt Text
- Every `<img>` has a descriptive `alt` in the page language.
- Decorative SVGs use `aria-hidden="true"`.
- Avoid keyword stuffing in alt text.

### Heading Hierarchy
- Only one `<h1>` per page (the hero title).
- `<h2>` for section titles.
- `<h3>` for flavor names.
- `<h4>` for footer columns.
- No skipped levels (never jump h1 → h3).

### Sitemap
- `sitemap.xml` lists every public URL.
- Each URL declares all `xhtml:link` alternates.

### robots.txt
- Allows all paths.
- Points to the sitemap URL.

### Internal Links
- Footer has navigation to every section (anchor links).
- Language switch is a real `<a href>` (not JavaScript), so crawlers can follow it.

### Accessibility (overlaps with `accessibility` skill)
- Skip link first in DOM.
- Proper `aria-label`s on nav, buttons, iframe.
- Color contrast ≥ 4.5:1 for body text.

## Things to Avoid
- ❌ Keyword stuffing
- ❌ Duplicate titles across pages
- ❌ Canonical pointing to the wrong language
- ❌ Missing `hreflang` alternates
- ❌ Generic alt text ("image", "photo")
- ❌ Block-level elements inside `<a>` without proper nesting
- ❌ Inline base64 images (bad for crawling)