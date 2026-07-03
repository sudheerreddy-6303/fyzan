import React from "react";
import { MapPin, Truck, Heart, User } from "lucide-react";

export default function TopBar() {
  return (
    <div className="fc-topbar">
      <div className="left">
        <a href="#"><MapPin size={13} /> Kotla Sarai Tarin, Sambhal, Uttar Pradesh 244303</a>
      </div>
      <div className="right">
        <a href="#"><Truck size={13} /> Track Order</a>
        <a href="#"><Heart size={13} /> Wishlist</a>
        <a href="#"><User size={13} /> Login / Register</a>
      </div>
    </div>
  );
}
