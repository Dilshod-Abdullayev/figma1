import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/sidebar.css";
import { document__theme } from "../../Data/Data";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Document__sidebar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div className="sidebar__items">
      <div>
        <h1 className="sidebar__title">Getting started</h1>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          {" "}
          {document__theme.map((item, index) => (
            <Link
              key={index}
              to={`${item.path}`}
              className="sidebar__item"
              id={item.id}
            >
              {item.theme}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
