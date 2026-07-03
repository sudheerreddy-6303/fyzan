import React, { useMemo, useState } from "react";
import { Heart } from "lucide-react";
import PageBanner from "../components/PageBanner.jsx";
import { allProducts, categories } from "../data.js";

export default function Shop() {
  const [activeCat, setActiveCat] = useState("All");

  const filtered = useMemo(() => {
    if (activeCat === "All") return allProducts;
    return allProducts.filter((p) => p.category === activeCat);
  }, [activeCat]);

  return (
    <>
      <PageBanner title="Shop" />
      <div className="fc-section" style={{ paddingTop: 30 }}>
        <div className="fc-shop-filters">
          <button
            className={activeCat === "All" ? "active" : ""}
            onClick={() => setActiveCat("All")}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.name}
              className={activeCat === c.name ? "active" : ""}
              onClick={() => setActiveCat(c.name)}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="fc-prod-grid">
          {filtered.map((p) => (
            <div className="fc-prod-card" key={p.name}>
              <div className="fc-prod-thumb">
                <img src={p.image} alt={p.name} className="fc-icon fc-icon-light" />
                {p.isNew && <span className="fc-new-badge">NEW</span>}
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

        {filtered.length === 0 && (
          <p style={{ textAlign: "center", fontFamily: "Arial, sans-serif", color: "var(--text-muted)" }}>
            No products in this category yet.
          </p>
        )}
      </div>
    </>
  );
}
