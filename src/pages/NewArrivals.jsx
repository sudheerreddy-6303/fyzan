import React from "react";
import { Heart } from "lucide-react";
import PageBanner from "../components/PageBanner.jsx";
import { newArrivals } from "../data.js";

export default function NewArrivals() {
  return (
    <>
      <PageBanner title="New Arrivals" />
      <div className="fc-section" style={{ paddingTop: 30 }}>
        <div className="fc-prod-grid">
          {newArrivals.map((p) => (
            <div className="fc-prod-card" key={p.name}>
              <div className="fc-prod-thumb">
                <p.icon className="fc-icon fc-icon-light" />
                <span className="fc-new-badge">NEW</span>
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
    </>
  );
}
