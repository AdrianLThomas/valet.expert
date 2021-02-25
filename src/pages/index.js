import * as React from 'react';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Introduction from '../components/index/introduction';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  heroSpacing: {
    marginTop: '0px',
  }
}));

export default function Home({ location }) {
  const classes = useStyles();

  return (
    <Layout currentPath={location.pathname}>
      <Hero>
      </Hero>
      
      <Introduction className={classes.heroSpacing}/>
    </Layout>
  );
}
