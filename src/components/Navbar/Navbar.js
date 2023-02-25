import React, { useState } from "react";
import NavItems from "./Nav__items";

const Navbar = () => {
  return (
    <div className="flex-col p-4 bg-white">
      <NavItems />
    </div>
  );
};

export default Navbar;
