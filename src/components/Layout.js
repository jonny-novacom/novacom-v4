import React from "react";
import { SiteProvider } from "../utils/context";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="debug-screens">
      <SiteProvider>
        <Nav />
        {children}
        <Footer />
      </SiteProvider>
    </div>
  );
}
