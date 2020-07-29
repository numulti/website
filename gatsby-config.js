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
        name: `MULTI`,
        short_name: `MULTI`,
        start_url: `/`,
        icon: `${__dirname}/src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    // helps with FA icon flicker on load
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://facebook.us19.list-manage.com/subscribe/post?u=f179c428c7e94394bedbba399&amp;id=8f32c1c4de',
      },
    },
  ],
};
