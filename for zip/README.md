# Faiza Craft — React (Vite) Homepage

A React recreation of the Faiza Craft homepage design (header, hero, categories, featured products, promo, newsletter, footer).

## Setup

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to the `dist/` folder — deploy that to Render, Netlify, Vercel, etc.

## Project structure

```
src/
  App.jsx                 # HashRouter + route definitions
  main.jsx                # React entry point
  index.css               # all styling (plain CSS, no framework needed)
  data.js                  # categories, products, catalog, features data
  layouts/
    MainLayout.jsx         # shared TopBar + Header + Nav + Footer wrapper
  pages/
    Home.jsx               # / — hero, categories, featured products, promo
    Shop.jsx                # /shop — full catalog with category filter buttons
    NewArrivals.jsx         # /new-arrivals — products flagged isNew in data.js
    AboutUs.jsx             # /about — story, values, promise banner
    ContactUs.jsx           # /contact — contact details + working form
  components/
    TopBar.jsx, Header.jsx, Nav.jsx, Hero.jsx, Features.jsx,
    Categories.jsx, Products.jsx, Promo.jsx, Newsletter.jsx, Footer.jsx,
    PageBanner.jsx          # reusable title/breadcrumb banner for inner pages
    Icons.jsx                # original SVG illustrations used across the site
```

Routing uses `react-router-dom`'s `HashRouter`, so it works out of the box on any static host (Render, Netlify, GitHub Pages) without extra rewrite rules. If you'd rather have clean URLs (no `#`), swap `HashRouter` for `BrowserRouter` in `App.jsx` and configure your host to redirect all routes to `index.html`.

## Notes

- Category and product images are placeholder colored blocks (no real product photos were available). Replace the `.fc-cat-thumb` / `.fc-prod-thumb` divs in `Categories.jsx` / `Products.jsx` with `<img src="..." />` tags pointing to your real images.
- Icons come from `lucide-react`.
- No CSS framework dependency — styling is plain CSS in `src/index.css`, easy to adapt if you want to switch to Bootstrap 5 or Tailwind later.
- Update the logo mark (`fc-logo-mark` div, currently a gradient "F") with your real logo image if you have one exported as a file.
