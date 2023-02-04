import React from "react";
import Answers from "./Answers/Answers";
import Footer from "./footer/Footer";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Service from "./service/Service";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Service />
      <Answers/>
      <Footer/>
    </div>
  );
};

export default Main;
