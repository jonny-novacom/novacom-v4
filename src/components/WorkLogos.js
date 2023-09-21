import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function WorkLogos() {
  const { logos } = useStaticQuery(graphql`
    query {
      logos: allSanityWorkLogos(sort: { title: ASC }) {
        nodes {
          title
          id
          link
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

  const thelogos = logos.nodes;

  return (
    <>
      <div className="container py-16 pl-4 pr-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-7">
          {thelogos.map((logos, i) => (
            <div key={i} className="flex items-center justify-center h-32">
              <a href={logos.link} target="_blank" rel="noopener noreferrer">
                <GatsbyImage
                  image={logos.mainImage.asset.gatsbyImageData}
                  alt={logos.title}
                  style={{ maxHeight: "50px", maxWidth: "100px" }}
                  className="block mx-auto"
                  imgStyle={{ objectFit: "contain" }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
