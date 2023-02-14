import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../components/Main";
import Layout from "../Layout/Layout";
import Document from "../Pages/Document/Document";
import Investor from "../Pages/Investor/Investor";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="glavnaya" element={<Investor />} />
          <Route path="document" element={<Document />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
