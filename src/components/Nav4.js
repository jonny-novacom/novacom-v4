import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Link } from "gatsby";
import NovacomLogoFooter from "./NovacomLogoFooter";
import BurgerIcon from "./Icons/BurgerIcon";

const links = [
  { name: "Home", to: "#", id: 1 },
  { name: "About", to: "#", id: 2 },
  { name: "Blog", to: "#", id: 3 },
  { name: "Contact", to: "#", id: 4 },
  { name: "News and Insights", to: "#", id: 5 },
  { name: "Contact us", to: "#", id: 6 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.25,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.25,
      staggerDirection: 1,
      delayChildren: 0.5,
    },
  },
};

export default function Nav4() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [open, cycleOpen] = useCycle(false, true);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 560);
    });
  }, []);

  return (
    <nav className={`fixed top-0 left-0 z-20 w-full px-8 py-4 mx-auto ${scroll ? "bg-novaBlue transition duration-500 ease-in-out" : "bg-transparent transition duration-500 ease-in-out"}`}>
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

            <div onClick={cycleOpen}>
              <button type="button" className="py-2 pl-8 text-center text-white bg-transparent" onClick={() => setShowSidebar(!showSidebar)}>
                <BurgerIcon />
              </button>
            </div>

            <div className={`top-0 right-0 w-full bg-novaBlue p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-500 ${showSidebar ? "translate-x-0" : "translate-x-full delay-1500"}`}>
              <div class="flex justify-center items-start place-content-center h-screen mt-32">
                <div onClick={cycleOpen}>
                  <button className="absolute top-0 right-0 px-8 py-8 text-6xl uppercase cursor-pointer font-header" onClick={() => setShowSidebar(!showSidebar)}>
                    x
                  </button>
                </div>

                <AnimatePresence>
                  {open && (
                    <motion.ul initial="closed" animate="open" exit="closed" variants={sideVariants}>
                      {links.map(({ name, to, id }) => (
                        <motion.li key={id} href={to} whileHover={{ scale: 1.2 }} variants={itemVariants} className="py-3 my-2 text-xl">
                          <Link to href="#" className="block text-6xl text-white transition-colors duration-300 font-header hover:text-novaDarkGrey">
                            <p className="relative mx-auto text-6xl w-max three">
                              <span className="py-2">{name}</span>
                              <span className="absolute left-0 w-full h-1 transition-all duration-300 ease-in-out bg-novaYellow -bottom-1 -z-10"></span>
                            </p>
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="btn-container">
        <button onClick={cycleOpen}>{open ? "Close" : "Open"}</button>
      </div> */}
    </nav>
  );
}
