import React from "react";
import NovacomLogoFooter from "./NovacomLogoFooter";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-7">
        <div className="col-span-7 md:col-span-4 bg-novaBlue">
          <div className="flex justify-end">
            <div className="w-full p-8 xl:w-3/4 2xl:w-3/5">
              <p className="pt-10 text-xl text-center text-white uppercase xl:text-7xl font-header lg:text-6xl">
                let’s MAKE IT happen
              </p>
              <p className="mt-12 text-sm font-light text-white">
                © 2023 Novacom Group Limited. All rights reserved{"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}|{"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}Legal and Privacy{"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}|{"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}Careers{"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}|{"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}Contact us
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-7 md:col-span-3 bg-novaGrey">
          <div className="flex justify-start">
            <div className="w-full p-8 xl:w-3/4 2xl:w-3/5">
              <p className="pt-10 pb-3 text-2xl leading-tight text-white whitespace-pre-line text font-header">
                iso 9001, iso 27001 certified and 100% gdpr compliant
              </p>
              <span className="inline-block w-8 h-8 mr-4 rounded-full bg-novaLightGrey"></span>
              <span className="inline-block w-8 h-8 mr-4 rounded-full bg-novaLightGrey"></span>
              <span className="inline-block w-8 h-8 mr-4 rounded-full bg-novaLightGrey"></span>
              <span className="inline-block w-8 h-8 mr-4 rounded-full bg-novaLightGrey"></span>
              <div className="flex justify-end pt-8">
                <NovacomLogoFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
