import * as React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Introduction from '../components/index/introduction';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  heroSpacing: {
    marginTop: '0px',
  },
  heroParagraph: {
    fontSize: '22px',
    color: 'white'
  }
}));

export default function Home({ location }) {
  const classes = useStyles();

  return (
    <Layout currentPath={location.pathname}>
      <Hero>
        <p className={classes.heroParagraph}>
          A mobile valeting service in Scarborough that will arrive to your location; using the most advanced cleaning products available, ensuring your pride and joy looks as good as the day it left the showroom.
        </p>
      </Hero>

      <Introduction className={classes.heroSpacing} />
    </Layout>
  );
}
