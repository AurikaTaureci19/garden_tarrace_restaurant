# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A React (Create React App / react-scripts 5) marketing site for "The Garden Terrace" restaurant: home, about, menu, blog, and contact pages, plus a reservation form. Multilingual (Romanian, Ukrainian, Dutch) via i18next.

## Commands

Run from `thegarden-terras/` (the CRA project root):

- `npm start` — dev server at http://localhost:3000, hot reload
- `npm test` — Jest/RTL in interactive watch mode (react-scripts test)
- `npm test -- --watchAll=false` — run tests once (CI mode)
- `npm test -- ContactForm` — run tests matching a filename/pattern
- `npm run build` — production build to `build/`

There is no lint script defined; ESLint runs as part of `react-scripts start`/`build` using the `react-app` config in `package.json`.

## Architecture

- **Entry/routing**: [src/index.js](src/index.js) mounts `<App />` and imports `./i18n` (must be imported before any component uses translations) plus global CSS (Bootstrap 4, `main_styles.css`, Font Awesome). [src/App.jsx](src/App.jsx) defines all routes with `react-router-dom` v7 (`BrowserRouter`/`Routes`/`Route`). Every route except none is nested under a single `Layout` route.
- **Layout**: [src/layout/Layout.jsx](src/layout/Layout.jsx) wraps every page with `Header`, `MobileMenu`, and `Footer` around a `<Outlet />`. Page-level components live in `src/pages/` (About, Blog, Contact, ManuPage) and are wired into `App.jsx`; `Home` is the exception and lives directly in `src/components/Home.jsx`.
- **Components vs pages**: `src/pages/` holds one component per route; `src/components/` holds everything else (sections, forms, nav). Pages compose components — e.g. `ManuPage.jsx` renders `MeniuRestaurant`, `About.jsx` renders `Testimonials` + `MeniuRestaurant`.
- **Home hero**: [src/components/Home.jsx](src/components/Home.jsx) renders the hero as a `.parallax_background` div with a CSS `backgroundImage` (currently `src/assets/images/restaurant.jpeg`), not a `<video>` — a video-background version was tried and reverted per user preference. If asked to swap the hero to video again, keep the same `.parallax_background`/`.parallax-window` wrapper and use `object-fit: cover` on the `<video>`.
- **Menu photos**: [src/components/MeniuRestaurant.jsx](src/components/MeniuRestaurant.jsx) renders a flat filterable price list (categories: aperitive/principale/garnituri/bauturi/deserturi) driven by `MENIU_META` (id/categorie/pret) joined against i18n strings at `t(\`items.${id}\`)`. Each item's photo (when available) comes from the `IMAGINI_PREPARATE` map (id → imported image) at the top of the file, sourced from `src/assets/images/menu_dishes/`; items without a matching photo (e.g. Vin alb, Espresso, Bere la halbă, Apă minerală, Limonadă de casă, Clătite cu ciocolată) simply render without a thumbnail. When adding a new dish photo, add the file to `menu_dishes/`, import it, and add an entry to `IMAGINI_PREPARATE` keyed by the item's numeric id from `menu.json`.
- **Dead/duplicate components**: `src/components/Menu1.jsx`, `ManuSection.jsx`, and `Test.jsx` are not imported anywhere — `MeniuRestaurant.jsx` is the menu component actually in use. Check with a repo-wide search before assuming a component is live.
- **i18n**: [src/i18n/index.js](src/i18n/index.js) statically imports every locale JSON file upfront and builds the i18next `resources` tree; there's no lazy loading. Locales live at `src/i18n/locales/{ro,uk,nl}/<namespace>.json` — one file per namespace (`common`, `header`, `footer`, `home`, `testimonials`, `about`, `contact`, `blog`, `menu`). `ro` is `fallbackLng`. When adding a translated string: add the key to the matching namespace file in **all three** locale directories, then consume it with `useTranslation(["namespace", ...])` + `t("namespace:key")` (see [src/components/Header.jsx](src/components/Header.jsx)). Adding a new namespace requires registering it in the `resources` object and the `ns` array in `i18n/index.js`. Language switching is handled by `i18n.changeLanguage()` in [src/components/LanguageSwitcher.jsx](src/components/LanguageSwitcher.jsx); detection order is localStorage then browser, cached to `localStorage` under `i18nextLng`.
- **Legacy jQuery-era plugins**: `src/plugins/` bundles vendored jQuery-based libraries from the original HTML template this app was converted from (OwlCarousel2, colorbox, jquery-datepicker/timepicker, GreenSock, ScrollMagic, parallax-js). These are asset bundles, not npm packages — imported directly by path where still used. Prefer React-native equivalents (already-installed `react-datepicker`, CSS animations, etc.) for new work rather than pulling in more of this jQuery layer.
- **Styling**: no CSS modules/styled-components — plain global stylesheets per page/section under `src/styles/` (e.g. `menu.css` + `menu_responsive.css` pairs), plus Bootstrap 4.1.2 (both an npm package and a vendored copy in `src/styles/bootstrap-4.1.2/`) and Font Awesome (both `@fortawesome/fontawesome-free` and a vendored `font-awesome` 4.7 copy). Class names and layout structure come from the original static template — match that convention rather than introducing a new styling approach. Several page CSS files (`elements.css`, `menu.css`, `contact.css`, `blog.css`) duplicate the same shared selectors (e.g. `.reservations_phone`, `.page_subtitle`) — when fixing a shared UI element, grep for the selector across `src/styles/` and patch every duplicate, not just one file.
  - `.page_subtitle` / `.page_subtitle_intro` use the Google Font **Great Vibes** (not the vendored `'Edward'`/Edwardian Script ITC font) because Edwardian Script ITC has no glyphs for Romanian diacritics (ă, â, î, ș, ț) and silently falls back to a mismatched font for those characters. Keep using Great Vibes (or another diacritic-complete script font) for any new decorative-script text; the `'Edward'` `@font-face` declarations still exist but should not be applied to text that may contain Romanian diacritics.
- **Third-party integrations**:
  - `ContactForm.jsx` sends mail via `@emailjs/browser`; the service/template/public key in the code are placeholders (`service_xxx`/`template_yyy`/`user_zzz`) and need real EmailJS credentials before the form will work.
  - `Map.jsx` embeds a Google Maps location via a raw `<iframe src="https://www.google.com/maps/embed?...">`, not the `@react-google-maps/api` package (that dependency is currently unused).
  - `ReservationForm.jsx` only `console.log`s the submitted reservation — there is no backend/API wired up yet.
