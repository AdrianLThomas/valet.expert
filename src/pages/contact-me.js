import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { useStaticQuery, graphql } from 'gatsby';

import Hero from '../components/hero';
import Layout from '../components/layout';

const useStyles = makeStyles({
  heroTitle: {
    color: 'white',
    fontSize: '32px',
  },
  hero: {
    height: '100px',
    position: 'relative',
  },
  address: {
    fontStyle: 'normal',
  },
});

const query = graphql`
  query contact {
    site {
      siteMetadata {
        contact {
          email
          phone
          address
        }
      }
    }
  }
`;

export default function ContactMe({ location }) {
  const css = useStyles();
  const {
    site: {
      siteMetadata: {
        contact: { email, phone, address },
      },
    },
  } = useStaticQuery(query);

  return (
    <Layout currentPath={location.pathname}>
      <Hero type="beading" classOverride={css.hero}>
        <h1 className={css.heroTitle}>{'Contact Matty'}</h1>
      </Hero>
      <p>todo</p>
      <p>https://schema.org/address</p>
      <p>https://schema.org/openingHoursSpecification </p>

      {/* @foreach (string addressLine in Resources.Address.Split(','))
          {
              @addressLine<br />
          } */}

      <address className={css.address}>
        <a href={`mailto:${email}`}>Email: {email}</a>
        <br />
        <a href={`tel:${phone}`}>Mobile: {phone}</a>
        <br />
        <p>
          {address.split(',').map((line) => (
            <React.Fragment key={line}>
              {line} <br />
            </React.Fragment>
          ))}
        </p>
        <p>
          Monday - Saturday: <time dateTime="08:00">8am</time> to{' '}
          <time dateTime="17:00">5pm</time>
        </p>
      </address>

      {/* <a href="@Resources.FacebookMessageUrl"><img alt="Message me on Facebook" src="@Url.Content("~/Content/Assets/Social/MessageMeOnFacebook.png")" /></a> */}
    </Layout>
  );
}
