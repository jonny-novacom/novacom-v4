import React from "react";
import { Link } from "gatsby";

export default function Navigation() {
  return (
    <>
      <div>
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
      </div>
    </>
  );
}
