import { Link } from "gatsby";
import React from "react";
import NovacomLogoFooter from "./NovacomLogoFooter";
import BurgerIcon from "./Icons/BurgerIcon";

export default function Nav() {
  return (
    <>
      <nav className="fixed top-0 left-0 z-20 w-full px-8 py-4 bg-novaBlue">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
          <Link href="/" className="flex items-center">
            <NovacomLogoFooter />
          </Link>
          <div className="flex md:order-2">
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky">
              <ul className="flex flex-col px-4 pt-0 mt-0 font-medium md:p-0 md:flex-row md:space-x-8 ">
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
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
