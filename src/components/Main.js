import React from "react";
import Investor from "../Pages/Investor/Investor";
import Answers from "./Answers/Answers";
import Header from "./Header/Header";
import Service from "./service/Service";

const Main = () => {
  return (
    <div>
      <Header />
      <Service />
      <Answers />
      <Investor/> 
    </div>
  );
};

export default Main;
