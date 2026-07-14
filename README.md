# Gelato Antico Website

Official website for **Gelato Antico**, an artisan Italian gelato shop in Marrakech, Morocco.

## Project Structure

```
gelato-antico-site/
│
├── index.html              # English homepage (default language)
├── fr/
│   └── index.html          # French homepage
├── css/
│   └── style.css           # All styles (no inline CSS)
├── js/
│   └── script.js           # All scripts (no inline JS)
├── assets/
│   ├── img/               # All photographs
│   ├── videos/             # Video files
│   ├── icons/              # Icon assets
│   └── favicon.png         # Favicon
├── .claude/
│   └── skills/             # Claude Code skills (see below)
├── robots.txt
├── sitemap.xml
├── README.md
└── LICENSE
```

## Multilingual

- `/` English (default)
- `/fr/` French

Both pages share the same `css/style.css`, `js/script.js`, and `assets/`
folder. Only the text content and `<head>` metadata differ.

To add a language (e.g. Arabic):

1. Create `ar/index.html` by copying `index.html`.
2. Translate all text to Arabic.
3. Set `<html lang="ar" dir="rtl">`.
4. Add `<link rel="alternate" hreflang="ar" href="…/ar/">` to every page.
5. Add a language-switch link: `<a href="/ar/">العربية</a>`.
6. Add the new URL to `sitemap.xml`.

## How to Edit Text

Open the relevant HTML file and edit the text directly:

- **English**: `index.html`
- **French**: `fr/index.html`

There is no translation file; each page is self-contained, which is better
for SEO (crawlers see the right language immediately).

When you change text in one language, **always update the other**. See the
`bilingual-content` skill for the rules.

## How to Replace Images

1. Place the new image in `assets/img/`.
2. Reference it in the HTML: `assets/img/your-image.jpg` (from the root page)
   or `../assets/img/your-image.jpg` (from `fr/`).
3. Always set a descriptive `alt` attribute.
4. Add `loading="lazy"` for everything below the fold (not the hero).

## How to Deploy

The site is static; no build step required.

```sh
# Preview locally
python3 -m http.server 8000
# Open http://localhost:8000
```

Deploy to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages):
just upload the entire project root. Make sure `/fr/` resolves to `fr/index.html`.

## License

© 2026 Gelato Antico, Marrakech. All rights reserved.