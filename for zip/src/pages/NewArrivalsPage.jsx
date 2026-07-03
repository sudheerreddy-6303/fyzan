import React from "react";
import InfoPage from "../components/InfoPage.jsx";
import { products } from "../data.js";

export default function NewArrivalsPage() {
  return (
    <InfoPage
      title="New Arrivals"
      subtitle="Discover the latest handcrafted pieces freshly added to our premium collection."
      image="/images/new-arrivals.svg"
      points={products.map((product) => `${product.name} - ${product.price}`)}
    />
  );
}
