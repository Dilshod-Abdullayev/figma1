import React from "react";
import NavItems from "./Nav__items";
import NavTop from "./Nav__top";

const Navbar = () => {
  return (
    <div className="flex-col p-4 bg-white">
      <NavTop />
      <NavItems />
    </div>
  );
};

export default Navbar;
