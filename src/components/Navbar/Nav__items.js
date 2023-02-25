import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/nav.css";
import img from "../../assets/img/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {BsSunFill,BsFillMoonFill} from 'react-icons/bs'

const NavItems = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container_nav">
        <div className="logo">
          <Link to="/">
            <img src={img} />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link
                to="document"
                href=""
                className="text-lg	font-extrabold tracking-normal :hover text-purple-900"
              >
                Document o`qish
              </Link>
            </li>
            <li>
              <Link
                href=""
                to="video__tutorial"
                className="text-lg	font-extrabold tracking-normal"
              >
                Videolar
              </Link>
            </li>
            <li>
              <Link href="" className="text-lg	font-extrabold tracking-normal">
                platformalar
              </Link>
            </li>
            <li>
              <Link href="" className="text-lg	font-extrabold tracking-normal">
                <span className="text-yellow-400 font-extrabold">JS</span>{" "}
                Masalalar
              </Link>
            </li>
          {/* <BsSunFill/>
          <BsFillMoonFill/> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavItems;
