import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Hero from '../components/hero';
import Introduction from '../components/index/introduction';
import Layout from '../components/layout';

const useStyles = makeStyles(() => ({
  heroTitle: {
    width: '100px',
    color: 'white',
    fontSize: '32px',
  },
  introSpacing: {
    marginTop: 10,
  },
}));

export default function Home({ location }) {
  const classes = useStyles();

  return (
    <Layout currentPath={location.pathname}>
      <Hero type="van">
        <h2 className={classes.heroTitle}>Friendly. Professional. Reliable.</h2>
        <p>Good change, but should never be deployed from PR.</p>
      </Hero>

      <Introduction className={classes.introSpacing} />
    </Layout>
  );
}
