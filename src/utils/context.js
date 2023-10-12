import React, { useState, useContext } from "react";

const SiteContext = React.createContext();

const SiteProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return <SiteContext.Provider value={{ showSidebar, setShowSidebar }}>{children}</SiteContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(SiteContext);
};

export { SiteContext, SiteProvider };
