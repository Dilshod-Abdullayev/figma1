import React from "react";
import Main from "./components/Main";
import "./index.css";
import Router from "./Routes/Router";
import Router__document from "./Routes/Router__document";
const App = () => {
  return (
    <div className="container mx-auto">
      <Router />
    </div>
  );
};

export default App;
