import React,{useState} from "react";
import NavItems from "./Nav__items";
import NavTop from "./Nav__top";

const Navbar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div className="flex-col p-4 bg-white">
      <NavTop />
      <NavItems />
    </div>
  );
};

export default Navbar;
