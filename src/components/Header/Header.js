import React from "react";
import HeaderLeft from "./Header__left";
import HeaderRight from "./Header__right";
import '../../assets/css/style.css'
const Header = () => {
  return (
    <div className="flex justify-between flex-wrap h-auto header">
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
};

export default Header;
