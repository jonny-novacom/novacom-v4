import { Link } from "gatsby";
import React, { useState } from "react";
import NovacomLogoFooter from "./NovacomLogoFooter";
import BurgerIcon from "./Icons/BurgerIcon";

export default function Nav() {
  const [showSidebar, setShowSidebar] = useState(false);

  const items = [
    {
      key: 1,
      content: "Home",
    },
    {
      key: 2,
      content: "About",
    },
    {
      key: 3,
      content: "Services",
    },
    {
      key: 4,
      content: "Work",
    },
    {
      key: 5,
      content: "News and Insights",
    },
    {
      key: 6,
      content: "Contact us",
    },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 z-20 w-full px-8 py-4 mx-auto bg-novaBlue">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
          <Link href="/" className="flex items-center">
            <NovacomLogoFooter />
          </Link>
          <div className="flex md:order-2">
            <div className="flex items-center justify-between w-full md:w-auto md:order-1" id="navbar-sticky">
              <ul className="flex-col hidden px-4 pt-0 mt-0 font-medium md:flex md:p-0 md:flex-row md:space-x-8">
                <li>
                  <Link href="#" className="block py-2 pl-3 pr-4 text-sm text-white md:p-0 ">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block py-2 pl-3 pr-4 text-sm text-white md:p-0">
                    Work
                  </Link>
                </li>
              </ul>

              <button type="button" className="py-2 pl-8 text-center text-white bg-transparent" onClick={() => setShowSidebar(!showSidebar)}>
                <BurgerIcon />
              </button>

              <div className={`top-0 right-0 w-[35vw] bg-novaBlue p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-500 ${showSidebar ? "translate-x-0" : "translate-x-full"}`}>
                <div class="flex justify-center items-start place-content-center h-screen mt-32">
                  <button className="absolute top-0 right-0 px-8 py-8 text-6xl uppercase cursor-pointer font-header" onClick={() => setShowSidebar(!showSidebar)}>
                    x
                  </button>
                  <div>
                    <ul>
                      {items.map((item, i) => (
                        <li className="py-3 my-2 text-xl" key={i}>
                          <Link to href="#" className="block text-6xl text-white transition-colors duration-300 font-header hover:text-novaDarkGrey">
                            <p className="relative mx-auto text-6xl w-max three">
                              <span className="py-2">{item.content}</span>
                              <span className="absolute left-0 w-full h-1 transition-all duration-300 ease-in-out bg-novaYellow -bottom-1 -z-10"></span>
                            </p>
                          </Link>
                        </li>

                        // <li className="py-3">
                        //   <Link href="#" className="block text-6xl text-center text-white font-header">
                        //     About
                        //   </Link>
                        // </li>
                        // <li className="py-3">
                        //   <Link href="#" className="block text-6xl text-center text-white font-header">
                        //     Services
                        //   </Link>
                        // </li>
                        // <li className="py-3">
                        //   <Link href="#" className="block text-6xl text-center text-white font-header">
                        //     Work
                        //   </Link>
                        // </li>
                        // <li className="py-3">
                        //   <Link href="#" className="block text-6xl text-center text-white font-header">
                        //     News and Insights
                        //   </Link>
                        // </li>
                        // <li className="py-3">
                        //   <Link href="#" className="block text-6xl text-center text-white font-header">
                        //     Contact us
                        //   </Link>
                        // </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
