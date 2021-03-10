module.exports = {
  pathPrefix: `/mmv`,
  siteMetadata: {
    siteUrl: 'https://www.valet.expert',
    title: "Matty's Mobile Valeting & Detailing, Scarborough",
    description:
      'A mobile valeting service in Scarborough that will arrive to your location; ensuring your pride and joy looks as good as the day it left the showroom.',
    image: '/images/Van.jpg',
    contact: {
      instagram: 'valet.expert',
      facebook: 'mattys.mobilevaleting',
      email: 'MattysMobileValeting@hotmail.com',
      phone: '07963 362 183',
      address: `Matty's Mobile Valeting, 129 Seamer Road, Scarborough, North Yorkshire, YO12 4EY`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.valet.expert',
        sitemap: 'https://www.valet.expert/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'GA_TRACKING_ID',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
  ],
};
