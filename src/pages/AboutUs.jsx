import React from "react";
import { Award } from "lucide-react";
import PageBanner from "../components/PageBanner.jsx";
import { pageImages, productImages } from "../imageUrls.js";

const values = [
  { title: "Handmade With Care", text: "Every piece is shaped, sanded, and polished by hand in our own workshop." },
  { title: "Natural Materials", text: "We work with natural horn, wood, resin, and rattan — sourced responsibly." },
  { title: "Quality Checked", text: "Each product is inspected before it leaves our workshop for shipping." },
  { title: "Shipped Worldwide", text: "From our workshop to your doorstep, wherever you are." },
];

export default function AboutUs() {
  return (
    <>
      <PageBanner title="About Us" image={pageImages.about} />

      <div className="fc-section fc-about-intro">
        <div className="fc-about-visual">
          <img src={pageImages.about} alt="About Faiza Craft" />
        </div>
        <div className="fc-about-text">
          <div className="eyebrow">OUR STORY</div>
          <h2>Crafting Natural Beauty, One Piece at a Time</h2>
          <p>
            Faiza Craft began as a small family workshop dedicated to turning natural
            materials — horn, wood, resin, and rattan — into pieces people would want to
            keep for years. What started with a handful of hand-carved horn mugs has grown
            into a full collection, but the process hasn't changed: everything is still shaped,
            finished, and checked by hand before it ships.
          </p>
          <p>
            We believe good craft doesn't need to shout. Our pieces are meant to be used, not
            just displayed — a mug for your morning coffee, a bowl for your kitchen table, a
            horn piece that holds its own story.
          </p>
        </div>
      </div>

      <div className="fc-section fc-values-section">
        <div className="fc-section-title">
          <h2>WHY CHOOSE US</h2>
          <div className="fc-divider" />
        </div>
        <div className="fc-values-grid">
          {values.map((v) => (
            <div className="fc-value-card" key={v.title}>
              <h4>{v.title}</h4>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="fc-promo">
        <div className="badge"><Award size={26} /></div>
        <div className="center">
          <div className="tag">OUR PROMISE</div>
          <h3>Genuine Craftsmanship, Every Order</h3>
        </div>
        <div className="vases">
          <img src={productImages.vikingDrinkingHorn} alt="Viking Drinking Horn" className="fc-promo-img" />
        </div>
      </div>
    </>
  );
}
