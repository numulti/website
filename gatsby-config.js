module.exports = {
  siteMetadata: {
    title: `NU MULTI`,
    description: `MULTI is a student organization in Northeastern University advocating for diversity and inclusion in technology. It is founded under the Khoury College of Computer Sciences, and is based in Boston, Massachusetts.`,
    keywords:
      'diversity, inclusion, technology, tech, computer science, boston, khoury college of computer sciences, khoury college, college of computer and information science, northeastern university',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.png`,
      },
    },
  ],
};
