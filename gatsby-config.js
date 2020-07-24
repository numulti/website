module.exports = {
  siteMetadata: {
    title: `NU MULTI`,
    description: `MULTI is a student organization in Northeastern University advocating for diversity and inclusion in technology. It is founded under the Khoury College of Computer Sciences, and is based in Boston, Massachusetts.`,
    keywords:
      'diversity, inclusion, technology, tech, computer science, boston, khoury college of computer sciences, khoury college, college of computer and information science, northeastern university',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `${__dirname}/src/images/favicon.png`,
      },
    },
    `gatsby-plugin-fontawesome-css`,
  ],
};
