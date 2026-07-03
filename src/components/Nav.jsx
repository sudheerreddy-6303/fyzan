import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["HOME", "NEW ARRIVALS", "SHOP", "ABOUT US", "CONTACT US"];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fc-nav">
      <button className="cat-btn"><Menu size={16} /> <span>ALL CATEGORIES</span></button>

      <div className="fc-nav-links">
        {links.map((l) => (
          <a href="#" key={l}>{l}</a>
        ))}
      </div>

      <button
        className="fc-nav-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div className="fc-nav-mobile">
          {links.map((l) => (
            <a href="#" key={l} onClick={() => setOpen(false)}>{l}</a>
          ))}
        </div>
      )}
    </div>
  );
}
