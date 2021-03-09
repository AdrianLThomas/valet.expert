import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

// facebookUsername
// instagramUsername
// titleTemplate
// defaultDescription: description
const query = graphql`
query SEO {
  site {
    siteMetadata {
      defaultTitle: title
      defaultDescription: description
      defaultImage: image
      siteUrl
      }
    }
  }
`;

const SEO = () => {
  const pageName = useLocation()
    .pathname.replaceAll('/', '')
    .replaceAll('-', ' ')
    .replace(/(^\w{1})|(\s+\w{1})/g, (char) => char.toUpperCase());
  const { site } = useStaticQuery(query);
  const {
    defaultTitle,
    defaultDescription,
    defaultImage,
    siteUrl,
    // titleTemplate,
    // facebookUsername,
    // instagramUsername,
  } = site.siteMetadata;

  const seo = {
    title: pageName,
    description: defaultDescription,
    image: `${siteUrl}${defaultImage}`,
    // url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet
      title={seo.title}
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${defaultTitle}`}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />



    </Helmet>
    //   {seo.url && <meta property="og:url" content={seo.url} />}
    //   {(article ? true : null) && <meta property="og:type" content="article" />}
    //   {seo.title && <meta property="og:title" content={seo.title} />}
    //   {seo.description && (
    //     <meta property="og:description" content={seo.description} />
    //   )}
    //   {seo.image && <meta property="og:image" content={seo.image} />}
    //   <meta name="twitter:card" content="summary_large_image" />
    //   {/* {twitterUsername && (
    //         <meta name="twitter:creator" content={twitterUsername} />
    //       )} */}
    //   {seo.title && <meta name="twitter:title" content={seo.title} />}
    //   {seo.description && (
    //     <meta name="twitter:description" content={seo.description} />
    //   )}
    //   {seo.image && <meta name="twitter:image" content={seo.image} />}
    //   <script type="application/ld+json">
    //     {`
    //     {
    //       "@context": "https://schema.org",
    //       "@type": "Organization",
    //       "url": "https://www.spookytech.com",
    //       "name": "Spooky technologies",
    //       "contactPoint": {
    //         "@type": "ContactPoint",
    //         "telephone": "+5-601-785-8543",
    //         "contactType": "Customer Support"
    //       }
    //     }
    //   `}
    //   </script>
    // </Helmet>
  );
};

export default SEO;
