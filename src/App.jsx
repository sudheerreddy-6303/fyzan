import React from "react";
import TopBar from "./components/TopBar.jsx";
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Categories from "./components/Categories.jsx";
import Products from "./components/Products.jsx";
import Promo from "./components/Promo.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="fc-root">
      <TopBar />
      <Header />
      <Nav />
      <Hero />
      <Features />
      <Categories />
      <Products />
      <Promo />
      <Newsletter />
      <Footer />
    </div>
  );
}
