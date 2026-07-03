import React from "react";
import "./FaizaCraftLogo.css";

/**
 * FaizaCraftLogo
 * A pixel-styled recreation of the "Faiza Craft" marble & gold badge logo poster.
 *
 * Props let you reuse this as a real, resizable brand asset:
 * - size: overall width/height of the badge in px (default 900)
 * - brandName: text shown as the wordmark (default "FAIZA CRAFT")
 */
export default function FaizaCraftLogo({ size = 900, brandName = "FAIZA CRAFT" }) {
  return (
    <div className="fc-stage">
      <div
        className="fc-frame"
        style={{ width: size, height: size }}
      >
        <div className="fc-marble-lines" />
        <div className="fc-ring" />

        <div className="fc-content">
          <div className="fc-icon-wrap">
            <FaizaCraftIcon />
          </div>

          <div className="fc-wordmark">{brandName}</div>

          <div className="fc-ornament">
            <span className="fc-line" />
            <span className="fc-diamond" />
            <span className="fc-line fc-line--right" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Standalone SVG mark — the blue calligraphic "M" swoosh icon */
export function FaizaCraftIcon({ width = 230, height = 255 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 300 320"
      xmlns="http://www.w3.org/2000/svg"
      className="fc-icon-svg"
    >
      <defs>
        <linearGradient id="fcBlue" x1="0%" y1="0%" x2="60%" y2="100%">
          <stop offset="0%" stopColor="#2fb6e0" />
          <stop offset="45%" stopColor="#1a6fd1" />
          <stop offset="100%" stopColor="#122e8c" />
        </linearGradient>
      </defs>
      <path
        d="M225,14
           C 200,10 182,34 178,66
           C 176,84 182,100 196,110
           L 176,102
           C 160,94 150,72 152,48
           C 153,34 148,20 132,16
           C 116,12 104,26 106,46
           C 109,86 130,118 168,138
           L 148,132
           C 104,120 62,132 42,168
           C 22,204 30,246 66,270
           C 104,296 156,290 186,262
           C 208,242 212,214 198,192
           C 220,190 240,174 250,146
           C 264,106 250,54 225,14 Z"
        fill="url(#fcBlue)"
        stroke="#0a1d5c"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
