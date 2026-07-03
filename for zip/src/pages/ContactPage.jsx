import React from "react";
import InfoPage from "../components/InfoPage.jsx";

export default function ContactPage() {
  return (
    <InfoPage
      title="Contact Us"
      subtitle="Have a bulk inquiry or custom requirement? Our team is ready to help you quickly."
      image="/images/contact-us.svg"
      points={[
        "Phone: +91 1234567890",
        "Email: support@faizacraft.com",
        "Address: Kotla Sarai Tarin, Sambhal, Uttar Pradesh 244303",
      ]}
    />
  );
}
