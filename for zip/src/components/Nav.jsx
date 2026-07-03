import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "HOME", to: "/" },
  { label: "NEW ARRIVALS", to: "/new-arrivals" },
  { label: "SHOP", to: "/shop" },
  { label: "ABOUT US", to: "/about" },
  { label: "CONTACT US", to: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fc-nav">
      <NavLink to="/shop" className="cat-btn">
        <Menu size={16} /> <span>ALL CATEGORIES</span>
      </NavLink>

      <div className="fc-nav-links">
        {links.map((l) => (
          <NavLink
            to={l.to}
            key={l.label}
            className={({ isActive }) => (isActive ? "fc-active" : "")}
            end={l.to === "/"}
          >
            {l.label}
          </NavLink>
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
            <NavLink to={l.to} key={l.label} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
