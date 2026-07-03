import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageBanner from "../components/PageBanner.jsx";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageBanner title="Contact Us" />

      <div className="fc-section fc-contact-grid">
        <div className="fc-contact-info">
          <div className="eyebrow">GET IN TOUCH</div>
          <h2>We'd Love to Hear From You</h2>
          <p className="fc-contact-lead">
            Questions about an order, a custom piece, or wholesale enquiries — reach out
            and our team will get back to you within 24 hours.
          </p>

          <div className="fc-contact-item">
            <MapPin size={20} />
            <div>
              <b>Visit Us</b>
              <span>Kotla Sarai Tarin, Sambhal, Uttar Pradesh 244303</span>
            </div>
          </div>
          <div className="fc-contact-item">
            <Phone size={20} />
            <div>
              <b>Call Us</b>
              <span>+91 1234567890</span>
            </div>
          </div>
          <div className="fc-contact-item">
            <Mail size={20} />
            <div>
              <b>Email Us</b>
              <span>support@faizacraft.com</span>
            </div>
          </div>
          <div className="fc-contact-item">
            <Clock size={20} />
            <div>
              <b>Working Hours</b>
              <span>Mon – Sat, 10:00 AM – 7:00 PM</span>
            </div>
          </div>
        </div>

        <form className="fc-contact-form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>
          {submitted && (
            <div className="fc-form-success">Thanks! Your message has been noted.</div>
          )}
          <div className="fc-form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" rows={5} required />
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </>
  );
}
