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
      <div className="container max-w-5xl px-4 py-16 mx-auto mt-20">
        <p className="pb-6 font-medium tracking-wider uppercase text-novaGrey">
          SERVICES
        </p>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {theServices.map((services, i) => (
            <div
              key={i}
              className="flex items-end justify-start h-40 p-4 bg-novaLightGrey">
              <h6 className="text-3xl font-header text-novaGrey services-title">
                {services.title}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
