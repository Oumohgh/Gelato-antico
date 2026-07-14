# Bilingual Content

## Purpose
Every content update must maintain **both** English (`index.html`) and French (`fr/index.html`) versions in sync.

## Rules

1. **Never update one language without updating the other.**
   If you change English text, immediately change the French equivalent.

2. **Never use machine translation.**
   The French must read as if written by a native French marketing copywriter.

3. **French copy must sound native, not translated.**

   **Good**: "L'authentique gelato italien au cœur de Marrakech"
   **Bad**: "Gelato italien authentique au centre de Marrakech" (literal)

   **Good**: "Petits lots, frais chaque jour"
   **Bad**: "Petits lots, fait frais quotidiennement"

4. **Gelato vocabulary** — use authentic artisan terms in French:
   - Perfum/Flavor → **Parfum** (favorites), **Sélection de parfums** (menu), **Création** (house-made)
   - Best-seller → keep "**Best-seller**" (commonly used in French F&B)
   - Must try → "**À découvrir**" (not "à essayer")
   - House Special → "**Spécialité maison**"

5. **Coffee vocabulary** — use authentic café terms in French:
   - Affogato → keep "**Affogato**" (Italian universal)
   - Espresso → keep "**Espresso**" (not "expresso")
   - Coffee shop → "**Café**" or "**Salon de thé**" (not "magasin de café")
   - Poured over → "**Nappé sur**" (table-side service)

6. **Ice cream vocabulary** — use artisan terms:
   - Ice cream → "**Glace artisanale**" or "**Crème glacée artisanale**" (not "crème glacée")
   - Scoopes → "**Portions**", "**Coupe**" (not "boules" — avoid industrial term)
   - Cone → "**Cornet**" with "gaufrette" for the waffle part
   - Batch → "**Lot**" (production batch, small quantity)
   - Churned fresh → "**Turbiné frais**" (authentic gelato term)

7. **SEO keywords** must remain natural in both languages:

   **English keywords**:
   - best gelato Marrakech, artisan gelato Marrakech, coffee shop Marrakech

   **French keywords**:
   - meilleure glace Marrakech, glacier Marrakech, café Marrakech

8. **Spacing** — match the punctuation conventions:
   - French uses a space before `;`, `:`, `!`, `?» (« Bonjour ! » not «Bonjour!»)
   - French quotation marks: « » with non-breaking spaces
   - French numbers use comma: 4,7 (not 4.7)

9. **Testimonial translations**:
   - Reviews originally in French (Benoit, Sam) stay in French on `/fr/` and are translated to English on `/`.
   - Reviews originally in English (Kamelia) stay in English on `/` and are translated to French on `/fr/`.
   - Reviewer names are never translated.

10. **Metadata** is translated per page (title, description, OG, Twitter, structured data `inLanguage`).

## Quick Check List
- [ ] English text updated? (`index.html`)
- [ ] French text updated? (`fr/index.html`)
- [ ] French reads natively (read aloud)?
- [ ] Keywords present in both languages?
- [ ] Metadata (title, description, OG) translated per language?