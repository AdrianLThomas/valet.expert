import * as React from 'react';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';

import Hero from '../components/hero';
import Layout from '../components/layout';
import buttonStyle from '../components/styles/button';

const useStyles = makeStyles({
  heroTitle: {
    color: 'white',
    fontSize: '36px',
    fontWeight: 700,
  },
  hero: {
    height: '120px',
    position: 'relative',
  },
  map: {
    width: '100%',
    margin: '24px 0 16px 0',
    border: 0,
    borderRadius: '12px',
  },
  button: {
    ...buttonStyle,
    width: 'initial',
  },
  travelNotice: {
    backgroundColor: 'rgba(238, 246, 252, 1)',
    borderLeft: '4px solid rgba(52, 152, 219, 1)',
    padding: '16px 20px',
    borderRadius: '0 8px 8px 0',
    marginTop: '16px',
    '& b': {
      color: 'rgba(15, 58, 87, 1)',
    },
  },
});

export default function AreasCovered({ location }) {
  const { heroTitle, hero, map, button, travelNotice } = useStyles();
  return (
    <Layout
      currentPath={location.pathname}
      description="I am based in Scarborough but also cover Filey, Whitby, Pickering,
    Malton, Bridlington and the majority of North Yorkshire. Please feel free to get in touch."
    >
      <Hero type="beading" classOverride={hero}>
        <h2 className={heroTitle}>{'Areas Covered'}</h2>
      </Hero>

      <p>
        I am based in Scarborough but also cover Filey, Whitby, Pickering,
        Malton, Bridlington and the majority of North Yorkshire
      </p>

      <Button to="/contact-me/" className={button} component={Link}>
        Contact me to make a booking »
      </Button>
      <div>
        <iframe
          className={map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37273.69065263077!2d-0.41277225000001394!3d54.275553199999905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487f254b19e38abb%3A0x69546c0179a47ac7!2sScarborough%2C+North+Yorkshire!5e0!3m2!1sen!2suk!4v1411072315651"
          width="600"
          height="450"
        ></iframe>
      </div>

      <p className={travelNotice}>
        <b>Please note:</b> There is a travel charge of £45 outside of the
        Scarborough area.
      </p>
    </Layout>
  );
}
