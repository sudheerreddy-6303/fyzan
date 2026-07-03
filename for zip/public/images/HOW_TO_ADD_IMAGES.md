# Adding real product/category photos

Nothing in the site changed visually yet — icons still show exactly as before.
This is just wired up so images "just work" the moment you add them.

## Steps
1. Drop a product photo into `public/images/products/` (e.g. `shofar-ram-horn.jpg`).
   Drop a category photo into `public/images/categories/` (e.g. `viking-horn.jpg`).
2. Open `src/data.js`.
3. Find the matching entry and set its `image` field, e.g.:

   { name: "Shofar Ram Horn", price: "$34.00", icon: HornIcon, category: "Ram's Horn", image: "/images/products/shofar-ram-horn.jpg" }

4. Save. That product/category will now show your photo instead of the icon.
   Leave `image: ""` on any item you haven't photographed yet — it'll keep
   showing the icon automatically, no other code needed.
