import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Hero from '../components/hero';
import Introduction from '../components/index/introduction';
import Layout from '../components/layout';

const useStyles = makeStyles(() => ({
  heroTitle: {
    color: 'white',
    fontSize: '40px',
    fontWeight: 700,
    letterSpacing: '0.02em',
  },
  heroSubtitle: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: '18px',
    fontWeight: 400,
    marginTop: '8px',
  },
  introSpacing: {
    marginTop: 32,
  },
}));

export default function Home({ location }) {
  const classes = useStyles();

  return (
    <Layout currentPath={location.pathname}>
      <Hero type="van">
        <h2 className={classes.heroTitle}>Friendly. Professional. Reliable.</h2>
        <p className={classes.heroSubtitle}>
          {'Premium mobile valeting & detailing in Scarborough'}
        </p>
      </Hero>

      <Introduction className={classes.introSpacing} />
    </Layout>
  );
}
