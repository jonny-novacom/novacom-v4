import React from "react";
import Footer from "./Footer";
import Nav2 from "./Nav2";
import { SiteProvider } from "../utils/context";

export default function Layout({ children }) {
  return (
    <div className="debug-screens">
      <SiteProvider>
        <Nav2 />
        {/* <Sidebar /> */}
        {children}
        <Footer />
      </SiteProvider>
    </div>
  );
}
