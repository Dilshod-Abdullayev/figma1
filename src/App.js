import React, { useContext } from "react";
import "./index.css";
import Router from "./Routes/Router";
// import {ModeContex}
// import { ModeContext } from "./Context/Mode__context";

const App = () => {
  // const { mode } = useContext(ModeContext);
  return (
    <div>
      <Router />
    </div>
  );
};

export default App;
