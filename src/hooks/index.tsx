import React from "react";

import { UserContextProvider } from "./context";

const GlobalContext: React.SFC = ({ children }) => {
  return (
    <>
      <UserContextProvider>{children}</UserContextProvider>;
    </>
  );
};

export default GlobalContext;
