import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Hero from '../components/hero';
import Layout from '../components/layout';
import Services from '../components/pricing/services';

const useStyles = makeStyles(() => ({
  heroTitle: {
    color: 'white',
    fontSize: '36px',
    fontWeight: 700,
  },
  hero: {
    height: '120px',
    position: 'relative',
  },
  service: {
    paddingTop: '32px',
  },
}));

export default function ServicesAndPricing({ location }) {
  const classes = useStyles();
  return (
    <Layout
      currentPath={location.pathname}
      description="I offer a variety of services for your vehicle, such as: maintenance valet, full valet, hand polishing and waxing, machine polish, ceramic coating and engine bay/steam cleaning."
    >
      <Hero type="beading" classOverride={classes.hero}>
        <h2 className={classes.heroTitle}>{'Services & Pricing'}</h2>
      </Hero>
      <Services className={classes.service} />
    </Layout>
  );
}
