import React from "react";
import InfoPage from "../components/InfoPage.jsx";

export default function AboutPage() {
  return (
    <InfoPage
      title="About Us"
      subtitle="Faiza Craft is dedicated to traditional horn and handicraft artistry with modern design quality."
      image="/images/about-us.svg"
      points={[
        "Handmade craftsmanship rooted in Sambhal heritage.",
        "Carefully selected raw materials and quality checks.",
        "Unique designs created for home, gifting, and lifestyle use.",
      ]}
    />
  );
}
