import React from "react";
import { Link } from "react-router-dom";
import { heroImage } from "../imageUrls.js";

export default function Hero() {
  return (
    <div className="fc-hero">
      <div className="fc-hero-text">
        <div className="eyebrow">HANDMADE. NATURAL. UNIQUE.</div>
        <h1>Premium Horn &amp; Handicraft Collection</h1>
        <p>Exquisite craftsmanship in every piece. Made from natural horn, wood, resin &amp; more.</p>
        <Link to="/shop"><button>SHOP NOW</button></Link>
      </div>
      <div className="fc-hero-visual">
        <img src={heroImage} alt="Faiza Craft horn and bone collection" className="fc-hero-image" />
      </div>
    </div>
  );
}
