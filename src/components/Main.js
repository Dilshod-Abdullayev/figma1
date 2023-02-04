import React from "react";
import Answers from "./Answers/Answers";
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
    </div>
  );
};

export default Main;
