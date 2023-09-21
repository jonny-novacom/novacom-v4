import { Link } from "gatsby";
import React from "react";
import NovacomLogoFooter from "./NovacomLogoFooter";
import BurgerIcon from "./Icons/BurgerIcon";

export default function Nav() {
  return (
    <>
      <nav className="fixed top-0 left-0 z-20 w-full py-4 pl-8 pr-12 mx-auto bg-novaBlue">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
          <Link href="/" className="flex items-center">
            <NovacomLogoFooter />
          </Link>
          <div className="flex md:order-2">
            <div
              className="flex items-center justify-between w-full md:w-auto md:order-1"
              id="navbar-sticky">
              <ul className="flex-col hidden px-4 pt-0 mt-0 font-medium md:flex md:p-0 md:flex-row md:space-x-8">
                <li>
                  <Link
                    href="#"
                    className="block py-2 pl-3 pr-4 text-sm text-white md:p-0 ">
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 pl-3 pr-4 text-sm text-white md:p-0">
                    Work
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                className="py-2 pl-8 text-center text-white bg-transparent">
                <BurgerIcon />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
