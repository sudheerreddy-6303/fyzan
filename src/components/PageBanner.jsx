import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageBanner({ title, image }) {
  return (
    <div className="fc-pagebanner">
      {image && <img src={image} alt={title} className="fc-pagebanner-img" />}
      <h1>{title}</h1>
      <div className="crumbs">
        <Link to="/">Home</Link>
        <ChevronRight size={13} />
        <span>{title}</span>
      </div>
    </div>
  );
}
