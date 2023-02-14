import React from "react";
import Document__content from "./Document__content";
import Document__sidebar from "./Document__sidebar";

export default function Document() {
  return <div className="flex">
    <Document__sidebar/>
    <Document__content/>
  </div>;
}
