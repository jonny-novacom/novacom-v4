import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function Services() {
  const { services } = useStaticQuery(graphql`
    query {
      services: allSanityServices {
        nodes {
          title
          id
        }
      }
    }
  `);

  const theServices = services.nodes;

  return (
    <>
      <div className="container max-w-5xl py-16 pl-8 pr-12 mx-auto mt-20">
        <p className="pb-6 font-medium tracking-wider uppercase text-novaGrey">
          SERVICES
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {theServices.map((services, i) => (
            <div
              key={i}
              className="flex items-end justify-start h-40 p-4 whitespace-pre-line bg-novaLightGrey">
              <h6 className="text-3xl font-header text-novaGrey">
                {services.title}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
