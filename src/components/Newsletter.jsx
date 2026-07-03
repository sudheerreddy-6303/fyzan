import React from "react";
import { User, ShieldCheck, Truck } from "lucide-react";

export default function Newsletter() {
  return (
    <div className="fc-news">
      <div>
        <h4>Stay Updated With Our New Arrivals</h4>
        <p>Subscribe to our newsletter and get 10% off your first order.</p>
      </div>
      <div className="fc-news-form">
        <input type="email" placeholder="Enter your email address" />
        <button>SUBSCRIBE</button>
      </div>
      <div className="fc-news-stats">
        <div className="stat"><User size={18} /> <span><b>500+</b>Happy Customers</span></div>
        <div className="stat"><ShieldCheck size={18} /> <span><b>100%</b>Secure Payment</span></div>
        <div className="stat"><Truck size={18} /> <span><b>24/7</b>Customer Support</span></div>
      </div>
    </div>
  );
}
