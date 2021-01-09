module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/layout.jsx`),
      },
    },
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
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://facebook.us19.list-manage.com/subscribe/post?u=f179c428c7e94394bedbba399&amp;id=8f32c1c4de',
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/layouts/layout.jsx`),
      },
    },
  ],
};
