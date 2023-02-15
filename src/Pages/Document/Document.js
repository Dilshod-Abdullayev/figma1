import React from "react";
import Document__content from "./Document__content";
import Document__sidebar from "./Document__sidebar";
import "../../assets/css/sidebar.css";
export default function Document() {
  return (
    <div className="document">
      <Document__sidebar />
      <Document__content />
    </div>
  );
}
