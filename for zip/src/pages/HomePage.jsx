import React from "react";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import Categories from "../components/Categories.jsx";
import Products from "../components/Products.jsx";
import Promo from "../components/Promo.jsx";
import Newsletter from "../components/Newsletter.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Categories />
      <Products />
      <Promo />
      <Newsletter />
    </>
  );
}
