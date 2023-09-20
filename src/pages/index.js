import * as React from "react";
import ThreeLazy from "../components/three-lazy";
import WorkLogos from "../components/WorkLogos";
import Services from "../components/Services";
import quote from "../svgs/quote.svg";
import Locations from "../components/Locations";
import AnimatedText from "../components/AnimatedText";

export default function IndexPage() {
  return (
    <>
      <main className="relative">
        <div className="min-h-full h-[500px]">
          <div className="relative z-10 flex items-center w-full h-full max-w-screen-xl p-4 mx-auto max-w-section">
            <div className="grid gap-12">
              <div className="grid gap-2">
                <AnimatedText />
                <div className="flex justify-end w-screen-xl">
                  <h2 className="w-1/2 mr-24 -ml-24 text-base font-light text-left text-white">
                    A multi-award winning international digital marketing
                    agency, expert across all key channels. We know it takes
                    exceptional commercial insight, brilliant creative talent,
                    and cutting-edge data know-how to maximise competitive
                    advantage, brand opportunity and fully predictable return of
                    marketing investment.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 z-0 w-full h-full bg-brand-background">
            <ThreeLazy />
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
          <div className="w-3/4 px-16 py-12 bg-novaYellow">
            <p className="pb-4 font-medium tracking-wider uppercase text-novaGrey">
              MAKE IT HAPPEN
            </p>
            <h3 className="text-6xl font-header text-novaGrey">
              award-winning digital-first CX thought leaders
            </h3>
            <p className="w-3/4 pt-4 pl-24 text-base font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="w-3/4 pt-4 pl-24 text-base font-light">
              Facilisi cras fermentum odio eu. Ullamcorper dignissim cras
              tincidunt lobortis. Purus viverra accumsan in nisl. Accumsan in
              nisl nisi scelerisque. Fermentum et sollicitudin ac orci phasellus
              egestas tellus. Pretium vulputate sapien nec sagittis aliquam.
            </p>
          </div>
        </div>
      </div>

      <Services />

      <div className="bg-novaDarkGrey">
        <div className="container p-16 mx-auto max-w-7xl">
          <div className="grid grid-cols-5 gap-8">
            <div className="col-span-2">
              <p className="pb-4 font-medium tracking-wider text-white uppercase">
                SHOWCASE
              </p>
              <h3 className="text-6xl text-white font-header">
                Virtual worlds go beyond the realm of video games and VR
              </h3>
              <p className="pt-4 pl-24 text-base font-light text-white">
                In an increasingly competitive global market, they wanted a
                cohesive brand experience, and an end-to-end single customer
                view with complete measurability, attribution and visible return
                on investment to drive revenues.
              </p>
              <p className="pt-4 pl-24 text-base font-light text-white">
                Novacom developed a web-based interactive virtual port,
                accessible by anyone anywhere, to showcase their new Taro Ultra
                100 products.
              </p>
              <p className="pt-4 pl-24 text-base font-medium text-white">
                Find out more
              </p>
            </div>
            <div className="col-span-3">
              <div className="flex justify-start w-3/4 mb-8">
                <div className="w-full h-64 bg-black"></div>
              </div>

              <div className="flex justify-end">
                <div className="w-full px-12 py-8 ml-12 bg-novaYellow">
                  <div className="flex gap-2">
                    <div className="w-12">
                      <svg
                        width="27"
                        height="23"
                        viewBox="0 0 27 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.1 13.1L6.2 -4.76837e-06H11.3L7.1 12H10.7V22.6H0.1V13.1ZM14.9 13.1L21 -4.76837e-06H26.1L21.9 12H25.5V22.6H14.9V13.1Z"
                          fill="#334047"
                        />
                      </svg>
                    </div>
                    <div>
                      <h6 className="text-3xl font-header text-novaGrey">
                        Novacom helped us achieve An increase in brand
                        visibility and OUR product range
                      </h6>
                      <p className="pt-2 font-light text-novaGrey">
                        Channel Program Specialist
                      </p>
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
