import React from "react";
import HeaderLeft from "./Header__left";
import HeaderRight from "./Header__right";

const Header = () => {
  return (
    <div className="flex justify-between flex-wrap">
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
};

export default Header;