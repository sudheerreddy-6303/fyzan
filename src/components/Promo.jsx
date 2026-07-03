import React from "react";
import { Award } from "lucide-react";

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
        <div className="vase" style={{ width: 40, height: 60 }} />
        <div className="vase" style={{ width: 55, height: 90 }} />
        <div className="vase" style={{ width: 45, height: 70 }} />
      </div>
    </div>
  );
}
