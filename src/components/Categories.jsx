import React from "react";
import { ChevronRight } from "lucide-react";
import { categories } from "../data.js";

export default function Categories() {
  return (
    <div className="fc-section">
      <div className="fc-section-title">
        <h2>SHOP BY CATEGORY</h2>
        <div className="fc-divider" />
      </div>
      <div className="fc-grid">
        {categories.map((c) => (
          <div className="fc-cat-card" key={c.name}>
            <div className="fc-cat-thumb">{c.tag}</div>
            <div className="name">{c.name.toUpperCase()}</div>
            <div className="shop">SHOP NOW <ChevronRight size={12} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}
