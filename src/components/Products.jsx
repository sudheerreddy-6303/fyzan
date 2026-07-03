import React from "react";
import { Heart } from "lucide-react";
import { products } from "../data.js";

export default function Products() {
  return (
    <div className="fc-section" style={{ paddingTop: 0 }}>
      <div className="fc-section-title">
        <h2>FEATURED PRODUCTS</h2>
        <div className="fc-divider" />
      </div>
      <div className="fc-prod-grid">
        {products.map((p) => (
          <div className="fc-prod-card" key={p.name}>
            <div className="fc-prod-thumb">
              <img src={p.image} alt={p.name} className="fc-prod-img" />
              <div className="wish"><Heart size={13} /></div>
            </div>
            <div className="fc-prod-info">
              <div className="pname">{p.name}</div>
              <div className="price">{p.price}</div>
              <button>ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
