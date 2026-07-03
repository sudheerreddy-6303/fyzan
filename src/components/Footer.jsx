import React from "react";
import { Facebook, Instagram, MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { categories } from "../data.js";

export default function Footer() {
  return (
    <div className="fc-footer">
      <div className="fc-footer-grid">
        <div>
          <div className="fc-logo" style={{ marginBottom: 12 }}>
            <div className="fc-logo-mark" style={{ width: 34, height: 34, fontSize: 16 }}>F</div>
            <div className="fc-logo-text">
              <div className="top" style={{ color: "#fff", fontSize: 18 }}>FAIZA</div>
              <div className="bottom" style={{ fontSize: 11 }}>CRAFT</div>
            </div>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.6 }}>
            We bring you the finest handmade horn &amp; handicraft products with unique designs and premium quality.
          </p>
          <div className="fc-social">
            <a href="#"><Facebook size={15} /></a>
            <a href="#"><Instagram size={15} /></a>
            <a href="#"><MessageCircle size={15} /></a>
            <a href="#"><Mail size={15} /></a>
          </div>
        </div>
        <div>
          <h5>QUICK LINKS</h5>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Track Order</a></li>
          </ul>
        </div>
        <div>
          <h5>CUSTOMER SERVICE</h5>
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Order History</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Return &amp; Refund</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h5>CATEGORIES</h5>
          <ul>
            {categories.slice(0, 6).map((c) => (
              <li key={c.name}><a href="#">{c.name}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h5>STORE ADDRESS</h5>
          <div className="addr-line"><MapPin size={15} /><span>Kotla Sarai Tarin, Sambhal, Uttar Pradesh 244303</span></div>
          <div className="addr-line"><Phone size={15} /><span>+91 1234567890</span></div>
          <div className="addr-line"><Mail size={15} /><span>support@faizacraft.com</span></div>
        </div>
      </div>

      <div className="fc-bottombar">
        <div>© 2025 Faiza Craft. All Rights Reserved.</div>
        <div className="fc-pay">
          <span>VISA</span><span>Mastercard</span><span>RuPay</span><span>UPI</span><span>PayPal</span>
        </div>
      </div>
    </div>
  );
}
