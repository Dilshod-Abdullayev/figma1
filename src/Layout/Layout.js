import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar/Navbar";
const Layout = () => {
  return (
    <div>
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    </div>
  );
};

export default Layout;
