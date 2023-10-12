import React from "react";
import { slide as Menu } from "react-burger-menu";

export default function NavMenu() {
  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
  };
  return (
    <>
      <Menu styles={styles}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </Menu>
    </>
  );
}
