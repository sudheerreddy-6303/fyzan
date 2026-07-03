import React from "react";
import { Search, User, ShoppingCart } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="fc-header">
      <div className="fc-logo">
        <img src={logo} alt="Faiza Craft" className="fc-logo-img img-fluid" />
      </div>

      <div className="fc-search">
        <input type="text" placeholder="Search for products..." />
        <button><Search size={18} color="#fff" /></button>
      </div>

      <div className="fc-headright">
        <div className="item"><User size={20} /> <span className="label-text">My Account</span></div>
        <div className="item">
          <ShoppingCart size={20} />
          <span className="label-text">My Cart<br /><b>₹0.00</b></span>
        </div>
      </div>
    </div>
  );
}
