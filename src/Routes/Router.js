import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../components/Main";
import Document__layout from "../Layout/Document__layout";
import Layout from "../Layout/Layout";
import Document from "../Pages/Document/Document";
import Investor from "../Pages/Investor/Investor";
import InvestorBox from "../Pages/Investor/Investor__box";
import Video__tutorial from "../Pages/Videos/Video__tutorial";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="glavnaya" element={<Investor />} />
          <Route path="document" element={<Document />} />
          <Route path="video__tutorial" element={<Video__tutorial />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="" element={<Document__layout />}>
          <Route path="document/jsinfo" element={<InvestorBox />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
