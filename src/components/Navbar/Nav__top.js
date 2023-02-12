import React from "react";
import img from "../../assets/img/logo.png";
import { BsFillTelephoneFill } from "react-icons/bs";
const NavTop = () => {
  return (
    <div className="flex justify-between border-b pb-10">
      <img src={img} />
      <div className="w-1/2  flex justify-around align-middle">
        <a className="text-lg font-medium text-slate-500 mt-2">
          +7 (918) 142-48-44
        </a>
        <button className=" flex justify-center align-middle bg-purple-600 p-3 rounded-md	text-white tracking-wider hover:border-purple-600 hover:border  hover:bg-white hover:text-purple-600">
          <BsFillTelephoneFill className="m-1 ml-2" /> Bog`lanish
        </button>
        <button className="text-purple-600 bg-white pt-1 p-3 border-purple-600 border rounded-md hover:text-white hover:bg-purple-600 hover:transition-transform	">
          Kirish
        </button>
      </div>
    </div>
  );
};

export default NavTop;
