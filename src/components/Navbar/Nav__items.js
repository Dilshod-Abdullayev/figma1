import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <div className="pt-3   flex flex-wrap align-middle justify-around h-14">
      <Link
        to="document"
        href=""
        className="text-lg	font-extrabold tracking-normal :hover text-purple-900"
      >
        Document o`qish
      </Link>
      <Link href="" className="text-lg	font-extrabold tracking-normal">
        Videolar
      </Link>
      <Link href="" className="text-lg	font-extrabold tracking-normal">
        Mukammal platformalar
      </Link>
      <Link href="" className="text-lg	font-extrabold tracking-normal">
        Courselar
      </Link>
    </div>
  );
};
export default NavItems;
