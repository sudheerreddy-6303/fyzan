import React from "react";
import InfoPage from "../components/InfoPage.jsx";
import { categories } from "../data.js";

export default function ShopPage() {
  return (
    <InfoPage
      title="Shop"
      subtitle="Browse our handcrafted collections across horn, resin, wooden, and ceramic products."
      image="/images/shop.svg"
      points={categories.slice(0, 6).map((category) => category.name)}
    />
  );
}
