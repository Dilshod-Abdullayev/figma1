import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar/Navbar";
export default function Document__layout() {
  return (
    <div>
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    </div>
  );
}
