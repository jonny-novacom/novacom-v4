import React, { useState, useContext } from "react";

const SiteContext = React.createContext();

const SiteProvider = ({ children }) => {
  return <SiteContext.Provider value={{}}>{children}</SiteContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(SiteContext);
};

export { SiteContext, SiteProvider };
