import React from "react";

export default function InfoPage({ title, subtitle, image, points = [], children }) {
  return (
    <main className="fc-page">
      <section className="fc-page-hero">
        <div className="fc-page-hero-text">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <img src={image} alt={title} className="fc-page-hero-image" />
      </section>

      <section className="fc-page-content">
        {points.length > 0 && (
          <ul className="fc-page-list">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
        {children}
      </section>
    </main>
  );
}
