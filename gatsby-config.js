/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Novacom | Award-winning digital marketing and customer experience agency`,
    siteUrl: `https://www.novacom.group`,
    description: "We convert your prospects into long term customers through immersive digital experiences - from VR, AR and 360° video, to web design and marketing automation.",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "s9sjkc9y",
        dataset: "production",
        watchMode: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "GTM-KRZPCG3",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Bebas Neue`, `roboto\:300,500`],
        display: "swap",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/, // See below to configure properly
        },
      },
    },
  ],
};
