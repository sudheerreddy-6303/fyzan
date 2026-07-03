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
  App.jsx                 # composes all sections
  main.jsx                # React entry point
  index.css               # all styling (plain CSS, no framework needed)
  data.js                 # categories, products, features data
  components/
    TopBar.jsx
    Header.jsx
    Nav.jsx
    Hero.jsx
    Features.jsx
    Categories.jsx
    Products.jsx
    Promo.jsx
    Newsletter.jsx
    Footer.jsx
```

## Notes

- Category and product images are placeholder colored blocks (no real product photos were available). Replace the `.fc-cat-thumb` / `.fc-prod-thumb` divs in `Categories.jsx` / `Products.jsx` with `<img src="..." />` tags pointing to your real images.
- Icons come from `lucide-react`.
- No CSS framework dependency — styling is plain CSS in `src/index.css`, easy to adapt if you want to switch to Bootstrap 5 or Tailwind later.
- Update the logo mark (`fc-logo-mark` div, currently a gradient "F") with your real logo image if you have one exported as a file.
