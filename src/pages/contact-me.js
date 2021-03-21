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
    '& a': {
      color: 'darkred'
    },
    '& * span': {
      color: 'initial',
      fontWeight: 'bold',
    },
    '& svg': {
      margin: '10px 10px 0 0'
    }
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
          facebook
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
        contact: { email, phone, address, facebook },
      },
    },
  } = useStaticQuery(query);
  const phoneInternational = `+44${phone.replaceAll(' ', '').slice(1)}`;

  const svgSize = 38;
  const messengerSvg = <svg xmlns="http://www.w3.org/2000/svg" width={svgSize} height={svgSize} viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z"/></svg>
  const whatsAppSvg = <svg xmlns="http://www.w3.org/2000/svg" width={svgSize} height={svgSize} viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>

  return (
    <Layout currentPath={location.pathname}>
      <Hero type="beading" classOverride={css.hero}>
        <h1 className={css.heroTitle}>{'Contact Matty'}</h1>
      </Hero>
      {/* <p>todo</p>
      <p>https://schema.org/address</p>
      <p>https://schema.org/openingHoursSpecification </p> */}

      <address className={css.address}>
        <p>
          <span>Opening Hours: </span>Monday - Saturday: <time dateTime="08:00">8am</time> to{' '}
          <time dateTime="17:00">5pm</time>
        </p>
        <a href={`mailto:${email}`}><span>Email: </span>{email}</a>
        <br /><br/>
        <a href={`tel:${phone}`}><span>Mobile: </span>{phone}</a><br/>
        <a href={`https://m.me/${facebook}`}> {messengerSvg}</a>
        <a href={`https://wa.me/${phoneInternational}`}> {whatsAppSvg}</a>
        <br />
        <p>
          {address.split(',').map((line) => (
            <React.Fragment key={line}>
              {line} <br />
            </React.Fragment>
          ))}
        </p>
      </address>
    </Layout>
  );
}
