import React from 'react';

import { useLocation } from '@reach/router';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        siteUrl
        contact {
          instagram
          facebook
          email
          phone
        }
      }
    }
  }
`;

const SEO = () => {
  const { site } = useStaticQuery(query);

  const { pathname } = useLocation();
  const pageName = pathname
    .replace(withPrefix('/'), '')
    .replaceAll('/', '')
    .replaceAll('-', ' ')
    .replace(/(^\w{1})|(\s+\w{1})/g, (char) => char.toUpperCase());
  const {
    defaultTitle,
    defaultDescription,
    defaultImage,
    siteUrl,
    contact,
  } = site.siteMetadata;

  const seo = {
    title: pageName,
    description: defaultDescription,
    image: `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname}`,
    facebook: contact.facebook,
    instagram: contact.instagram,
    phone: contact.phone,
    email: contact.email,
  };

  return (
    <Helmet
      title={seo.title}
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${defaultTitle}`}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta name="robots" content="INDEX, FOLLOW" />

      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:locale" content="en_GB" />

      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <meta
        property="article:author"
        content={`https://www.facebook.com/${seo.facebook}`}
      />

      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "${seo.url}",
          "name": "${seo.title}",
          "email": "mailto:${contact.email}",
          "telephone": "${contact.phone}",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "${contact.phone}",
            "contactType": "Enquiries",
            "email": "${contact.email}",
            "areaServed": "Scarborough and surrounding areas"
          }
        }
      `}
      </script>

      {/* Generated with: https://realfavicongenerator.net/ */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/icons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
