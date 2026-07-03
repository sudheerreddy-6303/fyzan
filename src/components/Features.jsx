import React from "react";
import { features } from "../data.js";

export default function Features() {
  return (
    <div className="fc-features">
      {features.map((f) => (
        <div className="fc-feature" key={f.title}>
          <div className="ic"><f.icon size={18} /></div>
          <div>
            <div className="title">{f.title}</div>
            <div className="sub">{f.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
