import * as React from "react";
import ThreeLazy from "../components/three-lazy";
import WorkLogos from "../components/WorkLogos";
import Services from "../components/Services";
import Locations from "../components/Locations";
import AnimatedText from "../components/AnimatedText";
import Arrow from "../svgs/arrow.svg";

export default function IndexPage() {
  return (
    <>
      <main className="relative">
        <div className="min-h-full h-[600px]">
          <div className="absolute top-0 left-0 z-0 w-full h-full bg-brand-background">
            <ThreeLazy />
          </div>
          <div className="relative z-10 w-full h-full max-w-screen-xl pt-32 mx-auto pointer-events-none max-w-section">
            <div className="grid gap-12">
              <div className="grid gap-2 px-8">
                <AnimatedText />
                <div className="flex justify-end w-screen-xl">
                  <h2 className="text-base font-light text-left text-white md:w-1/2 sm:w-2/3 lg:mr-24 lg:-ml-24 md:-ml-32 md:mr-32">
                    A multi-award winning international digital marketing agency, expert across all key channels. We know it takes exceptional commercial insight, brilliant creative talent, and
                    cutting-edge data know-how to maximise competitive advantage, brand opportunity and fully predictable return of marketing investment.
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex justify-end max-w-screen-2xl">
              <div className="w-10 transition duration-500 ease-in-out cursor-pointer pointer-events-auto delay-50 bg-novaYellow hover:translate-y-56 hover:bg-novaPurple">
                <Arrow className="transition duration-500 ease-in-out delay-200 fill-novaGrey hover:fill-white" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="p-16 bg-novaDarkGrey">
        <div className="container mx-auto">
          <div className="w-3/4 mx-auto bg-black h-96 "></div>
        </div>
      </div>

      <WorkLogos />

      <div className="container mx-auto">
        <div className="flex justify-end">
          <div className="px-16 py-12 md:w-3/4 bg-novaYellow sm:w-4/5">
            <p className="pb-4 font-medium tracking-wider uppercase text-novaGrey">MAKE IT HAPPEN</p>
            <h3 className="text-6xl font-header text-novaGrey">award-winning digital-first CX thought leaders</h3>
            <p className="pt-4 pl-8 text-base font-light md:pl-12 md:w-3/4 sm:pl-8 lg:pl-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="pt-4 pl-8 text-base font-light md:pl-12 md:w-3/4 sm:pl-8 lg:pl-24">
              Facilisi cras fermentum odio eu. Ullamcorper dignissim cras tincidunt lobortis. Purus viverra accumsan in nisl. Accumsan in nisl nisi scelerisque. Fermentum et sollicitudin ac orci
              phasellus egestas tellus. Pretium vulputate sapien nec sagittis aliquam.
            </p>
            <div className="w-10 -mb-20 transition duration-500 ease-in-out cursor-pointer delay-50 bg-novaPurple hover:translate-y-56 hover:bg-novaYellow">
              <Arrow className="transition duration-500 ease-in-out delay-250 fill-white hover:fill-novaGrey" />
            </div>
          </div>
        </div>
      </div>

      <Services />

      <div className="bg-novaDarkGrey">
        <div className="container p-16 mx-auto max-w-7xl">
          <div className="grid grid-cols-5 gap-8">
            <div className="col-span-5 md:col-span-2">
              <p className="pb-4 font-medium tracking-wider text-white uppercase">SHOWCASE</p>
              <h3 className="text-6xl text-white font-header">Virtual worlds go beyond the realm of video games and VR</h3>
              <p className="pt-4 text-base font-light text-white md:pl-12 sm:pl-8 lg:pl-24">
                In an increasingly competitive global market, they wanted a cohesive brand experience, and an end-to-end single customer view with complete measurability, attribution and visible
                return on investment to drive revenues.
              </p>
              <p className="pt-4 text-base font-light text-white md:pl-12 sm:pl-8 lg:pl-24">
                Novacom developed a web-based interactive virtual port, accessible by anyone anywhere, to showcase their new Taro Ultra 100 products.
              </p>
              <p className="pt-4 pl-24 text-base font-medium text-white">Find out more</p>
            </div>
            <div className="col-span-5 md:col-span-3">
              <div className="flex justify-start w-full mb-8">
                <div className="w-full h-64 bg-black"></div>
              </div>

              <div className="flex justify-end">
                <div className="w-full px-12 py-8 ml-12 mr-0 md:-mr-8 bg-novaYellow">
                  <div className="flex gap-2">
                    <div className="w-12">
                      <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.1 13.1L6.2 -4.76837e-06H11.3L7.1 12H10.7V22.6H0.1V13.1ZM14.9 13.1L21 -4.76837e-06H26.1L21.9 12H25.5V22.6H14.9V13.1Z" fill="#334047" />
                      </svg>
                    </div>
                    <div>
                      <h6 className="text-3xl font-header text-novaGrey">Novacom helped us achieve An increase in brand visibility and OUR product range</h6>
                      <p className="pt-2 font-light text-novaGrey">Channel Program Specialist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Locations />
    </>
  );
}

export const Head = () => <title>Home Page</title>;
