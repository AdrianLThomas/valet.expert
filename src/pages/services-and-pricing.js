import * as React from 'react';
import Layout from '../components/layout';
import Services from '../components/pricing/services';
import Hero from '../components/hero';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  heroTitle: {
    color: 'white',
    fontSize: '32px',
  },
  hero: {
    height: '100px',
    position: 'relative',
  },
  service: {
    paddingTop: '20px',
  },
}));

export default function Home({ location }) {
  const classes = useStyles();
  return (
    <Layout currentPath={location.pathname}>
      <Hero type="beading" classOverride={classes.hero}>
        <h1 className={classes.heroTitle}>{'Services & Pricing'}</h1>
      </Hero>
      <Services className={classes.service} />
    </Layout>
  );
}
