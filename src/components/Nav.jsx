import React from "react";
import { Menu } from "lucide-react";

export default function Nav() {
  return (
    <div className="fc-nav">
      <button className="cat-btn"><Menu size={16} /> ALL CATEGORIES</button>
      <a href="#">HOME</a>
      <a href="#">NEW ARRIVALS</a>
      <a href="#">SHOP</a>
      <a href="#">ABOUT US</a>
      <a href="#">CONTACT US</a>
    </div>
  );
}
