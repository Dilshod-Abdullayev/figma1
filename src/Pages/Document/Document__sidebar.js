import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/sidebar.css";
import { document__theme } from "../../Data/Data";
export default function Document__sidebar() {
  return (
    <div class="sidebar__items">
      <h1 class="sidebar__title">Getting started</h1>
      {document__theme.map((item) => (
        <Link to={`${item.path}`} className="sidebar__item" id={item.id}>
          {item.theme}
        </Link>
      ))}
    </div>
  );
}
