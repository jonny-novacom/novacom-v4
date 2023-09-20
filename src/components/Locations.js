import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Locations() {
  const { locations } = useStaticQuery(graphql`
    query {
      locations: allSanityLocations {
        nodes {
          title
          id
          mainImage {
            asset {
              url
              id
              gatsbyImageData(fit: FILL)
            }
          }
        }
      }
    }
  `);

  const thelocations = locations.nodes;

  return (
    <>
      <div className="container max-w-5xl px-4 py-16 mx-auto">
        <p className="pb-4 font-medium tracking-wider uppercase text-novaGrey">
          MAKE IT HAPPEN WITH NOVACOM
        </p>
        <h3 className="mb-6 text-6xl text-novaGrey font-header">
          our global reach. your local team.
        </h3>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {thelocations.map((locations, i) => (
            <div key={i} className="">
              <GatsbyImage
                image={locations.mainImage.asset.gatsbyImageData}
                alt={locations.title}
                className="block mx-auto"
                imgStyle={{ objectFit: "contain" }}
              />
              <p className="py-4 text-2xl uppercase text-novaGrey font-header">
                {locations.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
