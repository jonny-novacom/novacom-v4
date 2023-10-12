import { Link } from "gatsby";
import React, { useState } from "react";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      {/* <div className="top-0 right-0 w-[35vw] bg-blue-600  p-10 pl-20 fixed h-full z-50">
        <div class="flex justify-center items-center place-content-center h-screen">
          <div className="absolute top-0 right-0 px-8 py-8 text-6xl uppercase cursor-pointer font-header">X</div>
          <div>
            <ul>
              <li className="py-3">
                <Link href="#" className="block text-6xl text-center text-black font-header">
                  About
                </Link>
              </li>
              <li className="py-3">
                <Link href="#" className="block text-6xl text-center text-black font-header">
                  Services
                </Link>
              </li>
              <li className="py-3">
                <Link href="#" className="block text-6xl text-center text-black font-header">
                  Work
                </Link>
              </li>
              <li className="py-3">
                <Link href="#" className="block text-6xl text-center text-black font-header">
                  News and Insights
                </Link>
              </li>
              <li className="py-3">
                <Link href="#" className="block text-6xl text-center text-black font-header">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      {showSidebar ? (
        <button className="fixed z-50 flex items-center text-4xl text-white cursor-pointer right-10 top-6" onClick={() => setShowSidebar(!showSidebar)}>
          x
        </button>
      ) : (
        <svg onClick={() => setShowSidebar(!showSidebar)} className="fixed z-30 flex items-center cursor-pointer right-10 top-6" fill="#2563EB" viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div className={`top-0 right-0 w-[35vw] bg-blue-600  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"}`}>
        <h3 className="mt-20 text-4xl font-semibold text-white">I am a sidebar</h3>
      </div>
    </>
  );
}
