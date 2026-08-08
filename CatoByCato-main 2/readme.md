# Cato by Cato — Website

Static multi-page website for Cato by Cato, Stenenbrug 9A, 6211 HP Maastricht.
Pure HTML / CSS / JavaScript — no frameworks, no build tools, no dependencies.

---

## Folder Structure

```
catobycato/
├── index.html          Homepage with hero, about teaser, restaurant teaser, garden teaser
├── restaurant.html     How it works (①②③), size cards, Instagram stories section
├── catering.html       Catering & bulk orders, WhatsApp CTA
├── garden.html         Garden origin story, what we grow, gallery, coming soon
├── about.html          The family, their story, travel photo, dogs
├── contact.html        Address, hours, map placeholder, Instagram strip
│
├── css/
│   ├── style.css       All layout, components, typography, color variables
│   └── animations.css  Keyframes (bunting sway, fade-in, reduced-motion)
│
├── js/
│   ├── lang.js         Full NL/EN translation object + applyTranslations()
│   └── main.js         Nav scroll, mobile hamburger, IntersectionObserver fade-ins,
│                       travelPhotos array, travel photo loader for about.html
│
└── images/             Empty folder — add photos here (see checklist below)
```

---

## Image Checklist

Drop all photos into the `images/` folder. Filenames must match exactly.

| Filename | What goes here |
|---|---|
| `hero-interior.jpg` | The restaurant interior — deep teal ceiling, banknotes on strings, colourful chairs. This is the homepage hero. Shoot wide, landscape. |
| `family-teaser.jpg` | Warm photo of the family (or the wife behind the counter). Used on the homepage about teaser. |
| `garden-teaser-1.jpg` | Garden overview or vegetable beds. Homepage garden section. |
| `garden-teaser-2.jpg` | Close-up of herbs or plants in the garden. Homepage garden section. |
| `garden-teaser-3.jpg` | Tomatoes, peppers, or other recognisable vegetables from the garden. Homepage garden section. |
| `restaurant-hero.jpg` | Food or kitchen photo — the bowl, the toppings, hands at work. Full-width restaurant page hero. |
| `catering-hero.jpg` | A generous spread of food, or a large prepared batch. Catering page hero. |
| `garden-hero.jpg` | Wide garden shot — ideally with the stable or original land in background. Garden page hero. |
| `garden-origin.jpg` | The stable, the early garden beds, or a landscape shot of the land. Garden origin story column. |
| `garden-gallery-1.jpg` | Garden life — general. Gallery polaroid. |
| `garden-gallery-2.jpg` | Herbs being picked or dried. Gallery polaroid. |
| `garden-gallery-3.jpg` | Tomatoes on the vine. Gallery polaroid. |
| `garden-gallery-4.jpg` | Harvest of the day — a bowl or basket of fresh produce. Gallery polaroid. |
| `about-hero.jpg` | Full-family or restaurant interior photo, warm and candid. About page hero. |
| `about-cato.jpg` | Portrait of Cato — in the kitchen or at work. About page family card. |
| `about-wife.jpg` | Portrait of the wife — behind the counter, welcoming a customer, or running the floor. Equal visual weight to Cato's photo. |
| `about-daughter.jpg` | Portrait of their daughter — at the restaurant or at home. About page family card. |
| `about-dog-1.jpg` | One of the family dogs. About page dogs section. |
| `about-dog-2.jpg` | The other family dog (or the same dog in a different moment). About page dogs section. |
| `travel-june-2026.jpg` | Travel photo for June 2026 — whatever country or dish Cato shares that month. About page travel section. Add more entries to the `travelPhotos` array in `js/main.js` for subsequent months. |

---

## TODO Before Going Live

- [ ] **WhatsApp number** — confirm `310651098619` is correct. It appears in `catering.html`, `contact.html`, and the footer. If different, find-and-replace across all files.
- [ ] **Google Maps embed** — replace the map placeholder div in `contact.html` with an actual `<iframe>` embed for Stenenbrug 9A, 6211 HP Maastricht. Look for the comment `<!-- TODO: replace with Google Maps iframe embed -->`.
- [ ] **Elfsight Stories widget** — replace the phone mockup placeholder divs in `index.html` and `restaurant.html` with the Elfsight embed code. Look for the comments `<!-- TODO: replace with Elfsight Stories embed -->`.
- [ ] **Travel photos** — add real monthly travel photos to the `travelPhotos` array in `js/main.js`. Each entry needs `month`, `year`, `src`, `caption_nl`, and `caption_en`.
- [ ] **Size card prices** — fill in actual prices in `restaurant.html`. Currently all three size cards show `data-i18n="restaurant_price_soon"` ("Prijs volgt" / "Price coming soon"). Update both the NL and EN translations in `js/lang.js`, or replace with hardcoded price values.
- [ ] **Wife's name and daughter's name** — the `about_wife_name` and `about_daughter_name` translation keys in `js/lang.js` currently use descriptive labels. Replace with their actual names if they want them shown, in both `nl` and `en` blocks.
- [ ] **Color palette confirmation** — verify the full palette with the wife before launching. CSS variables are in `:root` at the top of `css/style.css`.
- [ ] **Add all images** — see image checklist above. The site loads correctly without images (placeholders show as coloured boxes) but needs real photos before going live.
- [ ] **Domain & hosting** — the site is fully static. It can be hosted on any static host (Netlify, Vercel, GitHub Pages, a basic web server). No server-side setup required.

---

## Language System

Default language is Dutch (NL). Visitors can toggle to English (EN) using the NL/EN button in the nav or footer. The selection is saved in `localStorage` so it persists across page visits.

All copy lives in `js/lang.js`. To edit any text, find the key in the `nl` or `en` object and change the value. The hero line on the homepage — *"Travel around the world, never leave the taste."* — is hardcoded in `index.html` and is intentionally never translated.

---

## Notes

- All grids collapse to single-column at 768px. Minimum supported width is 320px.
- The bunting SVG dividers animate with a slow ±1° sway. Animation is disabled for users who have `prefers-reduced-motion` set.
- The travel photo section on `about.html` automatically shows the photo matching the current month and year. If no match is found, it falls back to the last entry in the `travelPhotos` array.
