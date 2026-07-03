import React from "react";
import { Search, User, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <div className="fc-header">
      <div className="fc-logo">
        <div className="fc-logo-mark">F</div>
        <div className="fc-logo-text">
          <div className="top">FAIZA</div>
          <div className="bottom">CRAFT</div>
        </div>
      </div>

      <div className="fc-search">
        <input type="text" placeholder="Search for products..." />
        <button><Search size={18} color="#fff" /></button>
      </div>

      <div className="fc-headright">
        <div className="item"><User size={20} /> My Account</div>
        <div className="item">
          <ShoppingCart size={20} />
          <span>My Cart<br /><b>₹0.00</b></span>
        </div>
      </div>
    </div>
  );
}
