require('dotenv').config();
const config = require('./config');

module.exports = {
  
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: `https://www.jonol.tech`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-buttercms`,
      options: {
        authToken: process.env.BUTTER_CMS_API_KEY,
        // Optional. Returns values for the supplied content field keys.
        contentFields: {
          //keys: [`faq_items`, `faq_headline`],
          // Optional. Set to 1 to enable test mode for viewing draft content.
          test: 1,
        },
        // Optional. Array of page slugs.
        pages: [`resume`, `blog`],
      },
    },
  ],
  
};
