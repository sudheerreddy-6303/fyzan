import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar.jsx";
import Header from "../components/Header.jsx";
import Nav from "../components/Nav.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Footer from "../components/Footer.jsx";

export default function MainLayout() {
  return (
    <div className="fc-root">
      <TopBar />
      <Header />
      <Nav />
      <Outlet />
      <Newsletter />
      <Footer />
    </div>
  );
}
