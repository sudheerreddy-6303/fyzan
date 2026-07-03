import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageBanner({ title }) {
  return (
    <div className="fc-pagebanner">
      <h1>{title}</h1>
      <div className="crumbs">
        <Link to="/">Home</Link>
        <ChevronRight size={13} />
        <span>{title}</span>
      </div>
    </div>
  );
}
