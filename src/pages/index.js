import * as React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Introduction from '../components/index/introduction';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  heroTitle: {
    width: '100px',
    color: 'white',
    fontSize: '32px',
  },
  introSpacing: {
    marginTop: 0,
  }
}));

export default function Home({ location }) {
  const classes = useStyles();

  return (
    <Layout currentPath={location.pathname}>
      <Hero>
        <h1 className={classes.heroTitle}>Friendly. Professional. Reliable.</h1>
      </Hero>

{/* TODO - make this text part of intro */}
      {/* <p className={classes.heroParagraph}>
        A mobile valeting service in Scarborough that will arrive to your location; using the most advanced cleaning products available, ensuring your pride and joy looks as good as the day it left the showroom.
      </p> */}

      <Introduction className={classes.introSpacing}/>
    </Layout>
  );
}
