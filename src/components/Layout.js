import React from "react";
import Footer from "./Footer";
import Nav4 from "./Nav4";
import { SiteProvider } from "../utils/context";

export default function Layout({ children }) {
  return (
    <div className="debug-screens">
      <SiteProvider>
        <Nav4 />
        {/* <Sidebar /> */}
        {children}
        <Footer />
      </SiteProvider>
    </div>
  );
}
