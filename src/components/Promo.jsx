import React from "react";
import { Award } from "lucide-react";
import { productImages } from "../imageUrls.js";

export default function Promo() {
  return (
    <div className="fc-promo">
      <div className="badge"><Award size={26} /></div>
      <div className="center">
        <div className="tag">EXCLUSIVE COLLECTION</div>
        <h3>Timeless Craftsmanship for You</h3>
        <button>EXPLORE NOW</button>
      </div>
      <div className="vases">
        <img src={productImages.hornSculptures} alt="Horn sculptures" className="fc-promo-img fc-promo-img-lg" />
      </div>
    </div>
  );
}
