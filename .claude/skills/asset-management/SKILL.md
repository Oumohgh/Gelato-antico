# Asset Management

## Purpose
Manages all media in `assets/` to keep the project fast, consistent, and authentic.

## Folder Layout
```
assets/
├── img/        # All photographs (jpg, jpeg, png)
├── videos/     # Video files (mp4)
├── icons/      # Custom icons (svg files, brand glyphs)
└── favicon.png  # Site favicon
```

## Rules

1. **Analyze filenames before use.**
   Filenames carry semantic info: `OwnerHoldingIceCream.jpeg` is the owner;
   `ShopOverview.jpeg` is the shop front; `GlaceFLavor1.jpg` (sic) is a flavor.
   Never assign a flavor image to the shop-with-owner section.

2. **Inspect image contents when possible.**
   Open each new image to confirm it matches the intended section before
   writing it into HTML. Don't trust filenames alone.

3. **Never randomly assign assets.**
   Each image tells a story. A scoop photo belongs in the flavors or
   gallery section, not the about section.

4. **Prefer authentic Gelato Antico assets.**
   Local assets always win over stock / Unsplash / external URLs.
   The only acceptable external resources are fonts (Google Fonts).

5. **Optimize images.**
   - Photos: JPEG ≤ 200 KB each for above-the-fold, ≤ 100 KB for below-the-fold
   - Use `loading="lazy"` for everything below the hero
   - Set `width` and `height` on every `<img>` to prevent CLS
   - Hero image: `fetchpriority="high"` and `loading` omitted (loads eagerly)

6. **Optimize videos.**
   - MP4 with H.264 codec
   - Keep ≤ 10 MB for hero loops, ≤ 5 MB for ambient clips
   - Use `preload="none"` with a `poster` image
   - Always: `muted`, `loop`, `playsinline`, `autoplay` (silent autoplay only)

7. **Avoid duplicates.**
   The same image should not appear in two visible places on the same page
   (posters reused for video are OK because the video replaces them).

8. **Preserve aspect ratios.**
   Use CSS `aspect-ratio` and `object-fit: cover` to preserve composition:
   - About image: 4/5 (portrait)
   - Flavor images: 4/3
   - Experience image: 5/4
   - Gallery g1: 3/4 (portrait)
   - Gallery g4: 16/10 (wide)

9. **Naming convention.**
   - All lowercase
   - Hyphenated, no spaces (`ce-glacier.mp4`, not `ce glacier.mp4`)
   - No special characters or accents in filenames
   - Names should describe content (`saffron-gelato.jpg`, not `IMG_2049.jpg`)

10. **Replacement workflow**:
    1. Drop new file in `assets/img/` with a clear name
    2. Update the `<img src>` and `alt` in each language HTML file
    3. Verify visually in a browser at desktop + mobile widths
    4. Delete the old file from the repo (avoid dead assets)