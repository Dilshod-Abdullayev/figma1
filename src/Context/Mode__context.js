import React, { createContext, useState } from "react";

export const ModeContext = createContext();

export default function Mode__context({ children }) {
  const [mode, setMode] = useState(true);
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}
