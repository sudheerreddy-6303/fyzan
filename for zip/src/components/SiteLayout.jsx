import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar.jsx";
import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";

export default function SiteLayout() {
  return (
    <div className="fc-root">
      <TopBar />
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
