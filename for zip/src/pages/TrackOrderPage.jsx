import React from "react";
import InfoPage from "../components/InfoPage.jsx";

export default function TrackOrderPage() {
  return (
    <InfoPage
      title="Track Order"
      subtitle="Track your shipment status and expected delivery updates from your order details."
      image="/images/track-order.svg"
      points={[
        "Keep your order ID and registered email ready.",
        "Status updates are available after dispatch confirmation.",
        "For urgent help, contact support with your invoice details.",
      ]}
    />
  );
}
